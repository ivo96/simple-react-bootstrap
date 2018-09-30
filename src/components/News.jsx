import React, { Component } from 'react';
import './News.css';
import {Grid, Row, Col, Image} from 'react-bootstrap';

export default class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/cover.jpg" className="header-image" />
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
            <p>This present moment is perfect simply due to the fact you're experiencing it. When you do it your way you can go anywhere you choose. That's why I paint - because I can create the kind of world I want - and I can make this world as happy as I want it. Don't fight it, use what happens.</p>

            <p>We'll put some happy little leaves here and there. Remember how free clouds are. They just lay around in the sky all day long. Be careful. You can always add more - but you can't take it away.</p>

            <p>Now we'll take the almighty fan brush. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. Without washing the brush, I'm gonna go right into some Van Dyke Brown, some Burnt Umber, and a little bit of Sap Green. You better get your coat out, this is going to be a cold painting.</p>

            <p>See how easy it is to create a little tree right in your world. You could sit here for weeks with your one hair brush trying to do that - or you could do it with one stroke with an almighty brush. No pressure. Just relax and watch it happen. I guess I'm a little weird. I like to talk to trees and animals. That's okay though; I have more fun than most people. Maybe there's a little something happening right here.</p>

            <p>I was blessed with a very steady hand; and it comes in very handy when you're doing these little delicate things. All you need to paint is a few tools, a little instruction, and a vision in your mind. This is the time to get out all your flustrations, much better than kicking the dog around the house or taking it out on your spouse. Just go out and talk to a tree. Make friends with it.</p>

            <p>It's life. It's interesting. It's fun. Here's something that's fun. We need dark in order to show light. We're trying to teach you a technique here and how to use it. Let's put a touch more of the magic here.</p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/friendsSitting.jpg" />
              <p>You can create the world you want to see and be a part of. You have that power. Every time you practice, you learn more. Steve wants reflections, so let's give him reflections. Talent is a pursued interest. That is to say, anything you practice you can do.</p>
              <p>It's hard to see things when you're too close. Take a step back and look. Let's go up in here, and start having some fun Maybe there's a little something happening right here. Maybe, just to play a little, we'll put a little tree here.</p>  
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
