'use strict';

var React = require('react');

function HandleX(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM17.2,15.8c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-3.8-3.8-3.8,3.8c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l3.8-3.8-3.8-3.8c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l3.8,3.8,3.8-3.8c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-3.8,3.8,3.8,3.8Z"/>' : '<circle cx="24" cy="24" r="20"/><path d="M33 15L15 33"/><path d="M15 15L33 33"/>';

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

module.exports = HandleX;
