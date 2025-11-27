'use strict';

var React = require('react');

function Cheese(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.5,10c0-1.1-9.1-5.9-11.4-7.2-.3-.2-.8-.1-1.1.1l-6.5,5.1"/>   <path d="M21.8,9.4c-.5-.4-1.2-.6-1.8-.5-4.5.8-13.3-1.3-15.9-2-.6-.2-1.2,0-1.7.4-.5.4-.8,1-.8,1.6v11.1c0,.5.2,1.1.6,1.5.4.4.9.5,1.4.5s0,0,.1,0l17-.9c1.1,0,1.9-.9,1.9-2v-8.1c0-.6-.3-1.2-.7-1.6ZM6,13.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM9,18c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2ZM12.5,14.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM17,17c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M43 20C43 17.8285 24.8921 8.11198 20.134 5.59629C19.4394 5.22904 18.603 5.31194 17.9852 5.79737L5 16"/><path d="M5 17.6522C5 16.3232 6.2688 15.3543 7.55521 15.688C13.9619 17.3498 30.8602 21.3331 40.1615 19.7589C41.5557 19.523 43 20.5369 43 21.951V38.1025C43 39.1662 42.1674 40.0438 41.1051 40.0997L7.10512 41.8892C5.96083 41.9494 5 41.0378 5 39.892V17.6522Z"/><circle cx="12" cy="25" r="2"/><circle cx="25" cy="27" r="2"/><circle cx="34" cy="32" r="2"/><circle cx="18" cy="32" r="2"/>';

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

module.exports = Cheese;
