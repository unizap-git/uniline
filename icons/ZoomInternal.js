'use strict';

var React = require('react');

function ZoomInternal(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M22,1h-14c.6,0,1,.4,1,1v6c0,.6-.4,1-1,1H2c-.6,0-1-.4-1-1v14c0,.6.4,1,1,1h20c.6,0,1-.4,1-1V2c0-.6-.4-1-1-1ZM19,18c0,.1,0,.3,0,.4-.1.2-.3.4-.5.5-.1,0-.3,0-.4,0h-6c-.6,0-1-.4-1-1s.4-1,1-1h3.6l-4.3-4.3c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l4.3,4.3v-3.6c0-.6.4-1,1-1s1,.4,1,1v6Z"/>     <path d="M2,7h5V2c0-.6.4-1,1-1H2c-.6,0-1,.4-1,1v6c0-.6.4-1,1-1Z"/>   </g>   <path d="M2,14c-.6,0-1-.4-1-1V3c0-.6.4-1,1-1s1,.4,1,1v10c0,.6-.4,1-1,1Z"/>   <path d="M13.5,3H3.5c-.6,0-1-.4-1-1s.4-1,1-1h10c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M44 4H4V44H44V4Z"/><path d="M16 4V16H4"/><path d="M36 24V36H24"/><path d="M36 36L24 24"/><path d="M4 6V26"/><path d="M7 4H27"/>';

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

module.exports = ZoomInternal;
