import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface CampaignPromise {
  text: string;
  image: ImageWidget;
}

export interface Props {
  announcer: ImageWidget,
  /** @format rich-text */
  title: string;

  promises: CampaignPromise[];
}

export default function Promises({

  announcer = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9176/2057531e-336d-4ff7-a433-33756989efc2",
  title = "We don’t have merely promises",
  promises = [
    {
      text: "FREE SADIE KILLER AND THE SUSPECTS CONCERT EVERY month",
      image:"https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9176/2057531e-336d-4ff7-a433-33756989efc2",
    },
    {
      text: "FREE fefeR AND THE SUSPECTS CONCERT EVERY month",
      image:"https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9176/2057531e-336d-4ff7-a433-33756989efc2",
    },
    {
      text: "FREE feffefwefew frewf we fwe fNCERT EVERY month",
      image:"https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9176/2057531e-336d-4ff7-a433-33756989efc2",
    }
  ]
}: Props) {
  return (
    <div class="flex justify-center w-full box-border bg-primary/50 bg-cookie-cat">
      oi
    </div>
  );
}
