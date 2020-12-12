import React from "react";
import "../components/head.css"


function Head({ checkIn, setCheckIn, checkOut, setCheckOut, adults, setAdults, city, setCity, refreshData }) {

    // resetForm = () => {
    //     this.setRefreshData(this.refreshData)
    //   }
 
    return (

        <div className="w3-display-middle w3-padding w3-col l6 m10 l10 head1">

            <div className="w3-container w3-black">
                <h2 style={{ 'fontSize': '20px'}}><i className="fa fa-bed w3-margin-right"></i>Hotelux</h2>
            </div>
            <div className="w3-container w3-white w3-padding-16">
                <form onSubmit={refreshData}>
                    <div className="w3-row-padding" style={{ margin: "0 -16px"}}>
                        <div className="w3-half w3-margin-bottom">
                            <label><i className="fa fa-calendar-o"/>Check In </label>
                            <input className="w3-input w3-border" type="text" placeholder="YYYY-MM-DD" name="CheckIn" required value={checkIn} onChange={e => setCheckIn(e.target.value)}></input>
                        </div>
                        <div className="w3-half">
                            <label><i className="fa fa-calendar-o"/>Check Out </label>
                            <input className="w3-input w3-border" type="text" placeholder="YYYY-MM-DD" name="CheckOut" required value={checkOut} onChange={e => setCheckOut(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="w3-row-padding" style={{margin:"8px -16px"}}>
                        <div className="w3-half w3-margin-bottom">
                            <label><i class="fa fa-male"></i> Adults</label>
                            <input className="w3-input w3-border" type="number" name="Adults" min="1" max="6" value={adults} onChange={e => setAdults(e.target.value)}></input>
                        </div>
                        <div className="w3-half">
                            <label><i class="fas fa-city"></i> City Name</label>
                            <input className="w3-input w3-border" name="city" type="text" value={city} onChange={e => setCity(e.target.value)}></input>
                        </div>
                    </div>  
                    <button class="w3-button w3-dark-grey" type="submit"><i class="fa fa-search w3-margin-right"></i> Search availability</button>  

                </form>
            </div>
        </div>

     )

}



export default Head;