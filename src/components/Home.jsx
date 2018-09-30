import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
        <Grid>
            <Jumbotron>
             <h2>Welcome to CodeExersize</h2>
             <p>This is website with react, react-router and react-bootstrap</p>
             <Link to="/about">
                <Button bsStyle="primary">About</Button>
             </Link>   
            </Jumbotron>
            <Row className="show-grid text-center">
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/person1.jpg" circle className="profile-pic" />
                    <h3>Elizabeth</h3>
                    <p>Just make a decision and let it go. Van Dyke Brown is a very nice brown, it's almost like a chocolate brown. From all of us here, I want to wish you happy painting and God bless, my friends.</p>
                </Col> 
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/person2.jpg" circle className="profile-pic" />
                    <h3>Tommy</h3>
                    <p>If there's two big trees invariably sooner or later there's gonna be a little tree. I get carried away with this brush cleaning. Just let this happen. We just let this flow right out of our minds. Everybody's different. Trees are different. Let them all be individuals.</p>
                </Col>  
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/person3.jpg" circle className="profile-pic" />
                    <h3>Kathy</h3>
                    <p>Trees get lonely too, so we'll give him a little friend. I like to beat the brush. Zip. That easy. There's nothing wrong with having a tree as a friend. Trees grow in all kinds of ways. They're not all perfectly straight. Not every limb is perfect. Let's have a little bit of fun today.</p>
                </Col>   
            </Row>
        </Grid>
    )
  }
}
