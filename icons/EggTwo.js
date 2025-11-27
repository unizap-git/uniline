'use strict';

var React = require('react');

function EggTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.4,26.3c0-2,.9-5.4,2.3-7.4M37.6,28.5c0,7.5-6.1,13.5-13.5,13.5s-13.5-6.1-13.5-13.5S16.6,6,24,6s13.5,15.1,13.5,22.5Z"/>' : '<path d="M19.4,26.3c0-2,.9-5.4,2.3-7.4M37.6,28.5c0,7.5-6.1,13.5-13.5,13.5s-13.5-6.1-13.5-13.5S16.6,6,24,6s13.5,15.1,13.5,22.5Z"/>';

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

module.exports = EggTwo;
