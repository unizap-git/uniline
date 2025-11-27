'use strict';

var React = require('react');

function ViewGridDetail(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM5.5,6.5c0-.6.4-1,1-1h4c.6,0,1,.4,1,1v4c0,.6-.4,1-1,1h-4c-.6,0-1-.4-1-1v-4ZM17.5,18.5H6.5c-.6,0-1-.4-1-1s.4-1,1-1h11c.6,0,1,.4,1,1s-.4,1-1,1ZM17.5,15H6.5c-.6,0-1-.4-1-1s.4-1,1-1h11c.6,0,1,.4,1,1s-.4,1-1,1ZM17.5,11h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1ZM17.5,7.5h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><rect x="13" y="13" width="8" height="8"/><path d="M27 13L35 13"/><path d="M27 20L35 20"/><path d="M13 28L35 28"/><path d="M13 35H35"/>';

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

module.exports = ViewGridDetail;
