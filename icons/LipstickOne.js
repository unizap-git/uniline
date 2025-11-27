'use strict';

var React = require('react');

function LipstickOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M39.4346 5.32275L40.8488 6.73697C42.4109 8.29906 42.4109 10.8317 40.8488 12.3938L33.7777 19.4649L29.5351 15.2222L39.4346 5.32275Z"/><rect x="28.1211" y="13.8076" width="10" height="16" transform="rotate(45 28.1211 13.8076)"/><rect x="15.3936" y="23.7075" width="14" height="14" transform="rotate(45 15.3936 23.7075)"/>' : '<path d="M39.4346 5.32275L40.8488 6.73697C42.4109 8.29906 42.4109 10.8317 40.8488 12.3938L33.7777 19.4649L29.5351 15.2222L39.4346 5.32275Z"/><rect x="28.1211" y="13.8076" width="10" height="16" transform="rotate(45 28.1211 13.8076)"/><rect x="15.3936" y="23.7075" width="14" height="14" transform="rotate(45 15.3936 23.7075)"/>';

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

module.exports = LipstickOne;
