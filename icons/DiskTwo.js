'use strict';

var React = require('react');

function DiskTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="4" y="13" width="32" height="22" rx="2"/><path d="M4 13H14V35H4V13Z"/><path d="M36 19H44V29H36"/><circle cx="30" cy="21" r="2"/><circle cx="30" cy="27" r="2"/>' : '<rect x="4" y="13" width="32" height="22" rx="2"/><path d="M4 13H14V35H4V13Z"/><path d="M36 19H44V29H36"/><circle cx="30" cy="21" r="2"/><circle cx="30" cy="27" r="2"/>';

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

module.exports = DiskTwo;
