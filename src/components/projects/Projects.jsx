import React from 'react';
import './projects.css';
import { Card, Button, Container, Row, Col} from 'react-bootstrap';
import { LiaCocktailSolid } from "react-icons/lia";
import videoSrc from '../../assets/ZozzledPreview.mp4';



const Projects = () => {

    const handleClick = (URL) => {
        window.open(URL, '_blank');
    }


    return (
        <div className='card-container'>
        <Container>

        <Row className='row1'>
                <Col md={6} >

                    {/* -------------------------The Mood Bar------------------------- */}
                    <Card >
                    <video className="card-img-top" loop width="100%" height="auto" >
    <source src={videoSrc} type="video/mp4" />
    Your browser does not support the video tag.</video>
                        <Card.Body>
                            <Card.Title>The Mood Bar</Card.Title>
                            <Card.Text>
                            A cocktail generator based off your chosen mood and preferred spirit type. <LiaCocktailSolid />, and some advice from your digital bartender.
                            </Card.Text>
                            <Button variant="primary" onClick= {() => handleClick('https://eddiehinojosa.github.io/TheMoodBar')}>visit 'The Mood Bar'</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>

                    {/* -------------------------zozzled------------------------- */}
                    <Card >
                    <video className="card-img-top" width="100%" height="auto" loop >
    <source src={videoSrc} type="video/mp4" />
    Your browser does not support the video tag.</video>
                        <Card.Body>
                            <Card.Title>Zozzled</Card.Title>
                            <Card.Text>
                                Your personal cocktail recipe book. Save your favorite recipes, and share them with friends.
                            </Card.Text>
                            <Button variant="primary" onClick= {() => handleClick('https://zozzled.onrender.com')}>visit 'Zozzled'</Button>
                        </Card.Body>
                    </Card>
                </Col>
        </Row>
        <Row className='row2'>
                <Col md={4}>

                    {/* -------------------------another project------------------------- */}
                    <Card >
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>

                    {/* -------------------------another project------------------------- */}
                    <Card >
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>

                    {/* -------------------------another project------------------------- */}
                    <Card >
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
        </Row>
        </Container >
        </div>
  )
}

export default Projects