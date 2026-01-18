"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const handleNavigate = () => {
    const isLoggedIn = false;
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <p className="text-amber-600 font-bold"> This is about page</p>
      <div>
        <Link href={"/about/address"} className="hover:text-amber-600">
          Go to address page
        </Link>
      </div>

      <div>
        <button className="text-red-600  hover:cursor-pointer" onClick={handleNavigate}>
          Go to Address Page (Conditional)
        </button>
      </div>
    </div>
  );
};

export default page;
