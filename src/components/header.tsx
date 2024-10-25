import Link from "next/link";

const Header = () => {
  return (
    <div className=" sticky top-0 z-10 h-14 flex items-center bg-white bg-opacity-80 backdrop-blur-md">
      <nav className="container mx-auto flex justify-between items-center h-14">
        <Link
          href="/"
          className="text-2xl font-extralight"
        >
          Gao Shengyu
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className="hover:text-blue-600"
            >
              首页
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-blue-600"
            >
              博客
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-600"
            >
              关于
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
