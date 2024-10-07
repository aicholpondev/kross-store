
import { CiSearch } from "react-icons/ci";
import store from "../../data"; 
import Card from "../Card/Card";
import React from 'react';

export default function Global({ handleClick }) {
    return (
        <div className="container">
            <div className="flex items-center justify-between ">
                <h1 className="font-bold text-3xl">Все кроссовки</h1>
                <div className="input-search flex items-center gap-3   ">
                    <CiSearch />
                    <input 
                        className=" rounded-lg outline-0 "
                        type="search"
                        placeholder="Поиск..." 
                       
                    />
                </div>
            </div>
            <div className=" card-block grid gap-10 grid-cols-4 my-10 ">
                {
                    store.map((item) => (
                        <Card 
                            key={item.id}
                            item={item} 
                            handleClick={handleClick} 
                        />
                    ))
                }
            </div>
        </div>
    );
}