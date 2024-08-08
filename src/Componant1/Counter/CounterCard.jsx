/* eslint-disable react/prop-types */
import CountUp from "react-countup";

const CounterCard = ({ counterNumber, counterDesc, counterSuffex }) => {
  return (
    <div className="text-center">
      <div className="mt-3">
        <CountUp
          start={-11}
          end={counterNumber}
          suffix={counterSuffex}
          className="font-FiraSans text-[56px] text-white font-bold"
        />
      </div>
      <p className="font-FiraSans text-[15px] text-TextColor-0 uppercase">
        {counterDesc}
      </p>
    </div>
  );
};

export default CounterCard;
