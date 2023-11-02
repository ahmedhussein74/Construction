const Qoute = () => {
  return (
    <section className="w-[90%] mx-auto my-[30px] lg:my-[100px] rounded-[20px] min-h-[250px] bg-slate-300 flex flex-col items-center justify-center gap-[30px]">
      <h1 className="text-center font-bold text-[30px] lg:text-[50px]">
        Get a Free Quote Now!
      </h1>
      <div className="w-[90%] md:h-[50px] rounded md:overflow-hidden flex flex-col md:flex-row gap-[10px] md:gap-0 justify-center">
        <input
          type="text"
          placeholder="Your work email"
          className="w-full md:w-[75%] h-[50px] pl-2 outline-none rounded"
        />
        <button className="w-[50%] md:w-[25%] h-[50px] text-white bg-[#263640] mx-auto md:mx-0 rounded">
          Join the waitlist
        </button>
      </div>
    </section>
  );
};

export default Qoute;
