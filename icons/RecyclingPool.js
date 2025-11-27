'use strict';

var React = require('react');

function RecyclingPool(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20 16L24 20L28 16"/><path d="M32 29L36 33L40 29"/><path d="M8 29L12 33L16 29"/><path d="M24 20V4"/><path d="M36 32.8669V19.637C36 17.4278 37.7909 15.637 40 15.637H44"/><path d="M12 32.8669V19.637C12 17.4278 10.2091 15.637 8 15.637H4"/><path d="M4 36V40C4 42.2091 5.79086 44 8 44H40C42.2091 44 44 42.2091 44 40V36"/>' : '<path d="M20 16L24 20L28 16"/><path d="M32 29L36 33L40 29"/><path d="M8 29L12 33L16 29"/><path d="M24 20V4"/><path d="M36 32.8669V19.637C36 17.4278 37.7909 15.637 40 15.637H44"/><path d="M12 32.8669V19.637C12 17.4278 10.2091 15.637 8 15.637H4"/><path d="M4 36V40C4 42.2091 5.79086 44 8 44H40C42.2091 44 44 42.2091 44 40V36"/>';

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

module.exports = RecyclingPool;
