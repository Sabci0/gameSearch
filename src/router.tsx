import { createBrowserRouter } from "react-router-dom";
import GameListContainer from "./components/GameListContainer";
import GameDetails from "./components/GameDetails";

// eslint-disable-next-line import/prefer-default-export
export const router = createBrowserRouter([
    {
        path: "/",
        element: <GameListContainer />,
    },
    {
        path: "/games/:gameId",
        element: <GameDetails />,
    },
]);