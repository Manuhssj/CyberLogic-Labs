import { BentoItem } from "./BentoItem";

export const Bento = () => {
  return (
    <>
      <section
        className={`w-full max-w-screen-2xl grid grid-cols-10 auto-rows-[25rem] gap-3 mx-auto p-20`}
      >
        <BentoItem
          title="Nuestros equipo de trabajo"
          description="Nuestro equipo de trabajo está conformado por profesionales, con amplia experiencia en el manejo de la tecnología, con el fin de brindarle un servicio de calidad y confianza."
          className="md:col-span-6 col-span-10 "
          backgroundImage={"./src/assets/img/team.jpg"}
          fontColor="#fff"
        />
        <BentoItem
          title="Atención personalizada"
          className="md:col-span-4 col-span-10"
          backgroundImage={"./src/assets/img/trabajo.jpg"}
          fontColor="#fff"
        />
        <BentoItem
          title="Servicios de marketing"
          className="md:col-span-3 col-span-10 "
          backgroundImage={"./src/assets/img/marketing.jpg"}
          textPosition="start"
          fontColor="#fff"
        />
        <BentoItem
          title="Servicios de diseño web"
          className="md:col-span-3 col-span-10 "
          backgroundImage={"./src/assets/img/code.jpg"}
          textPosition="center"
          fontColor="#fff"
        />
        <BentoItem
          title="Posicionamiento web"
          className="md:col-span-4 col-span-10 "
          backgroundImage={"./src/assets/img/seo.jpg"}
          textPosition="start"
          description="El posicionamiento web es el proceso de mejorar la visibilidad de un sitio web en los resultados orgánicos de los diferentes buscadores. También es frecuente nombrarlo por su título inglés, SEO (Search Engine Optimization)."
          fontColor="#fff"
        />
      </section>
    </>
  );
};
