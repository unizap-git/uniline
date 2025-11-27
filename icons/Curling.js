'use strict';

var React = require('react');

function Curling(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M38 42H10C6.69 42 4 39.32 4 36V28C4 24.69 6.68 22 10 22H38C41.31 22 44 24.68 44 28V36C44 39.32 41.32 42 38 42Z" stroke-miterlimit="2"/><path d="M4 32H44" stroke-miterlimit="2"/><path d="M10 22L16.48 7.2C16.79 6.47 17.51 6 18.31 6H35.5C37.43 6 39 7.57 39 9.5C39 11.43 37.43 13 35.5 13H22V22H10Z" stroke-miterlimit="2"/>' : '<path d="M38 42H10C6.69 42 4 39.32 4 36V28C4 24.69 6.68 22 10 22H38C41.31 22 44 24.68 44 28V36C44 39.32 41.32 42 38 42Z" stroke-miterlimit="2"/><path d="M4 32H44" stroke-miterlimit="2"/><path d="M10 22L16.48 7.2C16.79 6.47 17.51 6 18.31 6H35.5C37.43 6 39 7.57 39 9.5C39 11.43 37.43 13 35.5 13H22V22H10Z" stroke-miterlimit="2"/>';

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

module.exports = Curling;
