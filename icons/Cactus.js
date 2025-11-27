'use strict';

var React = require('react');

function Cactus(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8 43L40 43"/><path d="M6 16C6 21.5 6.5 30 16 30"/><path d="M42 14C42 19 42 34 32 34"/><path d="M24 5C19.5817 5 16 8.58172 16 13V43H32V13C32 8.58172 28.4183 5 24 5Z"/>' : '<path d="M8 43L40 43"/><path d="M6 16C6 21.5 6.5 30 16 30"/><path d="M42 14C42 19 42 34 32 34"/><path d="M24 5C19.5817 5 16 8.58172 16 13V43H32V13C32 8.58172 28.4183 5 24 5Z"/>';

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

module.exports = Cactus;
