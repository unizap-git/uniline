'use strict';

var React = require('react');

function EqualizerHorizontal(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16,5.5H3"/>   <path d="M9.5,12H3"/>   <path d="M14.5,12h6.5"/>   <path d="M21,18.5h-13"/>   <path d="M16,5.5c0,1.4,1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5-1.1-2.5-2.5-2.5-2.5,1.1-2.5,2.5Z"/>   <path d="M9.5,12c0,1.4,1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5-1.1-2.5-2.5-2.5-2.5,1.1-2.5,2.5Z"/>   <path d="M3,18.5c0,1.4,1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5-1.1-2.5-2.5-2.5-2.5,1.1-2.5,2.5Z"/>' : '<path d="M32,11H6"/>   <path d="M19,24H6"/>   <path d="M29,24h13"/>   <path d="M42,37h-26"/>   <path d="M32,11c0,2.8,2.2,5,5,5s5-2.2,5-5-2.2-5-5-5-5,2.2-5,5Z"/>   <path d="M19,24c0,2.8,2.2,5,5,5s5-2.2,5-5-2.2-5-5-5-5,2.2-5,5Z"/>   <path d="M6,37c0,2.8,2.2,5,5,5s5-2.2,5-5-2.2-5-5-5-5,2.2-5,5Z"/>';

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

module.exports = EqualizerHorizontal;
