import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className='Container'>
      <div className='bg-[url(/images/counter_bg.png)] bg-no-repeat bg-cover bg-center relative z-10 grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-0 lg:grid-cols-3 items-center justify-center py-[71px] px-3 rounded-md -mt-[100px]'>
        <div className='relative flex items-center justify-center gap-10'>
          <div>
            <CountUp
              start={-11}
              end={12}
              suffix={'K+'}
              className='font-FiraSans text-3xl leading-[22px] sm:text-[50px] sm:leading-[42px] xl:text-[60px] xl:leading-[52px] text-white font-semibold relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-[20px] before:w-[1px] before:h-8 before:bg-white before:bg-opacity-25'
            />
          </div>
          <p className='font-FiraSans text-[15px] text-white capitalize'>
            Completed Works <br /> with Satisfaction
          </p>
        </div>
        <div className='relative flex items-center justify-center gap-10'>
          <div>
            <CountUp
              start={-11}
              prefix=''
              end={950}
              suffix={'+'}
              className='font-FiraSanstext-3xl leading-[22px] sm:text-[50px] sm:leading-[42px] xl:text-[60px] xl:leading-[52px] text-white font-semibold relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-[20px] before:w-[1px] before:h-8 before:bg-white before:bg-opacity-25'
            />
          </div>
          <div>
            <p className='font-FiraSans text-[15px] text-white capitalize mt-2'>
              Satisfied Active <br /> Customers
            </p>
          </div>
        </div>
        <div className='relative flex items-center justify-center gap-10'>
          <div>
            <CountUp
              start={-11}
              prefix='4.'
              end={9}
              suffix={'*'}
              className='font-FiraSanstext-3xl leading-[22px] sm:text-[50px] sm:leading-[42px] xl:text-[60px] xl:leading-[52px] text-white font-semibold relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-[20px] before:w-[1px] before:h-8 before:bg-white before:bg-opacity-25'
            />
          </div>
          <p className='font-FiraSans text-[15px] text-white capitalize'>
            Average Clients <br /> Ratings
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
