'use strict';

var React = require('react');

function AddPrint(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6,9.5h-3V3h18v6.5h-3"/>   <path d="M18,5H6c-.6,0-1,.4-1,1v16c0,.4.2.7.6.9.3.2.7.1,1,0l2.4-1.8,2.4,1.8c.4.3.8.3,1.2,0l2.4-1.8,2.4,1.8c.2.1.4.2.6.2s.3,0,.5-.1c.3-.2.5-.5.5-.9V6c0-.6-.4-1-1-1ZM14,14h-1v1c0,.6-.4,1-1,1s-1-.4-1-1v-1h-1c-.6,0-1-.4-1-1s.4-1,1-1h1v-1c0-.6.4-1,1-1s1,.4,1,1v1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M12 19H6V6H42V19H36"/><path d="M12 12H36V44L30 39.5556L24 44L18 39.5556L12 44V12Z"/><path d="M20 26H28"/><path d="M24 22L24 30"/>';

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

module.exports = AddPrint;
