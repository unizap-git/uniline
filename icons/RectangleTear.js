'use strict';

var React = require('react');

function RectangleTear(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M20,2h-6.5c.3,0,.5,0,.7.3.4.4.4,1,0,1.4l-2.3,2.3,2.3,2.3c.4.4.4,1,0,1.4l-2.3,2.3,2.3,2.3c.4.4.4,1,0,1.4l-2.3,2.3,2.3,2.3c.4.4.4,1,0,1.4s-.5.3-.7.3h6.5c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2Z"/>     <path d="M9.8,18.7c-.4-.4-.4-1,0-1.4l2.3-2.3-2.3-2.3c-.4-.4-.4-1,0-1.4l2.3-2.3-2.3-2.3c-.4-.4-.4-1,0-1.4l3-3c.2-.2.5-.3.7-.3H4c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2h9.5c-.3,0-.5,0-.7-.3l-3-3Z"/>   </g>   <path d="M9,3h8"/>   <path d="M17,22h-8c-.6,0-1-.4-1-1s.4-1,1-1h8c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M6 8V40C6 41.1046 6.89543 42 8 42H40C41.1046 42 42 41.1046 42 40V8C42 6.89543 41.1046 6 40 6H8C6.89543 6 6 6.89543 6 8Z"/><path d="M27 6L21 12L27 18L21 24L27 30L21 36L27 42"/><path d="M18 6H34"/><path d="M18 42H34"/>';

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

module.exports = RectangleTear;
