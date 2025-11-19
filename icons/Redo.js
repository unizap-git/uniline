'use strict';

var React = require('react');

function Redo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17,20h-9c-3.3,0-6-2.7-6-6s2.7-6,6-6h10.6l-2.3-2.3c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l4,4c0,0,.2.2.2.3,0,.1,0,.2,0,.4h0c0,.1,0,.3,0,.4,0,.1-.1.2-.2.3l-4,4c-.4.4-1,.4-1.4,0s-.4-1,0-1.4l2.3-2.3h-10.6c-2.2,0-4,1.8-4,4s1.8,4,4,4h9c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M21 9H8a5 5 0 0 0 0 10h9m4-10-4-4m4 4-4 4"/>';

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

module.exports = Redo;
