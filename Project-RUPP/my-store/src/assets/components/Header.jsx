/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
"use client";

import { Fragment, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import HeaderSlide from "./Category/HeaderSlide";

const navigation = {
  categories: [
    {
      id: "Men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://i.pinimg.com/1200x/48/3d/ec/483decade38b1dc5119677530f9a23ed.jpg",
          imageAlt:
            " Nike Men's Pegasus Plus Running Shoes.",
        },
        {
          name: "Super Discount",
          href: "#",
          imageSrc:
            "https://i.pinimg.com/1200x/f5/ae/de/f5aedea64f583baa63995983c26ad490.jpg",
          imageAlt:
            "Super Discount poster",
        },
      ],
      sections: [
        {
          id: "Nike",
          name: "Nike",
          items: [
            { name: "All Shoes", href: "#" },
            { name: "Jordan", href: "#" },
            { name: "Dunk", href: "#" },
            { name: "Air Force", href: "#" },
            { name: "Air Max", href: "#" },
            { name: "Nike SB", href: "#" },
            { name: "Running", href: "#"},
            { name: "Sandals & Slides", href: "#" },
            { name: "Football" },
          ],
        },
        {
          id: "New Balance",
          name: "New Balance",
          items: [
            { name: "All Shoes", href: "#" },
            { name: "550", href: "#" },
            { name: "327", href: "#" },
            { name: "574", href: "#" },
            { name: "530", href: "#" },
            { name: "990", href: "#" },
            { name: "327", href: "#"},
            { name: "Running", href: "#"},
            { name: "Sandals & Slides", href: "#" },
          ],
        },
        {
          id: "Adidas",
          name: "Adidas",
          items: [
            { name: "All Shoes", href: "#" },
            { name: "Ultraboost", href: "#" },
            { name: "Samba", href: "#" },
            { name: "Campus", href: "#" },
            { name: "Forum", href: "" },
            { name: "Gazelle", href: "#" },
            { name: "Cortez", href: "#" },
            { name: "Colombia", href: "#" },
            { name: "Slider", href: "#" },
            { name: "Football" },
          ],
        },
      ],
    },
    {
      id: "Women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://i.pinimg.com/1200x/2e/42/c4/2e42c40628dccedd714f0adc8c76b2ff.jpg",
          imageAlt:
            "adidas FORUM.",
        },
      ],
      sections: [
        {
          id: "Nike",
          name: "Nike",
          items: [
            { name: "All Shoes", href: "#" },
            { name: "Jordan", href: "#" },
            { name: "Dunk", href: "#" },
            { name: "Air Force", href: "#" },
            { name: "Air Max", href: "#" },
            { name: "Nike SB", href: "#" },
            { name: "Running", href: "#"},
            { name: "Sandals & Slides", href: "#" },
          ],
        },
        {
          id: "New Balance",
          name: "New Balance",
          items: [
            { name: "All Shoes", href: "#" },
            { name: "550", href: "#" },
            { name: "327", href: "#" },
            { name: "574", href: "#" },
            { name: "530", href: "#" },
            { name: "990", href: "#" },
            { name: "327", href: "#"},
            { name: "Running", href: "#"},
            { name: "Sandals & Slides", href: "#" },
          ],
        },
        {
          id: "Adidas",
          name: "Adidas",
          items: [
            { name: "All Shoes", href: "#" },
            { name: "Ultraboost", href: "#" },
            { name: "Samba", href: "#" },
            { name: "Forum", href: "#"},
            { name: "Campus", href: "#" },
            { name: "Gazelle", href: "#" },
            { name: "Avryn_X", href: "#" },
            { name: "Sandals & Slides", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        {/* Overlay with fade animation */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed  bg-black bg-opacity-25"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Dialog */}
        <div className="fixed w-[320px] top-0 right-0 z-40 flex">
          <AnimatePresence>
            {open && (
              <motion.div
                className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
              >
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>

                {/* Links */}
                <TabGroup className="mt-2">
                  <div className="border-b border-gray-200">
                    <TabList className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </TabList>
                  </div>
                  <TabPanels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <TabPanel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  alt={item.imageAlt}
                                  src={item.imageSrc}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 z-10"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </TabPanel>
                    ))}
                  </TabPanels>
                </TabGroup>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Dialog>

      <header className=" fixed-top bg-white">
        <div
          className={`h-14 bg-[#f7f7f7] flex items-center justify-center md:px-6 lg:px-8 ${
            isScrolled ? "hidden" : "block"
          }`}
        >
          <HeaderSlide />
        </div>

        <nav
          aria-label="Top"
          className="mx-auto max-sm:px-2 sm:px-6 md:px-8 sticky top-0 z-10"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 flex-row items-center justify-center">
              {/* Logo */}
              <div className=" p-0 text-nowrap sm:p-2">
                <a href="#">
                  <span className=" font-DM-Serif tracking-[2px] text-[12px] pr-2 sm:pl-2 sm:text-[20px]">
                    NC-VISAL
                  </span>
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden flex-1 lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full justify-center space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="relative z-10 -mb-px flex items-center outline-none border-b-2 border-transparent pt-px text-sm font-medium text-gray-800 transition-colors duration-200 ease-out hover:black data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                          {category.name}
                        </PopoverButton>
                      </div>

                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 top-1/2 bg-white shadow"
                        />

                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div
                                    key={item.name}
                                    className="group relative text-base sm:text-sm"
                                  >
                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                      <img
                                        alt={item.imageAlt}
                                        src={item.imageSrc}
                                        className="object-cover object-center"
                                      />
                                    </div>
                                    <a
                                      href={item.href}
                                      className="mt-6 block font-medium text-gray-900"
                                    >
                                      <span
                                        aria-hidden="true"
                                        className="absolute inset-0 z-10"
                                      />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p
                                      id={`${section.name}-heading`}
                                      className="font-medium text-gray-900"
                                    >
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a
                                            href={item.href}
                                            className="hover:text-gray-800"
                                          >
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 data-[hover]:border-indigo-600 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="flex items-center justify-end flex-1 lg:max-w-sm">
                {/* <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </a>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </a>
                </div> */}

                {/* <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      alt=""
                      src="https://tailwindui.com/plus/img/flags/flag-canada.svg"
                      className="block h-auto w-5 shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}

                {/* Search */}
                <div className="flex flex-row border bottom-1 items-center flex-1 px-2 py-2 bg-slate-50 rounded-md  lg:ml-6">
                  <MagnifyingGlassIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-400 group-hover:text-gray-500 cursor-pointer"
                  />
                  <input
                    className=" outline-none border-none bg-transparent pl-1"
                    type="text"
                    //   onChange={handleInputChange}
                    //   value={query}
                    placeholder="search..."
                  />
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className=" h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-gray-800 group-hover:text-gray-500"
                    />
                    {/* <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span> */}
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
                {/* mobile menu button */}
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="relative rounded-md bg-white pl-2 sm:p-2 text-gray-400 lg:hidden"
                >
                  <span className="absolute" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className=" h-5 w-5 sm:h-6 sm:w-6 mt-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
