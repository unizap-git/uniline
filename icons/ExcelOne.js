'use strict';

var React = require('react');

function ExcelOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM14,11c.6,0,1,.4,1,1s-.4,1-1,1h-4v2h5c.6,0,1,.4,1,1s-.4,1-1,1h-6c-.6,0-1-.4-1-1v-8c0-.6.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1h-5v2h4Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M30 16H18"/><path d="M18 32L18 16"/><path d="M28 24H18"/><path d="M30 32H18"/>';

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

module.exports = ExcelOne;
