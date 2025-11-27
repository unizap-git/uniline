'use strict';

var React = require('react');

function Drink(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<line x1="10" y1="16" x2="38" y2="16"/><path d="M14.153 18.1425C14.0703 16.9848 14.9873 16 16.148 16H31.852C33.0127 16 33.9297 16.9848 33.847 18.1425L32.1327 42.1425C32.0579 43.1891 31.187 44 30.1378 44H17.8622C16.813 44 15.9421 43.1891 15.8673 42.1425L14.153 18.1425Z"/><path d="M24 10V6C24 4.89543 24.8954 4 26 4H29"/><path d="M14.7215 11.6712C14.8822 10.7068 15.7166 10 16.6943 10H31.3057C32.2834 10 33.1178 10.7068 33.2785 11.6712L34 16H14L14.7215 11.6712Z"/>' : '<line x1="10" y1="16" x2="38" y2="16"/><path d="M14.153 18.1425C14.0703 16.9848 14.9873 16 16.148 16H31.852C33.0127 16 33.9297 16.9848 33.847 18.1425L32.1327 42.1425C32.0579 43.1891 31.187 44 30.1378 44H17.8622C16.813 44 15.9421 43.1891 15.8673 42.1425L14.153 18.1425Z"/><path d="M24 10V6C24 4.89543 24.8954 4 26 4H29"/><path d="M14.7215 11.6712C14.8822 10.7068 15.7166 10 16.6943 10H31.3057C32.2834 10 33.1178 10.7068 33.2785 11.6712L34 16H14L14.7215 11.6712Z"/>';

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

module.exports = Drink;
