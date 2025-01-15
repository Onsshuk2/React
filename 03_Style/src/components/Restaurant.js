
import React, { useState } from 'react';
import '../styles/Restaurant.css'


function Restaurant() {
  
  const [restaurant, setRestaurant] = useState({
    name: 'Italian Bistro',
    address: '1234 Via Roma',
    rating: 4.5,
    cuisine: 'Італійська',
    image: 'https://static.wixstatic.com/media/bd8152_c8f04eb11c0c471dabeb081e9d3f4b34~mv2.jpg/v1/fill/w_640,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bd8152_c8f04eb11c0c471dabeb081e9d3f4b34~mv2.jpg'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="restaurant">
      <h1>Редагування інформації про ресторан</h1>
      <div className="restaurant-details">
        <div className="form-group">
          <label htmlFor="name">Назва:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={restaurant.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Адреса:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={restaurant.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Рейтинг:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={restaurant.rating}
            onChange={handleChange}
            step="0.1"
            min="0"
            max="5"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cuisine">Тип кухні:</label>
          <input
            type="text"
            id="cuisine"
            name="cuisine"
            value={restaurant.cuisine}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="restaurant-info">
        <h2>{restaurant.name}</h2>
        <p><strong>Адреса:</strong> {restaurant.address}</p>
        <p><strong>Рейтинг:</strong> {restaurant.rating}</p>
        <p><strong>Тип кухні:</strong> {restaurant.cuisine}</p>
        <img src={restaurant.image} alt="restaurant" />
      </div>
    </div>
  );
}

export default Restaurant;
