'use strict';

var React = require('react');

function InboxSuccess(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 30L9 6H39L44 30"/><path d="M4 30H14.9091L16.7273 36H31.2727L33.0909 30H44V43H4V30Z"/><path d="M19 19.2143L23 24L31 16"/>' : '<path d="M4 30L9 6H39L44 30"/><path d="M4 30H14.9091L16.7273 36H31.2727L33.0909 30H44V43H4V30Z"/><path d="M19 19.2143L23 24L31 16"/>';

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

module.exports = InboxSuccess;
