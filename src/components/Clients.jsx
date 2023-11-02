import spark from "../images/spark.svg";
import logaz from "../images/logaz.svg";
import spona from "../images/spona.svg";
import olla from "../images/olla.svg";
import p1 from "../images/p1.svg";
import p2 from "../images/p2.svg";
import b1 from "../images/b1.svg";
import m1 from "../images/m1.svg";

const Clients = () => {
  return (
    <section className="px-[5%] pb-[30px] lg:pb-[100px] text-[263640]">
      <div className="py-[30px] lg:py-[100px] flex flex-wrap justify-center lg:justify-between gap-[30px]">
        <div className="w-full md:w-[400px]">
          <h2 className="font-bold text-[30px] md:text-[40px]">
            Over a Decade of <br /> Achievements
          </h2>
          <p>With our super powers we have reached this.</p>
        </div>
        <div className="flex flex-wrap w-full md:w-[450px] justify-between gap-[30px]">
          <div className="w-full md:w-[200px] flex text-[#263640] gap-[10px]">
            <img src={p1} className="w-[50px] h-[50px]" />
            <div>
              <h3 className="font-bold text-[18px]">10,000+</h3>
              <p>Satisfied Clients</p>
            </div>
          </div>
          <div className="w-full md:w-[200px] flex text-[#263640] gap-[10px]">
            <img src={p2} className="w-[50px] h-[50px]" />
            <div>
              <h3 className="font-bold text-[18px]">2 Milion</h3>
              <p>Skilled Workers</p>
            </div>
          </div>
          <div className="w-full md:w-[200px] flex text-[#263640] gap-[10px]">
            <img src={b1} className="w-[50px] h-[50px]" />
            <div>
              <h3 className="font-bold text-[18px]">500+</h3>
              <p>Projects Completed</p>
            </div>
          </div>
          <div className="w-full md:w-[200px] flex text-[#263640] gap-[10px]">
            <img src={m1} className="w-[50px] h-[50px]" />
            <div>
              <h3 className="font-bold text-[18px]">140</h3>
              <p>Countries</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="font-bold text-center text-[20px] md:text-[30px]">
        OUR TRUSTED CLIENTS
      </h2>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-[40px] mt-[30px] lg:mt-[50px]">
        <div className="flex items-center gap-[10px] font-bold text-[18px]">
          <img src={spark} className="" />
          <span className="tracking-[15px]">SPARK</span>
        </div>
        <div className="flex items-center gap-[10px] font-bold text-[18px]">
          <img src={logaz} className="" />
          <span className="tracking-[15px]">LOGAZ</span>
        </div>
        <div className="flex items-center gap-[10px] font-bold text-[18px]">
          <img src={spona} className="" />
          <span className="tracking-[15px]">SPONA</span>
        </div>
        <div className="flex items-center gap-[10px] font-bold text-[18px]">
          <img src={olla} className="" />
          <span className="tracking-[15px]">OLLA</span>
        </div>
      </div>
    </section>
  );
};

export default Clients;
