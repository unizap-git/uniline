'use strict';

var React = require('react');

function AlignLeft(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18,19H6c-.6,0-1-.4-1-1s.4-1,1-1h12c.6,0,1,.4,1,1s-.4,1-1,1ZM14,15H6c-.6,0-1-.4-1-1s.4-1,1-1h8c.6,0,1,.4,1,1s-.4,1-1,1ZM18,11H6c-.6,0-1-.4-1-1s.4-1,1-1h12c.6,0,1,.4,1,1s-.4,1-1,1ZM14,7H6c-.6,0-1-.4-1-1s.4-1,1-1h8c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M6 6h8m-8 4h12M6 14h8m-8 4h12"/>';

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

module.exports = AlignLeft;
