'use strict';

var React = require('react');

function Chinese(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM18,14c0,.6-.4,1-1,1h-4v2.5c0,.6-.4,1-1,1s-1-.4-1-1v-2.5h-4c-.6,0-1-.4-1-1v-5c0-.6.4-1,1-1h4v-1c0-.6.4-1,1-1s1,.4,1,1v1h4c.6,0,1,.4,1,1v5Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><rect x="14" y="18" width="20" height="10"/><path d="M24 14V35"/>';

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

module.exports = Chinese;
