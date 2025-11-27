'use strict';

var React = require('react');

function Buy(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8,9.5V3h8v6.5"/>   <path d="M21.7,6.8c-.2-.2-.5-.3-.7-.3H3c-.3,0-.5.1-.7.3-.2.2-.3.5-.3.8l1,13.5c0,.5.5.9,1,.9h16c.5,0,1-.4,1-.9l1-13.5c0-.3,0-.6-.3-.8ZM16,18h-8c-.6,0-1-.4-1-1s.4-1,1-1h8c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M6 15H42L40 42H8L6 15Z"/><path d="M16 19V6H32V19"/><path d="M16 34H32"/>';

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

module.exports = Buy;
