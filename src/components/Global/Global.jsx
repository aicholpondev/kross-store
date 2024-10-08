
import { CiSearch } from "react-icons/ci";
import Card from "../Card/Card";
import React from 'react';
import APIKEY from "../../api/api";
import { useState,useEffect } from "react";
import axios from "axios";

export default function Global({ handleClick }) {

  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://384b3adb2bb70528.mokky.dev/items');
        setGallery(response.data);  
      } catch (error) {
        setError(error.message);  
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

   
  const galleryList = gallery.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
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
                        value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}  
                       
                    />
                </div>
            </div>
            <div className=" card-block grid gap-10 grid-cols-4 my-10 ">
                {
                    galleryList.map((item) => (
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

