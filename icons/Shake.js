'use strict';

var React = require('react');

function Shake(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2,5l2,2.3-2,2.3,2,2.3-2,2.3,2,2.3-2,2.3"/>   <path d="M22,5l-2,2.3,2,2.3-2,2.3,2,2.3-2,2.3,2,2.3"/>   <path d="M17,2H7c-.6,0-1,.4-1,1v18c0,.6.4,1,1,1h10c.6,0,1-.4,1-1V3c0-.6-.4-1-1-1ZM13,18.5h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M4 10L8 14.6667L4 19.3333L8 24L4 28.6667L8 33.3333L4 38"/><path d="M44 10L40 14.6667L44 19.3333L40 24L44 28.6667L40 33.3333L44 38"/><path d="M34 6H14V42H34V6Z"/><path d="M22 35H26"/>';

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

module.exports = Shake;
