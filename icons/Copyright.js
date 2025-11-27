'use strict';

var React = require('react');

function Copyright(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,9.5h-1v1.5h.5s0,0,0,0h.5c.9,0,1-.5,1-.8s-.1-.8-1-.8Z"/>   <path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM14.8,14.9c.3.4.2,1.1-.2,1.4-.2.1-.4.2-.6.2-.3,0-.6-.1-.8-.4l-2.2-3.1v2.5c0,.6-.4,1-1,1s-1-.4-1-1v-7c0-.6.4-1,1-1h2c2,0,3,1.4,3,2.8s-.6,2.1-1.7,2.5l1.5,2.1Z"/>' : '<circle cx="24" cy="24" r="20"/><path d="M24 17H20V24H23H24C27 24 28 22 28 20.5C28 19 27 17 24 17Z"/><path d="M20 31V24M20 24L20 17H24C27 17 28 19 28 20.5C28 22 27 24 24 24H23M20 24H23M28 31L23 24"/>';

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

module.exports = Copyright;
