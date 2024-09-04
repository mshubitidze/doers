import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params: { locale } }: { params: { locale: string } },
) {
  const geistMono = fetch(
    "https://utfs.io/f/3ec0a59a-af4c-42e0-9791-c1090b0b0359-uxnmu9.ttf",
  ).then((res) => res.arrayBuffer());
  const glKupiura = fetch(
    "https://utfs.io/f/0b2cae7d-dd0c-4c21-b369-074fce038bed-onx21.ttf",
  ).then((res) => res.arrayBuffer());

  if (locale !== "en" && locale !== "ka") notFound();

  const opengraph = {
    ka: {
      title: "Doers",
      description: "სადაც ქმედებები უფრო მრავლისმთქმელია",
    },
    en: {
      title: "Doers",
      description: "Where Actions Speak Louder",
    },
  } as const;

  return new ImageResponse(
    <div tw="flex flex-col bg-neutral-900 w-full h-full text-neutral-50 px-32 py-28">
      <p tw="text-[320px]">{opengraph[locale].title}</p>
      <p tw="text-[120px] text-fuchsia-800">{opengraph[locale].description}</p>
    </div>,
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "GL-Kupiura",
          data: await glKupiura,
          style: "normal",
          weight: 700,
        },
        {
          name: "GeistMono-Black",
          data: await geistMono,
          style: "normal",
          weight: 900,
        },
      ],
    },
  );
}
