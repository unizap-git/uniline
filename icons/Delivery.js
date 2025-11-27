'use strict';

var React = require('react');

function Delivery(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20 33L26 35C26 35 41 32 43 32C45 32 45 34 43 36C41 38 34 44 28 44C22 44 18 41 14 41C10 41 4 41 4 41"/><path d="M4 29C6 27 10 24 14 24C18 24 27.5 28 29 30C30.5 32 26 35 26 35"/><path d="M16 18V10C16 8.89543 16.8954 8 18 8H42C43.1046 8 44 8.89543 44 10V26"/><rect x="25" y="8" width="10" height="9"/>' : '<path d="M20 33L26 35C26 35 41 32 43 32C45 32 45 34 43 36C41 38 34 44 28 44C22 44 18 41 14 41C10 41 4 41 4 41"/><path d="M4 29C6 27 10 24 14 24C18 24 27.5 28 29 30C30.5 32 26 35 26 35"/><path d="M16 18V10C16 8.89543 16.8954 8 18 8H42C43.1046 8 44 8.89543 44 10V26"/><rect x="25" y="8" width="10" height="9"/>';

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

module.exports = Delivery;
