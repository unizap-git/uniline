'use strict';

var React = require('react');

function TestTube(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9,2h6"/>   <path d="M15,4h-6c-.6,0-1,.4-1,1v14c0,2.2,1.8,4,4,4s4-1.8,4-4V5c0-.6-.4-1-1-1ZM13,14c0,.6-.4,1-1,1s-1-.4-1-1v-.5c0-.6.4-1,1-1s1,.4,1,1v.5ZM13,10.5c0,.6-.4,1-1,1s-1-.4-1-1v-1.5c0-.6.4-1,1-1s1,.4,1,1v1.5Z"/>   <path d="M15,18.5h-5.5c-.6,0-1-.4-1-1s.4-1,1-1h5.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M18 4H30"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 44C27.3137 44 30 41.3137 30 38V10H18V38C18 41.3137 20.6863 44 24 44Z"/><path d="M24 27V28"/><path d="M24 18V21"/><path d="M19 35H30"/>';

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

module.exports = TestTube;
