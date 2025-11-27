'use strict';

var React = require('react');

function BigClock(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,11.9v10.1c0,.6.4,1,1,1h20c.6,0,1-.4,1-1v-10.1c0-6-4.9-10.9-11-10.9ZM12,19c-3.9,0-7-3.1-7-7s3.1-7,7-7,7,3.1,7,7-3.1,7-7,7Z"/>   <path d="M14,15c-.3,0-.5,0-.7-.3l-2-2c-.2-.2-.3-.4-.3-.7v-3c0-.6.4-1,1-1s1,.4,1,1v2.6l1.7,1.7c.4.4.4,1,0,1.4s-.5.3-.7.3Z"/>' : '<path d="M24 4C12.9543 4 4 12.8648 4 23.8V44H44V23.8C44 12.8648 35.0457 4 24 4Z"/><circle cx="24" cy="24" r="12"/><path d="M24 18V24L28 28"/>';

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

module.exports = BigClock;
