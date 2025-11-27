'use strict';

var React = require('react');

function Hdd(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18.5,1H5.5c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h13c1.1,0,2-.9,2-2V3c0-1.1-.9-2-2-2ZM8,4c.6,0,1,.4,1,1s-.4,1-1,1-1-.4-1-1,.4-1,1-1ZM8,20c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM9,15c-.3,0-.5,0-.7-.3-.4-.4-.4-1,0-1.4l3-3c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-3,3c-.2.2-.5.3-.7.3ZM16,20c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM12,16c-.6,0-1-.4-1-1s.4-1,1-1c1.7,0,3-1.3,3-3s-1.3-3-3-3-3,1.3-3,3-.4,1-1,1-1-.4-1-1c0-2.8,2.2-5,5-5s5,2.2,5,5-2.2,5-5,5ZM16,6c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<rect x="9" y="4" width="30" height="40" rx="2"/><circle cx="32" cy="10" r="2"/><circle cx="16" cy="10" r="2"/><circle cx="32" cy="38" r="2"/><circle cx="16" cy="38" r="2"/><path d="M24 30C28.4183 30 32 26.4183 32 22C32 17.5817 28.4183 14 24 14C19.5817 14 16 17.5817 16 22"/><path d="M24 22L18 28"/>';

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

module.exports = Hdd;
