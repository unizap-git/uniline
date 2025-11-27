'use strict';

var React = require('react');

function ShieldAdd(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.3,3.2L12.3.5c-.2,0-.4,0-.6,0L2.7,3.2c-.4.1-.7.5-.7,1v5.4c0,6.1,3.9,11.5,9.7,13.4.1,0,.2,0,.3,0s.2,0,.3,0c5.8-1.9,9.7-7.3,9.7-13.4v-5.4c0-.4-.3-.8-.7-1ZM16,12.5h-3v3c0,.6-.4,1-1,1s-1-.4-1-1v-3h-3c-.6,0-1-.4-1-1s.4-1,1-1h3v-3c0-.6.4-1,1-1s1,.4,1,1v3h3c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M6 8.25564L24.0086 3L42 8.25564V19.0337C42 30.3622 34.7502 40.4194 24.0026 44.0005C13.2521 40.4195 6 30.36 6 19.0287V8.25564Z"/><path d="M23.9497 14.9497V30.9497"/><path d="M15.9497 22.9497H31.9497"/>';

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

module.exports = ShieldAdd;
