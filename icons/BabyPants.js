'use strict';

var React = require('react');

function BabyPants(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18,18.5c0-.8.3-1.6.6-2.6.6-1.8,1.4-4.2,1.4-8.4s-1.7-5.5-2.2-6.1c-.2-.2-.5-.4-.8-.4H7c-.2,0-.3,0-.4.1-.7.4-3.1,2-3.1,8.4s2.4,13.5,5,13.5,2-1.1,2-2.2v-8.8c0-.3.1-.5.2-.6.2-.1.4-.2.7-.2s1.1.1,1.1.8v5.5c0,3.1,1.8,4.9,3.3,5.5.5.2.9.3,1.3.3.6,0,1.2-.2,1.6-.6,1.1-1.1.3-2.4-.2-3-.3-.4-.6-.8-.6-1.2ZM5,7c-.6,0-1-.4-1-1s.4-1,1-1h13.5c.6,0,1,.4,1,1s-.4,1-1,1H5Z"/>   <path d="M5.6,7.6l-2-.2c.1-1.5.4-2.8.9-3.8l1.8.8c-.4.8-.6,1.9-.7,3.2Z"/>   <path d="M20,7.5h-2c0-.9-.2-1.8-.5-2.6l1.9-.7c.4,1.1.6,2.2.6,3.4Z"/>' : '<path d="M34 4H14C12 5 9 9 9 19C9 31.5 14 44 17 44C19 44 19 41.5 19 41.5V24C19 19 27 19.5 27 24V35C27 43 34 46 36 44C38 42 34 40 34 37C34 32 38 28 38 15C38 10 35.6667 6 34 4Z"/><path d="M10 12H37"/><path d="M10.8032 8C10.0707 9.69577 9.46541 11.9812 9.17871 15"/><path d="M37.9995 15C37.9995 12.7719 37.5362 10.7424 36.875 9"/>';

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

module.exports = BabyPants;
