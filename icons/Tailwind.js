'use strict';

var React = require('react');

function Tailwind(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M11.8,5.7c-2.4,0-4.5,1.8-4.8,4.2.6-1,1.6-1.6,2.7-1.7,1.7,0,3,2,3.8,2.6,1.5,1.2,3.5,1.6,5.4.9,2-.6,2.9-2.9,3.1-3.9-1,1.4-2.4,2.2-4.3,1.2-1.3-.7-2.2-3.4-6-3.3ZM6.8,12c-2.4,0-4.5,1.8-4.8,4.2.6-1,1.6-1.6,2.7-1.7,1.7,0,3,2,3.8,2.6,1.5,1.2,3.5,1.6,5.4.9,2-.6,2.9-2.9,3.1-3.9-1,1.4-2.4,2.2-4.3,1.2-1.3-.7-2.2-3.4-6-3.3Z"/>' : '<path d="M24,13c-6.6,0-8.8,4.9-9.1,7.3,0,0,1.5-2.9,5.3-2.9s4.9,6.6,13.2,6.6,8.8-4.6,9-6.8c0,0-1.5,2.6-5.1,2.6s-5.1-6.8-13.2-6.8Z"/>   <path d="M14.9,24c-6.6,0-8.8,4.9-9.1,7.3,0,0,1.5-2.9,5.3-2.9s4.9,6.6,13.2,6.6,8.8-4.6,9-6.8c0,0-1.5,2.6-5.1,2.6s-5.1-6.8-13.2-6.8Z"/>';

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

module.exports = Tailwind;
