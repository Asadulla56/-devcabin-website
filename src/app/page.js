import Image from "next/image";
import Navber from "@/Component/Navber";
import Footer from "@/Component/Footer";
export default function Home() {
  return (
   <>
   <Navber/>
   <div className="flex flex-col justify-center items-center h-screen gap-4">
    <h1 className="text-4xl font-bold text-blue-300">This is our DevCabin</h1>
    <p>This is a cabin for developers</p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">developing...</button>
   </div>
   <Footer>
   <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-100 text-center py-20">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Dev Cabin</h1>
        <p className="text-gray-600 text-lg">Your trusted web development agency</p>
      </main>

    </div>
   </Footer>

   </>
  );
}
