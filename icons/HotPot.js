'use strict';

var React = require('react');

function HotPot(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,5.5v-3.5"/>   <path d="M16,5.5v-2"/>   <path d="M8,5.5v-2"/>   <path d="M5.2,19.5h13.5"/>   <path d="M6.5,15.2l-2,6.8"/>   <path d="M17.5,15.2l2,6.8"/>   <path d="M22,7.5H2c-.6,0-1,.4-1,1,0,3.1,1.9,5.9,5,7.6,1.8.9,3.8,1.4,6,1.4s4.2-.5,6-1.4c3.2-1.7,5-4.5,5-7.6s-.4-1-1-1ZM14,13.5h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M24 11V4"/><path d="M32 11L32 7"/><path d="M16 11L16 7"/><path d="M44 17H4C4 22.5856 7.57778 27.5028 13 30.3648C16.1558 32.0305 19.9364 33 24 33C28.0636 33 31.8442 32.0305 35 30.3648C40.4222 27.5028 44 22.5856 44 17Z"/><path d="M10.4668 39H37.5332"/><path d="M13 30.3647L9 44"/><path d="M35 30.3647L39 44"/><path d="M20 25H28"/>';

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

module.exports = HotPot;
