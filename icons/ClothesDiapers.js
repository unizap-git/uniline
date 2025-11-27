'use strict';

var React = require('react');

function ClothesDiapers(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 11H42L42 19C42 19 42 27 38 31C34 35 27.8421 37 27.8421 37H20.1579C20.1579 37 14 35 10 31C6 27 6 19 6 19L6 11Z"/><path d="M20.1579 37C20.1579 37 20.2572 29.9255 17 26C13.956 22.3315 6 19 6 19"/><path d="M27.8421 37C27.8421 37 27.7428 29.9254 31 26C34.044 22.3315 42 19 42 19"/>' : '<path d="M6 11H42L42 19C42 19 42 27 38 31C34 35 27.8421 37 27.8421 37H20.1579C20.1579 37 14 35 10 31C6 27 6 19 6 19L6 11Z"/><path d="M20.1579 37C20.1579 37 20.2572 29.9255 17 26C13.956 22.3315 6 19 6 19"/><path d="M27.8421 37C27.8421 37 27.7428 29.9254 31 26C34.044 22.3315 42 19 42 19"/>';

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

module.exports = ClothesDiapers;
