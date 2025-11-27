'use strict';

var React = require('react');

function Plug(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16.5,17l-.5,5h-8l-.5-5"/>   <path d="M21,6H3c-.6,0-1,.4-1,1v5c0,.2,0,.3.1.4,2.2,4.3,5.5,6.6,9.9,6.6s7.7-2.2,9.9-6.6.1-.3.1-.4v-5c0-.6-.4-1-1-1ZM13,13h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M8,2v4"/>   <path d="M16,2v4"/>' : '<path d="M6 14H42V24C38 32 32 36 24 36C16 36 10 32 6 24V14Z"/><path d="M33 34L32 44H16L15 34"/><path d="M22 24H26"/><path d="M16 4L16 12"/><path d="M32 4V12"/>';

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

module.exports = Plug;
