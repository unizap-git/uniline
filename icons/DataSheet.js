'use strict';

var React = require('react');

function DataSheet(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,3H3c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2ZM9,16c0,.6-.4,1-1,1s-1-.4-1-1v-6c0-.6.4-1,1-1s1,.4,1,1v6ZM13,16c0,.6-.4,1-1,1s-1-.4-1-1v-8c0-.6.4-1,1-1s1,.4,1,1v8ZM17,16c0,.6-.4,1-1,1s-1-.4-1-1v-3.5c0-.6.4-1,1-1s1,.4,1,1v3.5Z"/>' : '<rect x="4" y="8" width="40" height="32" rx="2"/><path d="M32 25V32"/><path d="M24 16V32"/><path d="M16 20V32"/>';

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

module.exports = DataSheet;
