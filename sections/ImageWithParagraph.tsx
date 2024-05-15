import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  style?: "Outline" | "Ghost";
}

export interface Props {
  title?: string;
  /** @format textarea */
  description?: string;
  tagline?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA;
  disableSpacing?: {
    top?: boolean;
    bottom?: boolean;
  };
}

const PLACEMENT = {
  left: "flex-col md:flex-row-reverse",
  right: "flex-col md:flex-row",
};

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function ImageWithParagraph({
  title = "Here's an intermediate size heading you can edit",
  description =
  "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  tagline = "Tagline",
  image = DEFAULT_IMAGE,
  placement = "left",
  disableSpacing,
  cta = { id: "campaign-gallery", href: "/", text: "Campaign Gallery" },
}: Props) {
  return (
    <div class="flex justify-center lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm">
      <div class="flex flex-col items-center gap-8 w-full md:w-1/2 border border-secondary rounded-lg overflow-hidden">
        <p class="text-4xl leading-snug text-center">
          {title}
        </p>
        <Image
          width={640}
          height={400}
          class="object-fit z-10"
          sizes="(max-width: 100vw) 100vw, 30vw"
          src={image}
          alt={image}
          decoding="async"
          loading="lazy"
        />
        <p class="leading-normal text-center">
          {description}
        </p>
        <a class="w-full max-w-72 font-normal btn btn-primary btn-outline" id={cta.id} href={cta.href}>{cta.text}</a>
      </div>
    </div>
  );
}
