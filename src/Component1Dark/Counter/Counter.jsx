import CounterCard from "./CounterCard";
import counterShape from "/images/star_icon.png";

const counterData = [
  {
    id: 1,
    counterShape: counterShape,
    counterNumber: 12,
    counterDesc: "Total Projects Complated",
    counterSuffex: "K+",
  },
  {
    id: 2,
    counterShape: counterShape,
    counterNumber: 950,
    counterDesc: "SATIFIED ACTIVE CUSTOMERS",
    counterSuffex: "+",
  },
  {
    id: 3,
    counterNumber: 4,
    counterDesc: "AVERAGE CLIENTS RATINGS",
    counterSuffex: ".7*",
  },
];

const Counter = () => {
  return (
    <section className='pt-[110px] pb-[94px] bg-[#093c3d] bg-no-repeat bg-cover bg-center'>
      <div className='Container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7 xl:gap-10 lg:grid-cols-3 items-center justify-center'>
          {counterData.map(
            ({
              id,
              counterShape,
              counterNumber,
              counterDesc,
              counterSuffex,
            }) => {
              return (
                <div key={id}>
                  <CounterCard
                    counterShape={counterShape}
                    counterNumber={counterNumber}
                    counterDesc={counterDesc}
                    counterSuffex={counterSuffex}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Counter;
