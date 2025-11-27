'use strict';

var React = require('react');

function AirplaneWindowOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15.2,16l3.3-12.1c.2-.8,1-1.3,1.8-1.1h0c.8.2,1.3,1,1.1,1.8l-3,11.4"/>   <path d="M18,16v3H6.5c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5h11.5Z"/>   <path d="M10.5,22h4"/>   <path d="M5.5,1c-1.9,0-3.5,1.6-3.5,3.5v5c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5v-5c0-1.9-1.6-3.5-3.5-3.5Z"/>   <path d="M8,6H3c-.6,0-1,.4-1,1s.4,1,1,1h5c.6,0,1-.4,1-1s-.4-1-1-1Z"/>   <path d="M3,10.5c-.6,0-1-.4-1-1v-5c0-.6.4-1,1-1s1,.4,1,1v5c0,.6-.4,1-1,1Z"/>   <path d="M8,10.5c-.6,0-1-.4-1-1v-5c0-.6.4-1,1-1s1,.4,1,1v5c0,.6-.4,1-1,1Z"/>' : '<path d="M30.3489 32L36.8554 7.7176C37.2842 6.1172 38.9292 5.16746 40.5296 5.59628V5.59628C42.13 6.02511 43.0798 7.67012 42.6509 9.27052L36.5606 32"/><path d="M36 32L36 38L13 38C11.3431 38 10 36.6569 10 35C10 33.3431 11.3431 32 13 32L36 32Z"/><path d="M21 44H29"/><rect x="6" y="4" width="10" height="20" rx="5"/><path d="M6 14L16 14"/><path d="M6 9L6 19"/><path d="M16 9V19"/>';

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

module.exports = AirplaneWindowOne;
