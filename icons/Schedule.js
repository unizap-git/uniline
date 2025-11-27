'use strict';

var React = require('react');

function Schedule(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7,3v4" stroke-miterlimit="2"/>   <path d="M21,4H3c-1.1,0-2,.9-2,2v13c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2V6c0-1.1-.9-2-2-2ZM7,10.5h5.5c.6,0,1,.4,1,1s-.4,1-1,1h-5.5c-.6,0-1-.4-1-1s.4-1,1-1ZM17,16.5H7c-.6,0-1-.4-1-1s.4-1,1-1h10c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M17,3v4" stroke-miterlimit="2"/>' : '<rect x="4" y="10" width="40" height="30" rx="2"/><path d="M14 6V14"/><path d="M25 23L14 23"/><path d="M34 31L14 31"/><path d="M34 6V14"/>';

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

module.exports = Schedule;
