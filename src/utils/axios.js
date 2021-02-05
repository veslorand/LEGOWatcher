import axios from 'axios';
import {BASE_URL, API_KEY} from '../config/Config';
import {WishlistContext} from "../context/WishlistContext";
import { useContext, useEffect } from "react";


export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'},
    params: {key: API_KEY}
});

// LEGO Sets
export const getLegoSets = () => {
    const url = `/sets?min_year=2021`;
    return axiosInstance.get(url);
};

// LEGO Minifigs
export const getLegoMinifigs = params => {
    const url = `/minifigs?${params}`;
    return axiosInstance.get(url);
};

// LEGO Themes
export const getLegoThemes = (params) => {
    const url = `/themes?${params}`;
    return axiosInstance.get(url);
};

// LEGO Wishlist
export const AddLegoToWishlist = (lego) => {
    const [wishlist, setWishlist] = useContext(WishlistContext);
    useEffect(() => {
        setWishlist([...wishlist, lego]);
    }, [lego, setWishlist, wishlist])
};