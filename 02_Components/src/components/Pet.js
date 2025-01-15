import React from "react";

function Pet({ name, species, breed, age, favoriteFood, photo }) {
  return (
    <div className="pet">
      <h1>Інформація про мого улюбленця</h1>
      <img src={photo} alt={name} className="pet-photo" />
      <p><strong>Ім'я:</strong> {name}</p>
      <p><strong>Вид:</strong> {species}</p>
      <p><strong>Порода:</strong> {breed}</p>
      <p><strong>Вік:</strong> {age} років</p>
      <p><strong>Улюблена їжа:</strong> {favoriteFood}</p>
    </div>
  );
}

export default Pet;
