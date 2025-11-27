'use strict';

var React = require('react');

function Harm(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.3,3.7L12.3,1c-.2,0-.4,0-.6,0L2.7,3.7c-.4.1-.7.5-.7,1v5.4c0,6.1,3.9,11.5,9.7,13.4.1,0,.2,0,.3,0s.2,0,.3,0c5.8-1.9,9.7-7.3,9.7-13.4v-5.4c0-.4-.3-.8-.7-1ZM15.5,14.2c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-2.1-2.1-2.1,2.1c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l2.1-2.1-2.1-2.1c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l2.1,2.1,2.1-2.1c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-2.1,2.1,2.1,2.1Z"/>' : '<path d="M6 9.25564L24.0086 4L42 9.25564V20.0337C42 31.3622 34.7502 41.4194 24.0026 45.0005C13.2521 41.4195 6 31.36 6 20.0287V9.25564Z"/><path d="M29.5 18.4082L18.1863 29.7219"/><path d="M18.1865 18.4085L29.5002 29.7222"/>';

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

module.exports = Harm;
