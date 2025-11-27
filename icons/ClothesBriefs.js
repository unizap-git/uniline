'use strict';

var React = require('react');

function ClothesBriefs(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.1579 37C22.1579 37 21.2572 28.9255 18 25C14.956 21.3315 6 19 6 19L6 14H42L42 19C42 19 33.044 21.3315 30 25C26.7428 28.9254 25.8421 37 25.8421 37H22.1579Z"/>' : '<path d="M22.1579 37C22.1579 37 21.2572 28.9255 18 25C14.956 21.3315 6 19 6 19L6 14H42L42 19C42 19 33.044 21.3315 30 25C26.7428 28.9254 25.8421 37 25.8421 37H22.1579Z"/>';

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

module.exports = ClothesBriefs;
