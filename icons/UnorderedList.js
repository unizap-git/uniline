'use strict';

var React = require('react');

function UnorderedList(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8 18V27"/><path d="M11 27H5"/><path d="M11 12H5"/><path d="M5 4.99994C5 4.99994 8 1.99992 10 4.99996C12 8 5 12 5 12"/><path d="M5.00065 34.5001C5.00065 34.5001 7.00065 31.5001 10.0006 33.5C13.0006 35.5 10.0007 38 10.0007 38C10.0007 38 13.0006 40.5001 10.0006 42.5001C7.00064 44.5001 5.00064 41.5001 5.00064 41.5001"/><path d="M10 38H8"/><path d="M8 18L5 20"/><path d="M20 24H42"/><path d="M20 38H42"/><path d="M20 10H42"/>' : '<path d="M8 18V27"/><path d="M11 27H5"/><path d="M11 12H5"/><path d="M5 4.99994C5 4.99994 8 1.99992 10 4.99996C12 8 5 12 5 12"/><path d="M5.00065 34.5001C5.00065 34.5001 7.00065 31.5001 10.0006 33.5C13.0006 35.5 10.0007 38 10.0007 38C10.0007 38 13.0006 40.5001 10.0006 42.5001C7.00064 44.5001 5.00064 41.5001 5.00064 41.5001"/><path d="M10 38H8"/><path d="M8 18L5 20"/><path d="M20 24H42"/><path d="M20 38H42"/><path d="M20 10H42"/>';

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

module.exports = UnorderedList;
