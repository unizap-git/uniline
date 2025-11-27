'use strict';

var React = require('react');

function StopwatchStart(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9,2h6"/>   <path d="M12,4c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5,9.5-4.3,9.5-9.5-4.3-9.5-9.5-9.5ZM16,14.5h-4c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v3h3c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M12,2v2"/>' : '<path d="M24 44C33.3888 44 41 36.3888 41 27C41 17.6112 33.3888 10 24 10C14.6112 10 7 17.6112 7 27C7 36.3888 14.6112 44 24 44Z"/><path d="M18 4H30"/><path d="M24 19V27"/><path d="M32 27H24"/><path d="M24 4V8"/>';

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

module.exports = StopwatchStart;
