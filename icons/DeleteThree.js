'use strict';

var React = require('react');

function DeleteThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM7.8,7.8c.4-.4,1-.4,1.4,0l1,1c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-1-1c-.4-.4-.4-1,0-1.4ZM16.2,16.2c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-1-1c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1,1c.4.4.4,1,0,1.4ZM16.2,9.2l-7,7c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l7-7c.4-.4,1-.4,1.4,0s.4,1,0,1.4Z"/>' : '<circle cx="24" cy="24" r="20"/><path d="M17 31L31 17"/><path d="M19 19L17 17"/><path d="M31 31L29 29"/>';

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

module.exports = DeleteThree;
