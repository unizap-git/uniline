'use strict';

var React = require('react');

function IdCardH(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="4" y="8" width="40" height="32" rx="2"/><path d="M17 25C19.2091 25 21 23.2091 21 21C21 18.7909 19.2091 17 17 17C14.7909 17 13 18.7909 13 21C13 23.2091 14.7909 25 17 25Z"/><path d="M23 31C23 27.6863 20.3137 25 17 25C13.6863 25 11 27.6863 11 31"/><path d="M28 20H36"/><path d="M30 28H36"/>' : '<rect x="4" y="8" width="40" height="32" rx="2"/><path d="M17 25C19.2091 25 21 23.2091 21 21C21 18.7909 19.2091 17 17 17C14.7909 17 13 18.7909 13 21C13 23.2091 14.7909 25 17 25Z"/><path d="M23 31C23 27.6863 20.3137 25 17 25C13.6863 25 11 27.6863 11 31"/><path d="M28 20H36"/><path d="M30 28H36"/>';

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

module.exports = IdCardH;
