'use strict';

var React = require('react');

function UsbTypeC(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16.5,6.5H7.5C3.2,6.5.9,9.3.9,12s2.3,5.5,6.6,5.5h9c4.3,0,6.6-2.8,6.6-5.5s-2.3-5.5-6.6-5.5ZM18,13h-.5v.5c0,.6-.4,1-1,1s-1-.4-1-1v-.5h-1v.5c0,.6-.4,1-1,1s-1-.4-1-1v-.5h-1v.5c0,.6-.4,1-1,1s-1-.4-1-1v-.5h-1v.5c0,.6-.4,1-1,1s-1-.4-1-1v-.5h-.5c-.6,0-1-.4-1-1s.4-1,1-1h.5v-.5c0-.6.4-1,1-1s1,.4,1,1v.5h1v-.5c0-.6.4-1,1-1s1,.4,1,1v.5h1v-.5c0-.6.4-1,1-1s1,.4,1,1v.5h1v-.5c0-.6.4-1,1-1s1,.4,1,1v.5h.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M15 15H33C48 15 48 33 33 33H15C-1.23978e-05 33 -2.86102e-06 15 15 15Z"/><path d="M21 27V21"/><path d="M27 27V21"/><path d="M33 27V21"/><path d="M15 27V21"/><path d="M36 24L12 24"/>';

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

module.exports = UsbTypeC;
