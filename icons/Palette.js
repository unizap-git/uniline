'use strict';

var React = require('react');

function Palette(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8.6,2.6c4.3-1.5,9.2,0,11.7,3.9,1.7,2.5,2.1,5.6,1.2,8.5h0s0,0,0,0c-.4,1.2-1.6,2-2.8,2h-2.7c-.4,0-.8.3-.9.7,0,.1,0,.3,0,.4v.9c0,1.7-1.4,3-3,3,0,0,0,0,0,0-1.5,0-2.9-.4-4.2-1h0s0,0,0,0h0c-3.2-1.5-5.3-4.5-5.7-8h0c-.5-4.6,2.3-8.9,6.6-10.4ZM12,6c-.6,0-1,.4-1,1s.4,1,1,1h0c.6,0,1-.4,1-1s-.4-1-1-1h0ZM8.5,7.5c-.6,0-1,.4-1,1,0,.6.4,1,1,1h0c.6,0,1-.4,1-1s-.4-1-1-1c0,0,0,0,0,0ZM15.5,7.5c-.6,0-1,.4-1,1,0,.6.4,1,1,1h0c.6,0,1-.4,1-1s-.4-1-1-1c0,0,0,0,0,0ZM7,11c-.6,0-1,.4-1,1s.4,1,1,1h0c.6,0,1-.4,1-1s-.4-1-1-1h0Z" fill-rule="evenodd"/>' : '<path d="M32.1,32.1h5.5c1.6,0,3.2-1,3.8-2.6,3-9.5-2.4-19.8-11.9-22.8-9.5-3-19.8,2.4-22.8,11.9-.8,2.4-1,4.9-.8,7.3.8,6.3,4.6,11.9,10.5,14.6,2.4,1.2,5.1,1.8,7.7,1.8s4-1.8,4-4h0v-1.8c0-2.2,1.6-4.2,3.8-4.2h.2ZM14.5,26.2c0,.8-.6,1.4-1.4,1.4s-1.4-.6-1.4-1.4.6-1.4,1.4-1.4,1.4.6,1.4,1.4ZM17.1,17.3c0,.8-.6,1.4-1.4,1.4s-1.4-.6-1.4-1.4.6-1.4,1.4-1.4,1.4.6,1.4,1.4ZM24.8,12.5c0,.8-.6,1.4-1.4,1.4s-1.4-.6-1.4-1.4.6-1.4,1.4-1.4,1.4.6,1.4,1.4ZM32.7,14.5c0,.8-.6,1.4-1.4,1.4s-1.4-.6-1.4-1.4.6-1.4,1.4-1.4,1.4.6,1.4,1.4Z" stroke-miterlimit="10"/>';

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

module.exports = Palette;
