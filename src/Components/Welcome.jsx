import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from "./";

const newStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-500 text-white";
 const Input =({placeholder , name, type ,value, handleChange})=>(
  <input
   placeholder={placeholder}
   step="0.0001"
   name={name}
   type={type}
   value={value}
   onChange={(e)=>{handleChange(e, name)}}
   className="my-2 w-full p-2 rounded-md border-none bg-transparent text-white outline-none white-glassmorphism"
   
  />
);
const Welcome = () => {
    const connectWallet = () => {

    }
    const handleSubmit = ()=>{
    
    }
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-4 px-12">
                <div className="flex flex-col justify-start flex-1  md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                        Send Crypto <br /> across the world
                    </h1>
                    <p className="text-left mt-5 text-white font-light md:9/12 w-11/12 text-base">
                        Explore the Crypto world. Buy and sell cryptocurrencies easily on Krypto.
                    </p>
                    <button
                        type="button"
                        onClick={connectWallet}
                        className="flex flex-row w-full my-3 rounded-full items-center mx-auto cursor-pointer px-3 py-2 bg-blue-500 hover:bg-blue-700">
                        <p className="text-center mx-auto text-base text-white"> Connect to the wallet</p>
                    </button>
                    <div className="grid sm:grid-cols-3 grid-cols-2 mt-10 w-full ">
                        <div className={`rounded-tl-2xl ${newStyles}`}>
                            Reliability
                        </div>
                        <div className={` ${newStyles}`}>
                            Security
                        </div>
                        <div className={`rounded-tr-2xl ${newStyles}`}>
                            Ethereum
                        </div>
                        <div className={`rounded-bl-2xl ${newStyles}`}>
                            Web 3.0
                        </div>
                        <div className={` ${newStyles}`}>
                            Low Fees
                        </div>
                        <div className={`rounded-br-2xl ${newStyles}`}>
                            Blockchain
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
                    <div className="p-3 justify-end items-start flex-col rounded-xl eth-card h-40 sm:w-72 w-full my-5 .white-glassmorphism">
                            <div className="flex justify-between flex-col w-full h-full">
                                <div className="flex justify-between items-start">
                                    <div className="w-10 h-10 rounded-full border-white border-[1px] flex justify-center items-center">
                                        <SiEthereum className="text-white text-[20px]"/>
                                        
                                    </div>
                                    <BsInfoCircle className="text-white"/>
                                </div>
                                <div>
                                    <p className="text-white text-sm font-light">
                                        Address
                                    </p>
                                    <p className="text-white text-lg font-semibold mt-1">
                                        Ethereum
                                    </p>
                                </div>
                            </div>
                    </div>
                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism ">
                        <Input placeholder="Address To" name="address" type="text " handleChange={()=>{}} />
                        <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={()=>{}} />
                        <Input placeholder="Keyword (Gif)" name="keyword" type="text " handleChange={()=>{}} />
                        <Input placeholder="Enter Message" name="message" type="text" handleChange={()=>{}} />
                        <div className="w-full h-[1px] bg-gray-400 my-2"/>
                            {
                              false? <Loader/>:<button
                              type="button"
                              onClick = {handleSubmit}
                              className="text-white w-full border-[1px] py-[5px] rounded-full border-slate-500 mt-[5px]"
                              >
                                    Send Now    
                              </button>
                            }
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Welcome;