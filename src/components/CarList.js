import React from 'react'
import CollectionCard from './CollectionCard';
import './CarList.css'

const CarList = ({ carList, setSelectedCar}) => {
  return (
    <div className="carList">
        {carList.map(car => (
            <div key={car.token_id} onClick={() => setSelectedCar(car.token_id)}>
                <CollectionCard  id={car.token_id} name={car.name} traits={car.traits} image={car.image_preview_url}/>
            </div>
        ))}
    </div>
  )
}

export default CarList