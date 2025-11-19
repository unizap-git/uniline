'use strict';

var React = require('react');

function ArrowShare(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3.4,19.8c-1.1-3.6,1.1-12,9.2-12v-2.4c0-.6.5-1.2,1.1-1.2.3,0,.5,0,.7.2l6.1,4.8c.5.4.6,1.2.2,1.7,0,0-.1.1-.2.2l-6.1,4.8c-.5.4-1.2.3-1.6-.2-.2-.2-.2-.5-.2-.7v-2.4c-8,1.2-9.2,7.2-9.2,7.2Z"/>' : '<path d="M4.248 19C3.22 15.77 5.275 8.232 12.466 8.232V6.079a1.025 1.025 0 0 1 1.644-.862l5.479 4.307a1.108 1.108 0 0 1 0 1.723l-5.48 4.307a1.026 1.026 0 0 1-1.643-.861v-2.154C5.275 13.616 4.248 19 4.248 19Z"/>';

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

module.exports = ArrowShare;
