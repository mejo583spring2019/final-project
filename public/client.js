// importing draggable // 
import Draggable from '@shopify/draggable/src/Draggable/Draggable.js';

//importing vimeo //
import { Vimeo } from 'vimeo';
let client = new Vimeo(
    "{process.env.client_id}",
    "{process.env.client_secret}",
    "{process.env.access_token}");



console.log(Draggable);

//importing allergen data // 
import allergen from 'https://api.breezometer.com/pollen/v2/current-conditions?lat='
+location.latitude + "&lon=" + location.longitude + "&key=" + { process.env.pollen_access_key } + "&features={Features_List}"



let location = "http://api.ipapi.com/api/check?" + process.env.ip_access_key


function mapLocation() {
    return [location.longitude, location.latitude, location.city, location.region_name]
};

mapLocation(location);
