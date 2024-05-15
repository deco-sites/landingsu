import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Column {
  title: string;
  items: Items[];
}

export interface Items {
  label: string;
  href: string;
}

export interface Subscribe {
  title: string;
  description: string;
  /** @format rich-text */
  instructions: string;
}

export interface Social {
  network: "Facebook" | "Instagram" | "Linkedin" | "X - Twitter" | "Youtube";
  href: string;
}

export interface Props {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  links?: Column[];
  subscribe?: Subscribe;
  madeWith?: {
    label?: string;
    src?: ImageWidget;
    href?: string;
  };

  image?: ImageWidget;
  copyright?: string;
  bottomLinks?: Items[];
  social?: Social[];
}

export default function Footer({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  links = [
    {
      title: "Column One",
      items: [
        { label: "Link One", href: "/" },
        { label: "Link Two", href: "/" },
        { label: "Link Three", href: "/" },
        { label: "Link Four", href: "/" },
        { label: "Link Five", href: "/" },
      ],
    },
    {
      title: "Column Two",
      items: [
        { label: "Link Six", href: "/" },
        { label: "Link Seven", href: "/" },
        { label: "Link Eight", href: "/" },
        { label: "Link Nine", href: "/" },
        { label: "Link Ten", href: "/" },
      ],
    },
    {
      title: "Column Three",
      items: [
        { label: "Link Eleven", href: "/" },
        { label: "Link Twelve", href: "/" },
        { label: "Link FourThirteenteen", href: "/" },
        { label: "Link Fourteen", href: "/" },
        { label: "Link Fifteen", href: "/" },
      ],
    },
  ],
  subscribe = {
    title: "Sign Up",
    description:
      "Join our newsletter to stay up to date on features and releases.",
    instructions:
      "By subscribing you agree to with our <a href='/' target='_blank' class='link'>Privacy Policy</a> and provide consent to receive updates from our company.",
  },
  madeWith = {
    label: "Made with",
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/cc202be0-af57-4b32-b9c9-d1d7dc97bf85",
    href: "https://deco.cx",
  },
  copyright = "© 2024 deco.cx. All rights reserved.",
  bottomLinks = [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
    { label: "Cookies Settings", href: "/" },
  ],
  social = [
    { network: "Facebook", href: "" },
    { network: "Instagram", href: "" },
    { network: "X - Twitter", href: "" },
    { network: "Linkedin", href: "" },
    { network: "Youtube", href: "" },
  ],

  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/cc202be0-af57-4b32-b9c9-d1d7dc97bf85",
}: Props) {
  return (
    <div class="flex justify-center w-screen bg-primary/50 bg-cookie-cat">
      <div class="lg:container mx-auto md:max-w-6xl px-4 pt-16 text-sm">
        <div class="flex flex-col items-center gap-8">
          <h2 class="font-semibold text-3xl ">{subscribe?.title}</h2>
          <p class="font-normal text-xl text-neutral">{subscribe.description}</p>
          <div class="flex flex-col items-center gap-16 lg:flex-row">
            <div>
              <Image
                src={image || ""}
                width={100}
                height={100}
                alt={madeWith?.label}
              />
            </div>
            <div class="lg:w-[40%]">
              <form class="flex flex-col gap-4">
                <div class="flex gap-4">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    class="w-full input input-bordered input-primary"
                  />
                  <button
                    type="submit"
                    class="btn btn-outline font-normal"
                    aria-label="Subscribe"
                  >
                    Subscribe
                  </button>
                </div>
                <p
                  class="text-xs"
                  dangerouslySetInnerHTML={{ __html: subscribe.instructions }}
                >
                </p>
              </form>
            </div>
          </div>
          <div class="border-primary border-t flex flex-col gap-4 items-center justify-between lg:flex-row lg:items-center py-8">
            <div class="flex flex-col gap-4 items-center lg:flex-row lg:gap-6">
              <a
                href={madeWith?.href}
                class="flex items-center gap-2"
                target="_blank"
              >
                <span>{madeWith?.label}</span>
                <Image
                  src={madeWith?.src || ""}
                  width={100}
                  height={28}
                  alt={madeWith?.label}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
