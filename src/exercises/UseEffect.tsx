import { useEffect, useState } from "react";
import { BaseProps } from "../types";



export default function UseEffectDemo({ title }: BaseProps) {
  const [count, setCount] = useState(0);
  const [shouldCount, setShouldCount] = useState(false);



      useEffect(() => {
        if (shouldCount) {
          const i = setInterval(() => {
            setCount((prev) => prev + 1);
          }, 1000);
          return () => {
            clearInterval(i);
          };
        }
      }, [shouldCount]);
  


  return (
    <>
      <h2>{title}</h2>
      <p>{count}</p>
      <button onClick={() => setShouldCount((prev) => !prev)}>
     {shouldCount ? "Stop Count" : "Start Count"}
   </button>
    </>
  );
}


function setCount(arg0: (prev: any) => any) {
  throw new Error("Function not implemented.");
}

