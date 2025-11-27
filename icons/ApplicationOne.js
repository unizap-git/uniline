'use strict';

var React = require('react');

function ApplicationOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,6.1L12.5,1.1c-.3-.2-.7-.2-1,0L3,6.1c-.3.2-.5.5-.5.9v10c0,.4.2.7.5.9l8.5,5c.2,0,.3.1.5.1s.4,0,.5-.1l8.5-5c.3-.2.5-.5.5-.9V7c0-.4-.2-.7-.5-.9ZM16.5,10.3l-3.5,2.2v3.9c0,.6-.4,1-1,1s-1-.4-1-1v-3.9l-3.5-2.2c-.5-.3-.6-.9-.3-1.4.3-.5.9-.6,1.4-.3l3.5,2.2,3.5-2.2c.5-.3,1.1-.1,1.4.3s.2,1.1-.3,1.4Z"/>' : '<path d="M41 13.9997L24 4L7 13.9997V33.9998L24 44L41 33.9998V13.9997Z"/><path d="M16 18.9976L23.9932 24.0002L31.9951 18.9976"/><path d="M24 24V33"/>';

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

module.exports = ApplicationOne;
