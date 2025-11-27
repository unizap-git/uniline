'use strict';

var React = require('react');

function AngularJs(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<polygon points="10.1 12.6 13.9 12.6 12 8 10.1 12.6"/>   <path d="M12,.7L1.5,4.4l1.6,13.9,8.9,4.9,8.9-4.9,1.6-13.9L12,.7ZM16.1,18l-1.3-3.3h-5.6l-1.3,3.3h-2.5L12,3.2l6.6,14.8h-2.5Z"/>' : '<polygon points="24 5.9 7.2 12 9.8 34.1 24 42.1 38.2 34.1 40.8 12 24 5.9" stroke-miterlimit="10"/>   <polyline points="16.2 32.5 24 14.1 31.6 32.5" stroke-miterlimit="10"/>   <line x1="18.9" y1="26.1" x2="29.1" y2="26.1" stroke-miterlimit="10"/>';

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

module.exports = AngularJs;
