"use client"
import List from "./components/list";


export default function Home() {

  return (
    <main  className="flex justify-center items-center w-screen h-screen">
   {/* <h1 className="text-gray-900 text-xl">Homee</h1> */}

    <div className="p-5 flex items-center justify-center"><List/></div>
    </main>
  );
}
