import RestaurantCard from "./RestaurantCard";
const Body=()=>{
    return(
    <>
     <div className="body">
      <div className="search">
        Search
      </div>
      <div className="res-container"> 
      <RestaurantCard resName="Meghana Biryani" cuisine="Biryani,North Indian,Indian" rating="4.4" eta="30 min"/>
      <RestaurantCard resName="KFC" cuisine="Burger,Fast Food" rating="4.1" eta="20 min"/>
      </div>
     </div>
    </>
    );
  }
  export default Body;