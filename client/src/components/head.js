import React from "react";
import "../components/head.css"


function Head () {

    return (

        <div className="w3-display-left w3-padding w3-col l6 m8">

            <div className="w3-container w3-blue">
                <h2 style={{ 'fontSize': '20px'}}><i className="fa fa-bed w3-margin-right"></i>Hotel Name</h2>
            </div>
            <div className="w3-container w3-white w3-padding-16">
                <form action="/" target="_blank">
                    <div className="w3-row-padding" style={{ margin: "0 -16px"}}>
                        <div className="w3-half w3-margin-bottom">
                            <label><i className="fa fa-calendar-o"/>Check In </label>
                            <input className="w3-input w3-border" type="text" placeholder="DD MM YYY" name="CheckIn" required></input>
                        </div>
                        <div className="w3-half">
                            <label><i className="fa fa-calendar-o"/>Check Out </label>
                            <input className="w3-input w3-border" type="text" placeholder="DD MM YYY" name="CheckOut" required></input>
                        </div>
                    </div>
                    <div className="w3-row-padding" style={{margin:"8px -16px"}}>
                        <div className="w3-half w3-margin-bottom">
                            <label><i class="fa fa-male"></i> Adults</label>
                            <input className="w3-input w3-border" type="number" value="1" name="Adults" min="1" max="6"></input>
                        </div>
                        <div className="w3-half">
                            <label><i class="fa fa-child"></i> Kids</label>
                            <input className="w3-input w3-border" type="number" value="0" name="Kids" min="0" max="6"></input>
                        </div>
                    </div>  
                    <button class="w3-button w3-dark-grey" type="submit"><i class="fa fa-search w3-margin-right"></i> Search availability</button>                  
                </form>
            </div>
        </div>

     )

}



export default Head;