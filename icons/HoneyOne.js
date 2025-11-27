'use strict';

var React = require('react');

function HoneyOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="4.92871" y="13.2239" width="11" height="5" rx="2" transform="rotate(-46.0247 4.92871 13.2239)"/><rect x="19.3213" y="27.1108" width="11" height="5" rx="2" transform="rotate(-46.0247 19.3213 27.1108)"/><rect x="6.44336" y="18.8545" width="17" height="5" rx="2" transform="rotate(-46.0247 6.44336 18.8545)"/><rect x="13.6406" y="25.7981" width="17" height="5" rx="2" transform="rotate(-46.0247 13.6406 25.7981)"/><rect x="7.26465" y="25.2048" width="25" height="5" rx="2" transform="rotate(-46.0247 7.26465 25.2048)"/><path d="M25.0029 28.4238L29.169 24.106L43.5756 38.0062L39.4095 42.3241L25.0029 28.4238Z"/><path d="M21 40.25C21 42.3211 19.2091 44 17 44C14.7909 44 13 42.3211 13 40.25C13 38.1789 17 34 17 34C17 34 21 38.1789 21 40.25Z"/>' : '<rect x="4.92871" y="13.2239" width="11" height="5" rx="2" transform="rotate(-46.0247 4.92871 13.2239)"/><rect x="19.3213" y="27.1108" width="11" height="5" rx="2" transform="rotate(-46.0247 19.3213 27.1108)"/><rect x="6.44336" y="18.8545" width="17" height="5" rx="2" transform="rotate(-46.0247 6.44336 18.8545)"/><rect x="13.6406" y="25.7981" width="17" height="5" rx="2" transform="rotate(-46.0247 13.6406 25.7981)"/><rect x="7.26465" y="25.2048" width="25" height="5" rx="2" transform="rotate(-46.0247 7.26465 25.2048)"/><path d="M25.0029 28.4238L29.169 24.106L43.5756 38.0062L39.4095 42.3241L25.0029 28.4238Z"/><path d="M21 40.25C21 42.3211 19.2091 44 17 44C14.7909 44 13 42.3211 13 40.25C13 38.1789 17 34 17 34C17 34 21 38.1789 21 40.25Z"/>';

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

module.exports = HoneyOne;
