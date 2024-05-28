const RestaurantCard=(props)=>{
    console.log(props);
      const {resName,cuisine,rating,eta}=props
    return (
  <div className="res-card">
    <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b70c7d23d197251b7b315b7e4d8173ae"/>
    <h3>{resName}</h3>
    <h4>{cuisine}</h4>
    <h5>{rating}</h5>
    <h5>{eta}</h5>
    
  </div>
    );
  }
  export default RestaurantCard;