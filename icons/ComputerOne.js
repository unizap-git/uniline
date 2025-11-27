'use strict';

var React = require('react');

function ComputerOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10 6C10 4.89543 10.8954 4 12 4H36C37.1046 4 38 4.89543 38 6V42C38 43.1046 37.1046 44 36 44H12C10.8954 44 10 43.1046 10 42L10 6Z"/><path d="M17 12L31 12"/><circle cx="17" cy="21" r="2"/><circle cx="17" cy="27" r="2"/><circle cx="17" cy="33" r="2"/><circle cx="24" cy="21" r="2"/><circle cx="24" cy="27" r="2"/><circle cx="24" cy="33" r="2"/><circle cx="31" cy="21" r="2"/><circle cx="31" cy="27" r="2"/><circle cx="31" cy="33" r="2"/>' : '<path d="M10 6C10 4.89543 10.8954 4 12 4H36C37.1046 4 38 4.89543 38 6V42C38 43.1046 37.1046 44 36 44H12C10.8954 44 10 43.1046 10 42L10 6Z"/><path d="M17 12L31 12"/><circle cx="17" cy="21" r="2"/><circle cx="17" cy="27" r="2"/><circle cx="17" cy="33" r="2"/><circle cx="24" cy="21" r="2"/><circle cx="24" cy="27" r="2"/><circle cx="24" cy="33" r="2"/><circle cx="31" cy="21" r="2"/><circle cx="31" cy="27" r="2"/><circle cx="31" cy="33" r="2"/>';

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

module.exports = ComputerOne;
