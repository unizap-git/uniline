'use strict';

var React = require('react');

function DigitalWatches(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M14.5,17.5v3.5c0,.6-.4,1-1,1h-3c-.6,0-1-.4-1-1v-3.5"/>   <path d="M9.5,6.5v-3.5c0-.6.4-1,1-1h3c.6,0,1,.4,1,1v3.5"/>   <path d="M17.5,10.5h1"/>   <path d="M16,5.5h-8c-1.4,0-2.5,1.1-2.5,2.5v8c0,1.4,1.1,2.5,2.5,2.5h8c1.4,0,2.5-1.1,2.5-2.5v-8c0-1.4-1.1-2.5-2.5-2.5ZM10.5,13h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM14.5,13h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="13" y="13" width="22" height="22" rx="3"/><path d="M29 35V42C29 43.1046 28.1046 44 27 44H21C19.8954 44 19 43.1046 19 42V35"/><path d="M19 13V6C19 4.89543 19.8954 4 21 4H27C28.1046 4 29 4.89543 29 6V13"/><path d="M35 21H37"/><path d="M19 24H21"/><path d="M27 24H29"/>';

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

module.exports = DigitalWatches;
