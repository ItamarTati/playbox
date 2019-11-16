import React from 'react';
import Footer from '../footer/Footer'
import Data from '../../Data'


class Details extends React.Component {

    constructor() {
        super();
        this.state = { 
            shows: {}
        };
    }

    componentDidMount() {
        let showsId = this.props.match.params.showsId;
        let shows = Data().find((shows) => shows.id === showsId);
        this.setState ({ shows });
    }



    render() {
        
        const center = {textAlign: 'center'}
            return (
                <div>
                <div >
                <h1 style ={center}>Page not complete yet</h1>
                </div>
                <Footer />
                </div>
                )
             
        }
}
export default Details
