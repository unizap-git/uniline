'use strict';

var React = require('react');

function Onesies(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M17,18c-.4,0-3.5.2-3.5,4s-.4,1-1,1h1c2.6,0,4.5-1.9,4.5-4.5v-1.5c0,.6-.4,1-1,1Z"/>     <path d="M10.5,22c0-3.9-3.1-4-3.5-4-.6,0-1-.4-1-1v1.5c0,2.6,1.9,4.5,4.5,4.5h1c-.6,0-1-.4-1-1Z"/>     <path d="M11.5,23h1c-.2,0-.4,0-.5-.2-.1,0-.3.2-.5.2Z"/>     <path d="M22.6,4.7c-3.2-2.1-6.7-3.2-10.6-3.2C6.2,1.5,2.4,3.9,1.4,4.7c-.3.2-.5.7-.4,1.1l1.5,5c.1.4.5.7,1,.7h2.5v5.5c0-.6.4-1,1-1,1.5,0,3.9.8,5,3.3,1.1-2.5,3.5-3.3,5-3.3s1,.4,1,1v-5.5h2.5c.4,0,.8-.3,1-.7l1.5-5c.1-.4,0-.9-.4-1.1ZM12,7.5c-2.2,0-4-1.8-4-4s0-.7.1-1c.1-.5.7-.9,1.2-.7.5.1.9.7.7,1.2,0,.2,0,.3,0,.5,0,1.1.9,2,2,2s2-.9,2-2,0-.3,0-.5c-.1-.5.2-1.1.7-1.2.5-.1,1.1.2,1.2.7,0,.3.1.7.1,1,0,2.2-1.8,4-4,4Z"/>   </g>   <path d="M18,4.5c-.1,0-.2,0-.3,0-3.6-1.2-7.8-1.2-11.4,0-.5.2-1.1,0-1.3-.6-.2-.5,0-1.1.6-1.3,4-1.4,8.7-1.4,12.7,0,.5.2.8.8.6,1.3-.1.4-.5.7-.9.7Z"/>   <path d="M7,19.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>   <path d="M17,19.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>   <path d="M13.5,23h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M7 21L4 11C5.83333 9.66667 13 5 24 5C35 5 42 9.66667 44 11L41 21H34V37C34 41 31 44 27 44H21C17 44 14 41 14 37V21H7Z"/><path d="M34 34C34 34 25 34 25 44"/><path d="M14 34C14 34 23 34 23 44"/><path d="M29.811 5.5C29.9344 5.97943 30 6.48205 30 7C30 10.3137 27.3137 13 24 13C20.6863 13 18 10.3137 18 7C18 6.48205 18.0656 5.97943 18.189 5.5"/><path d="M35.9997 6.98996C32.8112 5.88268 28.7837 5 23.9997 5C19.2157 5 15.1568 5.88268 11.9463 6.98996"/><path d="M14 31C14 31 14 35.875 14 37"/><path d="M34 31C34 31 34 35.875 34 37"/><path d="M21 44C25 44 24 44 27 44"/>';

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

module.exports = Onesies;
