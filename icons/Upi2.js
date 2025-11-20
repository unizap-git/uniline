'use strict';

var React = require('react');

function Upi2(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g id="g138">     <path id="path140" d="M19.3,12.2l-10.9,10L13.8,1.8l5.4,10.4Z"/>   </g>   <g id="g142">     <path id="path144" d="M15.6,12.2l-10.9,10L10.2,1.8l5.4,10.4Z"/>   </g>' : '<polygon points="15 12.2 10.5 3.6 6 20.4 15 12.2" stroke-miterlimit="10"/>   <polygon points="18 12.2 13.5 3.6 9 20.4 18 12.2" stroke-miterlimit="10"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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
