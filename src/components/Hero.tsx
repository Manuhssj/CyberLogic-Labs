import FacebookSVG from "../assets/svg/FacebookSVG";
import { LogoSVG } from "../assets/svg/LogoSVG";
import TwitterSVG from "../assets/svg/TwitterSVG";
import InstagramSVG from "../assets/svg/InstagramSVG";
export const Hero = () => {
  return (
    <>
      <div className="w-full relative">
        <div className="absolute w-full h-screen z-20 flex justify-center items-center flex-col gap-5">
          <LogoSVG fill="#fff" className="lg:w-[778px] lg:h-[272px] md:w-[600px] md:h-[250px] sm:w-[500px] sm:h-[190px] w-[390px] h-[160px]" />
          {/* <a href="" className="text-white text-2xl bg-stone-700 p-2 rounded-md">
          Agenda aquí
        </a> */}
          <div className="flex gap-3">
            <FacebookSVG width={"30px"} height={"30px"} fill="white" />
            <TwitterSVG width={"30px"} height={"30px"} fill="white" />
            <InstagramSVG width={"30px"} height={"30px"} fill="white" />
          </div>
        </div>
        <div className="absolute bottom-10 left-0 w-full z-20 flex justify-center items-center">
          <div className="flex gap-3">
            <a href="" className="flex gap-2">
              <div className="bg-white w-3 h-3 rounded-full animate-bounce" />
              <div className="bg-white w-3 h-3 rounded-full animate-bounce" />
              <div className="bg-white w-3 h-3 rounded-full animate-bounce" />
            </a>
          </div>
        </div>
        <video
          className="w-full h-screen object-cover object-top"
          src="./video-hero2.mp4"
          autoPlay
          loop
          muted
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 90%, 50% 100%, 50% 100%, 0 90%)",
          }}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
