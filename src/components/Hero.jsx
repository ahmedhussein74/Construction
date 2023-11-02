import bg from "../images/hero.png";

const Hero = () => {
  return (
    <section
      style={{
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen px-[5%] flex flex-col justify-center gap-[30px]"
    >
      <h1 className="text-[#263640] font-bold text-[30px] lg:text-[60px]">
        Diversified Services.
        <br /> Unvarying Quality.
      </h1>
      <p className="w-full md:w-[400px] text-[#7591A3]">
        We designed 100+ commercial & residential projects in UAS & across the
        globe. Providing Design & 3D Support to Architectural Firms Globally.
        Award-Winning Company. 17+ Years Of Experience.
      </p>
      <button className="w-[150px] h-[40px] text-white text-[16px] rounded bg-[#263640] uppercase">
        see our work
      </button>
    </section>
  );
};

export default Hero;
