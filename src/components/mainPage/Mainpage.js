import React from 'react';
import './Mainpage.css';
import Navigation from '../navigation/Navigation'
import Hero from '../hero/Hero'
import Container from '../container/Container'
import Footer from '../footer/Footer'


class Main extends React.Component {


  render(){
    return (

      <div className="wrapper">

      
      <Navigation />      
      <Hero />
      <div className="main-container" >
      <div className="location" id="home">
          <h1 id="home">Popular on PlayBox</h1>
      <Container/>
      </div>
      
      <h1 id="myList">Trending Now</h1>
      <Container/>
      
      <h1 id="tvShows">TV Shows</h1>
      <Container/>

      <h1 id="movies">Movies</h1>
      <Container/>

      <h1 id="newarrival">New Arrivals</h1>
      <Container/>

      </div>
      <Footer />

      </div>

    )
    }
  }
export default Main;
