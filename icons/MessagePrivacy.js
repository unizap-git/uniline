'use strict';

var React = require('react');

function MessagePrivacy(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M25.5 37H21L11 42V37H4V7H44V18"/><rect x="30" y="27" width="14" height="8"/><path d="M40 27V24C40 22.3431 38.6569 21 37 21C35.3431 21 34 22.3431 34 24V27"/><path d="M12 15H15L18 15"/><path d="M12 21H18L24 21"/>' : '<path d="M25.5 37H21L11 42V37H4V7H44V18"/><rect x="30" y="27" width="14" height="8"/><path d="M40 27V24C40 22.3431 38.6569 21 37 21C35.3431 21 34 22.3431 34 24V27"/><path d="M12 15H15L18 15"/><path d="M12 21H18L24 21"/>';

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

module.exports = MessagePrivacy;
