'use strict';

var React = require('react');

function List(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19,17h-10c-.6,0-1-.4-1-1s.4-1,1-1h10c.6,0,1,.4,1,1s-.4,1-1,1ZM5,17c-.6,0-1-.4-1-1s.4-1,1-1h0c.6,0,1,.4,1,1s-.4,1-1,1ZM19,13h-10c-.6,0-1-.4-1-1s.4-1,1-1h10c.6,0,1,.4,1,1s-.4,1-1,1ZM5,13c-.6,0-1-.4-1-1s.4-1,1-1h0c.6,0,1,.4,1,1s-.4,1-1,1ZM19,9h-10c-.6,0-1-.4-1-1s.4-1,1-1h10c.6,0,1,.4,1,1s-.4,1-1,1ZM5,9c-.6,0-1-.4-1-1s.4-1,1-1h0c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = List;
