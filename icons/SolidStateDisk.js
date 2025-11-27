'use strict';

var React = require('react');

function SolidStateDisk(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2,14.5L4.5,2.5h15l2.5,12"/>   <path d="M22,13.5H2c-.6,0-1,.4-1,1v6.5c0,.6.4,1,1,1h20c.6,0,1-.4,1-1v-6.5c0-.6-.4-1-1-1ZM13.5,18.8H5c-.6,0-1-.4-1-1s.4-1,1-1h8.5c.6,0,1,.4,1,1s-.4,1-1,1ZM17.8,19c-.7,0-1.2-.6-1.2-1.2s.6-1.2,1.2-1.2,1.2.6,1.2,1.2-.6,1.2-1.2,1.2Z"/>' : '<path d="M44 29H4V42H44V29Z"/><path d="M35.5 38C36.8807 38 38 36.8807 38 35.5C38 34.1193 36.8807 33 35.5 33C34.1193 33 33 34.1193 33 35.5C33 36.8807 34.1193 38 35.5 38Z"/><path d="M4 28.9998L9.03837 4.99902H39.0205L44 28.9998"/><path d="M10 35.5H27"/>';

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

module.exports = SolidStateDisk;
