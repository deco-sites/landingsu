import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  role?: string;
  politicalNumber?: number;
  campaignLogo?: ImageWidget;
  politician?: ImageWidget;
}


export default function HeroFlats({
  role,
  politicalNumber,
  campaignLogo,
  politician,
}: Props) {
  return (
    <nav class="lg:mx-auto box-border bg-cookie-cat bg-primary h-screen w-full text-secondary">
      <div class="flex flex-col box-border items-center pt-32 px-8 h-full justify-between">
        <div class="flex flex-col w-full box-border gap-8 lg:items-end items-center lg:items-end items-center">
          <Image
            width={640}
            class="w-full lg:w-1/2 object-fit"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={campaignLogo}
            alt={campaignLogo}
            decoding="async"
            loading="lazy"
          />
          <p class="text-4xl uppercase">for {role}</p>
        </div>

        <div class="flex overflow-y-hidden lg:flex-row flex-col-reverse w-full justify-between lg:items-end items-center">
          <Image
            width={800}
            class="w-full lg:w-3/5 object-fit"
            sizes="(max-width: 800px) 100vw, 30vw"
            src={politician}
            alt={politician}
            decoding="async"
            loading="lazy"
          />
          <div class="flex flex-col gap-4 uppercase lg:items-end items-center lg:mb-16">
            <span class="text-3xl">vote</span>
            <span class="text-7xl">{politicalNumber}</span>
          </div>
        </div>

      </div >
    </nav >
  );
}
