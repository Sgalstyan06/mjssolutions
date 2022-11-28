import Head from "next/head";
import React from "react";
import { socialMetaTags } from "./socialTags";

export interface ISEOProps {
  title: string;
  description: string;
  image?: string;
}

const SEO: React.FC<ISEOProps> = (props) => {
  const { title, description, image } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
      <meta name="robots" content="all" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content={`MJS, MJS solutions, authorized Miele Service Provider, Miele, Miele repair in Los Angeles, Miele service in Los Angeles, Miele Repair Near Me, Miele Service Near Me, Miele Appliance Repair Near Me, Miele Dishwasher Service/Repair Near Me, Miele Coffee Maker Service/Service Near Me, Miele Refrigerator Service/Repair Near me, Miele Washer Service/Repair Near Me, Miele Dryer Service/Repair Near Me, Miele Stove Repair/Service Near Me, Miele Range Service/Repair Near me, LA, kitchen appliance, repair, Coffee machines, Dishwashers, Ranges, Refrigerators, Ventilation hood, Washing machines,`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />

      {socialMetaTags(props).map(({ name, content, property }, i) => {
        return property ? (
          name ? (
            <meta name={name} property={property} content={content} key={i} />
          ) : (
            <meta property={property} content={content} key={i} />
          )
        ) : (
          <meta name={name} content={content} key={i} />
        );
      })}
    </Head>
  );
};

export default SEO;
