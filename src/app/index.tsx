import { useState } from "react";
import "./index.css";

export default function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center p-16 ">
        <h1 className="text-4xl font-black ">Hello World!</h1>
        <h2 className="m-4 w-fit rounded-xl bg-gray-200 p-4">{count}</h2>
        <button
          className="btn mb-2 "
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add
        </button>
        <button
          className="btn"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Subtract
        </button>
        <hr className="my-8 w-full" />
        <button
          className="btn"
          onClick={async () => {
            //@ts-expect-error electronapi
            const x = await window.electronapi.doThing();
            alert(x);
          }}
        >
          Click Me!
        </button>
      </main>
    </>
  );
}
