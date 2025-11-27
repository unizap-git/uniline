'use strict';

var React = require('react');

function InboxSuccessR(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,18v-5"/>   <path d="M3,18v-5"/>   <g>     <path d="M8.4,15.1l.7,1.4h5.8l.7-1.4c.2-.3.5-.6.9-.6h5.5V4.5c0-1.4-1.1-2.5-2.5-2.5H4.5c-1.4,0-2.5,1.1-2.5,2.5v10h5.5c.4,0,.7.2.9.6ZM7.8,8.6c.4-.4,1-.4,1.4,0l2.1,2,4.5-4.3c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-5.2,5c-.2.2-.4.3-.7.3s-.5,0-.7-.3l-2.8-2.7c-.4-.4-.4-1,0-1.4Z"/>     <path d="M16.4,17.9c-.2.3-.5.6-.9.6h-7c-.4,0-.7-.2-.9-.6l-.7-1.4H2v3c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5v-3h-4.9l-.7,1.4Z"/>   </g>' : '<rect x="5.9" y="5.9" width="36.2" height="36.2" rx="3" ry="3"/>   <path d="M42.1,36.1v-10.1"/>   <path d="M5.9,36.1v-10.1"/>   <path d="M17,18.6l5.6,5.4,10.5-10.1"/>   <path d="M5.9,31.2h9.9l1.8,3.6h12.6l1.8-3.6h9.9"/>';

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

module.exports = InboxSuccessR;
