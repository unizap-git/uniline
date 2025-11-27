'use strict';

var React = require('react');

function PlugOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,18v2.5c0,.8-.7,1.5-1.5,1.5h-6.5"/>   <path d="M10,6V2"/>   <path d="M14,6V2"/>   <path d="M16.5,5H7.5c-1.4,0-2.5,1.1-2.5,2.5v9c0,1.4,1.1,2.5,2.5,2.5h9c1.4,0,2.5-1.1,2.5-2.5V7.5c0-1.4-1.1-2.5-2.5-2.5ZM13,13h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="12" y="12" width="24" height="24" rx="3"/><path d="M24 36V41C24 42.6569 22.6569 44 21 44H8"/><path d="M20 12V4"/><path d="M28 12V4"/><path d="M22 24H26"/>';

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

module.exports = PlugOne;
