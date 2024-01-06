interface BentoItemProps {
  title?: string;
  description?: string;
  className?: string;
  backgroundImage?: string;
  fontColor?: string;
  textPosition?: "start" | "end" | "center";
}

export const BentoItem = ({
  title,
  description,
  className,
  backgroundImage,
  fontColor = "#fff",
  textPosition = "start",
}: BentoItemProps) => {
  return (
    <>
      <article
        className={`relative backdrop-blur-md border border-black/5 rounded-3xl ${className} shadow-inner`}
      >
        {backgroundImage && (
          <div
            className="absolute left-0 bottom-0 w-full h-full opacity-60 bg-center bg-cover bg-no-repeat -z-10 rounded-xl"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
        )}
        <div
          className={`flex flex-col p-6 gap-3 h-full justify-end text-balance text-[${fontColor}] text-${textPosition}`}
        >
          <h2 className="text-3xl font-extrabold">
            {title}
          </h2>
          <h3 className="text-xl hidden md:block">{description}</h3>
        </div>
      </article>
    </>
  );
};
