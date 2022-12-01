import axios from "axios";

//base url to make request from movie database
//it will be appended to the request

const instance= axios.create({
    baseURL: "https://api.themoviedb.org/3",
});


export default instance;
