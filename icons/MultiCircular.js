'use strict';

var React = require('react');

function MultiCircular(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M24 44C31.732 44 38 37.732 38 30C38 22.268 31.732 16 24 16C16.268 16 10 22.268 10 30C10 37.732 16.268 44 24 44Z"/><path d="M24 44C28.4183 44 32 40.4183 32 36C32 31.5817 28.4183 28 24 28C19.5817 28 16 31.5817 16 36C16 40.4183 19.5817 44 24 44Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M24 44C31.732 44 38 37.732 38 30C38 22.268 31.732 16 24 16C16.268 16 10 22.268 10 30C10 37.732 16.268 44 24 44Z"/><path d="M24 44C28.4183 44 32 40.4183 32 36C32 31.5817 28.4183 28 24 28C19.5817 28 16 31.5817 16 36C16 40.4183 19.5817 44 24 44Z"/>';

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

module.exports = MultiCircular;
