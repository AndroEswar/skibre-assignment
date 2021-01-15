import fetch from "isomorphic-fetch";

export const get = ({ url, header = {} }) => {
    return fetch(url, header)
        .then(response => {
            console.log("json", response);
            return response.json();
        })
        .then(response => {
            console.log("return", response);
            return response;
        });
};