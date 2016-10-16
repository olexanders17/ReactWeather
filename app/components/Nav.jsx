var React = require('react');
var {Link, IndexLink}=require('react-router');

var Nav = React.createClass({
    render: function () {
        return (

            <div>
                <h2>Navigation bar</h2>
                <div><IndexLink to='/' activeClassName='active' activeStyle={{background:'green'}}>Get Weather </IndexLink></div>
                <div><IndexLink to='/about' activeClassName='active' activeStyle={{background:'green'}}>About</IndexLink></div>
                <div><IndexLink to='/examples' activeClassName='active' activeStyle={{background:'green'}}>Examples</IndexLink></div>
            </div>
        )
    }


});

module.exports = Nav;
