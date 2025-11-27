'use strict';

var React = require('react');

function DivingSuit(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17 24H14.09C8.52 24 4 19.5203 4 14C4 8.47968 8.52 4 14.09 4L20 9L25.91 4C31.48 4 36 8.47968 36 14C36 19.5203 31.48 24 25.91 24H23" stroke-miterlimit="2"/><path d="M26 36H14V44H26V36Z" stroke-miterlimit="2"/><path d="M26 40H36C40.42 40 44 36.42 44 32V14H36" stroke-miterlimit="2"/><path d="M21.2198 30H19.9998H18.7798C17.3198 30 16.2098 28.69 16.4498 27.26L17.6698 19.97C17.8598 18.83 18.8398 18 19.9998 18C21.1498 18 22.1398 18.83 22.3298 19.97L23.5498 27.26C23.7798 28.69 22.6698 30 21.2198 30Z" stroke-miterlimit="2"/>' : '<path d="M17 24H14.09C8.52 24 4 19.5203 4 14C4 8.47968 8.52 4 14.09 4L20 9L25.91 4C31.48 4 36 8.47968 36 14C36 19.5203 31.48 24 25.91 24H23" stroke-miterlimit="2"/><path d="M26 36H14V44H26V36Z" stroke-miterlimit="2"/><path d="M26 40H36C40.42 40 44 36.42 44 32V14H36" stroke-miterlimit="2"/><path d="M21.2198 30H19.9998H18.7798C17.3198 30 16.2098 28.69 16.4498 27.26L17.6698 19.97C17.8598 18.83 18.8398 18 19.9998 18C21.1498 18 22.1398 18.83 22.3298 19.97L23.5498 27.26C23.7798 28.69 22.6698 30 21.2198 30Z" stroke-miterlimit="2"/>';

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

module.exports = DivingSuit;
