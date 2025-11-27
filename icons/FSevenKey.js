'use strict';

var React = require('react');

function FSevenKey(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM10.5,11c.6,0,1,.4,1,1s-.4,1-1,1h-2.5v3c0,.6-.4,1-1,1s-1-.4-1-1v-8c0-.6.4-1,1-1h3.5c.6,0,1,.4,1,1s-.4,1-1,1h-2.5v2h2.5ZM17.9,8.4l-3,8c-.2.4-.5.6-.9.6s-.2,0-.4,0c-.5-.2-.8-.8-.6-1.3l2.5-6.6h-2.6c-.6,0-1-.4-1-1s.4-1,1-1h4c.3,0,.6.2.8.4.2.3.2.6.1.9Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M26 16H34L28 32"/><path d="M21 16H14V32"/><path d="M14 24H21"/>';

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

module.exports = FSevenKey;
