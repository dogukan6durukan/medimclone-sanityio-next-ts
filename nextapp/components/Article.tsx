import { PortableText } from "@portabletext/react";
import { Schema } from "../types/Posts";
import ArticleNavigation from "./ArticleNavigation";


import Link from "next/link";
import React from "react";

type Posts = Schema["PublicPosts"]["Posts"];

interface Props<Type> {
  content: Type;
  articles: Type;
  children: React.ReactNode;
}

export default function ArticleContent(props: Props<Posts[]>) {
  const article_content = props.content[0];

  return (
    <div>
      <ArticleNavigation />
      <div className="lg:flex justify-evenly">
        <div className="content_wrapper basis-5/12 mx-6">
          <div className="header shrink-0 mt-12 mb-10 sm:flex items-center justify-between">
            <div className="part1 flex">
              <img
                src={article_content.author.authorImage}
                className="w-12 h-12 border rounded-full"
              />
              <div className="aritcle_information mx-3">
                <span>{article_content.author.name}</span>
                <p className="text-darkGrey">{article_content.publishedAt}</p>
              </div>
            </div>

            <div className="sm:my-0 my-3 [&>*]:w-6 [&>*]:inline-block [&>*]:mx-2">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 5.34c-.67.41-1.4.7-2.18.87a3.45 3.45 0 0 0-5.02-.1 3.49 3.49 0 0 0-1.02 2.47c0 .28.03.54.07.8a9.91 9.91 0 0 1-7.17-3.66 3.9 3.9 0 0 0-.5 1.74 3.6 3.6 0 0 0 1.56 2.92 3.36 3.36 0 0 1-1.55-.44V10c0 1.67 1.2 3.08 2.8 3.42-.3.06-.6.1-.94.12l-.62-.06a3.5 3.5 0 0 0 3.24 2.43 7.34 7.34 0 0 1-4.36 1.49l-.81-.05a9.96 9.96 0 0 0 5.36 1.56c6.4 0 9.91-5.32 9.9-9.9v-.5c.69-.49 1.28-1.1 1.74-1.81-.63.3-1.3.48-2 .56A3.33 3.33 0 0 0 20 5.33"
                  fill="#A8A8A8"
                ></path>
              </svg>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M19.75 12.04c0-4.3-3.47-7.79-7.75-7.79a7.77 7.77 0 0 0-5.9 12.84 7.77 7.77 0 0 0 4.69 2.63v-5.49h-1.9v-2.2h1.9v-1.62c0-1.88 1.14-2.9 2.8-2.9.8 0 1.49.06 1.69.08v1.97h-1.15c-.91 0-1.1.43-1.1 1.07v1.4h2.17l-.28 2.2h-1.88v5.52a7.77 7.77 0 0 0 6.7-7.71"
                  fill="#A8A8A8"
                ></path>
              </svg>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M19.75 5.39v13.22a1.14 1.14 0 0 1-1.14 1.14H5.39a1.14 1.14 0 0 1-1.14-1.14V5.39a1.14 1.14 0 0 1 1.14-1.14h13.22a1.14 1.14 0 0 1 1.14 1.14zM8.81 10.18H6.53v7.3H8.8v-7.3zM9 7.67a1.31 1.31 0 0 0-1.3-1.32h-.04a1.32 1.32 0 0 0 0 2.64A1.31 1.31 0 0 0 9 7.71v-.04zm8.46 5.37c0-2.2-1.4-3.05-2.78-3.05a2.6 2.6 0 0 0-2.3 1.18h-.07v-1h-2.14v7.3h2.28V13.6a1.51 1.51 0 0 1 1.36-1.63h.09c.72 0 1.26.45 1.26 1.6v3.91h2.28l.02-4.43z"
                  fill="#A8A8A8"
                ></path>
              </svg>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.57 14.67c0-.57.13-1.11.38-1.6l.02-.02v-.02l.02-.02c0-.02 0-.02.02-.02.12-.26.3-.52.57-.8L7.78 9v-.02l.01-.02c.44-.41.91-.7 1.44-.85a4.87 4.87 0 0 0-1.19 2.36A5.04 5.04 0 0 0 8 11.6L6.04 13.6c-.19.19-.32.4-.38.65a2 2 0 0 0 0 .9c.08.2.2.4.38.57l1.29 1.31c.27.28.62.42 1.03.42.42 0 .78-.14 1.06-.42l1.23-1.25.79-.78 1.15-1.16c.08-.09.19-.22.28-.4.1-.2.15-.42.15-.67 0-.16-.02-.3-.06-.45l-.02-.02v-.02l-.07-.14s0-.03-.04-.06l-.06-.13-.02-.02c0-.02 0-.03-.02-.05a.6.6 0 0 0-.14-.16l-.48-.5c0-.04.02-.1.04-.15l.06-.12 1.17-1.14.09-.09.56.57c.02.04.08.1.16.18l.05.04.03.06.04.05.03.04.04.06.1.14.02.02c0 .02.01.03.03.04l.1.2v.02c.1.16.2.38.3.68a1 1 0 0 1 .04.25 3.2 3.2 0 0 1 .02 1.33 3.49 3.49 0 0 1-.95 1.87l-.66.67-.97.97-1.56 1.57a3.4 3.4 0 0 1-2.47 1.02c-.97 0-1.8-.34-2.49-1.03l-1.3-1.3a3.55 3.55 0 0 1-1-2.51v-.01h-.02v.02zm5.39-3.43c0-.19.02-.4.07-.63.13-.74.44-1.37.95-1.87l.66-.67.97-.98 1.56-1.56c.68-.69 1.5-1.03 2.47-1.03.97 0 1.8.34 2.48 1.02l1.3 1.32a3.48 3.48 0 0 1 1 2.48c0 .58-.11 1.11-.37 1.6l-.02.02v.02l-.02.04c-.14.27-.35.54-.6.8L16.23 15l-.01.02-.01.02c-.44.42-.92.7-1.43.83a4.55 4.55 0 0 0 1.23-3.52L18 10.38c.18-.21.3-.42.35-.65a2.03 2.03 0 0 0-.01-.9 1.96 1.96 0 0 0-.36-.58l-1.3-1.3a1.49 1.49 0 0 0-1.06-.42c-.42 0-.77.14-1.06.4l-1.2 1.27-.8.8-1.16 1.15c-.08.08-.18.21-.29.4a1.66 1.66 0 0 0-.08 1.12l.02.03v.02l.06.14s.01.03.05.06l.06.13.02.02.01.02.01.02c.05.08.1.13.14.16l.47.5c0 .04-.02.09-.04.15l-.06.12-1.15 1.15-.1.08-.56-.56a2.3 2.3 0 0 0-.18-.19c-.02-.01-.02-.03-.02-.04l-.02-.02a.37.37 0 0 1-.1-.12c-.03-.03-.05-.04-.05-.06l-.1-.15-.02-.02-.02-.04-.08-.17v-.02a5.1 5.1 0 0 1-.28-.69 1.03 1.03 0 0 1-.04-.26c-.06-.23-.1-.46-.1-.7v.01z"
                  fill="#A8A8A8"
                ></path>
              </svg>
              <svg
                viewBox="0 0 25 25"
                fill="none"
                className="tb"
                aria-label="Add to list bookmark button"
              >
                <path
                  d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                  fill="#292929"
                ></path>
              </svg>
            </div>
          </div>

          <div className="title_part">
            <h1 className="text-5xl font-medium mb-5">
              {article_content.title}
            </h1>
            <p className="text-lg text-darkGrey">
              {article_content.description}
            </p>
            <img src={article_content.image} className="my-5" />
          </div>

          <div className="body mt-10 [&>*]:my-5">{props.children}</div>

          <div className="my-8">
            {article_content.category?.map((c) => (
              <button key={c.title} className="bg-lightGrey px-4 py-2 mr-2 my-2 rounded-full text-[14px] font-medium">
                {c.title}
              </button>
            ))}
          </div>

          <div className="content_footer mb-7 py-5 flex justify-between">
            <div className="left_side_logos flex">
              <span className="flex">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-label="clap"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                  ></path>
                </svg>
                500
              </span>
              <span className="flex mx-5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-label="responses"
                  className="kx"
                >
                  <path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"></path>
                </svg>
                50
              </span>
            </div>

            <div className="right_side_logos flex">
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.22 4.93a.42.42 0 0 1-.12.13h.01a.45.45 0 0 1-.29.08.52.52 0 0 1-.3-.13L12.5 3v7.07a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V3.02l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.8a.42.42 0 0 1 .07.5zm-.1.14zm.88 2h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.14c.1.1.15.22.15.35a.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9V8.96c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1z"
                    fill="#000"
                  ></path>
                </svg>
              </span>

              <span className="mx-5">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  className="mi"
                  aria-label="Add to list bookmark button"
                >
                  <path
                    d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                    fill="#292929"
                  ></path>
                </svg>
              </span>
            </div>
          </div>

          <div className="suggestions rounded bg-[#FAFAFA] p-8">
            <div className="">
              <div className="sm:flex block items-center justify-between">
                <p className="md:text-xl font-medium">
                  More From {article_content.author.name}
                </p>

                <div className="sm:mt-0 mt-3">
                  <button className="px-4 py-2.5 bg-mediumgreen text-white text-sm font-medium rounded-full">
                    Follow
                  </button>
                  <button className="bg-mediumgreen rounded-full ml-2 p-3">
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="w-10/12 text-sm">
                <PortableText value={article_content.author.bio!} />
              </div>
            </div>

            <div className="py-6">
              <div className="border-b-2 border-slate-300 author-content">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-darkGrey font-medium">
                      {article_content.publishedAt}
                    </span>
                    <h2 className="text-2xl font-bold mt-2">
                     <Link href={`${article_content.slug}`}>{article_content.title}</Link>
                    </h2>
                    <p>{article_content.description}</p>
                  </div>

                  <div>
                    <img src={article_content.image} className="w-28 h-28" />
                  </div>
                </div>

                <div className="flex justify-between w-10/12 py-8">
                  <button className="bg-lightGrey rounded-full px-2 text-sm py-1">
                    {article_content.category![0].title}
                  </button>
                  <span className="mx-5">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      className="mi"
                      aria-label="Add to list bookmark button"
                    >
                      <path
                        d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                        fill="#292929"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="border-b p-5 sm:flex items-center justify-center">
                <p>Share your ideas with million of readers.</p>
                <button className="px-4 py-2 bg-black text-white rounded-full sm:mx-3 sm:my-0 my-3 text-sm">
                  Write on Medium
                </button>
              </div>

              <div className="">
                {props.articles.map((a) => (
                  <div key={a.slug} className="border-b-2 py-6 border-slate-300 author-content">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-darkGrey font-medium">
                          {a.publishedAt}
                        </span>
                        <Link href={a.slug}><h2 className="text-2xl font-bold mt-2">{a.title}</h2></Link>
                        <p>{a.description}</p>
                      </div>

                      <div>
                        <img src={a.image} className="w-28 h-28" />
                      </div>
                    </div>

                    <div className="flex justify-between w-10/12 py-8">
                      <button className="bg-lightGrey rounded-full px-2 text-sm py-1">
                        {a.category![0].title}
                      </button>
                      <span className="mx-5">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          className="mi"
                          aria-label="Add to list bookmark button"
                        >
                          <path
                            d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                            fill="#292929"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-l lg:block pr-6 pl-10 hidden sidebar basis-3/12">
          <div className="mt-10">
            <div>
              <img
                className="w-28 h-28 rounded-full"
                src={article_content.author.authorImage}
              />
              <p className="font-medium">{article_content.author.name}</p>
              <p className="text-darkGrey my-2 font-medium">
                {article_content.author.followers} Followers
              </p>
            </div>

            <div className="text-darkGrey">
              <PortableText value={article_content.author.bio!} />
            </div>

            <div className="mt-6">
              <button className="px-4 py-2.5 bg-mediumgreen text-white text-sm font-medium rounded-full">
                Follow
              </button>
              <button className="bg-mediumgreen rounded-full ml-2 p-3">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </button>
            </div>

            <div>
              <h2 className="font-medium mt-10 mb-6">More from Medium</h2>

              {props.articles.map((a) => (
                <div key={a.slug} className="flex items-center justify-between">
                  <div>
                    <div className="flex text-sm items-center">
                      <img className="w-7 h-7" src={a.author.authorImage} />
                      <span>{a.author.name}</span>
                    </div>

                    <Link href={a.slug} className="my-3 block font-bold">
                      {a.title}
                    </Link>
                  </div>

                  <div>
                    <img src={a.image} className="w-16 h-16 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
