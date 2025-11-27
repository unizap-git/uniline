'use strict';

var React = require('react');

function Tray(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.1,8.3l2.1-2.1-3.5-3.5-2.1,2.1"/>   <path d="M22.3,10.1L13.8,1.6c-.8-.8-2-.8-2.8,0L1.8,10.8c-.4.4-.6.9-.6,1.4s.2,1,.6,1.4l8.5,8.5c.4.4.9.6,1.4.6s1-.2,1.4-.6l9.2-9.2c.8-.8.8-2,0-2.8ZM11,14.5h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1ZM15,14.5h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM15,11.5h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<g clip-path="url(#icon-32cac1f8c94a8c2c)"><rect x="24.7617" y="3.24268" width="28" height="30" rx="2" transform="rotate(45 24.7617 3.24268)"/><path d="M38.1966 16.6775L42.4392 12.4348L35.3682 5.36377L31.1255 9.60641"/><path d="M18 21H30"/><path d="M18 27H22"/><path d="M28 27H30"/></g><defs><clipPath id="icon-32cac1f8c94a8c2c"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = Tray;
