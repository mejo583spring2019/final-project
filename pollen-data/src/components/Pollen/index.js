import React, { Component } from "react";

class Pollen extends Component {
    render() {
        let location = "http://api.ipapi.com/api/check?" + process.env.ip_access_key

        return {

            mapLocation() {
                return [location.longitude, location.latitude, location.city, location.region_name]
            }
        }
    }
}



export default Pollen;


//importing allergen data // 

//import pollen from 'https://api.breezometer.com/pollen/v2/current-conditions?lat=' + { location.latitude } + '&lon=' + { location.longitude } + '&key=' + { process.env.pollen_access_key } + '&features={Features_List}';



let location = "http://api.ipapi.com/api/check?" + process.env.ip_access_key


function mapLocation() {
    return [location.longitude, location.latitude, location.city, location.region_name]
};

mapLocation(location);
