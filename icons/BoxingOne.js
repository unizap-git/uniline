'use strict';

var React = require('react');

function BoxingOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M13 26H15C17.76 26 20 23.76 20 21C20 18.24 17.76 16 15 16H11C8.24 16 6 18.24 6 21V30C6 33.3137 8.68629 36 12 36H36C39.3137 36 42 33.3137 42 30V26C42 23.7909 40.2091 22 38 22H24" stroke-miterlimit="2"/><path d="M34 44H14C12.89 44 12 43.1 12 42V36H36V42C36 43.1 35.1 44 34 44Z" stroke-miterlimit="2"/><path d="M6 20C5 20 4 18 4 16V12C4 7.58 7.58 4 12 4H36C40.42 4 44 7.58 44 12V16C44 19.31 41.31 22 38 22H19.9" stroke-miterlimit="2"/>' : '<path d="M13 26H15C17.76 26 20 23.76 20 21C20 18.24 17.76 16 15 16H11C8.24 16 6 18.24 6 21V30C6 33.3137 8.68629 36 12 36H36C39.3137 36 42 33.3137 42 30V26C42 23.7909 40.2091 22 38 22H24" stroke-miterlimit="2"/><path d="M34 44H14C12.89 44 12 43.1 12 42V36H36V42C36 43.1 35.1 44 34 44Z" stroke-miterlimit="2"/><path d="M6 20C5 20 4 18 4 16V12C4 7.58 7.58 4 12 4H36C40.42 4 44 7.58 44 12V16C44 19.31 41.31 22 38 22H19.9" stroke-miterlimit="2"/>';

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

module.exports = BoxingOne;
