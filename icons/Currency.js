'use strict';

var React = require('react');

function Currency(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4.5,7s3.8-5.8,10.2-3.5c6.5,2.3,6.2,8.8,6.2,8.8"/>   <path d="M19.5,17s-3,5.5-9.8,3.8S3,12,3,12"/>   <path d="M21,4v8"/>   <path d="M3,12v8"/>   <path d="M15.2,8h-6.2M15.2,11.1h-6.2M12.2,17.2l-3.1-3.1h1.5c1.7,0,3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1"/>' : '<path d="M8.9,13.9s7.6-11.6,20.7-7.1c13.1,4.5,12.6,17.6,12.6,17.6"/>   <path d="M39.1,34s-6,11.1-19.7,7.6S5.9,24,5.9,24"/>   <path d="M42.1,7.8v16.1"/>   <path d="M5.9,24v16.1"/>   <path d="M30.6,16.1h-11.5M30.6,21.8h-11.5M24.9,33.1l-5.7-5.7h2.8c3.1,0,5.7-2.6,5.7-5.7s-2.6-5.7-5.7-5.7"/>';

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

module.exports = Currency;
