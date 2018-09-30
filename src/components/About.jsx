import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/friendsSitting.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/person2.jpg" className="about-profile-pic" rounded />
            <h3>Crazy brazy</h3>
            <p>We want to use a lot pressure while using no pressure at all. There are no mistakes. You can fix anything that happens. We'll put some happy little leaves here and there.</p>
            <p>When things happen - enjoy them. They're little gifts. Use what happens naturally, don't fight it. This is the fun part</p>
            <p>See. We take the corner of the brush and let it play back-and-forth. We're not trying to teach you a thing to copy. We're just here to teach you a technique, then let you loose into the world. That's the way I look when I get home late; black and blue.</p>
            <p>Everyone needs a friend. Friends are the most valuable things in the world. If we're gonna walk though the woods, we need a little path. How do you make a round circle with a square knife? That's your challenge for the day.</p>
          </Col>
        </Grid>
      </div>
    )
  }
}
