'use strict';

var React = require('react');

function Rice(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 38C33.3888 38 41 30.9411 41 21H7C7 30.9411 14.6112 38 24 38Z"/><path d="M30 21C30 15.4772 25.7467 11 20.5 11C15.2533 11 11 15.4772 11 21"/><path d="M39 21C39 17.6863 36.234 15 32.822 15C31.379 15 30.0515 15.4805 29 16.2857"/><path d="M33 15L36 5"/><path d="M38.0002 18.0001L42.0002 11.0001"/><path d="M18 37L16 43H32L30 37"/>' : '<path d="M24 38C33.3888 38 41 30.9411 41 21H7C7 30.9411 14.6112 38 24 38Z"/><path d="M30 21C30 15.4772 25.7467 11 20.5 11C15.2533 11 11 15.4772 11 21"/><path d="M39 21C39 17.6863 36.234 15 32.822 15C31.379 15 30.0515 15.4805 29 16.2857"/><path d="M33 15L36 5"/><path d="M38.0002 18.0001L42.0002 11.0001"/><path d="M18 37L16 43H32L30 37"/>';

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

module.exports = Rice;
