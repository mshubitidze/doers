import localFont from "next/font/local";

export const glKupiura = localFont({
  src: [
    {
      path: "./font/gl-kupiura-bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./font/gl-kupiura-light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "./font/gl-kupiura-medium.ttf",
      weight: "600",
      style: "medium",
    },
    {
      path: "./font/gl-kupiura-regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "./font/gl-kupiura-ultralight.ttf",
      weight: "200",
      style: "ultralight",
    },
  ],
  display: "swap",
});
