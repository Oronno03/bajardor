import Navtop from "./Navtop";
import Navlinks from "./Navlinks";
import { Suspense } from "react";
import NavLinksSkeleton from "./NavlinksSkeleton";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div>
        <div className="mx-auto container">
          <Navtop />
        </div>
        <div className="w-full h-px bg-primary/10"></div>
        <div className="mx-auto container">
          <Suspense fallback={<NavLinksSkeleton />}>
            <Navlinks />
          </Suspense>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
