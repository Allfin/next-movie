"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre") || "fetchTrending";

  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${genre === param ? "underline underline-offset-8 decoration-4 decoration-amber-400 rounded-lg" : ""}`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};
export default NavbarItem;
