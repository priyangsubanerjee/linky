/* eslint-disable @next/next/no-img-element */
import { Popover } from "@headlessui/react";

export default function Home() {
  return (
    <main>
      <nav className="h-20 border-b flex items-center lg:px-28 px-6">
        <div className="flex lg:hidden items-center mr-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
        <div>
          <h1 className="font-semibold text-2xl lg:text-3xl font-work-sans text-slate-800">
            Linky
          </h1>
        </div>
        <ul className="hidden lg:flex items-center space-x-7 text-sm font-work-sans ml-16">
          <li>Home</li>
          <li>Generate QR</li>
          <li>API Docs</li>
          <li>Features</li>
        </ul>
        <button className="h-12 px-6 rounded bg-zinc-100 ml-auto font-medium text-zinc-700">
          Sign in
        </button>
      </nav>

      <div className="h-[400px] lg:h-[400px] lg:w-[80%] bg-zinc-100 lg:rounded-lg lg:mx-auto lg:mt-16 relative overflow-hidden">
        <div className="h-96 w-96 border rounded-full absolute right-0 translate-x-1/2"></div>
        <img
          src="https://images.hdqwalls.com/wallpapers/abstract-colorful-4k-zx.jpg"
          className="h-full w-full object-cover absolute inset-0 z-0"
          alt=""
        />
        <div className="absolute inset-0 h-full w-full z-10 bg-black/70 flex flex-col px-4 py-10 lg:p-10">
          <div className="mt-10 lg:mt-16">
            <h1 className="text-2xl lg:text-3xl text-center font-semibold text-white">
              Paste your link to shorten
            </h1>
            <p className="text-center text-white/80 lg:text-sm text-xs leading-7 lg:leading-7 lg:px-36 mt-4">
              Track statistics for your business and projects by monitoring the
              number of hits from your URL with our click counter.
            </p>
            <div className="mt-14 lg:mt-14 flex items-center lg:mx-auto lg:w-[70%] bg-white rounded-md lg:rounded-full overflow-auto">
              <input
                type="text"
                placeholder="Paste your link here"
                className="h-14 w-full px-7 outline-none"
                name=""
                id=""
              />
              <button className="bg-zinc-700 text-sm font-medium text-zinc-50 h-12 mr-1 px-6 rounded-md lg:rounded-full">
                Shorten
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
