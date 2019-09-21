import React, { Component } from 'react';
import Background from '../images/airlevel_whoosh.jpg';
import myImage from '../images/radon.png';
import methImage from '../images/meth.jpg';
import moldImage from '../images/mold.jpg';
import leadImage from '../images/lead.jpg';
import justinImage from '../images/man.png';
import briImage from '../images/girl.png';
import mamaJuneImage from '../images/myAvatar.png';
import boyImage from '../images/boy.png';

import {Link} from 'react-router-dom';
import Footer from '../layouts/Footer';

class Home extends Component {
	state = {

	}

	render() {
		return (
            <div className="home-page">
                <div className="jumbotron1">
                        <div className="jumbotron home-header">
                            <h1 className="display-4">Every House, Every Time!</h1>
                            <Link to ="/RequestTesting"className="btn btn-info mt-4">Schedule Now</Link>
                        </div>
            
                
                        <div className="jumbotron1">
                        <div className="jumbotron">
                            <h3 className="display-4">Our Services</h3>
                        </div>
                    </div>
                </div>

			
			<div className="card-deck justify-content-center">
					<div className="card-center ml-5 mr-5 mt-5 mb-5 col-xs-3" >
						<img src={myImage} alt="Logo" style={{ width: "300px" }}></img>
							<div className="card-body"></div>
								<h5 className="card-title">Radon</h5>
								<p className="card-text">This is the text of the card</p>
								<Link to ="/Services"className="btn btn-info mt-4">Learn More</Link> 
					</div>
					<div className="card-center ml-5 mr-5 mt-5 mb-5 col-xs-3">
						<img src={methImage} alt="Logo" style={{ height: "300px", width: 
					"300px" }}></img>
							<div className="card-body"></div>
								<h5 className="card-title">Meth</h5>
								<p className="card-text">This is the text of the card</p>
								<Link to ="/Services"className="btn btn-info mt-4">Learn More</Link> 
					</div>
					<div className="card-center ml-5 mr-5 mt-5 mb-5 col-xs-3">
						<img src={leadImage} alt="Logo" style={{ height: "300px", width: 
					"300px" }}></img>
							<div className="card-body"></div>
								<h5 className="card-title">Lead</h5>
								<p className="card-text">This is the text of the card</p>
								<Link to ="/Services"className="btn btn-info mt-4">Learn More</Link> 
					</div>
					<div className="card-center ml-5 mr-5 mt-5 mb-5 col-xs-3">
						<img src={moldImage} alt="Logo" style={{ height: "300px", width: 
					"300px" }}></img>
							<div className="card-body"></div>
								<h5 className="card-title">Mold</h5>
								<p className="card-text">This is the text of the card</p>
								<Link to ="/Services"className="btn btn-info mt-4">Learn More</Link> 
					    </div>
			    </div>
					

                    <div className="jumbotron1">
                        <div className="jumbotron">
                            <h3 className="display-4">Meet the Team!</h3>
                        </div>
                    </div>


                        <div className="card-deck justify-content-center">
                            <div className="flip-card ml-5 mr-5 mt-5 mb-5 col-xs-3">
                                <div className="flip-card-inner">
                            <div className="flip-card-front">
                                    <img src={justinImage} alt="Logo" style={{  height: "200px", width: 
					                    "200px" }}></img>
                                    </div>
                                <div className="flip-card-back">
                                    <h1>Justin</h1>
                                    <p>The Quitter</p>
                                    <p>Its True! His car plates say so!</p>
                                </div>
                                </div>
                           </div>
                           <div className="flip-card ml-5 mr-5 mt-5 mb-5 col-xs-3">
                                <div className="flip-card-inner">
                            <div className="flip-card-front">
                                    <img src={briImage} alt="Logo" style={{  height: "200px", width: 
					                    "200px" }}></img>
                                    </div>
                                <div className="flip-card-back">
                                    <h1>Bri</h1>
                                    <p>White Trash</p>
                                    <p>...not sure what to say about her</p>
                                </div>
                                </div>
                           </div>
                           <div className="flip-card ml-5 mr-5 mt-5 mb-5 col-xs-3">
                                <div className="flip-card-inner">
                            <div className="flip-card-front">
                                    <img src={mamaJuneImage} alt="Logo" style={{  height: "200px", width: 
					                    "200px" }}></img>
                                    </div>
                                <div className="flip-card-back">
                                    <h1>Sarah</h1>
                                    <p>The Smart One</p>
                                    <p>I can only use a Dell</p>
                                </div>
                                </div>
                           </div>
                           <div className="flip-card ml-5 mr-5 mt-5 mb-5 col-xs-3">
                                <div className="flip-card-inner">
                            <div className="flip-card-front">
                                    <img src={boyImage} alt="Logo" style={{  height: "200px", width: 
					                    "200px" }}></img>
                                    </div>
                                <div className="flip-card-back">
                                    <h1>Hyrum</h1>
                                    <p>Mr Fix-it</p>
                                    <p>Can I just go play with my RC cars now?</p>
                                </div>
                                </div>
                           </div>
                        </div>
                        

                        <div className="jumbotron1">
                        <div className="jumbotron">
                            <h3 className="display-4">Reviews</h3>
                            
                        </div>
                        </div>


                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

                        <Footer></Footer>
        </div>
                        
                        
		);
	}
}


export default Home;
