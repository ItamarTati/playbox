import React, { PureComponent } from 'react';
import './Hero.css';




class Hero extends PureComponent {
    
    constructor(props) {
        super(props);

        this.state = {
            isVideoVisible: false,
            playVideo: false,
            videoEnded: false
        };

        this.toggleVideoVisibility = this.toggleVideoVisibility.bind(this);
    }


    toggleVideoVisibility() {
        const {
            isVideoVisible,
        } = this.state;

        this.setState({ isVideoVisible: !isVideoVisible });
    }
    
    playVideo() {
        this.refs.vidRef.play();
        this.setState({playVideo: true})
      }
      
      pauseVideo() {
        this.refs.vidRef.pause();
        this.setState({playVideo: false})
      }
    




    render() {
        const {
            isVideoVisible,
        } = this.state;
        let video ="https://www.dropbox.com/s/eqgfxuawhdo3a9l/Arcane.mp4?raw=1"
        let image ="https://www.dropbox.com/s/y59jq9iu83xfpm0/League%20Background%20Image.jpeg?raw=1"

        return (
            <div className = 'hero'>   
            {     
                        (
                            <video 
                                ref="vidRef"
                                poster= {image}
                                preload="true"
                                onEnded={() => this.setState({videoEnded: true})} 
                               
                            >
                                
                                <source
                                    src= {video}
                                    type="video/webm"
                                />
                                <source
                                    src= {video}
                                    type="video/mp4"
                                />
                            </video>
                        ) }     
                { isVideoVisible && this.renderVideoModal() }
                    <div className='Hero'>
                     <div className='hero-text'>
                 <h1>League of Legends Original</h1>
                 <br/>
                 <p className= 'item'>Arcane</p>
                 <p className='content'>Riot Games' Arcane is a League of Legends animated series <br/> developed and produced by Riot Games<br/>releasing in 2020.</p><br/>
                
                {   this.state.videoEnded === true ? 
                    <button className='myBtn' onClick={this.playVideo.bind(this)}>&#10226; Watch Again</button>
                    : this.state.playVideo === false ? 
                    <button className='myBtn' onClick={this.playVideo.bind(this)}>▷ Watch Trailer</button> 
                    : <button className='myBtn' onClick={this.pauseVideo.bind(this)}>&#10074; &#10074; Pause Trailer</button> } 
                 
               <a href="#home"><button className='myBtn'>Watch More Trailers</button></a>
                 </div>
                 </div>
                
            </div>
        );
    }
}


export default Hero;







  


