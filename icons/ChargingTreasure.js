'use strict';

var React = require('react');

function ChargingTreasure(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4.5,19.2c-.9,0-1.6-.8-1.5-1.7l2-13.3c.1-.7.7-1.3,1.5-1.3h11.5c.8,0,1.4.6,1.5,1.3l1.6,13.2c.1.9-.6,1.7-1.5,1.7" stroke-miterlimit="2"/>   <path d="M18,14H6c-2.2,0-4,1.8-4,4s1.8,4,4,4h12c2.2,0,4-1.8,4-4s-1.8-4-4-4ZM10.5,19c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM17.5,19h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M11,6h2"/>' : '<path d="M9.97506 8.55657C10.1946 7.08729 11.4565 6 12.9421 6H35.9778C37.4979 6 38.7778 7.13694 38.9569 8.64644L42.102 35.1464C42.3138 36.9309 40.9199 38.5 39.1229 38.5H8.98167C7.14822 38.5 5.74362 36.8699 6.01462 35.0566L9.97506 8.55657Z"/><rect x="6" y="30" width="36" height="12" rx="6"/><rect x="19" y="34" width="4" height="4" rx="2"/><path d="M29 36H35"/><path d="M22 12H26"/>';

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

module.exports = ChargingTreasure;
