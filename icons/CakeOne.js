'use strict';

var React = require('react');

function CakeOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M13.5,7l-9,3.9h15l-2.4-3.3"/>   <path d="M16.5,4.5l1-2.5" stroke-miterlimit="2"/>   <path d="M4.8,13.5c-.3.2-.6.3-.8.5-1.2.8-1.9,1.7-1.9,2.8,0,2.6,4.5,4.8,10,4.8s10-2.1,10-4.8-.7-2.1-2-2.9" stroke-miterlimit="2"/>   <rect x="4.5" y="11" width="15" height="6"/>   <path d="M4.5,11h15.5" stroke-miterlimit="2"/>   <path d="M15.5,9.5c-1.7,0-3-1.3-3-3s1.3-3,3-3,3,1.3,3,3-1.3,3-3,3ZM15.5,5.5c-.6,0-1,.4-1,1s.4,1,1,1,1-.4,1-1-.4-1-1-1Z"/>' : '<path d="M27 14L9 21.9H39L34 15"/><circle cx="31" cy="13" r="4"/><path d="M33 9L35 4"/><path d="M9.5 26.9568C8.89836 27.2575 8.33775 27.5769 7.82243 27.913C5.41836 29.481 4 31.4118 4 33.4999C4 38.7466 12.9543 42.9999 24 42.9999C35.0457 42.9999 44 38.7466 44 33.4999C44 31.3609 42.5116 29.3869 40 27.799"/><rect x="9" y="22" width="30" height="12"/><path d="M9 22H40"/>';

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

module.exports = CakeOne;
