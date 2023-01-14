import React from "react";

import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";


import { Schema } from "../types/Posts";
import { client } from "../utils/createClient";


import ArticleContent from "../components/Article";

type Posts = Schema["PublicPosts"]["Posts"];

interface Props<Type> {
  article : Type
  articles : Type
}

export default function Article(props : Props<Posts[]>) {
  const body = props.article[0].body;

  const SampleImageComponent = ({value, isInline} : { value : any, isInline : any }) => {
    const {width, height} = getImageDimensions(value)
    return (
      <img
        src={urlBuilder(client)
          .image(value)
          .width(isInline ? 100 : 800)
          .fit('max')
          .auto('format')
          .url()}
        alt={value.alt || ' '}
        loading="lazy"
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? 'inline-block' : 'block',
  
          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
      />
    )
  }


  const components: PortableTextComponents = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }) => <h1 className="text-4xl font-medium">{children}</h1>,
      h2: ({ children }) => <h1 className="text-3xl font-medium">{children}</h1>,

    },

    marks: {
      link: ({value, children}) => {
        return (
          <a href={value?.href} className="text-blue-500">
            {children}
          </a>
        )
      },
    },

    list : {
      bullet: ({children}) => <ul className="mt-xl list-disc px-5">{children}</ul>,
      number: ({children}) => <ol className="mt-lg list-decimal px-5">{children}</ol>
    },

    types : {
      image : SampleImageComponent
    }
  };

  return (
    <>
      <ArticleContent content={props.article} articles={props.articles}>
        <PortableText value={body!} components={components} />
      </ArticleContent>
    </>
  );
}

export async function getStaticPaths() {
  const articleSlug: Posts[] = await client.fetch(
    `
        *[_type == "post"]{
          "slug" : slug.current
        }      
      
    `
  );

  return {
    paths: articleSlug.map((a) => {
      return {
        params: {
          article: a.slug.toString(),
        },
      };
    }),

    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const article: Response = await client.fetch(
    `
        *[_type == "post" && slug.current == "${params.article}"]{
         body,
         title,
         description,
         publishedAt,
         "category" : categories[] ->,          
         "slug" : slug.current,
         "image" : mainImage.asset-> url,
         "author" : author -> {
          name,
          bio,
          followers,
          "authorImage" : image.asset -> url,
        }
      }
        `
  );

  const articles : Response = await client.fetch(`
        *[_type == "post"]{
          title,
          description,
          publishedAt,
          "image" : mainImage.asset-> url,
          "slug" : slug.current,
          "author" : author -> {
            name,
            "authorImage" : image.asset -> url,
          }, 
          "category" : categories[] ->,
        }
  `)

  return {
    props: {
      article,
      articles
    },
    revalidate : 10
  };
}
