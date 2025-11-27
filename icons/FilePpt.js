'use strict';

var React = require('react');

function FilePpt(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M25 41H38V34"/><path d="M25 7H38V14"/><path d="M25 34.2432V44L10 38.6187V34"/><path d="M25 13.973V4L10 9.38125V13.973"/><rect x="4" y="14" width="40" height="20" rx="2"/><path d="M10 19V29"/><path d="M21 19V29"/><path d="M35 20V28"/><path d="M32 20H35H38"/><path d="M10 19H13C14.6569 19 16 20.3431 16 22V22C16 23.6569 14.6569 25 13 25H10"/><path d="M21 19H24C25.6569 19 27 20.3431 27 22V22C27 23.6569 25.6569 25 24 25H21"/>' : '<path d="M25 41H38V34"/><path d="M25 7H38V14"/><path d="M25 34.2432V44L10 38.6187V34"/><path d="M25 13.973V4L10 9.38125V13.973"/><rect x="4" y="14" width="40" height="20" rx="2"/><path d="M10 19V29"/><path d="M21 19V29"/><path d="M35 20V28"/><path d="M32 20H35H38"/><path d="M10 19H13C14.6569 19 16 20.3431 16 22V22C16 23.6569 14.6569 25 13 25H10"/><path d="M21 19H24C25.6569 19 27 20.3431 27 22V22C27 23.6569 25.6569 25 24 25H21"/>';

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

module.exports = FilePpt;
