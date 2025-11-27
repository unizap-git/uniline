'use strict';

var React = require('react');

function RobotOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18.5,8H5.5c-1.1,0-2,.9-2,2v10c0,1.1.9,2,2,2h13c1.1,0,2-.9,2-2v-10c0-1.1-.9-2-2-2ZM7.5,13c0-.6.4-1,1-1s1,.4,1,1-.4,1-1,1-1-.4-1-1ZM14,18h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1ZM15.5,14c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>   <path d="M12,5v4"/>   <path d="M2,13v4"/>   <path d="M22,13v4"/>   <circle cx="12" cy="4" r="1" stroke-miterlimit="2"/>' : '<rect x="9" y="18" width="30" height="24" rx="2"/><circle cx="17" cy="26" r="2"/><circle cx="31" cy="26" r="2"/><path d="M20 32C18.8954 32 18 32.8954 18 34C18 35.1046 18.8954 36 20 36V32ZM28 36C29.1046 36 30 35.1046 30 34C30 32.8954 29.1046 32 28 32V36ZM20 36H28V32H20V36Z"/><path d="M24 10V18"/><path d="M4 26V34"/><path d="M44 26V34"/><circle cx="24" cy="8" r="2"/>';

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

module.exports = RobotOne;
