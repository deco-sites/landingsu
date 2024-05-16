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
  image?: ImageWidget;
  cta?: CTA;
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function ImageWithParagraph({
  title = "Here's an intermediate size heading you can edit",
  description =
  "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  image = DEFAULT_IMAGE,
  cta = { id: "campaign-gallery", href: "/", text: "Campaign Gallery" },
}: Props) {
  return (
    <div id="campaign" class="flex justify-center py-16 lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm">
      <div class="flex flex-col items-center gap-8 w-full md:w-3/4 border border-secondary rounded-lg overflow-hidden">
        <p class="text-3xl leading-snug text-center">
          {title}
        </p>
        <Image
          width={800}
          height={500}
          class="object-fit z-10 border border-8 border-accent rounded-lg"
          sizes="(max-width: 100vw) 100vw, 30vw"
          src={image}
          alt={image}
          decoding="async"
          loading="lazy"
        />
        <p style="button" class="leading-6 text-lg text-center">
          {description}
        </p>
        <a class="w-full max-w-72 font-normal btn btn-primary btn-outline" id={cta.id} href={cta.href}>{cta.text}</a>
      </div>
    </div>
  );
}
