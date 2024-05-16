import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface CampaignPromise {
  text: string;
  image: ImageWidget;
}

export interface Props {
  announcer: ImageWidget;
  title: string;

  promises: CampaignPromise[];
}

export default function Promises({
  announcer = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9176/2057531e-336d-4ff7-a433-33756989efc2",
  title = "We don’t have merely promises",
  promises = [
    {
      text: "FREE SADIE KILLER AND THE SUSPECTS CONCERT EVERY month",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9176/2057531e-336d-4ff7-a433-33756989efc2",
    },
    {
      text: "FREE fefeR AND THE SUSPECTS CONCERT EVERY month",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9176/2057531e-336d-4ff7-a433-33756989efc2",
    },
    {
      text: "FREE feffefwefew frewf we fwe fNCERT EVERY month",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9176/2057531e-336d-4ff7-a433-33756989efc2",
    },
  ],
}: Props) {
  return (
    <div class="flex flex-col items-center w-full box-border gap-8 py-16 px-4">
      <div class="flex flex-col items-center gap-4 md:w-1/2 lg:w-3/4">
        <Image src={announcer} width={200} height={200} alt="" />
        <h2 class="text-3xl text-center">
          {"We don’t have merely promises we have garnet's FUTURE VISION"}
        </h2>
      </div>
      <div class="flex flex-col items-center gap-8 box-border bg-accent/50 border-accent/75 border-4 rounded-lg md:w-1/2 lg:w-3/4 py-16 px-8 shadow-lg shadow-gray">
        {promises.map((promise: CampaignPromise, index: number) => {
          return (
            <>
              <div
                class={`flex flex-col md:flex-row items-center gap-8 text-center ${
                  index % 2 !== 0 && "flex-row-reverse md:flex-row-reverse"
                } ${index % 2 !== 0 ? "md:text-start" : "md:text-end"}`}
              >
                <p class="uppercase text-2xl">{promise.text}</p>
                <Image src={promise.image} width={200} height={200} alt="" />
              </div>
              {index !== promises.length - 1 && (
                <div class="w-32 border-b-2 border-solid border-neutral/75"></div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
