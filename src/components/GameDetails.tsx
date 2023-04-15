// Typescript whole ignore whole file
// @ts-nocheck

import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Avatar, Box, Button, Chip, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography
} from '@mui/material';
import axios from 'axios';
import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import useFetchGame from '../hooks/useFetchGame';
import {game as gameInterface} from "../gameTypes";
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ButtonGroup from '@mui/material/ButtonGroup';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


type gameResponse = {
    game: gameInterface | {};
    errors?: string;
}

function GameDetails() {

    const {gameId} = useParams();
    const {game}:gameResponse = useFetchGame(gameId);

    if (Object.keys(game).length === 0) {
        return (
            <Typography variant="h2" component="h1">
                Loading...
            </Typography>
        );
    }

    return (
        <>
            <Typography variant="h2" component="h1">
                <a href={game.game_url} target="_blank" style={{textDecoration: "none"}}>
                    {game.title} <Chip label={game.status} color="success"/>
                </a>
            </Typography>

            <Stack direction="row" sx={{marginTop: 2}}>
                <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Platform" secondary={game.platform}/>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Publisher" secondary={game.publisher}/>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Release date" secondary={game.release_date}/>
                    </ListItem>
                </List>

                <Box>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button>
                            <a href={game.game_url} target="_blank">
                                Website
                            </a>
                        </Button>
                        <Button>
                            <Link to="/">
                                Game finder
                            </Link>
                        </Button>
                    </ButtonGroup>
                </Box>
            </Stack>

            <Box>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        id="panel1bh-header"
                    >
                        <Typography>
                            Short description
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {game.short_description}
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        id="panel1bh-header2"
                    >
                        <Typography>
                            Description
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {game.description}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

            <Box>
                <ImageList sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
                    {game.screenshots.map((screenshot) => (
                        <ImageListItem key={screenshot.id}>
                            <img
                                src={`${screenshot.image}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${screenshot.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={`${screenshot.id} ${game.title}`}
                                loading="lazy"
                            />
                        </ImageListItem>
                        ))}
                </ImageList>
            </Box>
        </>
    );
}

export default GameDetails;