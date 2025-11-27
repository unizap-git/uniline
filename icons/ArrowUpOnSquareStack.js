'use strict';

var React = require('react');

function ArrowUpOnSquareStack(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10,1c.3-.3.8-.3,1.1,0l3,3c.3.3.3.8,0,1.1-.3.3-.7.3-1,0l-1.7-1.7v3.4h-1.5v-3.4l-1.7,1.7c-.3.3-.8.3-1.1,0-.3-.3-.3-.7,0-1,0,0,3-3,3-3ZM9.8,6.8v6c0,.4.3.8.8.8s.8-.3.8-.8v-6h3c1.7,0,3,1.3,3,3v7.5c0,1.7-1.3,3-3,3h-7.5c-1.7,0-3-1.3-3-3v-7.5c0-1.7,1.3-3,3-3h3Z"/>   <path d="M7.2,21.8c.5.9,1.5,1.5,2.6,1.5h7.5c1.7,0,3-1.3,3-3v-7.5c0-1.1-.6-2.1-1.5-2.6v7.1c0,2.5-2,4.5-4.5,4.5h-7.1Z"/>' : '<path d="M16.3,16.3h-1.3c-2.1,0-3.9,1.7-3.9,3.9v12.9c0,2.1,1.7,3.9,3.9,3.9h12.9c2.1,0,3.9-1.7,3.9-3.9v-12.9c0-2.1-1.7-3.9-3.9-3.9h-1.3M26.6,11.1l-5.2-5.2M21.4,5.9l-5.2,5.2M21.4,5.9v19.4M31.7,21.4h1.3c2.1,0,3.9,1.7,3.9,3.9v12.9c0,2.1-1.7,3.9-3.9,3.9h-12.9c-2.1,0-3.9-1.7-3.9-3.9v-1.3"/>';

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

module.exports = ArrowUpOnSquareStack;
