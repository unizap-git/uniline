'use strict';

var React = require('react');

function VrGlasses(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M23,5H1c-.6,0-1,.4-1,1v12c0,.6.4,1,1,1h8c.3,0,.5-.1.7-.3l2.3-2.3,2.3,2.3c.2.2.4.3.7.3h8c.6,0,1-.4,1-1V6c0-.6-.4-1-1-1ZM6.5,15c-1.7,0-3-1.3-3-3s1.3-3,3-3,3,1.3,3,3-1.3,3-3,3ZM17.5,15c-1.7,0-3-1.3-3-3s1.3-3,3-3,3,1.3,3,3-1.3,3-3,3Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12H46V36H30L24 30L18 36H2V12Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 28C15.2091 28 17 26.2091 17 24C17 21.7909 15.2091 20 13 20C10.7909 20 9 21.7909 9 24C9 26.2091 10.7909 28 13 28Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M35 28C37.2091 28 39 26.2091 39 24C39 21.7909 37.2091 20 35 20C32.7909 20 31 21.7909 31 24C31 26.2091 32.7909 28 35 28Z"/>';

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

module.exports = VrGlasses;
