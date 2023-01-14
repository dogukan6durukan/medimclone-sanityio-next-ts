export default function Banner() {
  return (
    <div className="h-max-[10rem] py-8 flex items-center border-y border-black justify-center bg-yellow">
      <div className="max-w-7xl flex-1 flex items-center justify-between">
        <div className="space-y-5 px-10 flex-[3]">
          <h1 className="max-w-xl md:text-[6rem] text-[3rem] header">Stay Curious.</h1>

          <h3 className="md:text-2xl text-lg">
            Discover stories, thinking, and expertise from writers on any topic.
          </h3>

          <button className="bg-black text-white py-2 px-4 rounded-full shrink-0">
            Start Reading.
          </button>
        </div>

        <div className="lg:block hidden">
          <img
            src="banner.png"
            className="w-[500px] h-[400px] md:inline-flex object-contain flex-1"
          />
        </div>
      </div>
    </div>
  );
}
