'use strict';

var React = require('react');

function HeavyWind(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 19.8851C4 12.2166 10.1052 6 17.6364 6C23.9334 6 29.2336 10.3462 30.8015 16.2533C32.0353 15.6159 33.431 15.2567 34.9091 15.2567C39.9299 15.2567 44 19.4011 44 24.5135C44 28.1561 41.9337 31.3074 38.9294 32.8182C38.6792 32.944 38.4007 33 38.1206 33H15"/><path d="M15 33H12C9.79086 33 8 34.7909 8 37V37C8 39.2091 9.79086 41 12 41H15"/><path d="M22 18H19C16.7909 18 15 19.7909 15 22V22C15 24.2091 16.7909 26 19 26H22"/><path d="M19 26H32"/>' : '<path d="M4 19.8851C4 12.2166 10.1052 6 17.6364 6C23.9334 6 29.2336 10.3462 30.8015 16.2533C32.0353 15.6159 33.431 15.2567 34.9091 15.2567C39.9299 15.2567 44 19.4011 44 24.5135C44 28.1561 41.9337 31.3074 38.9294 32.8182C38.6792 32.944 38.4007 33 38.1206 33H15"/><path d="M15 33H12C9.79086 33 8 34.7909 8 37V37C8 39.2091 9.79086 41 12 41H15"/><path d="M22 18H19C16.7909 18 15 19.7909 15 22V22C15 24.2091 16.7909 26 19 26H22"/><path d="M19 26H32"/>';

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

module.exports = HeavyWind;
