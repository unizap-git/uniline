'use strict';

var React = require('react');

function Planet(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18.8,7.8c2.1.2,3.6.8,3.8,1.9.6,2.1-3.7,5.1-9.6,6.7-5.9,1.6-11.1,1.1-11.7-1-.3-1.1.7-2.5,2.6-3.7"/>   <g>     <path d="M5.4,15.3c2,.2,4.5-.1,7.1-.8,2.6-.7,5-1.7,6.6-2.9,1.1-.8,1.5-1.3,1.6-1.5,0-.1,0-.2,0-.3-1-3.8-4.5-6.7-8.7-6.7S3,7,3,12s.2,1.9.5,2.8c.3.1.9.4,1.9.4Z"/>     <path d="M13.6,18.3c-2.4.6-4.7,1-6.8,1,1.5,1.1,3.3,1.7,5.3,1.7,3.7,0,6.9-2.2,8.3-5.4-1.9,1.1-4.2,2-6.7,2.7Z"/>   </g>   <path d="M22.6,9.7c.6,2.1-3.7,5.1-9.6,6.7-5.9,1.6-11.1,1.1-11.7-1"/>' : '<path d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40Z"/><path d="M37.5641 15.5098C41.7833 15.878 44.6787 17.1724 45.2504 19.306C46.3939 23.5737 37.8068 29.5827 26.0705 32.7274C14.3343 35.8721 3.89316 34.9617 2.74963 30.694C2.1505 28.458 4.22245 25.744 8.01894 23.2145"/>';

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

module.exports = Planet;
