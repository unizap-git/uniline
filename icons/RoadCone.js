'use strict';

var React = require('react');

function RoadCone(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5.5,22h-2.5c-.6,0-1-.4-1-1s.4-1,1-1h1.7L9.5,2.7c.1-.4.5-.7,1-.7h3c.4,0,.8.3,1,.7l4.8,17.3h1.7c.6,0,1,.4,1,1s-.4,1-1,1H5.5ZM6.8,20h10.4L12.7,4h-1.5l-4.4,16Z"/>   <g>     <path d="M17,15.5l-.7-2.6c0,0-.2,0-.3,0h-8c0,0-.2,0-.3,0l-.7,2.6h9.9Z"/>     <path d="M15.7,11l-.7-2.6c0,0-.2,0-.3,0h-5.5c0,0-.2,0-.3,0l-.7,2.6h7.4Z"/>     <polygon points="14.5 6.5 14.1 5.2 13.5 3 10.5 3 9.9 5.2 9.5 6.5 14.5 6.5"/>     <path d="M17.8,18.3l-.2-.9c0,0-.2,0-.3,0H6.8c0,0-.2,0-.3,0l-.4,1.3-.6,2.2h13l-.8-2.7Z"/>   </g>   <path d="M17.7,19.3c-.4,0-.8-.3-1-.7l-3.6-13c-.1-.5.2-1.1.7-1.2.5-.1,1.1.2,1.2.7l3.6,13c.1.5-.2,1.1-.7,1.2,0,0-.2,0-.3,0Z"/>   <path d="M6.1,19.8c0,0-.2,0-.3,0-.5-.1-.8-.7-.7-1.2l3.8-13.5c.1-.5.7-.8,1.2-.7.5.1.8.7.7,1.2l-3.8,13.5c-.1.4-.5.7-1,.7Z"/>' : '<path d="M27 6H21L19.75 10.5L18.5 15L16 24L13.5 33L12.25 37.5L11 42H37L35.5 36.6L32 24L29.5 15L28.25 10.5L27 6Z"/><path d="M37 42L35.5 36.6L32 24L29.5 15L28.25 10.5L27 6H21L19.75 10.5L18.5 15L16 24L13.5 33L12.25 37.5L11 42M37 42H11H37ZM37 42H6H11H37ZM37 42H42H37Z"/><path d="M13.5 33H34.5"/><path d="M32 24H16"/><path d="M29.5 15H18.5"/><path d="M28.25 10.5L35.5 36.6"/><path d="M12.25 37.5L19.75 10.5"/>';

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

module.exports = RoadCone;
