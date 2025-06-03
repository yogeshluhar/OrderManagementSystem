// https://cat-talented-haddock.ngrok-free.app/
import axios from "axios";
import React, { useEffect, useState } from "react";

const ShopList = () => {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://cat-talented-haddock.ngrok-free.app/shops/",{"headers":{"Content-Type":"application/json","ngrok-skip-browser-warning": "69420"}})
      .then((data) => {
        setShops(data.data);
        console.log(data)
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching shops:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading shops...</p>;
  }

  return (
    <div>
      <h2>Shop List</h2>
      <ul>
        {shops.map((shop) => (
          <li key={shop.shop_id}>
            <strong>{shop.name}</strong> - {shop.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopList;
