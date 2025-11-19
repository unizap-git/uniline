'use strict';

var React = require('react');

function AngularJs(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<polygon points="10.1 12.6 13.9 12.6 12 8 10.1 12.6"/>   <path d="M12,.7L1.5,4.4l1.6,13.9,8.9,4.9,8.9-4.9,1.6-13.9L12,.7ZM16.1,18l-1.3-3.3h-5.6l-1.3,3.3h-2.5L12,3.2l6.6,14.8h-2.5Z"/>' : '<polygon points="12 1.8 2.5 5.2 4 17.7 12 22.2 20 17.7 21.5 5.2 12 1.8" stroke-miterlimit="10"/>   <polyline points="7.6 16.8 12 6.4 16.3 16.8" stroke-miterlimit="10"/>   <line x1="9.1" y1="13.2" x2="14.9" y2="13.2" stroke-miterlimit="10"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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
