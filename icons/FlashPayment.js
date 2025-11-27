'use strict';

var React = require('react');

function FlashPayment(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.9,7.6c-.2-.4-.5-.6-.9-.6h-4.7l1.2-4.8c0-.3,0-.6-.2-.9s-.5-.4-.8-.4h-7.5c-.5,0-.9.3-1,.7l-3,11.5c0,.3,0,.6.2.9.2.2.5.4.8.4h2.7l-1.7,7.3c-.1.4.1.9.5,1.1.1,0,.3.1.5.1.3,0,.5-.1.7-.3l13-14c.3-.3.3-.7.2-1.1ZM11.5,5.7l-1,4c-.1.5-.5.8-1,.8s-.2,0-.2,0c-.5-.1-.9-.7-.7-1.2l1-4c.1-.5.7-.9,1.2-.7.5.1.9.7.7,1.2Z"/>' : '<path d="M31 4H16L10 27H18L14 44L40 16H28L31 4Z"/><path d="M21 11L19 19"/>';

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

module.exports = FlashPayment;
