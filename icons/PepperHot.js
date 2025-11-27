'use strict';

var React = require('react');

function PepperHot(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15.1,3c.7-.9,2.1-1.4,3.3-.6,1,.7,1.7,2.2.8,3.4l-1.1,1.9c.5.5.8,1.2,1,2h0s0,0,0,0c.2.7,0,1.5-.1,2.2h-4.5v-2c0-.6-.4-1-1-1h-2.6c.6-.8,1.1-1.5,1.8-1.9,1-.7,2-.9,3-.6.2,0,.5.1.7.2l1.1-1.9s0,0,0,0c0,0,0-.2,0-.3,0-.1-.1-.3-.3-.4,0,0-.2,0-.3,0-.1,0-.3.1-.4.3,0,.1-.2.2-.3.3h0c-.5.3-1.1.2-1.4-.3-.3-.4-.1-1,.3-1.3ZM9.8,11c-1.3,2.6-2.5,4-4,5.3h0c-.3.3-.7.7-1.2,1.1-1,.9-1.1,2.4-.3,3.5.8,1,2.1,1.4,3.3,1h0c1.6-.7,3.9-1.8,5.3-2.8h0s0,0,0,0c2.1-1.6,3.7-3.2,4.8-4.7,0,0,.1-.2.2-.3h-4.5c-.6,0-1-.4-1-1v-2s-2.7,0-2.7,0Z"/>' : '<path d="M22.2,21.9c3-6.1,6.2-7.7,9-7s4.6,2,5.3,5.2c.9,4.2-3.5,9.9-11.7,16.4-2.4,1.8-7,4-10.1,5.4-1.4.6-3.2.1-4.2-1.3-1-1.4-.8-3.2.5-4.4.8-.9,1.5-1.5,2.2-2.1,3.3-3,5.9-6.1,8.9-12.2ZM22.2,21.9h6v4h6M34.5,14.9l2.5-4.3c.9-1.4.3-3.2-1.1-4.1-1.4-.9-3.2-.3-4.1,1.1h-.2"/>';

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

module.exports = PepperHot;
