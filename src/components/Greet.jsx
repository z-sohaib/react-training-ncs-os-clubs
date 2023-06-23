/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function Greet({ person }) {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  useEffect(() => {
    if (person) {
      console.log("use effect fired from a greet component of " + person.name);
    } else {
      console.log("use effect fired from a greet component of a stranger");
    }
  }, [countTwo]);
  return (
    <div className="p-8 border border-black rounede-xl">
      <p className="text-center text-xl">
        {person
          ? `Hello ${person.name}. You are ${person.age} years old.`
          : "Hello Stranger"}
      </p>

      <div className="flex flex-col gap-y-4">
        <div className="flex justify-center place-items-center">
          <button
            onClick={() => setCountOne(countOne + 1)}
            className="bg-green-500 text-white text-xl rounded-xl py-2 px-4"
          >
            You pressed the counter one {countOne} times
          </button>
        </div>
        <div className="flex justify-center place-items-center">
          <button
            onClick={() => setCountTwo(countTwo + 1)}
            className="bg-red-500 text-white text-xl rounded-xl py-2 px-4"
          >
            You pressed the counter two {countTwo} times
          </button>
        </div>
      </div>
    </div>
  );
}
export default Greet;
