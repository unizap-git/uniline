'use strict';

var React = require('react');

function EmailPush(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M36 15H44V28V41H4V28V15H12"/><path d="M24 19V5"/><path d="M30 11L24 5L18 11"/><path d="M4 15L24 30L44 15"/>' : '<path d="M36 15H44V28V41H4V28V15H12"/><path d="M24 19V5"/><path d="M30 11L24 5L18 11"/><path d="M4 15L24 30L44 15"/>';

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

module.exports = EmailPush;
