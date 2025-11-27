'use strict';

var React = require('react');

function BranchTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" clip-rule="evenodd" d="M36 12C38.2091 12 40 10.2091 40 8C40 5.79086 38.2091 4 36 4C33.7909 4 32 5.79086 32 8C32 10.2091 33.7909 12 36 12Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14 12C16.2091 12 18 10.2091 18 8C18 5.79086 16.2091 4 14 4C11.7909 4 10 5.79086 10 8C10 10.2091 11.7909 12 14 12Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14 44C16.2091 44 18 42.2091 18 40C18 37.7909 16.2091 36 14 36C11.7909 36 10 37.7909 10 40C10 42.2091 11.7909 44 14 44Z"/><path d="M14 12L14 36L14 33C14 25 36 24 36 16V12"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M36 12C38.2091 12 40 10.2091 40 8C40 5.79086 38.2091 4 36 4C33.7909 4 32 5.79086 32 8C32 10.2091 33.7909 12 36 12Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14 12C16.2091 12 18 10.2091 18 8C18 5.79086 16.2091 4 14 4C11.7909 4 10 5.79086 10 8C10 10.2091 11.7909 12 14 12Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14 44C16.2091 44 18 42.2091 18 40C18 37.7909 16.2091 36 14 36C11.7909 36 10 37.7909 10 40C10 42.2091 11.7909 44 14 44Z"/><path d="M14 12L14 36L14 33C14 25 36 24 36 16V12"/>';

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

module.exports = BranchTwo;
