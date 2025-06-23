"use client";

import Copyright from "@/components/Copyright";
import HorizontalTraveling from "@/components/HorizontalTraveling";

export default function MainLayout({ children }) {
   return (
      <>
         <HorizontalTraveling />
         <main className="min-h-screen mx-auto max-w-7xl px-4 pt-20 pb-16">
            {children}
         </main>
         <Copyright />
      </>
   );
}
