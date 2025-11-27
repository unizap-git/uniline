'use strict';

var React = require('react');

function ArrowDownOnSquareStack(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9.8,6.8h-3c-1.7,0-3,1.3-3,3v7.5c0,1.7,1.3,3,3,3h7.5c1.7,0,3-1.3,3-3v-7.5c0-1.7-1.3-3-3-3h-3V1.5c0-.4-.3-.8-.8-.8s-.8.3-.8.8v5.2ZM9.8,6.8h1.5v5.7l1.7-1.7c.3-.3.8-.3,1.1,0s.3.8,0,1.1c0,0,0,0,0,0l-3,3c-.3.3-.8.3-1.1,0l-3-3c-.3-.3-.3-.8,0-1.1s.8-.3,1.1,0c0,0,0,0,0,0l1.7,1.7s0-5.7,0-5.7Z" fill-rule="evenodd"/>   <path d="M7.2,21.8c.5.9,1.5,1.5,2.6,1.5h7.5c1.7,0,3-1.3,3-3v-7.5c0-1.1-.6-2.1-1.5-2.6v7.1c0,2.5-2,4.5-4.5,4.5h-7.1Z"/>' : '<path d="M16.2,16.2h-1.3c-2.1,0-3.9,1.7-3.9,3.9v13c0,2.1,1.7,3.9,3.9,3.9h13c2.1,0,3.9-1.7,3.9-3.9v-13c0-2.1-1.7-3.9-3.9-3.9h-1.3M16.2,22.7l5.2,5.2M21.4,27.9l5.2-5.2M21.4,27.9V5.9M31.8,21.4h1.3c2.1,0,3.9,1.7,3.9,3.9v13c0,2.1-1.7,3.9-3.9,3.9h-13c-2.1,0-3.9-1.7-3.9-3.9v-1.3"/>';

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

module.exports = ArrowDownOnSquareStack;
