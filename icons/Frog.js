'use strict';

var React = require('react');

function Frog(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.2,3.9c-1.3-.8-2.9-1.1-4.2-.7-1,.3-1.9.9-2.4,1.8-.1.2-.2.5-.3.7-.8,0-1.7-.1-2.6,0,0-.2-.2-.4-.3-.6-.5-.9-1.3-1.5-2.4-1.8-1.3-.4-2.9,0-4.2.7C1.4,5.4.3,8.3,1.5,10.3c0,.1.1.2.2.3-.4.8-.6,1.7-.6,2.7,0,4.3,4.8,7.7,10.7,7.7s10.8-3.5,10.8-7.7-.2-1.5-.5-2.3c.2-.2.4-.4.5-.7,1.1-2.1,0-5-2.4-6.4ZM6,9.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM10.1,15.3c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM14.1,15.3c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM18,9.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M19.1015 10.8942C19.5261 11.6689 19.7431 12.5226 19.772 13.4061C20.9787 13.2453 22.2252 13.1611 23.5003 13.1611C25.1295 13.1611 26.7122 13.2986 28.2249 13.5577C28.2328 12.6203 28.4497 11.7131 28.8985 10.8942C30.6575 7.68502 35.3132 7.04762 39.2973 9.47057C43.2814 11.8935 45.0852 16.4593 43.3262 19.6685C42.8986 20.4486 42.2999 21.0768 41.5812 21.5459C42.4961 23.1006 43 24.8001 43 26.5806C43 33.9919 34.2697 40 23.5003 40C12.7308 40 4.00052 33.9919 4.00052 26.5806C4.00052 24.5994 4.62433 22.7186 5.74416 21.026C5.32121 20.6426 4.95932 20.1894 4.67378 19.6685C2.91478 16.4593 4.71859 11.8935 8.7027 9.47057C12.6868 7.04762 17.3425 7.68502 19.1015 10.8942Z"/><circle cx="12" cy="17" r="2"/><circle cx="20.1562" cy="28.5762" r="2"/><circle cx="28.1562" cy="28.5762" r="2"/><circle cx="36" cy="17" r="2"/>';

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

module.exports = Frog;
