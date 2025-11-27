'use strict';

var React = require('react');

function Pesticide(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16.5,6.8H7.5c-.6,0-1-.4-1-1s.4-1,1-1h9c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <g>     <path d="M20.2,8l-2.7-2.8v-3.3c0-.6-.4-1-1-1H7.5c-.6,0-1,.4-1,1v3.3l-2.7,2.8c-.2.2-.3.4-.3.7v2.8c0-.6.4-1,1-1h4c.6,0,1,.4,1,1v6c0,.6-.4,1-1,1h-4c-.6,0-1-.4-1-1v3.5c0,1.1.9,2,2,2h13c1.1,0,2-.9,2-2v-12.3c0-.3-.1-.5-.3-.7ZM16.5,17.5c0,.6-.4,1-1,1s-1-.4-1-1v-.5c0-.6.4-1,1-1s1,.4,1,1v.5ZM16.5,14.5c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3Z"/>     <path d="M4.5,16.5h3v-4h-3c-.6,0-1-.4-1-1v6c0-.6.4-1,1-1Z"/>   </g>   <path d="M4.5,20c-.6,0-1-.4-1-1v-9c0-.6.4-1,1-1s1,.4,1,1v9c0,.6-.4,1-1,1Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M15 11.3684V4H24H33V11.3684L39 17.4868V19.5263V27.6842V42C39 43.1046 38.1046 44 37 44H11C9.89543 44 9 43.1046 9 42V27.6842V19.5263V17.4868L15 11.3684Z"/><path d="M9 23H17V35H9"/><path d="M15 11.5H33"/><path d="M31 23V29"/><path d="M31 34V35"/><path d="M9 38V20"/>';

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

module.exports = Pesticide;
