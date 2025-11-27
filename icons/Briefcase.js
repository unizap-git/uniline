'use strict';

var React = require('react');

function Briefcase(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10,2c-1.7,0-3,1.3-3,3v1h-2c-1.7,0-3,1.3-3,3v2.4l1.4.7h0s0,0,0,0h.1c.1.1.3.2.5.3.4.2,1.1.4,1.8.7,1.6.5,3.7,1,6.1,1s4.5-.5,6.1-1c.8-.2,1.4-.5,1.8-.7.2,0,.4-.2.6-.3h0s0,0,0,0l1.4-.7v-2.4c0-1.7-1.3-3-3-3h-2v-1c0-1.7-1.3-3-3-3h-4ZM15,6v-1c0-.6-.4-1-1-1h-4c-.6,0-1,.4-1,1v1h6ZM21.4,13.9l.6-.3v5.4c0,1.7-1.3,3-3,3H5c-1.7,0-3-1.3-3-3v-5.4l.6.3h0s0,0,0,0h0s0,0,0,0h.2c.1.1.3.2.6.3.5.2,1.2.5,2,.7,1.7.5,4,1,6.7,1s5-.5,6.7-1c.7-.2,1.4-.4,2-.7.2,0,.5-.2.7-.3h0s0,0,0,0h0s0,0,0,0h0ZM12,10c-.6,0-1,.4-1,1s.4,1,1,1h0c.6,0,1-.4,1-1s-.4-1-1-1h0Z" fill-rule="evenodd"/>' : '<path d="M32 16C32 9.92487 28.4183 4 24 4C19.5817 4 16 9.92487 16 16"/><path d="M9 16H39L40 28H27V25H21V28H8L9 16Z"/><path d="M8 28L6 42H42L40 28"/><path d="M21 25H27V31H21V25Z"/>';

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

module.exports = Briefcase;
