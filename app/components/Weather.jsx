var React = require('react');
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');
var openWeatherMap = require('../api/openWeatherMap');

var Weather = React.createClass({

    getInitialState: function () {
        return {
            isLoad: false


        }

    },

    handleSearch: function (location) {
        this.setState({isLoad: true});
        var self = this;
        openWeatherMap.getTemp(location)
            .then(function (temp) {
                self.setState({
                    location: location,
                    temp: temp
                });
            }, function (err) {
                alert(err)
            });


    },

    render: function () {
        var {temp, location, isLoad}=this.state;

        function renderMessage() {

            if (isLoad) {
                console.log("renderMessage :", "true=", true);
                console.log("renderMessage :", "location && temp=", location, temp);
            }
            if (location && temp) {
                console.log("renderMessage :", "location && temp=", location, temp);
                debugger;
                return <WeatherMessage temp={temp} location={location}/>

            }

            //return <WeatherMessage temp={temp} location={location}/>
        }


        return (
            <div>
                <h3>Weather component here</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>


        )
    }


});

module.exports = Weather;