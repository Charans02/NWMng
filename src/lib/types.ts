export type ServiceType = {
  image: string;
  title: string;
  description: string;
};

export type TestimonialType = {
  avatar: string;
  name: string;
  content: string;
  rating: number; // 0-5 scale
};

type ExpertType = {
  id: number;
  img_url: string;
  img_name: string;
};

export interface Expert {
  id: number;
  img_group: ExpertType[];
}

export interface ComparisonSet {
  id: number;
  before: string;
  after: string;
  title: string;
}

export interface JunkRemovalType {
  id: number;
  img_url: string;
  img_name: string;
}

export interface Customer {
  id: number;
  avatar_url: string;
  name: string;
}

declare global {
  interface Window {
    gtagSendEvent?: (url: string) => void;
  }
}
