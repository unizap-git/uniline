'use strict';

var React = require('react');

function MessageOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,2H2c-.6,0-1,.4-1,1v15c0,.6.4,1,1,1h7.1l2.2,2.2c.2.2.5.3.7.3s.5,0,.7-.3l2.2-2.2h7.1c.6,0,1-.4,1-1V3c0-.6-.4-1-1-1ZM7.5,11.5h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM12.5,11.5h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM17.5,11.5h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M4 6H44V36H29L24 41L19 36H4V6Z"/><path d="M23 21H25.0025"/><path d="M33.001 21H34.9999"/><path d="M13.001 21H14.9999"/>';

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

module.exports = MessageOne;
