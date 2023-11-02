import bg from '../images/build.png'

const Build = () => {
  return (
    <section className='px-[5%] pb-[30px] lg:pb-[50px]'>
      <h1 className="font-bold text-center text-[18px] lg:text-[40px]">
        Let us help you build.
      </h1>
      <p className='text-center'>
        Over 17 years of experience in creating spaces that positively impact
        people’s lives
      </p>
      <img src={bg} className="w-full min-h-[250px] rounded-[20px] mt-[30px] lg:mt-[50px]" />
    </section>
  );
}

export default Build