'use strict';

var React = require('react');

function KeyboardOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="4" y="18" width="40" height="24" rx="2"/><circle cx="14" cy="24" r="2"/><circle cx="16" cy="30" r="2"/><circle cx="10" cy="30" r="2"/><circle cx="20" cy="24" r="2"/><circle cx="22" cy="30" r="2"/><circle cx="26" cy="24" r="2"/><circle cx="28" cy="30" r="2"/><circle cx="32" cy="24" r="2"/><circle cx="34" cy="30" r="2"/><circle cx="38" cy="24" r="2"/><path d="M17 36H31"/><path d="M33 18V13.125C33 12.5727 33.4477 12.125 34 12.125H39C39.5523 12.125 40 11.6773 40 11.125V6"/>' : '<rect x="4" y="18" width="40" height="24" rx="2"/><circle cx="14" cy="24" r="2"/><circle cx="16" cy="30" r="2"/><circle cx="10" cy="30" r="2"/><circle cx="20" cy="24" r="2"/><circle cx="22" cy="30" r="2"/><circle cx="26" cy="24" r="2"/><circle cx="28" cy="30" r="2"/><circle cx="32" cy="24" r="2"/><circle cx="34" cy="30" r="2"/><circle cx="38" cy="24" r="2"/><path d="M17 36H31"/><path d="M33 18V13.125C33 12.5727 33.4477 12.125 34 12.125H39C39.5523 12.125 40 11.6773 40 11.125V6"/>';

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

module.exports = KeyboardOne;
