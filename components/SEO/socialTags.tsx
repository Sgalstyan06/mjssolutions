import { ISEOProps } from "./index";
import { DOMAIN_NAME } from "../../constants/staticInfo";

export const socialMetaTags = ({ title, description }: ISEOProps) => {
  return [
    { property: "article:section", content: title },
    { name: "twitter:card", content: "summary_large_image" },
    {
      property: "twitter:url",
      content: DOMAIN_NAME,
    },
    {
      property: "twitter:domain",
      content: "",
    },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    {
      name: "twitter:image",
      content: `${DOMAIN_NAME}socialImages/socialIcon.jpg`,
    },
    { name: "twitter:image:alt", content: title },
    { property: "og:title", content: title },
    { property: "og:type", content: "article" },
    {
      property: "og:url",
      content: DOMAIN_NAME,
    },
    {
      name: "image",
      property: "og:image",
      content: `${DOMAIN_NAME}socialImages/socialIcon.jpg`,
    },
    { property: "og:image:alt", content: title },
    { property: "og:description", content: description },
    {
      property: "og:site_name",
      content: title,
    },
    {
      property: "og:published_time",
      content: new Date().toISOString(),
    },
    {
      property: "og:modified_time",
      content: new Date().toISOString(),
    },
  ];
};
