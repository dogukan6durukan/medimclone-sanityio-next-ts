import Link from "next/link";

export default function ArticleNavigation() {
  return (
    <>
      <div className="top_navigation_medium md:hidden flex justify-end border-b text-sm px-6 py-2">
        <div>
          <button className="px-2 py-[1px] bg-mediumgreen rounded-full  text-white">
            Sign up
          </button>
          <button className="ml-3 text-darkGrey">Sign in</button>
        </div>
      </div>
      <div className="flex px-5 py-3 justify-between border-b">
        <div className="left_side flex items-center">
          <span className="w-11">
            <Link href="/">
              <svg viewBox="0 0 1043.63 592.71" className="bn hd w-auto">
                <g data-name="Layer 2">
                  <g data-name="Layer 1">
                    <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
                  </g>
                </g>
              </svg>
            </Link>
          </span>
          <div className="sm:flex hidden bg-[#FAFAFA] px-3 py-1.5 rounded-full ml-4 items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.1 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.94-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .8-.79l-3.74-3.73A8.05 8.05 0 0 0 11.04 3v.01z"
                fill="currentColor"
              ></path>
            </svg>
            <input
              type="text"
              className="block px-2 bg-transparent focus:outline-0 text-sm placeholder:text-darkGrey "
              placeholder="Search Medium"
            />
          </div>
        </div>

        <div className="right_side text-sm font-medium flex items-center">
          <div className="sm:flex hidden">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-label="Write"
              >
                <path
                  d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                  fill="currentColor"
                ></path>
                <path
                  d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                  stroke="currentColor"
                ></path>
              </svg>
            </div>

            <div>
              <span className="mx-3  text-darkGrey">Write</span>
            </div>
          </div>

          <div className="md:flex hidden mx-6 ">
            <button className="px-3 py-1.5 bg-mediumgreen rounded-full  text-white">
              Sign up
            </button>
            <button className="mx-3 text-darkGrey">Sign in</button>
          </div>

          <div className="md:mx-0 sm:block flex items-center">
            <span className="sm:hidden">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.1 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.94-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .8-.79l-3.74-3.73A8.05 8.05 0 0 0 11.04 3v.01z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>

            <img
              className="border rounded-full sm:ml-0 ml-8 w-8 h-8"
              src="https://miro.medium.com/fit/c/40/40/1*dmbNkD5D-u45r44go_cf0g.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
