/* eslint-disable @next/next/no-img-element */
import { Popover } from "@headlessui/react";

export default function Home() {
  return (
    <main>
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
                    src="https://cdn-icons-png.flaticon.com/512/522/522579.png"
                    className="h-9"
                    alt=""
                  />
                  <p className="text-sm mt-4 font-serif">Referrer</p>
                </div>
              </div>

              <div className="mt-14">
                <button className="bg-zinc-900 font-serif font-medium rounded h-14 w-full uppercase tracking-widest text-white shadow-md">
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
    </main>
  );
}
