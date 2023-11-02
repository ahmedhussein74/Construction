import pro1 from "../images/pro1.png";
import pro2 from "../images/pro2.png";
import pro3 from "../images/pro3.png";

const Projects = () => {
  return (
    <section className="px-[5%] py-[30px] lg:py-[50px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-[30px]">
      <div className="w-[300px] flex flex-col gap-[10px]">
        <img src={pro1} className="w-full" />
        <h2 className="font-bold text-[18px]">
          Canadian Construction Branches.
        </h2>
        <p>
          We'll Supply You With Materials To Create Your Dream Property From
          Foundation To Finish. Call To Get Started!
        </p>
        <span className="text-[#FF9900]">
          Read More<i className="fa-solid fa-arrow-right ml-2"></i>
        </span>
      </div>
      <div className="w-[300px] flex flex-col gap-[10px]">
        <img src={pro2} className="w-full" />
        <h2 className="font-bold text-[18px]">
          Australian Construction Branches.
        </h2>
        <p>
          We'll Supply You With Materials To Create Your Dream Property From
          Foundation To Finish. Call To Get Started!
        </p>
        <span className="text-[#FF9900]">
          Read More<i className="fa-solid fa-arrow-right ml-2"></i>
        </span>
      </div>
      <div className="w-[300px] flex flex-col gap-[10px]">
        <img src={pro3} className="w-full" />
        <h2 className="font-bold text-[18px]">
          Brazilian Construction Branches.
        </h2>
        <p>
          We'll Supply You With Materials To Create Your Dream Property From
          Foundation To Finish. Call To Get Started!
        </p>
        <span className="text-[#FF9900]">
          Read More<i className="fa-solid fa-arrow-right ml-2"></i>
        </span>
      </div>
    </section>
  );
};

export default Projects;
