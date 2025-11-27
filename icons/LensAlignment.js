'use strict';

var React = require('react');

function LensAlignment(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10Z"/><path d="M14 10C14 12.2091 12.2091 14 10 14M14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14M14 10H20M10 14V20"/><path d="M14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42C12.2091 42 14 40.2091 14 38Z"/><path d="M14 38C14 35.7909 12.2091 34 10 34M14 38C14 40.2091 12.2091 42 10 42C7.79086 42 6 40.2091 6 38C6 35.7909 7.79086 34 10 34M14 38H20M10 34V28"/><path d="M34 38C34 35.7909 35.7909 34 38 34C40.2091 34 42 35.7909 42 38C42 40.2091 40.2091 42 38 42C35.7909 42 34 40.2091 34 38Z"/><path d="M34 38C34 35.7909 35.7909 34 38 34M34 38C34 40.2091 35.7909 42 38 42C40.2091 42 42 40.2091 42 38C42 35.7909 40.2091 34 38 34M34 38H28M38 34V28"/><path d="M34 10C34 12.2091 35.7909 14 38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10Z"/><path d="M34 10C34 12.2091 35.7909 14 38 14M34 10C34 7.79086 35.7909 6 38 6C40.2091 6 42 7.79086 42 10C42 12.2091 40.2091 14 38 14M34 10H28M38 14V20"/><path d="M17 24H31"/><path d="M24 31V17"/>' : '<path d="M14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10Z"/><path d="M14 10C14 12.2091 12.2091 14 10 14M14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14M14 10H20M10 14V20"/><path d="M14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42C12.2091 42 14 40.2091 14 38Z"/><path d="M14 38C14 35.7909 12.2091 34 10 34M14 38C14 40.2091 12.2091 42 10 42C7.79086 42 6 40.2091 6 38C6 35.7909 7.79086 34 10 34M14 38H20M10 34V28"/><path d="M34 38C34 35.7909 35.7909 34 38 34C40.2091 34 42 35.7909 42 38C42 40.2091 40.2091 42 38 42C35.7909 42 34 40.2091 34 38Z"/><path d="M34 38C34 35.7909 35.7909 34 38 34M34 38C34 40.2091 35.7909 42 38 42C40.2091 42 42 40.2091 42 38C42 35.7909 40.2091 34 38 34M34 38H28M38 34V28"/><path d="M34 10C34 12.2091 35.7909 14 38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10Z"/><path d="M34 10C34 12.2091 35.7909 14 38 14M34 10C34 7.79086 35.7909 6 38 6C40.2091 6 42 7.79086 42 10C42 12.2091 40.2091 14 38 14M34 10H28M38 14V20"/><path d="M17 24H31"/><path d="M24 31V17"/>';

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

module.exports = LensAlignment;
