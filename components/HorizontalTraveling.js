"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
   FaBlog,
   FaBriefcase,
   FaEnvelope,
   FaHome,
   FaServicestack,
   FaTags,
   FaUser
} from "react-icons/fa";

export default function HorizontalTraveling() {
   const [isOpen, setIsOpen] = useState(false);
   const pathname = usePathname();
   const drawerRef = useRef(null);
   const toggleButtonRef = useRef(null);

   const links = [
      { label: "HOME", href: "/", symbol: <FaHome /> },
      { label: "ABOUT ME", href: "/about-me", symbol: <FaUser /> },
      { label: "WORKS", href: "/works", symbol: <FaBriefcase /> },
      { label: "SERVICES", href: "/services", symbol: <FaServicestack /> },
      { label: "PRICING", href: "/pricing", symbol: <FaTags /> },
      { label: "BLOG", href: "/blog", symbol: <FaBlog /> }
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
            <nav className="flex items-center justify-between h-16 px-6 lg:px-8">
               <Link href="/" className="text-xl font-semibold">
                  Minhaz E Siraz
               </Link>

               {/* lg - xl - 2xl */}
               <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-300">
                  {links.map(({ label, href, symbol }, i) => (
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
                  ))}
                  <Link
                     href="/contact-me"
                     className="flex items-center gap-2 border border-emerald-500 text-emerald-500 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-slate-900 rounded px-4 py-2 transition-colors duration-300"
                  >
                     <FaEnvelope />
                     CONTACT ME
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
         <div
            ref={drawerRef}
            className={`fixed top-0 left-0 z-20 h-full w-[60%] max-w-xs bg-white dark:bg-slate-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
               isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
         >
            <div className="px-6 py-4 mt-16">
               <ul className="flex flex-col gap-4 text-sm font-medium">
                  {links.map(({ label, href, symbol }, i) => (
                     <li key={i}>
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
                     </li>
                  ))}
                  <Link
                     href="/contact-me"
                     onClick={() => setIsOpen(false)}
                     className="flex items-center gap-2 border border-emerald-500 text-emerald-500 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-slate-900 rounded px-4 py-2 transition-colors duration-300"
                  >
                     <FaEnvelope />
                     CONTACT ME
                  </Link>
               </ul>
            </div>
         </div>

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
