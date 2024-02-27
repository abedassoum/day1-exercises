import { useEffect, useState } from "react";
import { BaseProps } from "../types";


/*
Exercise
part one --> provide the useEffect without a dependency array and clearInterval and see what happens
part two --> provide the useEffect with an empty dependency array and see what happens
part three --> add an return function  to clear the interval ()
part four --> Add a button to start and stop the interval via a boolean state variable to see what happens with values in the dependency array
*/
export default function UseEffectDemo({ title }: BaseProps) {
  const [count, setCount] = useState(0);


  useEffect(() => {
    const i = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, );


  return (
    <>
      <h2>{title}</h2>
      <p>{count}</p>
    </>
  );
}


