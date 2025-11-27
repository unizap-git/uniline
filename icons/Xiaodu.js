'use strict';

var React = require('react');

function Xiaodu(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.9,10.4c-.2-2-.3-3.2-1.5-4.5-1.2-1.3-2.6-1.4-4.9-1.7-1.7-.2-3.2-.3-4.5-.3s-2.8.1-4.5.3c-2.3.3-3.6.4-4.9,1.7-1.2,1.3-1.4,2.5-1.5,4.5,0,.5,0,1.1,0,1.6s0,1,0,1.6c.2,2,.3,3.2,1.5,4.5,1.2,1.3,2.6,1.4,4.9,1.7,1.7.2,3.2.3,4.5.3s2.8-.1,4.5-.3c2.3-.3,3.6-.4,4.9-1.7,1.2-1.3,1.4-2.5,1.5-4.5,0-.5,0-1.1,0-1.6s0-1,0-1.6ZM9,14.5c0,.6-.4,1-1,1s-1-.4-1-1v-5c0-.6.4-1,1-1s1,.4,1,1v5ZM17.2,13.8c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-2.5-2.5c-.4-.4-.4-1,0-1.4l2.5-2.5c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-1.8,1.8,1.8,1.8Z"/>' : '<path d="M4.14317 21.0805C4.4982 17.2939 4.67571 15.4006 6.65595 13.3751C8.63619 11.3496 10.8152 11.0955 15.1734 10.5873C18.0037 10.2573 21.1305 10 24 10C26.8695 10 29.9963 10.2573 32.8266 10.5873C37.1848 11.0955 39.3638 11.3496 41.3441 13.3751C43.3243 15.4006 43.5018 17.2939 43.8568 21.0805C43.9464 22.0361 44 23.0181 44 24C44 24.9819 43.9464 25.9639 43.8568 26.9195C43.5018 30.7061 43.3243 32.5994 41.3441 34.6249C39.3638 36.6504 37.1848 36.9045 32.8266 37.4127C29.9963 37.7427 26.8695 38 24 38C21.1305 38 18.0037 37.7427 15.1734 37.4127C10.8152 36.9045 8.63619 36.6504 6.65595 34.6249C4.67571 32.5994 4.4982 30.7061 4.14317 26.9195C4.05357 25.9639 4 24.9819 4 24C4 23.0181 4.05357 22.0361 4.14317 21.0805Z"/><path d="M16 19V29"/><path d="M33 19L28 24L33 29"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 48 48',
    fill: fill ? color : 'none',
    stroke: fill ? 'none' : color,
    strokeWidth: fill ? 0 : strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: className,
    style: style,
    dangerouslySetInnerHTML: { __html: svgContent }
  });
}

module.exports = Xiaodu;
