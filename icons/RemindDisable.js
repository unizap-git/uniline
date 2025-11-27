'use strict';

var React = require('react');

function RemindDisable(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5,19v-10c0-3.9,3.1-7,7-7s7,3.1,7,7v10M2,19h20"/>   <path d="M12,22c1.4,0,2.5-1.1,2.5-2.5v-.5h-5v.5c0,1.4,1.1,2.5,2.5,2.5Z"/>   <path d="M12,2c-3.9,0-7,3.1-7,7v10h14v-10c0-3.9-3.1-7-7-7ZM15.2,12.8c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-1.8-1.8-1.8,1.8c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l1.8-1.8-1.8-1.8c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1.8,1.8,1.8-1.8c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-1.8,1.8,1.8,1.8Z"/>' : '<path d="M24 4C16.268 4 10 10.268 10 18V38H38V18C38 10.268 31.732 4 24 4Z"/><path d="M10 38V18C10 10.268 16.268 4 24 4C31.732 4 38 10.268 38 18V38M4 38H44"/><path d="M24 44C26.7614 44 29 41.7614 29 39V38H19V39C19 41.7614 21.2386 44 24 44Z"/><path d="M19 17L29 27"/><path d="M29 17L19 27"/>';

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

module.exports = RemindDisable;
