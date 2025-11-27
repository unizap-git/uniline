'use strict';

var React = require('react');

function InboxR(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,18v-5"/>   <path d="M3,18v-5"/>   <g>     <path d="M8.4,15.1l.7,1.4h5.8l.7-1.4c.2-.3.5-.6.9-.6h5.5V4.5c0-1.4-1.1-2.5-2.5-2.5H4.5c-1.4,0-2.5,1.1-2.5,2.5v10h5.5c.4,0,.7.2.9.6ZM8.5,6.5h7c.6,0,1,.4,1,1s-.4,1-1,1h-7c-.6,0-1-.4-1-1s.4-1,1-1ZM8.5,10.5h7c.6,0,1,.4,1,1s-.4,1-1,1h-7c-.6,0-1-.4-1-1s.4-1,1-1Z"/>     <path d="M16.4,17.9c-.2.3-.5.6-.9.6h-7c-.4,0-.7-.2-.9-.6l-.7-1.4H2v3c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5v-3h-4.9l-.7,1.4Z"/>   </g>' : '<rect x="5.9" y="5.9" width="36.1" height="36.1" rx="3" ry="3"/>   <path d="M42.1,36v-10"/>   <path d="M5.9,36v-10"/>   <path d="M17,15h14"/>   <path d="M17,23h14"/>   <path d="M5.9,31.2h9.9l1.8,3.6h12.6l1.8-3.6h9.9"/>';

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

module.exports = InboxR;
