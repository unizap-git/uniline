'use strict';

var React = require('react');

function BottleOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M10.5,4h3c.6,0,1,.4,1,1v-3c0-.6-.4-1-1-1h-3c-.6,0-1,.4-1,1v3c0-.6.4-1,1-1Z"/>     <path d="M16.4,11.7l-1.8-2.4c0,0-.1-.2-.1-.3v-4c0,.6-.4,1-1,1h-3c-.6,0-1-.4-1-1v4c0,.1,0,.2,0,.3l-1.8,2.4c-.7.9-1.1,2.1-1.1,3.3v6c0,1.1.9,2,2,2h7c1.1,0,2-.9,2-2v-6c0-1.2-.4-2.4-1.1-3.3Z"/>   </g>   <path d="M10.5,7c-.6,0-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2c0,.6-.4,1-1,1Z"/>   <path d="M13.5,7c-.6,0-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2c0,.6-.4,1-1,1Z"/>' : '<path d="M15 30C15 28.0527 15.6316 26.1579 16.8 24.6L20.4 19.8C20.7895 19.2807 21 18.6491 21 18V4H27V18C27 18.6491 27.2105 19.2807 27.6 19.8L31.2 24.6C32.3684 26.1579 33 28.0527 33 30V42C33 43.1046 32.1046 44 31 44H17C15.8954 44 15 43.1046 15 42V30Z"/><path d="M21 10L27 10"/><path d="M21 12V8"/><path d="M27 12V8"/>';

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

module.exports = BottleOne;
