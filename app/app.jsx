var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory}=require('react-router');
var Main = require('./components/Main');
var Nav = require('./components/Nav');
var Weather=require('./components/Weather');
var About=require('./components/About');
var Examples=require('./components/Examples');

var obj = {
    name: 'ssss'
}


ReactDOM.render(
    <Router hashHistory={hashHistory}>
            <Route path='/' component={Main}>
                <Route path="about" component={About}></Route>
                <Route path="examples" component={Examples}></Route>

                <IndexRoute component={Weather}></IndexRoute>



            </Route>


    </Router>,
    document.querySelector('#app')
)
console.log();


