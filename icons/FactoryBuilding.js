'use strict';

var React = require('react');

function FactoryBuilding(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.5,5.1c-.3-.2-.7-.2-1,0l-6.6,3.3v-2.4c0-.3-.2-.7-.5-.9-.3-.2-.7-.2-1,0l-6.6,3.3V2c0-.6-.4-1-1-1H2c-.6,0-1,.4-1,1v20c0,.6.4,1,1,1h20c.6,0,1-.4,1-1V6c0-.3-.2-.7-.5-.9ZM11,18c0,.6-.4,1-1,1h-4c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1h4c.6,0,1,.4,1,1v4ZM19,18c0,.6-.4,1-1,1h-4c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1h4c.6,0,1,.4,1,1v4Z"/>' : '<path d="M4 44V4H12V20L28 12V20L44 12V44H4Z"/><rect x="12" y="28" width="8" height="8"/><rect x="28" y="28" width="8" height="8"/>';

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

module.exports = FactoryBuilding;
