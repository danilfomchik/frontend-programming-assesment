import { Container } from "@mui/material";

import { MainContainer } from "./Styles";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";

function App() {
    return (
        <MainContainer>
            <Header />

            <Container maxWidth="lg" component={"main"} sx={{ p: 3 }}>
                <ProductsList />
            </Container>
        </MainContainer>
    );
}

export default App;
