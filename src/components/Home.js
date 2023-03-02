import React from 'react';
import { Container} from 'react-bootstrap';


const Home = () =>{
    return(
        <Container fluid className="home-section">
            <div className="overlay">
                <h1>WELCOME TO UWEZO SACCO</h1>
                <h2>Your trusted E-banking application...</h2>
            </div>
        </Container>
    );
}


export default Home;