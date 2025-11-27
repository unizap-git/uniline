'use strict';

var React = require('react');

function MenJacket(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 10L18 4H30L42 10L40 35H34V44H24H14V35H8L6 10Z"/><path d="M14 35L14 20"/><path d="M34 35V20"/><path d="M24 10C27.3137 10 30 7.31371 30 4H18C18 7.31371 20.6863 10 24 10Z"/>' : '<path d="M6 10L18 4H30L42 10L40 35H34V44H24H14V35H8L6 10Z"/><path d="M14 35L14 20"/><path d="M34 35V20"/><path d="M24 10C27.3137 10 30 7.31371 30 4H18C18 7.31371 20.6863 10 24 10Z"/>';

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

module.exports = MenJacket;
