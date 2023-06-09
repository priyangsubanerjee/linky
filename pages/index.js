/* eslint-disable @next/next/no-img-element */
import { Popover } from "@headlessui/react";

export default function Home() {
  return (
    <main className="pb-28">
      <nav className="bg-white lg:px-28 px-6 lg:h-20 h-16 flex items-center">
        <div className="lg:hidden flex items-center mr-5">
          <button>
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
          </button>
        </div>
        <div>
          <h1 className="text-2xl font-serif font-semibold text-zinc-700">
            Linky.<span className="text-indigo-500">io</span>
          </h1>
        </div>
        <ul className="hidden lg:flex items-center space-x-7 ml-16 text-sm text-zinc-700">
          <li>Getting started</li>
          <li>Api docs</li>
          <li>Other tools</li>
          <li>Contact us</li>
        </ul>
        <div className="ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </nav>
      <div className="lg:mt-16 mt-9">
        <div className="lg:px-24 px-5">
          <div className="lg:flex items-center border-b pb-20">
            <div className="lg:w-1/2 lg:px-10 text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-serif font-semibold text-zinc-800 leading-[1.2]">
                Shorten your links
              </h1>
              <p className="text-xs leading-6 lg:text-sm lg:leading-8 text-zinc-700 mt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                fugiat natus voluptatum corporis ipsum, sunt impedit officia
                temporibus quis sequi dicta suscipit cumque quos itaque
                dignissimos. Harum deleniti voluptates mollitia?
              </p>

              <div className="grid grid-cols-3 mt-14">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3645/3645819.png"
                    className="h-9"
                    alt=""
                  />
                  <p className="text-sm mt-4 font-serif">Count clicks</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2928/2928989.png"
                    className="h-10"
                    alt=""
                  />
                  <p className="text-sm mt-4 font-serif">Location stats</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3716/3716676.png"
                    className="h-10"
                    alt=""
                  />
                  <p className="text-sm mt-4 font-serif">Referrer</p>
                </div>
              </div>

              <div className="mt-14 px-6 lg:px-0">
                <button className="bg-zinc-900 font-serif font-medium rounded h-14 w-full lg:w-fit lg:px-16 uppercase tracking-widest text-white shadow-md">
                  Sign Up
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/broken-link-5379692-4503304.png?f=webp"
                alt="hero"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 text-center lg:px-36 px-6">
        <h1 className="text-2xl lg:text-4xl font-serif font-semibold text-zinc-800 leading-[1.2]">
          Just shorten an URL ?
        </h1>
        <p className="text-xs leading-6 lg:text-sm lg:leading-8 text-zinc-700 mt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
        </p>
        <div className="lg:flex space-y-4 lg:space-y-0 items-center justify-center lg:space-x-2 mt-10">
          <div className="h-16 w-full lg:w-[600px] rounded-md overflow-hidden bg-white border">
            <input
              type="text"
              placeholder="Paste your link here"
              className="w-full h-full px-5"
              name=""
              id=""
            />
          </div>
          <button className="h-16 font-serif text-lg w-full lg:w-fit px-8 bg-zinc-800 text-white border rounded-md">
            Shorten
          </button>
        </div>

        <div className="hidden lg:grid grid-cols-1 gap-6 lg:grid-cols-3 mt-14 place-content-center place-items-center lg:w-[500px] lg:mx-auto">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>

            <span className="text-xs">Click count</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>

            <span className="text-xs">Location stats</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>

            <span className="text-xs">User acquisition</span>
          </div>
        </div>
      </div>
    </main>
  );
}
