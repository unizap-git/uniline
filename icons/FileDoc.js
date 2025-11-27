'use strict';

var React = require('react');

function FileDoc(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10 38V44H38V38"/><path d="M38 20V14L30 4H10V20"/><path d="M28 4V14H38"/><path d="M16 12H20"/><rect x="4" y="20" width="40" height="18" rx="2"/><path d="M10 25V33"/><path d="M10 25H12C14.2091 25 16 26.7909 16 29V29C16 31.2091 14.2091 33 12 33H10"/><ellipse cx="24" cy="29" rx="3" ry="4"/><path d="M38 25H36C33.7909 25 32 26.7909 32 29V29C32 31.2091 33.7909 33 36 33H38"/>' : '<path d="M10 38V44H38V38"/><path d="M38 20V14L30 4H10V20"/><path d="M28 4V14H38"/><path d="M16 12H20"/><rect x="4" y="20" width="40" height="18" rx="2"/><path d="M10 25V33"/><path d="M10 25H12C14.2091 25 16 26.7909 16 29V29C16 31.2091 14.2091 33 12 33H10"/><ellipse cx="24" cy="29" rx="3" ry="4"/><path d="M38 25H36C33.7909 25 32 26.7909 32 29V29C32 31.2091 33.7909 33 36 33H38"/>';

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

module.exports = FileDoc;
