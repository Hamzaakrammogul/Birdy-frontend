import axios from 'axios';
import React from 'react';

const params = {
    headers: {
        Authorization: "bearer" + process.env.REACT_APP_STRAPI_KEY,
    },
};

export const fetchDataFromApi = async (url) => {
    try {

        const {data} = await axios.get(process.env.REACT_APP_DEV_URL + url, params);
        return data;

    } catch (error) {

        console.log(error)
        return error;
    }
}