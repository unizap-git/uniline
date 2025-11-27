'use strict';

var React = require('react');

function Bike(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10.5 42C15.1944 42 19 38.1944 19 33.5C19 28.8056 15.1944 25 10.5 25C5.80558 25 2 28.8056 2 33.5C2 38.1944 5.80558 42 10.5 42Z"/><path d="M37 42C41.9706 42 46 37.9706 46 33C46 28.0294 41.9706 24 37 24C32.0294 24 28 28.0294 28 33C28 37.9706 32.0294 42 37 42Z"/><path d="M18.9966 6H27.9971L36.9999 33"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0574 33L31.6819 16.7632L11.0574 33Z"/><path d="M11.0574 33L31.6819 16.7632"/><path d="M31.6819 15H40.1539L42.0001 10"/><path d="M8 15.9736H15"/><path d="M15 16L18.2727 26.4211"/>' : '<path d="M10.5 42C15.1944 42 19 38.1944 19 33.5C19 28.8056 15.1944 25 10.5 25C5.80558 25 2 28.8056 2 33.5C2 38.1944 5.80558 42 10.5 42Z"/><path d="M37 42C41.9706 42 46 37.9706 46 33C46 28.0294 41.9706 24 37 24C32.0294 24 28 28.0294 28 33C28 37.9706 32.0294 42 37 42Z"/><path d="M18.9966 6H27.9971L36.9999 33"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0574 33L31.6819 16.7632L11.0574 33Z"/><path d="M11.0574 33L31.6819 16.7632"/><path d="M31.6819 15H40.1539L42.0001 10"/><path d="M8 15.9736H15"/><path d="M15 16L18.2727 26.4211"/>';

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

module.exports = Bike;
