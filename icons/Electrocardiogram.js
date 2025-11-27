'use strict';

var React = require('react');

function Electrocardiogram(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM18.5,15.1h-2c-.3,0-.5-.1-.7-.3l-.7-.7-1.7,3.8c-.2.4-.5.6-.9.6s0,0-.1,0c-.4,0-.8-.4-.9-.8l-1.1-6.8-1,3.4c-.1.4-.5.7-1,.7h-2.8c-.6,0-1-.4-1-1s.4-1,1-1h2.1l2.1-6.9c.1-.4.6-.7,1-.7.5,0,.8.4.9.8l1.3,7.7.9-2.1c.1-.3.4-.5.7-.6.3,0,.7,0,.9.3l1.4,1.5h1.6c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M11 28.1321H16.6845L21.2234 13L24.8953 35L29.4483 24.6175L32.9127 28.1321H37"/>';

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

module.exports = Electrocardiogram;
