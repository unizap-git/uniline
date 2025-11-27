'use strict';

var React = require('react');

function Radio(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.5,5.5H3.5c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h17c1.1,0,2-.9,2-2V7.5c0-1.1-.9-2-2-2ZM9,18c-2.2,0-4-1.8-4-4s1.8-4,4-4,4,1.8,4,4-1.8,4-4,4ZM18,17h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1ZM18,13h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M3.5,6.5L12.5,2"/>' : '<rect x="5" y="13" width="38" height="28" rx="2"/><circle cx="18" cy="28" r="6"/><path d="M30 24L36 24"/><path d="M30 32L36 32"/><path d="M7 13L25 4"/>';

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

module.exports = Radio;
