'use strict';

var React = require('react');

function AirBike(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2,22h20"/>   <path d="M14,15h3.1c1.1,0,3.4.7,3.4,3.4v3.6"/>   <path d="M17.5,15l2.5-5.5-3-6.5"/>   <path d="M14.5,4l5-2"/>   <path d="M14,16h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1,0-2.8-2.2-5-5-5s-5,2.2-5,5,2.2,5,5,5,5-2.2,5-5c0,.6-.4,1-1,1Z"/>   <path d="M10.5,11l-3.5-4.5"/>   <path d="M5,6.5h4"/>   <path d="M10,19c2.2,0,4-1.8,4-4s-1.8-4-4-4" stroke-miterlimit="2"/>' : '<path d="M4 44H44"/><path d="M28 30H34.1905C36.4603 30 41 31.344 41 36.72V44"/><path d="M35 30L40 19L34 6"/><path d="M29 8L39 4"/><circle cx="20" cy="30" r="8"/><path d="M20 30H28"/><path d="M21 22L14 13"/><path d="M10 13L18 13"/><path d="M20 38C24.4183 38 28 34.4183 28 30C28 25.5817 24.4183 22 20 22"/>';

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

module.exports = AirBike;
