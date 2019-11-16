import React from 'react';
import './Container.css';
import Data from '../../Data'
import { Link } from 'react-router-dom';





class Container extends React.Component {


    render(){
      return (
        <div className="box">
          
           {Data().map((show) => <Link to={`/${show.id}`}> <img src = {show.image} alt={show.id}/> </Link> )}
  
      </div>

      )
    }
}

export default Container


