'use strict';

var React = require('react');

function Coupon(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.3,10.6c.4-.1.7-.5.7-.9v-5.2c0-.6-.4-1-1-1H2c-.6,0-1,.4-1,1v5.2c0,.4.3.8.7.9.7.2,1.2.9,1.2,1.7s-.5,1.4-1.2,1.7c-.4.1-.7.5-.7.9v5.2c0,.6.4,1,1,1h20c.6,0,1-.4,1-1v-5.2c0-.4-.3-.8-.7-.9-.7-.2-1.2-.9-1.2-1.7s.5-1.4,1.2-1.7ZM14.7,10.2h.7c.6,0,1,.4,1,1s-.4,1-1,1h-.7c-.4,1.5-1.6,2.7-3.2,3l1.5,1.5c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-3.1-3.1c-.3-.3-.4-.7-.2-1.1s.5-.6.9-.6h1.5c.8,0,1.5-.4,1.8-1.1h-3.4c-.6,0-1-.4-1-1s.4-1,1-1h3.4c-.4-.6-1-1.1-1.8-1.1h-1.5c-.6,0-1-.4-1-1s.4-1,1-1h6.2c.6,0,1,.4,1,1s-.4,1-1,1h-1.1c.2.3.3.7.4,1.1Z"/>' : '<path d="M6,19.6v-9.3h36v9.3c-1.9.7-3.3,2.5-3.3,4.7s1.4,4,3.3,4.7v9.3H6v-9.3c1.9-.7,3.3-2.5,3.3-4.7s-1.4-4-3.3-4.7Z"/>   <path d="M29.8,17.5h-9.9M29.8,22.5h-9.9M24.8,32.2l-4.9-4.9h2.4c2.7,0,4.9-2.2,4.9-4.9s-2.2-4.9-4.9-4.9"/>';

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

module.exports = Coupon;
