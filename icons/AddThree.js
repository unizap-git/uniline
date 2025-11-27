'use strict';

var React = require('react');

function AddThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 32L24 16"/><path d="M42 27L42 21"/><path d="M6 27L6 21"/><path d="M14 6H8C6.89543 6 6 6.89543 6 8V14"/><path d="M34 6H40C41.1046 6 42 6.89543 42 8V14"/><path d="M34 42H40C41.1046 42 42 41.1046 42 40V34"/><path d="M14 42H8C6.89543 42 6 41.1046 6 40V34"/><path d="M27 6H21"/><path d="M32 24L16 24"/><path d="M27 42H21"/>' : '<path d="M24 32L24 16"/><path d="M42 27L42 21"/><path d="M6 27L6 21"/><path d="M14 6H8C6.89543 6 6 6.89543 6 8V14"/><path d="M34 6H40C41.1046 6 42 6.89543 42 8V14"/><path d="M34 42H40C41.1046 42 42 41.1046 42 40V34"/><path d="M14 42H8C6.89543 42 6 41.1046 6 40V34"/><path d="M27 6H21"/><path d="M32 24L16 24"/><path d="M27 42H21"/>';

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

module.exports = AddThree;
