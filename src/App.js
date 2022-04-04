import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react'
import axios from 'axios'
import CarList from './components/CarList';
import Main from './components/Main';

function App() {
  const [listData, setListData] = useState([])
  const [selectedCar, setSelectedCar] = useState(1)

  useEffect(()=>{
    const getMyNft = async () => {
      const openSeaData = await axios.get("https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x9479db9A5F14a908bF3adaDF38a15117F17D89fd")
      console.log(openSeaData.data.assets)
      setListData(openSeaData.data.assets)
    }
    getMyNft()
  },[])
  return (
    <div className="app">
      <Header />
      {listData && listData.length > 0 &&
      <>  
        <Main carList={listData} selectedCar={selectedCar} />
        <CarList carList={listData} setSelectedCar={setSelectedCar} />
      </>
      }
    </div>
  );
}

export default App;
