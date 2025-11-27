'use strict';

var React = require('react');

function AddSubtract(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM5.5,8.5c0-.6.4-1,1-1h1v-1c0-.6.4-1,1-1s1,.4,1,1v1h1c.6,0,1,.4,1,1s-.4,1-1,1h-1v1c0,.6-.4,1-1,1s-1-.4-1-1v-1h-1c-.6,0-1-.4-1-1ZM7,18c-.3,0-.5,0-.7-.3-.4-.4-.4-1,0-1.4l10-10c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-10,10c-.2.2-.5.3-.7.3ZM17.5,16.5h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M27 31H35"/><path d="M17 13V21"/><path d="M21 17H13"/><path d="M34 14L14 34"/>';

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

module.exports = AddSubtract;
