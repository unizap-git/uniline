'use strict';

var React = require('react');

function CrossRingTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.4545 26.4444C17.6364 28.2222 15.8182 30 12.1818 30C8.54545 30 4 27.3333 4 22C4 16.6667 8.54545 14 12.1818 14C17.6364 14 20.3636 17.5556 24 22C27.6364 26.4444 30.3636 30 35.8182 30C39.4545 30 44 27.3333 44 22C44 16.6667 39.4545 14 35.8182 14C32.1818 14 29.4545 16.6667 28.5455 17.5556"/>' : '<path d="M19.4545 26.4444C17.6364 28.2222 15.8182 30 12.1818 30C8.54545 30 4 27.3333 4 22C4 16.6667 8.54545 14 12.1818 14C17.6364 14 20.3636 17.5556 24 22C27.6364 26.4444 30.3636 30 35.8182 30C39.4545 30 44 27.3333 44 22C44 16.6667 39.4545 14 35.8182 14C32.1818 14 29.4545 16.6667 28.5455 17.5556"/>';

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

module.exports = CrossRingTwo;
