import Nike_Category from "./NikeCategory";
import Price from "./Price";
import Color from "./Color";
import Nb_Category from "./NbCategory";

function Sidebar({ handleChange }) {
  return (
    <section
      className="side-bar px-5 pt-[150px] w-full sm:w-[15%] h-screen overflow-y-auto flex flex-col fixed top-0 left-0 border-solid border-r-2 border-[#e5e5e5] [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
    >
      {/* Uncomment this part if you want a logo */}
      {/* <div className="logo-content pt-5">
        <IoLogoReact className="mb-8 w-16 h-16 text-blue-400" />
      </div> */}

      <Nike_Category handleChange={handleChange}/>
      <Nb_Category handleChange={handleChange}/>
      <Price handleChange={handleChange} />
      <Color handleChange={handleChange} />
    </section>
  );
}

export default Sidebar;
