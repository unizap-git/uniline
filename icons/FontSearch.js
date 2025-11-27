'use strict';

var React = require('react');

function FontSearch(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17.5,17.5l3,3" stroke-miterlimit="2"/>   <path d="M11.4,1.9C6.2,1.9,1.9,6.2,1.9,11.4s4.3,9.5,9.5,9.5,9.5-4.3,9.5-9.5S16.7,1.9,11.4,1.9ZM14,9.5h-1.5v6c0,.6-.4,1-1,1s-1-.4-1-1v-6h-1.5c-.6,0-1-.4-1-1s.4-1,1-1h5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<circle cx="22.8345" cy="22.8345" r="17"/><path d="M35 35L41 41"/><path d="M23 17V31"/><path d="M18 17H23H28"/>';

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

module.exports = FontSearch;
