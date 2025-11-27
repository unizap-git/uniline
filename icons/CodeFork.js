'use strict';

var React = require('react');

function CodeFork(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5,6c0-1.7,1.3-3,3-3,1.7,0,3,1.3,3,3,0,1.3-.8,2.4-2,2.8v1.2c0,.6.4,1,1,1h4c.6,0,1-.4,1-1v-1.2c-1.6-.6-2.4-2.3-1.8-3.8.6-1.6,2.3-2.4,3.8-1.8s2.4,2.3,1.8,3.8c-.3.9-1,1.5-1.8,1.8v1.2c0,1.7-1.3,3-3,3h-1v2.2c1.6.6,2.4,2.3,1.8,3.8-.6,1.6-2.3,2.4-3.8,1.8s-2.4-2.3-1.8-3.8c.3-.9,1-1.5,1.8-1.8v-2.2h-1c-1.7,0-3-1.3-3-3v-1.2c-1.2-.4-2-1.6-2-2.8Z" fill-rule="evenodd"/>' : '<path d="M24,24v9M24,33c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5,4.5-2,4.5-4.5-2-4.5-4.5-4.5ZM15,15c2.5,0,4.5-2,4.5-4.5s-2-4.5-4.5-4.5-4.5,2-4.5,4.5,2,4.5,4.5,4.5ZM15,15v4.5c0,2.5,2,4.5,4.5,4.5h9c2.5,0,4.5-2,4.5-4.5v-4.5M33,15c2.5,0,4.5-2,4.5-4.5s-2-4.5-4.5-4.5-4.5,2-4.5,4.5,2,4.5,4.5,4.5Z"/>';

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

module.exports = CodeFork;
