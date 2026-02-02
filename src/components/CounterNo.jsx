"use client";
import CountUp from "react-countup";

function CounterNo({ labelsize, numbersize, gapadd, nostats = [] }) {
  return (
    <div className={`flex flex-wrap ${gapadd ? "" : "gap-3 xl:gap-8 lg:gap-5"} text-center justify-between mt-6`}>
      {nostats.map((item, index) => (
        <div key={index} className="counterdiv">

            {item.icon && (
            <div
              className={`mx-auto w-15 h-15 p-3 ${item.IconbgColor || "bg-[#F2F2F299]"} ${
                item.roundcorner || "rounded-full"} flex items-center justify-center mb-4`}
            >
              {item.icon}
            </div>
          )}

            
            
          <span className={`text-2xl textblue7 font-bold ${numbersize}`}>
            <CountUp 
                end={item.Novalue} 
                duration={2} 
                decimals={item.Novalue % 1 !== 0 ? 1 : 0}
                separator=","
                enableScrollSpy={true}
                scrollSpyDelay={300}
            />
             {item.indicator && <span className="">{item.indicator}</span>} 
          </span>
          <p className={`subtext ${labelsize}`}>{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default CounterNo;