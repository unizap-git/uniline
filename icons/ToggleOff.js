'use strict';

var React = require('react');

function ToggleOff(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M33,13.9H14.9c-5.6,0-10.1,4.5-10.1,10.1s4.5,10.1,10.1,10.1h18.1c5.6,0,10.1-4.5,10.1-10.1s-4.5-10.1-10.1-10.1ZM14.7,31c-3.9,0-7-3.1-7-7s3.1-7,7-7,7,3.1,7,7-3.1,7-7,7Z"/>' : '<path d="M14.9,14.9h18.1c5,0,9.1,4.1,9.1,9.1h0c0,5-4.1,9.1-9.1,9.1H14.9c-5,0-9.1-4.1-9.1-9.1h0c0-5,4.1-9.1,9.1-9.1Z" stroke-miterlimit="50"/>   <circle cx="14.9" cy="24" r="6" stroke-miterlimit="50"/>';

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

module.exports = ToggleOff;
