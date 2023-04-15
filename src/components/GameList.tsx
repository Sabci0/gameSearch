// @ts-nocheck

import GameFilter from "./GameFilter";
import {filterType} from "./FilterTypes";
import React from "react";
import {Alert, Box, Stack} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import GameCard from "./GameCard";


type gameListProps = {
    games: game[];
    onFilterChange: React.Dispatch<React.SetStateAction<filterType>>;
}

function GameList({games, onFilterChange}: gameListProps): JSX.Element {
    return (
        <Box>
            <GameFilter onFilterChange={onFilterChange}/>
            <Grid container spacing={2} marginTop={3}>
                {!games.length ? (
                    <Stack sx={{width: '100%'}} spacing={2}>
                        <Alert variant="filled" severity="success">
                            No games found
                        </Alert>
                    </Stack>
                ) : (
                    games.map((game) => (
                        <GameCard key={game.id} game={game}/>
                    ))
                )}

            </Grid>

        </Box>
    );
}

export default GameList;