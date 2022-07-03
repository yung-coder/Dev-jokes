import React from "react";

const Jokecont = (props) => {
  const { joke, fetch } = props;
  return (
    <div className="flex justify-center items-center h-72 mt-44 text-white md:mt-72">
      <div className="cont2  text-slate-200 w-fit break-words fixed rounded-lg backdrop-blur-3xl shadow-lg shadow-green-600 md:w-96 md:h-64 ">
        {joke.map((value) => {
          return (
            <div className="p-3 w-72 h-28 break-words md:w-full md:h-full md:text-3xl space-y-1 md:space-y-5">
              <h5>{value.question}</h5>
              <p>{value.punchline}</p>
            </div>
          );
        })}
      </div>
      <button
        onClick={fetch}
        className="  text-slate-300   mt-[200px] ml-[220px] w-fit backdrop-blur-sm shadow-md shadow-green-600 focus:shadow-teal-500 rounded-sm md:mt-[350px] md:ml-[300px] md:w-20 md:font-bold md:backdrop-blur-2xl md:text-white"
      >
        Next
      </button>
    </div>
  );
};

export default Jokecont;
