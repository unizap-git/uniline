'use strict';

var React = require('react');

function Cones(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.8,19.5L12.8,3.5c-.4-.6-1.3-.6-1.7,0L1.2,19.5c-.2.3-.2.7,0,1,.2.3.5.5.9.5h20c.4,0,.7-.2.9-.5.2-.3.2-.7,0-1ZM15.8,16.6c-.2.3-.5.4-.8.4s-.4,0-.6-.2l-2.4-1.6-2.4,1.6c-.5.3-1.1.2-1.4-.3-.3-.5-.2-1.1.3-1.4l2.6-1.7v-2.5c0-.6.4-1,1-1s1,.4,1,1v2.5l2.6,1.7c.5.3.6.9.3,1.4Z"/>' : '<path d="M24 8L4 40H44L24 8Z"/><path d="M30 32L24 28L18 32"/><path d="M24 28V22"/>';

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

module.exports = Cones;
