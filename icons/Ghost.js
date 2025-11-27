'use strict';

var React = require('react');

function Ghost(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C7,1,3,5,3,10v12c0,.4.2.8.6.9.4.2.8,0,1.1-.2l1.3-1.3,1.3,1.3c.2.2.5.3.8.3.3,0,.6-.2.7-.4l1.2-1.8,1.2,1.8c.4.6,1.3.6,1.7,0l1.2-1.8,1.2,1.8c.2.2.4.4.7.4.3,0,.6,0,.8-.3l1.3-1.3,1.3,1.3c.2.2.4.3.7.3s.3,0,.4,0c.4-.2.6-.5.6-.9v-12c0-5-4-9-9-9ZM10.5,11h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM16.5,11h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M8 44L12 40L16 44L20 38L24 44L28 38L32 44L36 40L40 44V20C40 11.1634 32.8366 4 24 4C15.1634 4 8 11.1634 8 20V44Z"/><path d="M19 20H21"/><path d="M31 20H33"/>';

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

module.exports = Ghost;
