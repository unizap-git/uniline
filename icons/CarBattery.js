'use strict';

var React = require('react');

function CarBattery(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5.5,3H1.5v3h4v-3Z"/>   <path d="M21.5,3h-4v3h4v-3Z"/>   <path d="M21.5,5H1.5c-.6,0-1,.4-1,1v15c0,.6.4,1,1,1h20c.6,0,1-.4,1-1V6c0-.6-.4-1-1-1ZM7.5,11.5h-.5v.5c0,.6-.4,1-1,1s-1-.4-1-1v-.5h-.5c-.6,0-1-.4-1-1s.4-1,1-1h.5v-.5c0-.6.4-1,1-1s1,.4,1,1v.5h.5c.6,0,1,.4,1,1s-.4,1-1,1ZM18.5,11.5h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M43 12H3V42H43V12Z"/><path d="M11 6H3V12H11V6Z"/><path d="M43 6H35V12H43V6Z"/><path d="M9 21H15"/><path d="M31 21H37"/><path d="M12 18V24"/>';

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

module.exports = CarBattery;
