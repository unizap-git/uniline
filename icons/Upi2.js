'use strict';

var React = require('react');

function Upi2(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g id="g138">     <path id="path140" d="M19.3,12.2l-10.9,10L13.8,1.8l5.4,10.4h0Z"/>   </g>   <g id="g142">     <path id="path144" d="M15.6,12.2l-10.9,10L10.2,1.8l5.4,10.4Z"/>   </g>' : '<polygon points="30.5 24.4 20.8 5.9 11.1 42.1 30.5 24.4" stroke-miterlimit="10"/>   <polygon points="36.9 24.4 27.2 5.9 17.5 42.1 36.9 24.4" stroke-miterlimit="10"/>';

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

module.exports = Upi2;
