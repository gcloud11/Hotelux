import React from "react";


function Head () {

    return (

        <div className="w3-display-left w3-padding w3-col l6 m8">
        <div className="w3-container w3-black">
            <h2 style={{ 'font-size': '20px'}}><i className="far fa-building w3-margin-right"></i>Luxury Apartments</h2>
        </div>
        <div className="w3-container w3-white w3-padding-16">
            <form action="/action_page.php" target="_blank">
                <div className="w3-row-padding" style={{ margin: "0 -16px"}}>
                    <div className="w3-half w3-margin-bottom">
                        <label><i className="fa fa-calendar-o"/> Location </label>
                        <input className="w3-input w3-border" type="text" placeholder="City" name="CheckIn" required></input>
                    </div>
                    <div className="w3-half">
                        <label><i className="fa fa-calendar-o"/> Beds </label>
                        <input className="w3-input w3-border" type="dropdown" placeholder="" value="0" min="Studio" max="3" required></input>
                    </div>
                </div>
                <div className="w3-row-padding" style={{margin:"8px -16px"}}></div>
                <div className="w3-half w3-margin-bottom">
                    <label> Minimum Price</label>
                    <input className="w3-input w3-border" type="number"></input>
                </div>
                <div className="w3-half">
                        <label> Maximum Price</label>
                    <input className="w3-input w3-border" type="number"></input>
                </div>
            </form>
        </div>
            <button className="w3-button w3-dark-grey" type="submit"><i className="fa fa-search w3-margin-right"></i> Search</button>
        
    </div>

     )

}



export default Head;