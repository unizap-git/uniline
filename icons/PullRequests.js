'use strict';

var React = require('react');

function PullRequests(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M37 44C39.2091 44 41 42.2091 41 40C41 37.7909 39.2091 36 37 36C34.7909 36 33 37.7909 33 40C33 42.2091 34.7909 44 37 44Z"/><path d="M11 12C13.2091 12 15 10.2091 15 8C15 5.79086 13.2091 4 11 4C8.79086 4 7 5.79086 7 8C7 10.2091 8.79086 12 11 12Z"/><path d="M11 44C13.2091 44 15 42.2091 15 40C15 37.7909 13.2091 36 11 36C8.79086 36 7 37.7909 7 40C7 42.2091 8.79086 44 11 44Z"/><path d="M11 12V36"/><path d="M24 10H33C35.2091 10 37 11.7909 37 14V36"/><path d="M30 16L24 10L30 4"/>' : '<path d="M37 44C39.2091 44 41 42.2091 41 40C41 37.7909 39.2091 36 37 36C34.7909 36 33 37.7909 33 40C33 42.2091 34.7909 44 37 44Z"/><path d="M11 12C13.2091 12 15 10.2091 15 8C15 5.79086 13.2091 4 11 4C8.79086 4 7 5.79086 7 8C7 10.2091 8.79086 12 11 12Z"/><path d="M11 44C13.2091 44 15 42.2091 15 40C15 37.7909 13.2091 36 11 36C8.79086 36 7 37.7909 7 40C7 42.2091 8.79086 44 11 44Z"/><path d="M11 12V36"/><path d="M24 10H33C35.2091 10 37 11.7909 37 14V36"/><path d="M30 16L24 10L30 4"/>';

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

module.exports = PullRequests;
