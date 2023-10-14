import React, { useState } from "react";
import Logo from "../../public/images/logo.png";
import Image from "next/image";
import CartBar from "./CartBar";
import SearchBar from "@/pages/components/SearchBar";
import Link from "next/link";
import UserDropdown from "../components/UserDropdown";
import SlideBar from "../components/SlideBar";

const Navbar2 = () => {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearchResultsChange = (results: string[]) => {
    setSearchResults(results);
  };

  const exampleResults = ["Wynik 1", "Wynik 2", "Wynik 3"];

  type SlideBarName = 'slideBar1' | 'slideBar2';

  const [activeSlideBar, setActiveSlideBar] = useState<SlideBarName | null>(null);

  const toggleSlideBar = (barName: SlideBarName) => {
    setActiveSlideBar(activeSlideBar === barName ? null : barName);
  };
  return (
    <header className="bg-white md:pb-0 pb-2 fixed z-30 top-0 w-screen left-0">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            input.hide-clear[type=search]::-ms-clear,
            input.hide-clear[type=search]::-ms-reveal {
              display: none;
              width: 0;
              height: 0;
            }

            input.hide-clear[type="search"]::-webkit-search-decoration,
            input.hide-clear[type="search"]::-webkit-search-cancel-button,
            input.hide-clear[type="search"]::-webkit-search-results-button,
            input.hide-clear[type="search"]::-webkit-search-results-decoration {
              display: none;
            }
          `,
        }}
      />
      <nav className="max-w-[96rem] mx-auto flex items-center md:justify-end justify-between p-2 max-h-16">
        <div>
          <Link href="/">
            <Image src={Logo} alt="logo" className="max-h-14 w-auto" />
          </Link>
        </div>

        <SearchBar visibility="md:block hidden " />

        <div>
          <ul className="flex text-lg justify-end">
            <li className="sm:pr-8 pr-4">
              <a href="#" className="hover:text-green-600 duration-200" onClick={() => toggleSlideBar('slideBar2')}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <p className="text-sm">Ulubione</p>
              </a>
            </li>
            <li className="sm:pr-8 pr-4">
              <a
                href="#"
                className="hover:text-green-600 duration-200"
                onClick={() => toggleSlideBar('slideBar1')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <p className="text-sm">Koszyk</p>
              </a>
            </li>
            <li className="sm:pr-8 pr-4">
              <UserDropdown />
            </li>
          </ul>
        </div>
      </nav>

      <SearchBar visibility="md:hidden " />

      <SlideBar isOpen={activeSlideBar === 'slideBar1'} onClose={() => toggleSlideBar('slideBar1')} title="Koszyk" data="SlideBar1 Data" />
      <SlideBar isOpen={activeSlideBar === 'slideBar2'} onClose={() => toggleSlideBar('slideBar2')} title="Ulubione" data="SlideBar2 Data" />
    </header>
  );
};

export default Navbar2;
