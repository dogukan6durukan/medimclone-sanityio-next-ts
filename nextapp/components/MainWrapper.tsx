import ArticleList from "./ArticleList";

import { Schema } from "../types/Posts";
type Posts = Schema['PublicPosts']['Posts'];


export default function MainWrapper({ posts } : { posts : Posts[] }) {
    return(
        <div className="flex m-auto lg:flex-row flex-col justify-center lg:p-12">
            <ArticleList posts={posts}/>
        </div>
    )
}