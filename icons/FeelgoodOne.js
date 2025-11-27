'use strict';

var React = require('react');

function FeelgoodOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,2H2c-.6,0-1,.4-1,1v15c0,.6.4,1,1,1h10.3l4.8,2.4c.1,0,.3.1.4.1s.4,0,.5-.1c.3-.2.5-.5.5-.9v-1.5h3.5c.6,0,1-.4,1-1V3c0-.6-.4-1-1-1ZM18.2,12.2c0,0-2.3,2.3-6.2,2.3s-6.1-2.2-6.2-2.3c-.4-.4-.4-1,0-1.4.4-.4,1-.4,1.4,0,0,0,1.8,1.7,4.8,1.7s4.7-1.6,4.8-1.7c.4-.4,1-.4,1.4,0,.4.4.4,1,0,1.4Z"/>' : '<path d="M44 6H4V36H25L35 41V36H44V6Z"/><path d="M13 23C13 23 17 27 24 27C31 27 35 23 35 23"/>';

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

module.exports = FeelgoodOne;
