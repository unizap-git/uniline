'use strict';

var React = require('react');

function SettingWeb(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,20H3.5c-.8,0-1.5-.7-1.5-1.5V5.5c0-.8.7-1.5,1.5-1.5h17c.8,0,1.5.7,1.5,1.5v6"/>   <path d="M20.5,3H3.5c-1.4,0-2.5,1.1-2.5,2.5v5.5h22v-5.5c0-1.4-1.1-2.5-2.5-2.5ZM5,8c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM8,8c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>   <circle cx="18.5" cy="17" r="1.5" stroke-miterlimit="2"/>   <path d="M18.5,20.5v-2"/>   <path d="M18.5,15.5v-2"/>   <path d="M15.5,18.8l1.7-1"/>   <path d="M19.8,16.2l1.7-1"/>   <path d="M15.5,15.2l1.7,1"/>   <path d="M19.8,17.8l1.7,1"/>' : '<path d="M24 40H7C5.34315 40 4 38.6569 4 37V11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V23.0588"/><path d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z"/><circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)"/><circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)"/><circle cx="37" cy="34" r="3"/><path d="M37 41V37"/><path d="M37 31V27"/><path d="M30.9378 37.5L34.4019 35.5"/><path d="M39.5979 32.5L43.062 30.5"/><path d="M30.9378 30.5L34.4019 32.5"/><path d="M39.5979 35.5L43.062 37.5"/>';

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

module.exports = SettingWeb;
