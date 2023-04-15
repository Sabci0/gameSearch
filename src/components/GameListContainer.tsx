import GameList from "./GameList";
import {useEffect, useState} from "react";
import useFetchGames from "../hooks/useFetchGames";

function GameListContainer(): JSX.Element {
    const [filters, setFilters] = useState({
        platform: "browser",
        sortBy: "relevance"
    })


    const {games} = useFetchGames(filters);

    return (
        <GameList games={games} onFilterChange={setFilters} />
    );
}

export default GameListContainer;