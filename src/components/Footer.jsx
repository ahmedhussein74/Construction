import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="px-[5%] py-[20px] flex flex-wrap justify-center md:justify-around gap-[30px] bg-[#263640]">
        <ul className="w-full md:w-fit text-center text-white">
          <li className="font-bold mb-[5px] text-[20px]">Policy</li>
          <li>Pricing</li>
          <li>Security</li>
          <li>Our Team</li>
          <li>Objectives</li>
          <li>Values</li>
        </ul>
        <ul className="w-full md:w-fit text-center text-white">
          <li className="font-bold mb-[5px] text-[20px]">Pages</li>
          <li>About us</li>
          <li>Our Projects</li>
          <li>Our Team</li>
          <li>Contact us</li>
          <li>Services</li>
        </ul>
        <ul className="w-full md:w-fit text-center text-white">
          <li className="font-bold mb-[5px] text-[20px]">Services</li>
          <li>Kitchen</li>
          <li>Living Room</li>
          <li>Bathroom</li>
          <li>Dinning Hall</li>
          <li>Bedroom</li>
        </ul>
        <ul className="w-full md:w-fit text-center text-white">
          <li className="font-bold mb-[5px] text-[20px]">Contact</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className="bg-[#263640] text-white flex justify-center items-center py-[10px] lg:py-[20px] gap-[10px]">
        <p className="flex items-center">
          <img src={logo} className="w-[20px] h-[20px]" />
          ISTAIX
        </p>
        <p>Copyright © 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
