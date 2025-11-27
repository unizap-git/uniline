'use strict';

var React = require('react');

function HashtagKey(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="10.5" y="10.5" width="3" height="3"/>   <path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM16,13.5c.6,0,1,.4,1,1s-.4,1-1,1h-.5v.5c0,.6-.4,1-1,1s-1-.4-1-1v-.5h-3v.5c0,.6-.4,1-1,1s-1-.4-1-1v-.5h-.5c-.6,0-1-.4-1-1s.4-1,1-1h.5v-3h-.5c-.6,0-1-.4-1-1s.4-1,1-1h.5v-.5c0-.6.4-1,1-1s1,.4,1,1v.5h3v-.5c0-.6.4-1,1-1s1,.4,1,1v.5h.5c.6,0,1,.4,1,1s-.4,1-1,1h-.5v3h.5Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M19 16V32"/><path d="M29 16V32"/><path d="M16 19H32"/><path d="M16 29H32"/>';

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

module.exports = HashtagKey;
