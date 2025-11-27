'use strict';

var React = require('react');

function BookmarkThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3.5,15v4"/>   <path d="M20.5,15v4"/>   <g>     <path d="M20.5,2h-8c.6,0,1,.4,1,1v10c0,.4-.2.7-.6.9-.1,0-.3,0-.4,0-.2,0-.4,0-.6-.2l-1.9-1.5-1.9,1.5c-.3.2-.7.3-1.1.1-.3-.2-.6-.5-.6-.9V3c0-.6.4-1,1-1h-2.5c-1.4,0-2.5,1.1-2.5,2.5v12.5c0-.6.4-1,1-1h17c.6,0,1,.4,1,1V3c0-.6-.4-1-1-1Z"/>     <path d="M20.5,18H3.5c-.6,0-1-.4-1-1v2.5c0,1.4,1.1,2.5,2.5,2.5h15.5c.6,0,1-.4,1-1v-4c0,.6-.4,1-1,1Z"/>   </g>   <path d="M5.5,3h9"/>' : '<path d="M7 9C7 7.34315 8.34315 6 10 6H41V42H10C8.34315 42 7 40.6569 7 39V9Z"/><path d="M7 34L41 34"/><path d="M7 30V38"/><path d="M41 30V38"/><path d="M15 6H25V26L20 22L15 26V6Z"/><path d="M11 6L29 6"/>';

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

module.exports = BookmarkThree;
