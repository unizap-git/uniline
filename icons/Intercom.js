'use strict';

var React = require('react');

function Intercom(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9.5,5.5v-3.5"/>   <path d="M14,5.5v-2"/>   <path d="M16,4.5h-8c-1.4,0-2.5,1.1-2.5,2.5v5.7l1,3v4.8c0,1.4,1.1,2.5,2.5,2.5h6c1.4,0,2.5-1.1,2.5-2.5v-4.8l1-3v-5.7c0-1.4-1.1-2.5-2.5-2.5ZM13,14h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1ZM14,10.5h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M13 14C13 12.3431 14.3431 11 16 11H32C33.6569 11 35 12.3431 35 14V25L33 31V41C33 42.6569 31.6569 44 30 44H18C16.3431 44 15 42.6569 15 41V31L13 25V14Z"/><path d="M19 11L19 4"/><path d="M28 11L28 7"/><path d="M28 19L20 19"/><path d="M26 26L22 26"/>';

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

module.exports = Intercom;
