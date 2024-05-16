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
  subscribe?: Subscribe;
  madeWith?: {
    label?: string;
    src?: ImageWidget;
    href?: string;
  };

  image?: ImageWidget;
}

export default function Footer({
  subscribe = {
    title: "Sign Up",
    description:
      "Join our newsletter to stay up to date on features and releases.",
    instructions:
      "By subscribing you agree to with our <a href='/' target='_blank' class='link'>Privacy Policy</a> and provide consent to receive updates from our company.",
  },
  madeWith = {
    label: "Made with",
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/cc202be0-af57-4b32-b9c9-d1d7dc97bf85",
    href: "https://deco.cx",
  },
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9176/2057531e-336d-4ff7-a433-33756989efc2",
}: Props) {
  return (
    <div class="flex justify-center w-screen bg-primary/50 bg-cookie-cat">
      <div class="lg:container mx-auto md:max-w-6xl px-4 pt-16 text-sm">
        <div class="flex flex-col items-center gap-8">
          <div class="flex flex-col items-center gap-4">
            <h2 class="text-3xl ">
              {subscribe?.title || "The Universe Newsletter"}{" "}
            </h2>
          </div>
          <div class="flex flex-col items-center gap-8 lg:flex-row">
            <div>
              <Image
                class="rounded-lg border-4 border-secondary"
                src={image || ""}
                width={300}
                height={300}
                alt={madeWith?.label}
              />
            </div>
            <div class="lg:w-[40%]">
              <form class="flex flex-col gap-4">
                <p class="font-normal text-md text-neutral">
                  {subscribe.description ||
                    "Keep updated, sign up to our newsletter"}
                </p>
                <div class="flex gap-4">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    class="min-w-64 w-full input input-bordered input-primary"
                  />
                  <button
                    type="submit"
                    class="btn btn-outline font-normal"
                    aria-label="Subscribe"
                  >
                    Sign Up
                  </button>
                </div>
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
