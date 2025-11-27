'use strict';

var React = require('react');

function ShuffleOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M40 33L44 37L40 41"/><path d="M40 7L44 11L40 15"/><path d="M44 11H37C29.8203 11 24 16.8203 24 24C24 31.1797 29.8203 37 37 37H44"/><path d="M4 37H11C18.1797 37 24 31.1797 24 24C24 16.8203 18.1797 11 11 11H4"/>' : '<path d="M40 33L44 37L40 41"/><path d="M40 7L44 11L40 15"/><path d="M44 11H37C29.8203 11 24 16.8203 24 24C24 31.1797 29.8203 37 37 37H44"/><path d="M4 37H11C18.1797 37 24 31.1797 24 24C24 16.8203 18.1797 11 11 11H4"/>';

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

module.exports = ShuffleOne;
