'use strict';

var React = require('react');

function Adjustment(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20,1.5H4c-1.4,0-2.5,1.1-2.5,2.5v16c0,1.4,1.1,2.5,2.5,2.5h16c1.4,0,2.5-1.1,2.5-2.5V4c0-1.4-1.1-2.5-2.5-2.5ZM6,7h1v-1c0-.6.4-1,1-1s1,.4,1,1v1h1c.6,0,1,.4,1,1s-.4,1-1,1h-1v1c0,.6-.4,1-1,1s-1-.4-1-1v-1h-1c-.6,0-1-.4-1-1s.4-1,1-1ZM17.5,17.5h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1ZM18.7,6.7l-12,12c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l12-12c.4-.4,1-.4,1.4,0s.4,1,0,1.4Z"/>' : '<path d="M5 8C5 6.34315 6.34315 5 8 5H40C41.6569 5 43 6.34315 43 8V40C43 41.6569 41.6569 43 40 43H8C6.34315 43 5 41.6569 5 40V8Z"/><path d="M36 12L12 36"/><path d="M12 16H20"/><path d="M27 33H35"/><path d="M16 12V20"/>';

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

module.exports = Adjustment;
