import { SiNike, SiAdidas, SiNewbalance, SiPuma } from "react-icons/si";

function Home() {
  return (
    <>
      <section>
        <div className="w-full h-[90vh] bg-cover bg-center bg-[url('https://i.pinimg.com/originals/a2/8e/86/a28e86ae270223c24969a0941e112607.gif')] ">
          <div className="absolute h-fit inset-0 bg-gradient-to-r from-slate-900 to-transparent opacity-50"></div>
          {/* 
        Content can go here
        <div className="relative z-10">{/* Your content </div> */}
        </div>
      </section>
      <section className=" py-10 px-10 mx-auto">
        <div className="brand-conten w-full h-24 grid grid-cols-4">
          <a
            href="#"
            className="brand-profile flex items-center justify-center bg-[#E4E0E1] hover:border hover:border-black transition-all duration-200"
          >
            <SiNike className="text-[80px]" />
          </a>

          <a
            href="#"
            className="brand-profile flex items-center justify-center bg-[#E4E0E1] hover:border hover:border-black transition-all duration-200"
          >
            <SiAdidas className=" text-[80px]" />
          </a>
          <a
            href="#"
            className="brand-profile flex items-center justify-center bg-[#E4E0E1] hover:border hover:border-black transition-all duration-200"
          >
            <SiNewbalance className=" text-[80px]" />
          </a>
          <a
            href="#"
            className="brand-profile flex items-center justify-center bg-[#E4E0E1] hover:border hover:border-black transition-all duration-200"
          >
            <SiPuma className=" text-[80px]" />
          </a>
        </div>
      </section>
    </>
  );
}
export default Home;
