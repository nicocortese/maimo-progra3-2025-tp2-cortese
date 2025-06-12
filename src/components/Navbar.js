import Image from "next/image";
import Link from "next/link";

const Navbar = (props) => {
  return (
    <div className="flex justify-between items-center h-[74px] bg-[#272323]/50 fixed top-0 w-full z-50 px-8">
      <Image
        src={"/assets/logo-web.svg"}
        width={55}
        height={55}
        alt="Logo"
        className="drop-shadow-[0_0_8px_rgba(212,175,55,0.7)]"
      />

      <nav className="flex-grow flex justify-end">
        <ul className="flex items-center gap-7 text-[#D9D9D9] text-[16px] font-semibold">
          <li className="relative h-full flex items-center px-1">
            <Link
              href="/"
              className="hover:text-[#D4AF37] transition-colors duration-200"
            >
              Home
            </Link>
            <div className="absolute bottom-[-2] left-1 w-[45px] h-[3px] bg-[#d4af37]"></div>
          </li>

          <li>
            <Link
              href="/"
              className="hover:text-[#D4AF37] transition-colors duration-200"
            >
              Películas
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="hover:text-[#D4AF37] transition-colors duration-200"
            >
              Series
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="hover:text-[#D4AF37] transition-colors duration-200 flex items-center gap-1"
            >
              Géneros
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="hover:text-[#D4AF37] transition-colors duration-200"
            >
              Nuevos
            </Link>
          </li>
          <li className="h-8 w-[3px] bg-[#6D83EA] mx-1"></li>
          <li>
            <Link
              href="/"
              className="hover:text-[#D4AF37] transition-colors duration-200"
            >
              Mi Lista
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items center gap-7 text-[#d9d9d9] ml-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer hover:text-[#D4AF37] transition-colors duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="#D4AF37"
          stroke="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer hover:text-[#D4AF37] transition-colors duration-200"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
