"use client";

import dynamic from "next/dynamic";
import { useMemo, useState, useEffect } from "react";
import { LatLngTuple } from "leaflet";
import { CircleChevronRight } from "lucide-react";
import { Text } from "@/components/ui";
import { toast } from "sonner";
import { sendEmail } from "@/app/actions";

const Contact = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (typeof window !== "undefined") {
        setIsMediumScreen(window.innerWidth > 400 && window.innerWidth < 900);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const { name, email, phone, message } = formState;
    setIsFormValid(!!name && !!email && !!phone && !!message);
  }, [formState]);

  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map"), {
        ssr: false,
      }),
    [],
  );

  const locations = [
    { name: "Florida", latitude: 27.994402, longitude: -81.760254 },
  ];

  const markers: LatLngTuple[] = locations.map((location) => [
    location.latitude,
    location.longitude,
  ]);

  return (
    <div className="bg-[#f3f3f3]">
      <section
        id="contact"
        className="flex flex-col items-center gap-8 xl:flex-row xl:gap-40"
      >
        <div className="z-10 w-full flex-1">
          <Text variant="h2" className="text-center xl:text-left">
            Want to Hire The Best In {isMediumScreen && <br />} Florida
            <br />
            <span className="text-lime-500 hidden"> Call NW Mngmt</span>
          </Text>

          <div className="border-lime-600 mx-auto mt-8 h-[500px] overflow-hidden rounded-md border shadow sm:rounded-lg xl:rounded-xl">
            <Map posix={[27.994402, -81.760254]} markers={markers} />
          </div>
        </div>

        <div className="flex w-full flex-1 flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow">
          <p className="text-lime-700 mb-8 text-center font-[family-name:var(--font-sora-sans)] text-[40px] leading-[40px] font-semibold xl:text-left">
            Reach out to NW Mngmt!
          </p>
          <form
            className="w-full"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);
              setLoading(true);

              // GTM event: client button click
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: "client_button_click",
                client: "nwmngmt",
              });

              try {
                const data = {
                  to: process.env.NEXT_PUBLIC_CONTACT_INFO || "",
                  name: formData.get("name") as string,
                  email: formData.get("email") as string,
                  phone: formData.get("phone") as string,
                  message: formData.get("message") as string,
                };

                const result = await sendEmail(data);

                if (result.success) {
                  form.reset();
                  setFormState({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                  });

                  toast.success(
                    "Thank you for reaching out! Our support team will reach out soon.",
                  );

                  // GTM event: form submission
                  window.dataLayer?.push({
                    event: "form_submission",
                    form_name: "Contact Form",
                  });

                  // Redirect
                  window.location.href = "/thank-you";
                }

                // Optionally handle error
              } catch (err) {
                console.error(err);
              } finally {
                setLoading(false);
              }
            }}
          >
            <div className="mb-4 w-full space-y-2">
              <Text className="!text-left uppercase">Full Name</Text>
              <input
                name="name"
                className="focus:outline-lime-500 w-full rounded-2xl border-[2px] border-[#989898] p-4 font-[family-name:var(--font-lato-sans)]"
                placeholder="Ryan"
                required
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
            <div className="mb-4 w-full space-y-2">
              <Text className="!text-left uppercase">Email</Text>
              <input
                name="email"
                type="email"
                className="focus:outline-lime-500 w-full rounded-2xl border-[2px] border-[#989898] p-4 font-[family-name:var(--font-lato-sans)]"
                placeholder="nwmanagement14@gmail.com"
                required
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div className="mb-4 w-full space-y-2">
              <Text className="!text-left uppercase">Phone</Text>
              <input
                name="phone"
                className="focus:outline-lime-500 w-full rounded-2xl border-[2px] border-[#989898] p-4 font-[family-name:var(--font-lato-sans)]"
                placeholder="813-579-0912"
                required
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            </div>
            <div className="w-full space-y-2">
              <Text className="!text-left uppercase">Message</Text>
              <textarea
                name="message"
                className="focus:outline-lime-500 h-[150px] w-full rounded-2xl border-[2px] border-[#989898] p-4 font-[family-name:var(--font-lato-sans)]"
                placeholder="How can we help you?"
                required
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
              />
            </div>
            <button
              type="submit"
              disabled={loading || !isFormValid}
              className="bg-lime-600 mt-8 flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl px-6 py-5 text-white disabled:opacity-70"
            >
              <CircleChevronRight size={20} />
              <Text variant="button">
                {loading ? "Sending..." : "Get Started"}
              </Text>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
