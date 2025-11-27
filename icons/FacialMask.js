'use strict';

var React = require('react');

function FacialMask(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18.3,5.2l-5.5-2c-.5-.2-1.1-.2-1.7,0l-5.5,2c-1,.4-1.7,1.3-1.7,2.4v8.2c0,.8.3,1.5.9,1.9,1.6,1.2,4.6,3.3,7.1,3.3s5.5-2,7.1-3.3c.6-.5.9-1.2.9-1.9V7.6c0-1.1-.7-2-1.7-2.4Z"/>   <path d="M5,14c-1.7,0-3-1.6-3-3.5s1.3-2.5,3-2.5" stroke-miterlimit="2"/>   <path d="M19,14c1.7,0,3-1.6,3-3.5s-1.3-2.5-3-2.5" stroke-miterlimit="2"/>   <path d="M16,13.5c-.2,0-.3,0-.4-.1l-3.6-1.8-3.6,1.8c-.5.2-1.1,0-1.3-.4-.2-.5,0-1.1.4-1.3l4-2c.3-.1.6-.1.9,0l4,2c.5.2.7.8.4,1.3-.2.4-.5.6-.9.6Z"/>   <path d="M14.5,16.5c-.1,0-.2,0-.4,0l-2.1-.9-2.1.9c-.5.2-1.1,0-1.3-.6-.2-.5,0-1.1.6-1.3l2.5-1c.2,0,.5,0,.7,0l2.5,1c.5.2.8.8.6,1.3-.2.4-.5.6-.9.6Z"/>' : '<path d="M10 15.1142C10 13.8463 10.797 12.7154 11.991 12.2889L22.991 8.36036C23.6435 8.12733 24.3565 8.12733 25.009 8.36036L36.009 12.2889C37.203 12.7154 38 13.8463 38 15.1142V31.6041C38 32.4892 37.6101 33.3292 36.9082 33.8682C34.4672 35.7425 28.4345 40 24 40C19.5655 40 13.5328 35.7425 11.0918 33.8682C10.3899 33.3292 10 32.4892 10 31.6041V15.1142Z"/><path d="M10 28C6.68629 28 4 24.8896 4 21.0526C4 17.2157 6.68629 16 10 16"/><path d="M38 28C41.3137 28 44 24.8896 44 21.0526C44 17.2157 41.3137 16 38 16"/><path d="M16 25L24 21L32 25"/><path d="M19 31L24 29L29 31"/>';

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

module.exports = FacialMask;
