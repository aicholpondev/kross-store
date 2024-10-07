
import { FaRegHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";
import React, { useState } from "react";

export default function Card({ item, handleClick }) {
    const { title, img, price } = item;
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
        if (!checked) {
            handleClick(item); 
        }
    };

    return (
        <div className="card-container rounded-2xl text-black cursor-pointer">
            <FaRegHeart className="card-like" />
            <img src={img} alt={title} />
            <p>{title}</p>
            <div className="flex items-center gap-12 my-5">
                <div>
                    <span>Цена:</span> <br />
                    <b>{price} р</b>
                </div>
                <button onClick={handleCheck}>
                    {checked ? <FaCheckSquare className="icon" /> : <FaPlus  className="icon"/>}
                </button>
            </div>
        </div>
    );
}