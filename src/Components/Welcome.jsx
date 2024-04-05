import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from "./";

const newStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-500 text-white";
const Welcome = () => {
    const connectWallet = () => {

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

                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;