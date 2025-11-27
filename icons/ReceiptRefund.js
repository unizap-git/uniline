'use strict';

var React = require('react');

function ReceiptRefund(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M34.6,5.4c-7-.8-14.1-.8-21.2,0-2.6.4-4.5,2.5-4.5,5.1v31.7c0,.3.2.6.4.8.3.2.6.2.9.1l6.6-2.7,6.6,2.7c.2,0,.5,0,.7,0l6.6-2.7,6.6,2.7c.1,0,.2,0,.4,0,.2,0,.4,0,.6-.2.3-.2.4-.5.4-.8V10.5c0-2.7-1.9-4.9-4.4-5.1ZM26.1,31.1h-2.1c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5h2.1c1.9,0,3.4-1.5,3.4-3.4s-1.5-3.4-3.4-3.4h-5.5l1.6,1.6c.6.6.6,1.5,0,2.1s-.7.4-1.1.4-.8-.1-1.1-.4l-4.2-4.2c-.1-.1-.3-.3-.3-.5,0,0,0,0,0,0,0-.2-.1-.4-.1-.5h0s0,0,0,0c0-.2,0-.4.1-.5,0,0,0,0,0,0,0-.2.2-.4.3-.5l4.2-4.2c.6-.6,1.5-.6,2.1,0s.6,1.5,0,2.1l-1.6,1.6h5.5c3.5,0,6.4,2.9,6.4,6.4s-2.9,6.4-6.4,6.4Z"/>' : '<path d="M17,19.8h9.1c2.7,0,4.9,2.2,4.9,4.9s-2.2,4.9-4.9,4.9h-2.1M17,19.8l4.2-4.2M17,19.8l4.2,4.2M38,10.5v31.7l-7-2.8-7,2.8-7-2.8-7,2.8V10.5c0-2.1,1.5-3.8,3.6-4.1,6.9-.8,14-.8,20.9,0,2.1.2,3.5,2,3.5,4.1h0Z"/>';

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

module.exports = ReceiptRefund;
