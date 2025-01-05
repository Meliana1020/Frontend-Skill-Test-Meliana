import axios from "axios";

export const getProduct = () => {
    axios
    .get("https://api.thedogapi.com/v1/breeds")
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
};

