'use strict';

var React = require('react');

function MedicalMark(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4,2v20"/>   <path d="M4,9.5h4"/>   <path d="M4,14.5h4"/>   <path d="M18.5,5h-9c-1.4,0-2.5,1.1-2.5,2.5v9c0,1.4,1.1,2.5,2.5,2.5h9c1.4,0,2.5-1.1,2.5-2.5V7.5c0-1.4-1.1-2.5-2.5-2.5ZM17,13h-2v2c0,.6-.4,1-1,1s-1-.4-1-1v-2h-2c-.6,0-1-.4-1-1s.4-1,1-1h2v-2c0-.6.4-1,1-1s1,.4,1,1v2h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M16 15C16 13.3431 17.3431 12 19 12H37C38.6569 12 40 13.3431 40 15V33C40 34.6569 38.6569 36 37 36H19C17.3431 36 16 34.6569 16 33V15Z"/><path d="M8 4L8 44"/><path d="M8 19L16 19"/><path d="M8 29L16 29"/><path d="M22 24L34 24"/><path d="M28 18V30"/>';

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

module.exports = MedicalMark;
