'use strict';

var React = require('react');

function Hockey(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M36 4L30.23 31.41C30.03 32.34 29.22 33 28.27 33H9C7.34 33 6 34.34 6 36V37.55C6 41.03 8.95 43.78 12.43 43.53L29.49 42.31C32.16 42.12 34.38 40.18 34.93 37.56L42 4H36Z" stroke-miterlimit="2"/><path d="M15 16C19.4183 16 23 14.6569 23 13C23 11.3431 19.4183 10 15 10C10.5817 10 7 11.3431 7 13C7 14.6569 10.5817 16 15 16Z" stroke-miterlimit="2"/><path d="M23 13V19C23 20.66 19.42 22 15 22C10.58 22 7 20.66 7 19V13" stroke-miterlimit="2"/>' : '<path d="M36 4L30.23 31.41C30.03 32.34 29.22 33 28.27 33H9C7.34 33 6 34.34 6 36V37.55C6 41.03 8.95 43.78 12.43 43.53L29.49 42.31C32.16 42.12 34.38 40.18 34.93 37.56L42 4H36Z" stroke-miterlimit="2"/><path d="M15 16C19.4183 16 23 14.6569 23 13C23 11.3431 19.4183 10 15 10C10.5817 10 7 11.3431 7 13C7 14.6569 10.5817 16 15 16Z" stroke-miterlimit="2"/><path d="M23 13V19C23 20.66 19.42 22 15 22C10.58 22 7 20.66 7 19V13" stroke-miterlimit="2"/>';

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

module.exports = Hockey;
