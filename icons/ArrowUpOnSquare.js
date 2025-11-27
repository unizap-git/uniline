'use strict';

var React = require('react');

function ArrowUpOnSquare(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M11.5,1.7c.3-.3.8-.3,1.1,0l3,3c.3.3.3.8,0,1.1-.3.3-.7.3-1,0l-1.7-1.7v3.4h-1.5v-3.4l-1.7,1.7c-.3.3-.8.3-1.1,0-.3-.3-.3-.7,0-1,0,0,3-3,3-3ZM11.2,7.5v7.5c0,.4.3.8.8.8s.8-.3.8-.8v-7.5h3.8c1.7,0,3,1.3,3,3v9c0,1.7-1.3,3-3,3H7.5c-1.7,0-3-1.3-3-3v-9c0-1.7,1.3-3,3-3h3.8Z"/>' : '<path d="M18.4,17h-2.8c-2.3,0-4.2,1.9-4.2,4.2v16.9c0,2.3,1.9,4.2,4.2,4.2h16.9c2.3,0,4.2-1.9,4.2-4.2v-16.9c0-2.3-1.9-4.2-4.2-4.2h-2.8M29.6,11.3l-5.6-5.6M24,5.7l-5.6,5.6M24,5.7v23.9"/>';

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

module.exports = ArrowUpOnSquare;
