var React = require('react');

/*var WeatherMessage = React.createClass({

 render: function () {
 return (
 <div>
 <h1> It is {this.props.temp} in {this.props.location} </h1>
 </div>


 )
 }


 });*/

var WeatherMessage = ({temp,location})=> {



    return (
        <div>
            <h1> It is {temp} in {location} </h1>
        </div>


    )

}


module.exports = WeatherMessage;
