'use strict';

var React = require('react');

function MacFinder(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17,21h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M15,5h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M21,3H3c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h11c-.5,0-1-.4-1-.9l-.2-3.1c-.3,0-.5,0-.8,0-3.7,0-6-1.6-6.1-1.7-.4-.3-.6-.9-.2-1.4.3-.4.9-.6,1.4-.2,0,0,1.9,1.3,4.9,1.3s.4,0,.7,0v-1.5h-2.2c-.5,0-.9-.4-1-.9-.5-3.8,2-8.9,2.1-9.1.2-.5.8-.7,1.3-.4.5.2.7.8.4,1.3,0,0-2,4-2,7.1h2.1c.5,0,1,.4,1,.9v2.2c1.6-.4,2.4-1,2.4-1,.5-.3,1.1-.2,1.4.2.3.4.2,1.1-.2,1.4,0,0-1.3.9-3.3,1.4l.2,3.3c0,.6-.4,1-.9,1.1,0,0,0,0,0,0h7c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2ZM8,9c0,.6-.4,1-1,1s-1-.4-1-1v-1c0-.6.4-1,1-1s1,.4,1,1v1ZM18,9c0,.6-.4,1-1,1s-1-.4-1-1v-1c0-.6.4-1,1-1s1,.4,1,1v1Z"/>' : '<path d="M44 38V10C44 8.89543 43.1046 8 42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38Z"/><path d="M24.9999 8C24.9999 8 19.9999 18 20.9999 25H26.9999L27.9999 40"/><path d="M34 40H22"/><path d="M30 8H18"/><path d="M34 16V18"/><path d="M14 16V18"/><path d="M13 29C13 29 17.1905 32 24 32C30.8095 32 35 29 35 29"/>';

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

module.exports = MacFinder;
