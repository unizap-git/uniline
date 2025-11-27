'use strict';

var React = require('react');

function MessageUnread(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44 16V36H29L24 41L19 36H4V6H34"/><path d="M23 20H25.0025"/><path d="M33.001 20H34.9999"/><path d="M13.001 20H14.9999"/><circle cx="43" cy="7" r="3"/>' : '<path d="M44 16V36H29L24 41L19 36H4V6H34"/><path d="M23 20H25.0025"/><path d="M33.001 20H34.9999"/><path d="M13.001 20H14.9999"/><circle cx="43" cy="7" r="3"/>';

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

module.exports = MessageUnread;
