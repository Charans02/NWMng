import {
  Facebook,
  // Instagram,
  // Twitter,
  // Youtube,
  // Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { ServiceType, TestimonialType, Expert, ComparisonSet, JunkRemovalType, Customer } from "./types";

export const CONTACT_INFO = [
  {
    name: "Address",

    icon: <MapPin size={16} className="stroke-foreground fill-background" />,
    value: "Florida , USA",
  },
  {
    name: "Phone",
    icon: <Phone size={16} className="stroke-foreground fill-background" />,
    value: "813-579-0912",
  },
];

export const SOCIAL_LINKS = [
  // {
  //   name: "Instagram",
  //   icon: <Instagram size={24} />,
  //   url: "/",
  // },
  // {
  //   name: "Twitter",
  //   icon: <Twitter size={24} />,
  //   url: "/",
  // },
  {
    name: "Facebook",
    icon: <Facebook size={24} />,
    url: "https://www.facebook.com/profile.php?id=61575312555583",
  },
  // {
  //   name: "Youtube",
  //   icon: <Youtube size={24} />,
  //   url: "/",
  // },
];

export const QUICK_LINKS = [
  {
    name: "About Us",
    url: "#story",
  },
  {
    name: "Hire Us",
    url: "#states",
  },
  {
    name: "Reviews",
    url: "#testimonials",
  },
  // {
  //   name: "Contact Us",
  //   url: "#contact",
  // },
];

export const SERVICES: ServiceType[] = [
  {
    image: "/images/service_1.jpg",
    title: "Residential Junk Removal",
    description:
      "We clear garages, storage units, attics, and anywhere else junk piles up.",
    imageHeight: 600,
  },
  {
    image: "/images/service_2.jpg",
    title: "Yard Waste & Debris",
    description:
      "Landscaping mess or storm debris? We’ll get your yard back to clean.",
    imageHeight: 600,
  },
  {
    image: "/images/service_3.jpg",
    title: "Construction & Renovation Cleanup",
    description:
      "Contractors and DIYers alike trust us to haul away scrap and debris fast.",
    imageHeight: 600,
  },
];

export const TESTIMONIALS: TestimonialType[] = [
  {
    avatar: "/images/avatar_1.jpg",
    name: "Ryan G",
    content:
      "They are so friendly and helped me pick out the perfect dumpster for the job.We are glad we picked Nw Mngmt Dumpsters and will be using them again the next time we need a dumpster rental. You wont be disappointed!",
    rating: 5,
  },
  {
    avatar: "/images/avatar_2.jpg",
    name: "Craig H",
    content:
      "They made my life super easy! Ive been needing a dumpster for a long time.  but have not rented one yet due to not knowing the correct size and pricing, they are not only affordable, but came right when I asked. They came earlier  in the day for me and I got it all done in one day!",
    rating: 5,
  },
  {
    avatar: "/images/avatar_3.jpg",
    name: "Brett T",
    content:
      "They are amazing to work with. I never rented a dumpster so I was little confused he answered all of my questions and kept in contact with me every step of the way. Great pricing and very reliable. I highly recommend renting from Nw Mngmt dumpsters.",
    rating: 5,
  },
];

export const SERVICE_AREAS = [
  "Tampa",
  "Clearwater",
  "St. Petersburg",
];

export const EXPERT_IMAGES: Expert[] = [
  {
    id: 1,
    img_group: [
      {
        id: 1,
        img_url: "/images/image.jpg",
        img_name: "Expert 1",
      },
      {
        id: 2,
        img_url: "/images/image_1.jpg",
        img_name: "Expert 2",
      },
      {
        id: 3,
        img_url: "/images/image_2.jpg",
        img_name: "Expert 3",
      },
      {
        id: 4,
        img_url: "/images/image_3.jpg",
        img_name: "Expert 4",
      },
      {
        id: 5,
        img_url: "/images/image_4.jpg",
        img_name: "Expert 5",
      },
    ],
  },
  {
    id: 2,
    img_group: [
      {
        id: 1,
        img_url: "/images/image.jpg",
        img_name: "Expert 1",
      },
      {
        id: 2,
        img_url: "/images/image_1.jpg",
        img_name: "Expert 2",
      },
      {
        id: 3,
        img_url: "/images/image_2.jpg",
        img_name: "Expert 3",
      },
      {
        id: 4,
        img_url: "/images/image_3.jpg",
        img_name: "Expert 4",
      },
      {
        id: 5,
        img_url: "/images/image_4.jpg",
        img_name: "Expert 5",
      },
    ],
  },
  {
    id: 3,
    img_group: [
      {
        id: 1,
        img_url: "/images/image.jpg",
        img_name: "Expert 1",
      },
      {
        id: 2,
        img_url: "/images/image_1.jpg",
        img_name: "Expert 2",
      },
      {
        id: 3,
        img_url: "/images/image_2.jpg",
        img_name: "Expert 3",
      },
      {
        id: 4,
        img_url: "/images/image_3.jpg",
        img_name: "Expert 4",
      },
      {
        id: 5,
        img_url: "/images/image_4.jpg",
        img_name: "Expert 5",
      },
    ],
  },
];

export const COMPARISON_SETS: ComparisonSet[] = [
  {
    id: 1,
    before: "/images/before.jpg",
    after: "/images/after.jpg",
    title: "Backyard Cleanup",
  },
  {
    id: 2,
    before: "/images/before.jpg",
    after: "/images/after.jpg",
    title: "Garage Cleanup",
  },
  {
    id: 3,
    before: "/images/before.jpg",
    after: "/images/after.jpg",
    title: "Home Cleanout",
  },
];

export const JUNK_REMOVAL_IMAGES: JunkRemovalType[] = [
  {
    id: 1,
    img_url: "/images/junk_remove.jpg",
    img_name: "Junk Removal 1",

  },
  {
    id: 2,
    img_url: "/images/junk_remove.jpg",
    img_name: "Junk Removal 2",
  },
  {
    id: 3,
    img_url: "/images/junk_remove.jpg",
    img_name: "Junk Removal 3",
  },
];

export const CUSTOMERS: Customer[] = [
  {
    id: 1,
    avatar_url: "/images/avatar_1.jpg",
    name: "Pedro Beatty",
  },
  {
    id: 2,
    avatar_url: "/images/avatar_2.jpg",
    name: "Justin Gerhold Jr.",
  },
  {
    id: 3,
    avatar_url: "/images/avatar_3.jpg",
    name: "Rufus Mohr",
  },
  {
    id: 4,
    avatar_url: "/images/avatar_4.png",
    name: "John Doe",
  },
];
