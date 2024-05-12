import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  politicalNumber?: number;
  role?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  campaignLogo?: ImageWidget;
  politician?: ImageWidget;
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  politicalNumber = 4564,
  role = "mayor",
  campaignLogo,
  politician,
}: Props) {
  return (
    <nav class="lg:mx-auto box-border bg-cookie-cat bg-primary min-h-screen w-full text-secondary">
      <div class="flex flex-col items-center gap-8 p-16">
        <div class="flex flex-col w-full gap-8 md:items-end items-center">
          <Image
            width={640}
            class="w-full lg:w-1/2 object-fit"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={campaignLogo}
            alt={campaignLogo}
            decoding="async"
            loading="lazy"
          />
          <p class="text-4xl	uppercase">for {role}</p>
        </div>

        <div>
          <Image
            width={640}
            class="w-full lg:w-1/2 object-fit"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={politician}
            alt={politician}
            decoding="async"
            loading="lazy"
          />
          <div class="flex flex-col gap-4  uppercase">
            <span class="text-3xl">vote</span>
            <span class="text-5xl">{politicalNumber}</span>
          </div>
        </div>
        <div class="lg:py-36 gap-12 md:gap-20 items-center">
          {politician && (
            <Image
              width={640}
              class="w-full lg:w-1/2 object-fit"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={politician}
              alt={politician}
              decoding="async"
              loading="lazy"
            />
          )}
          {campaignLogo && (
            <Image
              width={640}
              class="w-full lg:w-1/2 object-fit"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={campaignLogo}
              alt={campaignLogo}
              decoding="async"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </nav >
  );
}
