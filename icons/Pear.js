'use strict';

var React = require('react');

function Pear(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10.8,2c.3.2,1.1,1,1.2,1.8.2.8,0,1.7,0,2" stroke-miterlimit="2"/>   <path d="M19.9,12.4l-1.8-3.1-1.5-3.3c-.8-1.8-2.6-3-4.6-3s-3.8,1.2-4.6,3l-1.5,3.3-1.8,3.1c-1.4,2.4-1,5.3,1,7.3l.6.6c1,.9,2.2,1.4,3.5,1.4s2-.3,2.8-.9c1.9,1.3,4.6,1.1,6.3-.5l.6-.6c2-1.9,2.4-4.9,1-7.3ZM7,14c0-.6.4-1,1-1s1,.4,1,1-.4,1-1,1-1-.4-1-1ZM9,18c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM11.5,16c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M16.6391 12.7461C17.9484 9.85633 20.8275 8 24 8C27.1725 8 30.0516 9.85633 31.3609 12.7461L34.4211 19.5L38.1067 25.8219C40.3938 29.7449 39.7121 34.7218 36.4545 37.8853L35.2649 39.0405C32.352 41.8693 27.7836 42.0721 24.6314 39.5127C24.2635 39.2139 23.7365 39.2139 23.3686 39.5127C20.2164 42.0721 15.648 41.8693 12.7351 39.0405L11.5455 37.8853C8.28785 34.7218 7.60621 29.7449 9.8933 25.8219L13.5789 19.5L16.6391 12.7461Z"/><path d="M21.5 4C22.1667 4.5 23.6 5.9 24 7.5C24.4 9.1 24.1667 10.8333 24 11.5"/><circle cx="16" cy="28" r="2"/><circle cx="18" cy="34" r="2"/><circle cx="23" cy="30" r="2"/>';

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

module.exports = Pear;
