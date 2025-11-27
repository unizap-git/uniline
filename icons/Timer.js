'use strict';

var React = require('react');

function Timer(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M14,2h-4"/>   <path d="M12,2v4"/>   <path d="M17.5,8l1.5-1.5"/>   <path d="M12,5c-5,0-9,4-9,9s4,9,9,9,9-4,9-9-4-9-9-9ZM13,14c0,.6-.4,1-1,1h-3c-.6,0-1-.4-1-1s.4-1,1-1h2v-2c0-.6.4-1,1-1s1,.4,1,1v3Z"/>' : '<circle cx="24" cy="28" r="16"/><path d="M28 4L20 4"/><path d="M24 4V12"/><path d="M35 16L38 13"/><path d="M24 28V22"/><path d="M24 28H18"/>';

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

module.exports = Timer;
