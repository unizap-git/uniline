'use strict';

var React = require('react');

function OrangeOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M8.7,20.6v-10.6s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0-.1,0,0,0-.1,0-.2,0,0,0,0,0,0,0,0,0-.2.2-.2,0,0,0,0,0,0,0,0,0,0,0,0l-7.4,7.4c-.4.4-.4,1,0,1.4,2.1,2.1,4.9,3.2,7.7,3.3-.3-.2-.5-.5-.5-.9Z"/>     <polygon points="8.9 9.3 9 9.3 9 9.3 8.9 9.3"/>     <path d="M17.8,1.9c-.4-.4-1-.4-1.4,0l-7.4,7.4c0,0,.2-.1.2-.2,0,0,0,0,0,0,0,0,.2,0,.2,0,0,0,0,0,.1,0s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0l10.3.4c.6,0,1,.5,1,1,0,.5-.5,1-1,1s0,0,0,0l-7.7-.3,5.6,5.6c.4.4.4,1,0,1.4,4.5-4.5,4.5-11.8,0-16.3Z"/>     <path d="M16.4,18.1l-5.7-5.7v8.2c0,.4-.2.7-.5.9,2.8-.1,5.5-1.2,7.7-3.3-.2.2-.5.3-.7.3s-.5,0-.7-.3Z"/>   </g>   <path d="M9.7,21.5c-.9,0-1.8-.1-2.7-.3-.5-.1-.9-.7-.7-1.2.1-.5.7-.9,1.2-.7,3.3.8,6.6-.2,9-2.5,2.4-2.4,3.3-5.7,2.5-9-.1-.5.2-1.1.7-1.2.5-.1,1.1.2,1.2.7,1,3.9-.2,8-3,10.8s-5.1,3.4-8.1,3.4Z"/>   <path d="M7.2,13.5c-.3,0-.5,0-.7-.3-.4-.4-.4-1,0-1.4l4.2-4.2c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-4.2,4.2c-.2.2-.5.3-.7.3Z"/>' : '<g clip-path="url(#icon-2a5386826d6533ff)"><path d="M34.1508 34.8492C42.3518 26.6482 42.3518 13.3518 34.1508 5.15076L4.45227 34.8492C12.6533 43.0503 25.9497 43.0503 34.1508 34.8492Z"/><path d="M19.3011 19.9999L34.1504 34.8491"/><path d="M19.3018 19.9997V41.2129"/><path d="M19.3015 19.9999L39.8076 20.707"/><path d="M39.7545 14.9967C41.4194 21.8766 39.5661 29.4339 34.1947 34.8053C28.8232 40.1768 21.2659 42.0301 14.3861 40.3652"/><path d="M14.3516 24.9496L22.8369 16.4644"/></g><defs><clipPath id="icon-2a5386826d6533ff"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = OrangeOne;
