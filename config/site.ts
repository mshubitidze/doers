import { getBaseUrl } from "@/lib/utils";

export const siteConfig = {
  name: "Doer",
  url: getBaseUrl(),
  links: {
    twitter: "https://twitter.com/_mshub",
    github: "https://github.com/mshubitidze/doers",
  },
};

export type SiteConfig = typeof siteConfig;
