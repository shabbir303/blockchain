import logo from "../assets/images/logo.png";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const NavbarItems =({title, classProps})=>{
  return (
    <li className={`mx-4 cursor-pointer ${classProps} `}>
        {title}
    </li>
    )
}
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4"> 
            <div className="md:flex-[0.5] flex justify-between items-center ">
                <img src={logo} alt="logo" className="w-40 cursor-pointer"/>
                <ul className="text-white md:flex hidden  flex-initial">
                    {["Markets", "Exchanges", "Tutorials", "Wallets"].map((item, index)=>(
                    <NavbarItems key={item + index} title={item}/> 
                    ))}
                    <li className="bg-[#2952e3] px-2 rounded-full py-1 hover:bg-[#2546bd] cursor-pointer">
                        Login
                    </li>
                </ul>
                <div className="flex relative">
                        {toggleMenu? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=> setToggleMenu(false)}/>:<HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=> setToggleMenu(true)}/>}
                        {toggleMenu && <ul>
                             <li className="text-xl w-full my-2">
                                <AiOutlineClose onClick={()=>setToggleMenu(false)}/>
                             </li>
                            </ul>}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;