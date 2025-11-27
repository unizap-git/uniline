'use strict';

var React = require('react');

function Trademark(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM10,10.5h-1v4c0,.6-.4,1-1,1s-1-.4-1-1v-4h-1c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1ZM19,14.5c0,.6-.4,1-1,1s-1-.4-1-1v-2.2l-.7.9c-.4.5-1.2.5-1.5,0l-.7-.9v2.2c0,.6-.4,1-1,1s-1-.4-1-1v-5c0-.4.3-.8.7-.9.4-.1.8,0,1.1.3l1.7,2.1,1.7-2.1c.3-.3.7-.4,1.1-.3.4.1.7.5.7.9v5Z"/>' : '<circle cx="24" cy="24" r="20"/><path d="M12 19H16L20 19"/><path d="M16 19L16 29"/><path d="M26 29V19L31 25L36 19V29"/>';

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

module.exports = Trademark;
