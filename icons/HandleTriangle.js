'use strict';

var React = require('react');

function HandleTriangle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<polygon points="7.8 14.5 16.2 14.5 12 7.4 7.8 14.5"/>   <path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM18.9,16c-.2.3-.5.5-.9.5H6c-.4,0-.7-.2-.9-.5-.2-.3-.2-.7,0-1l6-10c.4-.6,1.4-.6,1.7,0l6,10c.2.3.2.7,0,1Z"/>' : '<circle cx="24" cy="24" r="20"/><path d="M12 31L24 11L36 31H12Z"/>';

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

module.exports = HandleTriangle;
