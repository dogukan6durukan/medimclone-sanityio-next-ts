export default function Navigation() {
  return (
    <div className="flex justify-center gap-10 p-5 bg-yellow  text-sm font-medium">

        <div className="max-w-7xl flex-1 flex justify-between gap-10">

          <div className="flex items-center flex-start">
            <img src="/logo.png" className="cursour-pointer object-contain w-[200px] h-[40px]"/>
          </div>

          <div className="flex items-center cursor-pointer space-x-5">
            <div className="md:flex hidden">
              <div>Our Story</div>
              <div className="ml-5">Membership</div>
            </div>
            <div className="sm:block hidden">Sign in</div>
            <div className="bg-black text-white py-2 px-4 rounded-full">Get Started</div>

          </div>

        </div>

    </div>
  );
}
