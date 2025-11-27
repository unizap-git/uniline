'use strict';

var React = require('react');

function PersonalPrivacy(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="24" cy="11" r="7"/><path d="M4 41C4 32.1634 12.0589 25 22 25"/><rect x="27" y="31" width="14" height="10"/><path d="M37 31V28C37 26.3431 35.6569 25 34 25C32.3431 25 31 26.3431 31 28V31"/>' : '<circle cx="24" cy="11" r="7"/><path d="M4 41C4 32.1634 12.0589 25 22 25"/><rect x="27" y="31" width="14" height="10"/><path d="M37 31V28C37 26.3431 35.6569 25 34 25C32.3431 25 31 26.3431 31 28V31"/>';

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

module.exports = PersonalPrivacy;
