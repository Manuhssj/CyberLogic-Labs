import FacebookSVG from "../assets/svg/FacebookSVG";
import InstagramSVG from "../assets/svg/InstagramSVG";
import TwitterSVG from "../assets/svg/TwitterSVG";
import "animate.css";

export const Navbar = () => {
  return (
    <>
      <nav className="text-white w-full sticky py-5">
        <div className="flex items-center justify-between w-4/6 mx-auto">
          <div className="text-2xl font-bold">Logo</div>
          <ul className="flex gap-3 items-center">
            <li className="p-3 transition duration-300 ease-in-out hover:border-b-2 hover:border-white border-b-2 border-[#2C2D32] animate__animated animate__fadeInLeft">
              <a href="">Home</a>
            </li>
            <li className="p-3 transition duration-300 ease-in-out hover:border-b-2 hover:border-white border-b-2 border-[#2C2D32] animate__animated animate__fadeInLeft">
              <a href="">About</a>
            </li>
            <li className="p-3 transition duration-300 ease-in-out hover:border-b-2 hover:border-white border-b-2 border-[#2C2D32] animate__animated animate__fadeInLeft">
              <a href="">Contact</a>
            </li>
            <div className="border-l-2 flex gap-x-3 p-3">
              <FacebookSVG width={"20px"} height={"20px"} fill="white" />
              <TwitterSVG width={"20px"} height={"20px"} fill="white" />
              <InstagramSVG width={"20px"} height={"20px"} fill="white" />
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};
