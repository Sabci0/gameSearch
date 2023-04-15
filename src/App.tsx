import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import { Container } from '@mui/material';
import "./App.css";

function App(): JSX.Element {

    return (
        <Container maxWidth="lg">
            <RouterProvider router={router}/>
        </Container>
    )
}

export default App
