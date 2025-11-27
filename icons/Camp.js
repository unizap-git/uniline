'use strict';

var React = require('react');

function Camp(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44 35H40L24 6.5L8 35H4"/><path d="M24 31C21.2386 31 19 34.5817 19 39V41H29V39C29 34.5817 26.7614 31 24 31Z"/><path d="M4 41L44 41"/><path d="M15 23C15 23 20 19 24 19C28 19 33 23 33 23"/><path d="M40 6L38 9L40 12"/><path d="M40 6L42 9L40 12"/><path d="M7 17L6 19L7 21"/><path d="M7 17L8 19L7 21"/>' : '<path d="M44 35H40L24 6.5L8 35H4"/><path d="M24 31C21.2386 31 19 34.5817 19 39V41H29V39C29 34.5817 26.7614 31 24 31Z"/><path d="M4 41L44 41"/><path d="M15 23C15 23 20 19 24 19C28 19 33 23 33 23"/><path d="M40 6L38 9L40 12"/><path d="M40 6L42 9L40 12"/><path d="M7 17L6 19L7 21"/><path d="M7 17L8 19L7 21"/>';

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

module.exports = Camp;
