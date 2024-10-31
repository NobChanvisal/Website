import Pro_Category from "./Pro_Category";
import Price from "./Price";
import Color from "./Color";
import { IoLogoReact } from "react-icons/io5";
function Sidebar({handleChange}){
    // console.log(handleChange)
    return(
        <>
            <section className=" side-bar px-10 w-[15%] flex flex-col fixed border-solid border-r-2  border-[#e5e5e5]">
                <div className="logo-content pt-5">
                    <IoLogoReact className=" mb-8 w-16 h-16 text-blue-400"/>
                </div>
                <Pro_Category handleChange = {handleChange}/>
                <Price handleChange = {handleChange}/>
                <Color handleChange = {handleChange}/>
            </section>
        </>
    )
}
export default Sidebar;