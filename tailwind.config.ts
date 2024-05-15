import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      backgroundImage: {
        "cookie-cat": "url(https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9176/d44f5cad-58ec-4d33-8beb-b93258616856)",
        "cookie-cat-full-opacity": "url(https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9176/5ff48252-93a1-4c93-9b05-d54df89a9f6a)"
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
