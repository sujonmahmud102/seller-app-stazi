import { BsFuelPumpDiesel, BsPeople, BsSpeedometer } from "react-icons/bs";
import { TbSettingsAutomation } from "react-icons/tb";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";



const CarCard = ({ car }) => {
    const { image, brand, model, year, passengers, transmission, price, fuel, fuelEconomy } = car;
    const [clicked, setClicked] = useState(false);


    return (
        <div className="bg-blue-50 shadow-xl rounded-2xl p-5 ">
            <figure className="rounded-2xl">
                <img src={image} alt={model} className="rounded-xl w-full h-72" />
            </figure>
            <div className="">
                <div className="flex items-center justify-between mt-3">
                    <h3 className="text-xl font-medium">{brand} {model} </h3>
                    <p className="border border-dashed border-blue-400 rounded-lg px-2">{year} </p>
                </div>
                <div className="grid grid-cols-2 gap-3 my-4">
                    <p className="flex items-center  gap-2"><BsPeople className="text-blue-400" />{passengers} People </p>
                    <p className="flex items-center  gap-2"> <BsFuelPumpDiesel className="text-blue-400" /> {fuel} </p>
                    <p className="flex items-center  gap-2"> <BsSpeedometer className="text-blue-400" /> {fuelEconomy}</p>
                    <p className="flex items-center  gap-2"><TbSettingsAutomation className="text-blue-400" /> {transmission} </p>
                </div>
                <div className="divider"></div>
                <div className="flex items-center justify-between">
                    <h3> <span className="text-xl font-menu">${price}</span> /month </h3>
                    <button onClick={() => setClicked(!clicked)} className="bg-blue-200  p-2 rounded-md">
                        {
                            clicked ? <span className="text-red-500">
                                <AiFillHeart />
                            </span> :
                                <span className="text-blue-500">
                                    <AiOutlineHeart />
                                </span>
                        }
                    </button>
                    <button className="btn btn-sm btn-ghost bg-blue-500 normal-case text-white">Rent now</button>
                </div>
            </div>
        </div>
    );
};

export default CarCard;