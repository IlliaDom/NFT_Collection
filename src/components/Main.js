import React, { useState, useEffect} from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'

const Main = ({selectedCar, carList }) => {
    const [active, setActive] = useState(carList[0])
    
    useEffect(() =>{
        carList.map((car, i) =>{
            if(car.token_id === selectedCar){
                setActive(car)
            }
        })
    },[selectedCar,carList])

  return (
    <div className="main">
        <div className="mainContent">
            <div className="carHighlight">
                <div className="carContainer">
                      <img src={active.image_preview_url} className="selectedCar" />
                </div>
            </div>
            <div className='container'>
                <div className="carDetails">
                    <div className="title">
                        {active.name}
                    </div>
                    <span className="itemNumber">#{active.token_id}</span>
                </div>
                <div className="owner">
                    <div className="ownerImageContainer">
                        <img src={active.owner.profile_img_url} alt="" />
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerNameAndHandle">
                            <div>{active.owner.address}</div>
                            <div className="ownerHandle">@JDMCars</div>
                        </div>
                        <div className="ownerLinkContainer">
                            <div className="ownerLink">
                                <img src={instagramLogo} alt="" />
                            </div>
                            <div className="ownerLink">
                                <img src={twitterLogo} alt="" />
                            </div>
                            <div className="ownerLink">
                                <img src={moreIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main