'use strict';

var React = require('react');

function SlidingVertical(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM14.7,14.7l-2,2c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-2-2c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1.3,1.3,1.3-1.3c.4-.4,1-.4,1.4,0s.4,1,0,1.4ZM14.7,10.7c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-1.3-1.3-1.3,1.3c-.4.4-1,.4-1.4,0s-.4-1,0-1.4l2-2c.4-.4,1-.4,1.4,0l2,2c.4.4.4,1,0,1.4Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M20 20L24 16L28 20"/><path d="M20 28L24 32L28 28"/>';

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

module.exports = SlidingVertical;
