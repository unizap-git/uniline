'use strict';

var React = require('react');

function DeleteOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7.5,6l.6-3.5h7.8l.6,3.5"/>   <path d="M3,6h18" stroke-miterlimit="2"/>   <path d="M19.2,5.3c-.2-.2-.5-.3-.7-.3H5.5c-.3,0-.5.1-.7.3s-.3.5-.3.7l1,15.5c0,.5.5.9,1,.9h11c.5,0,1-.4,1-.9l1-15.5c0-.3,0-.5-.3-.7ZM14.5,18.5h-5c-.6,0-1-.4-1-1s.4-1,1-1h5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M15 12L16.2 5H31.8L33 12"/><path d="M6 12H42"/><path fill-rule="evenodd" clip-rule="evenodd" d="M37 12L35 43H13L11 12H37Z"/><path d="M19 35H29"/>';

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

module.exports = DeleteOne;
