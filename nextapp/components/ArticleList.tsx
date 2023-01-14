import Link from "next/link";
import { Schema } from "../types/Posts";

type Posts = Schema['PublicPosts']['Posts'];


export default function ArticleList({ posts } : { posts : Posts[] }) {

  return (
    <div className="flex flex-wrap lg:flex-row flex-col">
    {posts.map((b) => (

    <div key={b.slug} className="cardWrapper flex lg:flex-row flex-col basis-1/2 p-6">


       <div className="body basis-1/2">
 
         <div className="author flex items-center">
 
             <div className="image_wrapper shrink-0 md:my-0">
                 <img src={b.author.authorImage} className="w-8 h-8 rounded-full"/>
             </div>
 
             <div className="name_wrapper mx-3">
                 <span className="font-medium">{b.author.name}</span>
             </div>
         
         </div>
 
         <div className="bodyContent my-3">
           <Link href={b.slug}><h2 className="text-2xl font-medium">{b.title}</h2></Link>
           <span className="my-1 text-darkGrey font-medium inline-block">{b.description}</span>
         </div>
 
         <div className="bodyFooter sm:flex items-center">
           <span className="date text-darkGrey inline-block">{b.publishedAt}</span>
           <button className="tag mx-3 sm:block hidden px-3 py-1 rounded-full text-sm bg-lightGrey text-darkGrey">
               {b.category![0].title}
            </button>
         </div>
         
       </div>
 
       <div className="imagwrapper sm:basis-1/3 shrink-0 lg:my-0 my-3">
         <img src={b.image} />
       </div>
     
     </div>

    ))}
     
    </div>

   
  );
}
