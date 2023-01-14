import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import MainWrapper from "../components/MainWrapper";

import { client } from "../utils/createClient";

import { Schema } from "../types/Posts";

type Posts = Schema['PublicPosts']['Posts'];

export default function Home({ posts } : { posts : Posts[] }) {

  return (
    <>
      <div>
        <Navigation />
        <Banner />
        <MainWrapper
          posts={posts}
        />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts : Response = await client.fetch(`
    *[_type == "post"]{
      title,
      publishedAt,
      description,
     "slug" : slug.current,
     "image" : mainImage.asset-> url,
     "category" : categories[] -> ,
     "author" : author -> {
       name,
       "authorImage" : image.asset -> url,
     }, 
  }
  `);

  return {
    props: {
      posts,
    },
  };
}
