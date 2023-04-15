// @ts-nocheck

import {useState} from "react";
import {GENRES, PLATFORMS, SORT_BY, TAGS} from "./FilterConstants";
import {filterType} from "./FilterTypes";
import React from "react";
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

type gameListProps = {
    onFilterChange: React.Dispatch<React.SetStateAction<filterType>>;
}

function GameFilter({onFilterChange}: gameListProps) {
    const [platform, setPlatform] = useState(PLATFORMS[0].value);
    const [genre, setGenre] = useState(GENRES[0].value)
    const [tags, setTags] = useState(TAGS[0].value)
    const [sortBy, setSortBy] = useState(SORT_BY[0].value)

    function handlePlatform(event) {
        setPlatform(event.target.value);

        onFilterChange((prevState) => (
            {...prevState, platform: event.target.value}
        ));
    }

    function handleGenre(event) {
        setGenre(event.target.value);

        onFilterChange(prevState => (
            {...prevState, genre: event.target.value}
        ))
    }

    function handleTags(event) {
        setTags(event.target.value);

        onFilterChange(prevState => (
            {...prevState, tag: event.target.value}
        ))
    }

    function handleSortBy(event) {
        setSortBy(event.target.value);

        onFilterChange(prevState => (
            {...prevState, sortBy: event.target.value}
        ))
    }


    return (
        <Box sx={{flexGrow: 1, marginTop: 2}}>
            <Grid container spacing={2}>
                <Grid md={3} xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="platformFilter">Platform:</InputLabel>
                        <Select
                            labelId="platformFilter"
                            value={platform}
                            onChange={handlePlatform}
                            label="Platform"
                        >
                            {PLATFORMS.map((platform) => (
                                <MenuItem value={platform.value} key={platform.value}>{platform.display}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid md={3} xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="genre">Genre:</InputLabel>
                        <Select
                            labelId="genre"
                            value={genre}
                            onChange={handleGenre}
                            label="Genre"
                        >
                            {GENRES.map((genre) => (
                                <MenuItem value={genre.value} key={genre.value}>{genre.display}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid md={3} xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="tags">Tags:</InputLabel>
                        <Select
                            labelId="tags"
                            value={tags}
                            onChange={handleTags}
                            label="Tags"
                        >
                            {TAGS.map((tag) => (
                                <MenuItem value={tag.value} key={tag.value}>{tag.display}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid md={3} xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="sort-by">Sort By:</InputLabel>
                        <Select
                            labelId="sort-by"
                            value={sortBy}
                            onChange={handleSortBy}
                            label="sort-by"
                        >
                            {SORT_BY.map((by) => (
                                <MenuItem value={by.value} key={by.value}>{by.display}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    )
}

export default GameFilter;