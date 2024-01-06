import FacebookSVG from "../assets/svg/FacebookSVG";
import TwitterSVG from "../assets/svg/TwitterSVG";
import InstagramSVG from "../assets/svg/InstagramSVG";
import CallSVG from "../assets/svg/CallSVG";
export const Hero = () => {
  return (
    <>
      <div className="w-full relative">
        <div className="absolute w-full h-screen z-10 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="absolute w-full h-screen z-20 flex justify-center items-center flex-col gap-5">
          <h1 className="text-center text-white font-semibold text-5xl">
            CyberLogic <br /> Labs
          </h1>
          <div className="flex gap-3">
            <a href="#">
              <FacebookSVG
                width={"30px"}
                height={"30px"}
                fill="white"
                className="animate-bounce"
              />
            </a>
            <a href="#">
              <TwitterSVG
                width={"30px"}
                height={"30px"}
                fill="white"
                className="animate-bounce"
              />
            </a>
            <a href="#">
              <InstagramSVG
                width={"30px"}
                height={"30px"}
                fill="white"
                className="animate-bounce"
              />
            </a>
            <a href="#">
              <CallSVG
                width={"30px"}
                height={"30px"}
                fill="white"
                className="animate-bounce"
              />
            </a>
          </div>
          {/* <a
            href=""
            className="text-white text-2xl bg-stone-700 p-2 rounded-md"
          >
            Agenda aquí
          </a> */}
        </div>

        <video
          className="w-full h-screen object-cover object-top"
          src="./team-hero.mp4"
          autoPlay
          loop
          muted
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 90%, 50% 100%, 50% 100%, 0 90%)",
          }}
        />
      </div>
    </>
  );
};
