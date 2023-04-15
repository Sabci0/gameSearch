// @ts-nocheck

import {useEffect, useState} from "react";
import axios from "axios";
import {API_HOST, API_KEY} from "../constants";
import {filterType} from "../components/FilterTypes";

const localCache = {};

const useFetchGames = ({platform, sortBy, genre, tag}: filterType) => {
    const [games, setGames] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController()

        if(localCache[`${platform}${sortBy}${genre}${tag}`]) {
            setGames(localCache[`${platform}${sortBy}${genre}${tag}`])
        } else {
            getGames(controller.signal)
        }
        console.log(tag)

        return () => {
            controller.abort();
        }
    }, [platform, sortBy, genre, tag])

    const getGames = async (signal) => {
        const response = await axios.get("/games", {
            baseURL: `https://${API_HOST}/api`,
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': API_HOST
            },
            signal,
            params: {
                platform,
                "sort-by": sortBy,
                category: genre,
                tag
            }
        })

        if(response.data.status !== 0) {
            localCache[`${platform}${sortBy}${genre}${tag}`] = response.data;

            setGames(localCache[`${platform}${sortBy}${genre}${tag}`])
        } else {
            setGames([])
        }
    }

    return { games, error }
}

export default useFetchGames;