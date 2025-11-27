'use strict';

var React = require('react');

function Bus(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6.01245 34.005V8.03613C6.01245 6.93156 6.90788 6.03613 8.01245 6.03613H40.0001C41.1046 6.03613 42.0001 6.93156 42.0001 8.03613V34.005C42.0001 35.6618 40.6569 37.005 39.0001 37.005H37.0049V37.9999C37.0049 40.2091 35.2141 41.9999 33.0049 41.9999H33.0045C30.7954 41.9999 29.0045 40.2091 29.0045 37.9999V37.005H19.008V38.0016C19.008 40.2098 17.2178 41.9999 15.0096 41.9999C12.8014 41.9999 11.0113 40.2098 11.0113 38.0016V37.005H9.01245C7.3556 37.005 6.01245 35.6618 6.01245 34.005Z"/><path d="M42 23H6"/><path d="M34 13H14V23H34V13Z"/><path d="M14 30H16"/><path d="M32 30H34"/>' : '<path d="M6.01245 34.005V8.03613C6.01245 6.93156 6.90788 6.03613 8.01245 6.03613H40.0001C41.1046 6.03613 42.0001 6.93156 42.0001 8.03613V34.005C42.0001 35.6618 40.6569 37.005 39.0001 37.005H37.0049V37.9999C37.0049 40.2091 35.2141 41.9999 33.0049 41.9999H33.0045C30.7954 41.9999 29.0045 40.2091 29.0045 37.9999V37.005H19.008V38.0016C19.008 40.2098 17.2178 41.9999 15.0096 41.9999C12.8014 41.9999 11.0113 40.2098 11.0113 38.0016V37.005H9.01245C7.3556 37.005 6.01245 35.6618 6.01245 34.005Z"/><path d="M42 23H6"/><path d="M34 13H14V23H34V13Z"/><path d="M14 30H16"/><path d="M32 30H34"/>';

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

module.exports = Bus;
