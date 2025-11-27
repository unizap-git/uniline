'use strict';

var React = require('react');

function Cook(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M42 36V20H14V36C14 39.3137 16.6863 42 20 42H36C39.3137 42 42 39.3137 42 36Z"/><path d="M4 20L44 20"/><path d="M18 8V12"/><path d="M28 6V12"/><path d="M38 8V12"/>' : '<path d="M42 36V20H14V36C14 39.3137 16.6863 42 20 42H36C39.3137 42 42 39.3137 42 36Z"/><path d="M4 20L44 20"/><path d="M18 8V12"/><path d="M28 6V12"/><path d="M38 8V12"/>';

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

module.exports = Cook;
