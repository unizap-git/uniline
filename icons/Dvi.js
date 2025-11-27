'use strict';

var React = require('react');

function Dvi(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,6H3c-1.1,0-2,.9-2,2v3.9c0,.1,0,.3,0,.4l.8,4.1c.2.9,1,1.6,2,1.6h16.4c.9,0,1.8-.7,2-1.6l.8-4.1c0-.1,0-.3,0-.4v-3.9c0-1.1-.9-2-2-2ZM8,13h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1ZM11.5,14.5h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM11.5,11.5h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM15,14.5h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM15,11.5h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM18.5,14.5h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM18.5,11.5h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M4 16C4 14.8954 4.89543 14 6 14H42C43.1046 14 44 14.8954 44 16V23.802C44 23.9337 43.987 24.065 43.9612 24.1942L42.3216 32.3922C42.1346 33.3271 41.3138 34 40.3604 34H7.63961C6.68624 34 5.86542 33.3271 5.67845 32.3922L4.03884 24.1942C4.01301 24.065 4 23.9337 4 23.802V16Z"/><path d="M10 24H16"/><path d="M21 21H23"/><path d="M21 27H23"/><path d="M28 21H30"/><path d="M28 27H30"/><path d="M35 21H37"/><path d="M35 27H37"/>';

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

module.exports = Dvi;
