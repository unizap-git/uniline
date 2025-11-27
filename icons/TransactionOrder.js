'use strict';

var React = require('react');

function TransactionOrder(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9,2v3"/>   <path d="M15,2v3"/>   <path d="M18.5,3H5.5c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2h13c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2ZM12,18.5h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1ZM14,14.5h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1ZM16,10.5h-8c-.6,0-1-.4-1-1s.4-1,1-1h8c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="9" y="8" width="30" height="36" rx="2"/><path d="M18 4V10"/><path d="M30 4V10"/><path d="M16 19L32 19"/><path d="M16 27L28 27"/><path d="M16 35H24"/>';

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

module.exports = TransactionOrder;
