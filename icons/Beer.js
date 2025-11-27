'use strict';

var React = require('react');

function Beer(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M25.5 19H33C34.1046 19 35 19.8954 35 21V44H13V21C13 19.8954 13.8954 19 15 19H17.5"/><path d="M17 8H14.5C11.4624 8 9 10.4624 9 13.5C9 16.5376 11.4624 19 14.5 19H19V29.5C19 30.8807 20.1193 32 21.5 32C22.8807 32 24 30.8807 24 29.5V19H33.5C36.5376 19 39 16.5376 39 13.5C39 10.4624 36.5376 8 33.5 8H29C29 8 28 4 23 4C18 4 17 8 17 8Z"/><path d="M35 21H40C41.1046 21 42 21.8954 42 23V28C42 30.2091 40.2091 32 38 32H35"/>' : '<path d="M25.5 19H33C34.1046 19 35 19.8954 35 21V44H13V21C13 19.8954 13.8954 19 15 19H17.5"/><path d="M17 8H14.5C11.4624 8 9 10.4624 9 13.5C9 16.5376 11.4624 19 14.5 19H19V29.5C19 30.8807 20.1193 32 21.5 32C22.8807 32 24 30.8807 24 29.5V19H33.5C36.5376 19 39 16.5376 39 13.5C39 10.4624 36.5376 8 33.5 8H29C29 8 28 4 23 4C18 4 17 8 17 8Z"/><path d="M35 21H40C41.1046 21 42 21.8954 42 23V28C42 30.2091 40.2091 32 38 32H35"/>';

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

module.exports = Beer;
