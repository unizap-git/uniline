'use strict';

var React = require('react');

function Blade(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,7.5h-.5v-.5c0-1.1-.9-2-2-2H5c-1.1,0-2,.9-2,2v.5c-1.1,0-2,.9-2,2v5c0,1.1.9,2,2,2v.5c0,1.1.9,2,2,2h13.5c1.1,0,2-.9,2-2v-.5h.5c1.1,0,2-.9,2-2v-5c0-1.1-.9-2-2-2ZM18,13h-1v1.5c0,.6-.4,1-1,1s-1-.4-1-1v-1.5h-1.3c-.3.6-1,1-1.7,1s-1.4-.4-1.7-1h-1.3v1.5c0,.6-.4,1-1,1s-1-.4-1-1v-1.5h-1c-.6,0-1-.4-1-1s.4-1,1-1h1v-1.5c0-.6.4-1,1-1s1,.4,1,1v1.5h1.3c.3-.6,1-1,1.7-1s1.4.4,1.7,1h1.3v-1.5c0-.6.4-1,1-1s1,.4,1,1v1.5h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M8 14V17H6C4.89543 17 4 17.8954 4 19V29C4 30.1046 4.89543 31 6 31H8V34C8 35.1046 8.89543 36 10 36H37C38.1046 36 39 35.1046 39 34V31H42C43.1046 31 44 30.1046 44 29V19C44 17.8954 43.1046 17 42 17H39V14C39 12.8954 38.1046 12 37 12H10C8.89543 12 8 12.8954 8 14Z"/><path d="M12 24H36"/><circle cx="24" cy="24" r="4"/><path d="M32 29V19"/><path d="M16 29V19"/>';

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

module.exports = Blade;
