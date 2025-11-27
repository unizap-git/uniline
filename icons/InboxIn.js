'use strict';

var React = require('react');

function InboxIn(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5 30L10 6H38L43 30"/><path d="M5 30H14.9091L16.7273 36H31.2727L33.0909 30H43V43H5V30Z"/><path d="M18 20L24 26L30 20"/><path d="M24 26V14"/>' : '<path d="M5 30L10 6H38L43 30"/><path d="M5 30H14.9091L16.7273 36H31.2727L33.0909 30H43V43H5V30Z"/><path d="M18 20L24 26L30 20"/><path d="M24 26V14"/>';

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

module.exports = InboxIn;
