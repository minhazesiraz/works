// "use client";

import HorizontalTraveling from "@/components/HorizontalTraveling";

export default function MainLayout({ children }) {
   return (
      <>
         <HorizontalTraveling/>
         <main className="min-h-screen px-4 pt-20 pb-16">{children}</main>
      </>
   );
}
