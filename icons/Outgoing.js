'use strict';

var React = require('react');

function Outgoing(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18 35C18 32.7909 16.2091 31 14 31C11.7909 31 10 32.7909 10 35C10 37.2091 11.7909 39 14 39C16.2091 39 18 37.2091 18 35Z"/><path d="M37 35C37 32.7909 35.2091 31 33 31C30.7909 31 29 32.7909 29 35C29 37.2091 30.7909 39 33 39C35.2091 39 37 37.2091 37 35Z"/><path d="M4 35H10"/><path d="M18 35H29"/><path d="M37 35H44"/><path d="M38 19L44 13L38 7"/><path d="M4 13H44"/>' : '<path d="M18 35C18 32.7909 16.2091 31 14 31C11.7909 31 10 32.7909 10 35C10 37.2091 11.7909 39 14 39C16.2091 39 18 37.2091 18 35Z"/><path d="M37 35C37 32.7909 35.2091 31 33 31C30.7909 31 29 32.7909 29 35C29 37.2091 30.7909 39 33 39C35.2091 39 37 37.2091 37 35Z"/><path d="M4 35H10"/><path d="M18 35H29"/><path d="M37 35H44"/><path d="M38 19L44 13L38 7"/><path d="M4 13H44"/>';

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

module.exports = Outgoing;
