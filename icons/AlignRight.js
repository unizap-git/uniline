'use strict';

var React = require('react');

function AlignRight(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18,19H6c-.6,0-1-.4-1-1s.4-1,1-1h12c.6,0,1,.4,1,1s-.4,1-1,1ZM18,15h-8c-.6,0-1-.4-1-1s.4-1,1-1h8c.6,0,1,.4,1,1s-.4,1-1,1ZM18,11H6c-.6,0-1-.4-1-1s.4-1,1-1h12c.6,0,1,.4,1,1s-.4,1-1,1ZM18,7h-8c-.6,0-1-.4-1-1s.4-1,1-1h8c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M18 6h-8m8 4H6m12 4h-8m8 4H6"/>';

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

module.exports = AlignRight;
