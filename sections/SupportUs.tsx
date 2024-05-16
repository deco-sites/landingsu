import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Quote {
  frase: string;
  author: string;
  authorImage?: ImageWidget;
}

export interface Props {
  title?: string;
  subtitle?: string;
  quote?: Quote;
}

export default function SupportUs({
  title = "Want to support Us",
  subtitle = "We need your help!",
  quote = {
    frase:
      "There's nothing out here for us dude There's nothing out here for us dude There's nothing out here for us dude",
    author: "Steven Universe",
    authorImage:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9176/e8d69039-cc08-44b7-b023-00a4d11b1625",
  },
}: Props) {
  return (
    <div class="flex flex-col items-center w-full bg-primary/50 bg-cookie-cat py-8 px-4 shadow-md shadow-gray">
      <div class="flex flex-col items-center gap-8 md:w-1/2">
        <div class="flex flex-col items-center gap-4">
          <h2 class="text-3xl w-fit">{title}</h2>
          <p class="text-lg text-center text-neutral">{subtitle}</p>
        </div>
        <div class="flex flex-col items-end gap-4">
          <p>{quote.frase}</p>
          <div class="flex items-center gap-4">
            <span>- {quote.author}</span>
            <Image
              src={quote.authorImage}
              width={50}
              height={50}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
