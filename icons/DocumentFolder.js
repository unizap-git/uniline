'use strict';

var React = require('react');

function DocumentFolder(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5,3l4,.5-1.8,17.5-4.2-.5L5,3Z"/>   <path d="M21,2h-10c-.6,0-1,.4-1,1v18c0,.6.4,1,1,1h10c.6,0,1-.4,1-1V3c0-.6-.4-1-1-1ZM14.5,9c0,.6-.4,1-1,1s-1-.4-1-1v-1.5c0-.6.4-1,1-1s1,.4,1,1v1.5ZM19.5,9c0,.6-.4,1-1,1s-1-.4-1-1v-1.5c0-.6.4-1,1-1s1,.4,1,1v1.5Z"/>' : '<path d="M32 6H22V42H32V6Z"/><path d="M42 6H32V42H42V6Z"/><path d="M10 6L18 7L14.5 42L6 41L10 6Z"/><path d="M37 18V15"/><path d="M27 18V15"/>';

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

module.exports = DocumentFolder;
