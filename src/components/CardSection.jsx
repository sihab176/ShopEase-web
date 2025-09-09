import React from "react";
import Cards from "./Cards";

const CardSection = () => {
    const AllData=[1,2,3,4,5,6,7,8]
  return (
    <div>
      <section className="grid grid-cols-4 gap-8 my-20 ">
       {
        AllData.map(data=>  <Cards key={data}  data={data}/>)
       }
      </section>
    </div>
  );
};

export default CardSection;
