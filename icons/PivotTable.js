'use strict';

var React = require('react');

function PivotTable(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M6,22v-14h-4s0,0,0,0c-.6,0-1-.4-1-1v14c0,1.1.9,2,2,2h4c-.6,0-1-.4-1-1Z"/>     <path d="M21,1H7c.6,0,1,.4,1,1v4h14s0,0,0,0c.6,0,1,.4,1,1v-4c0-1.1-.9-2-2-2Z"/>     <path d="M22,8h-14v14c0,.6-.4,1-1,1h14c1.1,0,2-.9,2-2V7c0,.6-.4,1-1,1ZM19.7,13c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-.5-.5v4.6c0,.6-.4,1-1,1h-4.3l.5.5c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-2.2-2.2s0-.1-.1-.2c0,0,0-.1-.1-.2-.2-.4,0-.8.2-1.1l2.2-2.2c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-.5.5h3.3v-3.6l-.5.5c-.4.4-1,.4-1.4,0s-.4-1,0-1.4l2.2-2.2c.4-.4,1-.4,1.4,0l2.2,2.2c.4.4.4,1,0,1.4Z"/>     <path d="M1,3v4c0-.6.4-1,1-1h4V2c0-.6.4-1,1-1H3c-1.1,0-2,.9-2,2Z"/>   </g>   <path d="M14,3H4c-.6,0-1-.4-1-1s.4-1,1-1h10c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M14,23H4c-.6,0-1-.4-1-1s.4-1,1-1h10c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M22,10c-.6,0-1-.4-1-1v-5c0-.6.4-1,1-1s1,.4,1,1v5c0,.6-.4,1-1,1Z"/>   <path d="M2,10c-.6,0-1-.4-1-1v-5c0-.6.4-1,1-1s1,.4,1,1v5c0,.6-.4,1-1,1Z"/>' : '<path d="M42.0004 4H6.00005C4.89546 4 4.00002 4.89546 4.00005 6.00005L4.00104 42.0001C4.00107 43.1046 4.8965 44 6.00104 44H42.0004C43.105 44 44.0004 43.1046 44.0004 42V6C44.0004 4.89543 43.105 4 42.0004 4Z"/><path d="M20.0088 34.0083H33.5005V20.0083"/><path d="M24.5 38.5L23 37L20 34L23 31L24.5 29.5"/><path d="M29 24.5L30.5 23L33.5 20L36.5 23L38 24.5"/><path d="M14 4L14 44"/><path d="M4 14.0378L44 14"/><path d="M8 4H28"/><path d="M8 44H28"/><path d="M44 8V18"/><path d="M4 8L4 18"/>';

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

module.exports = PivotTable;
