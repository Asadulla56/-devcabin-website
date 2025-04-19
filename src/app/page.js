import Image from "next/image";

export default function Home() {
  return (
   <>
   <div className="flex flex-col justify-center items-center h-screen gap-4">
    <h1 className="text-4xl font-bold text-blue-300">This is our DevCabin</h1>
    <p>This is a cabin for developers</p>
    <button className="bg-blue-300 text-white px-4 py-2 rounded-md">developing...</button>
   </div>

   </>
  );
}
