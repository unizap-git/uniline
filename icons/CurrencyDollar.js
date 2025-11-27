'use strict';

var React = require('react');

function CurrencyDollar(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10.5,8.7c.2-.2.5-.3.8-.4v2.8c-.3,0-.6-.2-.8-.4-.4-.3-.5-.7-.5-1s.2-.7.5-1ZM12.8,15.7v-2.8c.3,0,.7.2.9.4.4.3.6.7.6,1s-.2.7-.6,1c-.3.2-.6.3-.9.4h0Z"/>   <path d="M12,2.2C6.6,2.2,2.2,6.6,2.2,12s4.4,9.8,9.8,9.8,9.8-4.4,9.8-9.8S17.4,2.2,12,2.2ZM12.8,6c0-.4-.3-.8-.8-.8s-.8.3-.8.8v.8c-.6.1-1.2.4-1.7.8-.7.6-1.1,1.3-1.1,2.2s.4,1.6,1.1,2.2c.5.4,1.1.6,1.7.8v3c-.3,0-.6-.2-.9-.4l-.9-.7c-.3-.2-.8-.2-1,.2-.2.3-.2.8.1,1l.9.7c.5.4,1.2.6,1.8.8v.8c0,.4.3.8.8.8s.8-.3.8-.8v-.8c.7,0,1.3-.4,1.8-.7.7-.6,1.2-1.3,1.2-2.2s-.4-1.6-1.2-2.2c-.5-.4-1.2-.7-1.8-.8v-3c.3,0,.6.2.8.4l.4.3c.3.3.8.2,1.1-.1s.2-.8-.1-1.1l-.4-.3c-.5-.4-1.1-.6-1.7-.8,0,0,0-.8,0-.8Z" fill-rule="evenodd"/>' : '<path d="M24,12v24M18,30.4l1.8,1.3c2.3,1.8,6.1,1.8,8.5,0,2.3-1.8,2.3-4.6,0-6.4-1.2-.9-2.7-1.3-4.2-1.3s-2.9-.4-4-1.3c-2.2-1.8-2.2-4.6,0-6.4s5.8-1.8,8,0l.8.7M42,24c0,9.9-8.1,18-18,18S6,33.9,6,24,14.1,6,24,6s18,8.1,18,18Z"/>';

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

module.exports = CurrencyDollar;
