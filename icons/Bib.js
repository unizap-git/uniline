'use strict';

var React = require('react');

function Bib(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15.8,1.3c-1.4-.4-2.6-.2-3.2.7-1,1.4.1,2.5.8,3.1s1.1,1.1,1.1,1.9c0,1.6-1.6,2-2.5,2s-2.5-.4-2.5-2,.4-1.4.9-2c.5-.6,1.4-1.7.5-3.1-.6-.8-1.7-1.1-2.9-.7-2.4.7-4.9,3.3-4.9,6.8v8c0,4.8,4.5,7,8.8,7s9.2-2.2,9.2-7v-8c0-3.4-2.7-6-5.2-6.7ZM15.2,16.7l-2.5,2.5c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-2.5-2.5c-.4-.4-.4-1,0-1.4l2.5-2.5c.4-.4,1-.4,1.4,0l2.5,2.5c.4.4.4,1,0,1.4Z"/>' : '<path d="M31 14.0001C31 22.0002 17 22.0002 17 14.0001C17 9.00016 22 8.00008 20 5.0001C18 2.0001 8 7.00005 8 16.0001V32C8 40.5 16.5 44 23.5 44C30.5 44.0001 40 41.0001 40 32V16.0002C40 7.00016 29 2.00012 27 5.0001C25 8.00008 31 9.00016 31 14.0001Z"/><path d="M19 32L24 27L29 32L24 37L19 32Z"/>';

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

module.exports = Bib;
