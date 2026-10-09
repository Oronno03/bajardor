import Navtop from "./Navtop";
import Navlinks from "./Navlinks";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <nav className="">
      <div>
        <div className="mx-auto container">
          <Navtop />
        </div>
        <div className="w-full h-px bg-primary/20"></div>
        <div className="mx-auto container">
          <Suspense fallback={"Loading navlinks..."}>
            <Navlinks />
          </Suspense>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
