'use strict';

var React = require('react');

function DroneOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M29 18V16C29 13.2386 26.7614 11 24 11V11C21.2386 11 19 13.2386 19 16V18"/><path d="M17 18H31L28.8462 25H19.1538L17 18Z"/><rect x="5" y="22" width="7" height="7"/><rect x="36" y="22" width="7" height="7"/><path d="M16 8L4 8"/><path d="M30 33L34 40"/><path d="M18 33L14 40"/><path d="M44 8L32 8"/>' : '<path d="M29 18V16C29 13.2386 26.7614 11 24 11V11C21.2386 11 19 13.2386 19 16V18"/><path d="M17 18H31L28.8462 25H19.1538L17 18Z"/><rect x="5" y="22" width="7" height="7"/><rect x="36" y="22" width="7" height="7"/><path d="M16 8L4 8"/><path d="M30 33L34 40"/><path d="M18 33L14 40"/><path d="M44 8L32 8"/>';

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

module.exports = DroneOne;
