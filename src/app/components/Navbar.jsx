import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-center">
        <ul className="flex justify-between w-1/2">
          <Link href={"/"}>
            
            <li className="hover:text-amber-600">Home</li>
          </Link>
          <Link href={"/about"}>
            <li className="hover:text-amber-600">About</li>
          </Link>
          <Link href={"/resources"}>
            <li className="hover:text-amber-600">Resources</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
