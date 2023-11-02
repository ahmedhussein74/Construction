import r1 from '../images/r1.svg'
import r2 from '../images/r2.svg'
import r3 from '../images/r3.svg'
import r4 from '../images/r4.svg'
import r5 from '../images/r5.svg'

const Review = () => {
  return (
    <section className="px-[5%] py-[30px] lg:py-[50px] bg-[#E6F0F4]">
      <h1 className="font-bold text-center text-[20px] lg:text-[40px]">
        Few Words From Our Clients
      </h1>
      <div className="w-full lg:w-[60%] mt-[30px] mx-auto rounded-[20px] bg-white p-[10px] lg:p-[30px] flex">
        <i className="fa-solid fa-quote-left text-[20px]"></i>
        <p className="text-center">
          We had an incredible experience working with them and were impressed
          they made such a big difference in only three weeks. Our team is so
          grateful for the wonderful improvements they made and their ability to
          get familiar with the product concept so quickly. It acted as a
          catalyst to take our design to the next level and get more eyes on our
          product.
        </p>
      </div>
      <div className='w-full lg:w-[60%] mx-auto mt-[30px] flex justify-around'>
        <img src={r1} className="" />
        <img src={r2} className="" />
        <img src={r3} className="" />
        <img src={r4} className="" />
        <img src={r5} className="" />
      </div>
    </section>
  );
}

export default Review