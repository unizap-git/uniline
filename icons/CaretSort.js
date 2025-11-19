'use strict';

var React = require('react');

function CaretSort(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6.9,9.3l4.6-6.8c.3-.4.9-.4,1.2,0l4.6,6.8c.3.5,0,1.1-.6,1.1H7.4c-.6,0-.9-.6-.6-1.1ZM17.1,14.7l-4.6,6.8c-.3.4-.9.4-1.2,0l-4.6-6.8c-.3-.5,0-1.1.6-1.1h9.1c.6,0,.9.6.6,1.1Z"/>' : '<path d="m8 10 4-6 4 6H8Zm8 4-4 6-4-6h8Z"/>';

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

module.exports = CaretSort;
