'use strict';

var React = require('react');

function Diamonds(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <polygon points="14.6 10 9.4 10 12 17.8 14.6 10"/>     <path d="M22.9,8.6c0,.1,0,.2,0,.3,0-.1,0-.2,0-.3Z"/>     <path d="M22.9,9.4c0-.1,0-.2,0-.4,0,.1,0,.2,0,.4Z"/>     <path d="M1,9c0-.1,0-.2,0-.3,0,.1,0,.2,0,.3Z"/>     <path d="M2,8h20c.4,0,.7.2.9.5,0,0,0-.1,0-.1l-4-5c-.2-.2-.5-.4-.8-.4H6c-.3,0-.6.1-.8.4L1.2,8.4s0,0,0,.1c.2-.3.5-.5.9-.5Z"/>     <path d="M1,9c0,.1,0,.2,0,.4,0-.1,0-.2,0-.4Z"/>     <path d="M12.5,21.8s0,0-.2,0c0,0,.1,0,.2,0Z"/>     <path d="M22,10h-5.3l-3.8,11.3s0,0,0,0c0,0,0,0,0,.1,0,0,0,.1-.1.2,0,0,0,0,0,0l10-12s0-.1,0-.2c-.2.3-.5.5-.9.5Z"/>     <path d="M11.6,21.9c0,0-.1,0-.2,0,0,0,0,0,.2,0Z"/>     <path d="M11.2,21.5s0,0,0-.1c0,0,0,0,0,0l-3.8-11.3H2c-.4,0-.7-.2-.9-.5,0,0,0,.1,0,.2l10,12s0,0,0,0c0,0,0-.1-.1-.2Z"/>   </g>   <path d="M4,6.5l-2,2.5,10,12,10-12-2-2.5"/>' : '<path d="M12 8H36L44 18L24 42L4 18L12 8Z"/><path d="M4 18L44 18"/><path d="M24 42L16 18"/><path d="M24 42L32 18"/><path d="M8 13L4 18L24 42L44 18L40 13"/>';

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

module.exports = Diamonds;
