'use strict';

var React = require('react');

function Bank(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5,8.5v13.5h14v-13.5"/>   <path d="M2.5,11l2.5-2.5,7-6.5,7,6.5,2.5,2.5"/>   <path d="M15.3,10h-6.2M15.3,13.1h-6.2M12.2,19.3l-3.1-3.1h1.5c1.7,0,3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1"/>' : '<path d="M11.2,17.6v24.6h25.5v-24.6"/>   <path d="M6.7,22.2l4.6-4.6,12.8-11.8,12.8,11.8,4.6,4.6"/>   <path d="M29.8,19.8h-11.5M29.8,25.6h-11.5M24,36.9l-5.7-5.7h2.8c3.1,0,5.7-2.6,5.7-5.7s-2.6-5.7-5.7-5.7"/>';

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

module.exports = Bank;
