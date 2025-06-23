"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
   FaBlog,
   FaBriefcase,
   FaFacebook,
   FaGithub,
   FaLinkedin,
   FaServicestack,
   FaTags,
   FaTwitter,
   FaUser,
   FaYoutube
} from "react-icons/fa";
import { SiMaildotcom } from "react-icons/si";

export default function HorizontalTraveling() {
   const [isOpen, setIsOpen] = useState(false);
   const pathname = usePathname();
   const drawerRef = useRef(null);
   const toggleButtonRef = useRef(null);

   const horizontalLinks = [
      { label: "About Me", href: "/about-me", symbol: <FaUser /> },
      { label: "Works", href: "/works", symbol: <FaBriefcase /> },
      {
         label: "Services",
         href: "/services",
         symbol: <FaServicestack />,
         children: [
            { label: "Website Building", href: "/services#Website-Building" },
            {
               label: "Dashboard with Power BI",
               href: "/services#Dashboard-with-Power-BI"
            },
            { label: "Data Analysis", href: "/services#Data-Analysis" }
         ]
      },
      { label: "Pricing", href: "/pricing", symbol: <FaTags /> },
      { label: "Blog", href: "/blog", symbol: <FaBlog /> }
   ];

   const outgoingLinks = [
      { href: "https://www.facebook.com/minhazesiraz", logos: <FaFacebook /> },
      { href: "https://www.youtube.com/@minhazesiraz", logos: <FaYoutube /> },
      { href: "https://x.com/minhazesiraz", logos: <FaTwitter /> },
      {
         href: "https://www.linkedin.com/in/minhazesiraz",
         logos: <FaLinkedin />
      },
      { href: "https://github.com/minhazesiraz", logos: <FaGithub /> }
   ];

   // Close drawer when clicking outside
   useEffect(() => {
      const handleClickOutside = (e) => {
         if (
            isOpen &&
            drawerRef.current &&
            !drawerRef.current.contains(e.target) &&
            toggleButtonRef.current &&
            !toggleButtonRef.current.contains(e.target)
         ) {
            setIsOpen(false);
         }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [isOpen]);

   return (
      <>
         <header className="fixed top-0 left-0 z-30 w-full bg-white dark:bg-slate-900 shadow-lg border-b border-slate-200 dark:border-slate-800">
            <nav className="flex items-center justify-between h-12 mx-auto max-w-7xl px-4">
               <Link href="/" className="text-xl font-semibold">
                  Minhaz E Siraz
               </Link>

               {/* lg - xl - 2xl */}
               <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-300">
                  {/* {horizontalLinks.map(({ label, href, symbol }, i) => (
                     <li key={i}>
                        <Link
                           href={href}
                           className={`flex items-center gap-1 ${
                              pathname === href
                                 ? "text-emerald-500 dark:text-emerald-400"
                                 : "hover:text-emerald-500 dark:hover:text-emerald-400"
                           }`}
                        >
                           {label}
                        </Link>
                     </li>
                  ))} */}
                  {horizontalLinks.map(
                     ({ label, href, symbol, children }, i) => (
                        <li key={i} className="relative group">
                           {!children ? (
                              <Link
                                 href={href}
                                 className={`flex items-center gap-1 ${
                                    pathname === href
                                       ? "text-emerald-500 dark:text-emerald-400"
                                       : "hover:text-emerald-500 dark:hover:text-emerald-400"
                                 }`}
                              >
                                 {label}
                              </Link>
                           ) : (
                              <>
                                 <button className="flex items-center gap-1 hover:text-emerald-500 dark:hover:text-emerald-400 cursor-pointer">
                                    {label}
                                 </button>
                                 <ul className="absolute left-0 top-full w-48 bg-white dark:bg-slate-800 shadow-md rounded border border-slate-200 dark:border-slate-700 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                                    {children.map(({ href, label }, i) => (
                                       <li key={i}>
                                          <Link
                                             href={href}
                                             className="block px-4 py-2 text-sm hover:bg-emerald-50 dark:hover:bg-slate-700"
                                          >
                                             {label}
                                          </Link>
                                       </li>
                                    ))}
                                 </ul>
                              </>
                           )}
                        </li>
                     )
                  )}
                  <Link
                     href="/connect-with-me"
                     className="flex items-center gap-2 border border-emerald-500 text-emerald-500 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-slate-900 rounded px-4 py-1 transition-colors duration-300"
                  >
                     <SiMaildotcom />
                     Connect with Me
                  </Link>
               </ul>

               {/* toggle switch */}
               <button
                  ref={toggleButtonRef}
                  onClick={() => setIsOpen(!isOpen)}
                  aria-expanded={isOpen}
                  aria-label="Toggle navigation"
                  className="relative z-40 order-10 block h-10 w-10 self-center lg:hidden"
               >
                  <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                     <span
                        className={`absolute block h-0.5 w-full transform rounded-full bg-slate-900 transition duration-300 ${
                           isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                        } dark:bg-slate-200`}
                     ></span>
                     <span
                        className={`absolute block h-0.5 w-full transform rounded-full bg-slate-900 transition duration-300 ${
                           isOpen ? "-rotate-45" : "translate-y-0"
                        } dark:bg-slate-200`}
                     ></span>
                     <span
                        className={`absolute block h-0.5 w-1/2 origin-top-left transform rounded-full bg-slate-900 transition-all duration-300 ${
                           isOpen ? "w-0 opacity-0" : "translate-y-2"
                        } dark:bg-slate-200`}
                     ></span>
                  </div>
               </button>
            </nav>
         </header>

         {/* sm - md (drawer) */}
         <aside
            ref={drawerRef}
            // className={`fixed top-0 left-0 z-20 h-full w-2/3 max-w-xs bg-white dark:bg-slate-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
            //    isOpen ? "translate-x-0" : "-translate-x-full"
            // }`}
            className={`fixed top-0 left-0 z-20 h-full w-4/5 max-w-xs bg-white dark:bg-slate-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
               isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
         >
            <div className="py-3 pt-14 flex flex-col gap-6 min-h-screen justify-between">
               <ul className="flex flex-col gap-2 px-3 text-sm font-medium">
                  {horizontalLinks.map(({ label, href, symbol }, i) => (
                     <li key={i}>
                        <Link
                           href={href}
                           onClick={() => setIsOpen(false)}
                           className={`flex items-center gap-2 px-3 py-2 rounded transition-colors duration-200 ${
                              pathname === href
                                 ? "text-emerald-500 bg-emerald-50 dark:text-emerald-400 dark:bg-slate-800"
                                 : "text-slate-700 dark:text-slate-300"
                           } hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-slate-800 dark:hover:text-emerald-400`}
                        >
                           {symbol}
                           {label}
                        </Link>
                     </li>
                  ))}
                  {/* {horizontalLinks.map(
                     ({ label, href, symbol, children }, i) => (
                        <li key={i}>
                           {!children ? (
                              <Link
                                 href={href}
                                 onClick={() => setIsOpen(false)}
                                 className={`flex items-center gap-2 transition-colors ${
                                    pathname === href
                                       ? "text-emerald-500 dark:text-emerald-400"
                                       : "text-slate-700 dark:text-slate-300"
                                 } hover:text-emerald-500 dark:hover:text-emerald-400`}
                              >
                                 {symbol}
                                 {label}
                              </Link>
                           ) : (
                              <div className="space-y-1">
                                 <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
                                    {symbol}
                                    {label}
                                 </div>
                                 <ul className="ml-6 space-y-1 text-sm">
                                    {children.map((item, idx) => (
                                       <li key={idx}>
                                          <Link
                                             href={item.href}
                                             onClick={() => setIsOpen(false)}
                                             className="block hover:text-emerald-500 dark:hover:text-emerald-400"
                                          >
                                             {item.label}
                                          </Link>
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           )}
                        </li>
                     )
                  )} */}

                  <Link
                     href="/connect-with-me"
                     onClick={() => setIsOpen(false)}
                     className="flex items-center gap-2 border border-emerald-500 text-emerald-500 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-slate-900 rounded px-3 py-2 transition-colors duration-300"
                  >
                     <SiMaildotcom />
                     Connect with Me
                  </Link>
               </ul>

               {/* Outgoing  */}
               <div className="mt-8 text-left space-y-3">
                  {/* <p className="text-xs text-slate-500 dark:text-slate-400 italic leading-snug">
                     Success isn&lsquo;t a destination — it&lsquo;s a journey of
                     growth, learning, and persistence.
                  </p> */}
                  <div className="px-3">
                     <div
                        className="w-full rounded border border-slate-600 bg-slate-800 px-4 py-3 text-sm text-slate-200"
                        role="alert"
                     >
                        <p className="text-sky-400">
                           Any fool can write code that a computer can
                           understand. Good programmers write code that humans
                           can understand.{" "}
                        </p>
                        <h3 className="mt-2 font-semibold text-end text-sky-400">
                           — Martin Fowler
                        </h3>
                     </div>
                  </div>
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                  <div className="flex items-center justify-center gap-2 text-xl text-slate-600 dark:text-slate-300">
                     {outgoingLinks.map(({ href, logos }, i) => (
                        <a
                           key={i}
                           href={href}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="hover:text-emerald-500 dark:hover:text-emerald-400"
                        >
                           {logos}
                        </a>
                     ))}
                  </div>
               </div>
            </div>
         </aside>

         {/* Backdrop (click outside to close) */}
         {isOpen && (
            <div
               onClick={() => setIsOpen(false)}
               className="fixed inset-0 z-10 bg-black/50 lg:hidden"
            />
         )}
      </>
   );
}
