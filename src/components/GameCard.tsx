import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';
import {game as gameInterface} from "../gameTypes";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

type gameCardProps = {
    game: gameInterface;
}

function GameCard({game}: gameCardProps) {
    return (
        <Grid xs={12} sm={6} md={4} lg={3}>
            <Card sx={{width: "100%", minHeight: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={game.thumbnail}
                        alt={game.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {game.title}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {game.short_description}
                        </Typography><Typography gutterBottom variant="h5" component="div">
                        {game.genre}
                    </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <Link to={`/games/${game.id}`}>
                            <Button variant="contained" style={{textDecoration: "none"}}>
                                Learn More
                            </Button>
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default GameCard;