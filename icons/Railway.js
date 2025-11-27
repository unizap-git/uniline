'use strict';

var React = require('react');

function Railway(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M17,1H7c-1.1,0-2,.9-2,2v7c0-.6.4-1,1-1h12c.6,0,1,.4,1,1V3c0-1.1-.9-2-2-2Z"/>     <path d="M18,11H6c-.6,0-1-.4-1-1v5c0,1.1.9,2,2,2h10c1.1,0,2-.9,2-2v-5c0,.6-.4,1-1,1ZM9,14c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM15,14c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>   </g>   <path d="M10.5,19h3"/>   <path d="M9,22h6"/>   <path d="M8.5,16l-3,6" stroke-miterlimit="2"/>   <path d="M15.5,16l3,6" stroke-miterlimit="2"/>   <path d="M18,13.5c-.6,0-1-.4-1-1v-5c0-.6.4-1,1-1s1,.4,1,1v5c0,.6-.4,1-1,1Z"/>   <path d="M6,13.5c-.6,0-1-.4-1-1v-5c0-.6.4-1,1-1s1,.4,1,1v5c0,.6-.4,1-1,1Z"/>' : '<path d="M12 6C12 4.89543 12.8954 4 14 4H34C35.1046 4 36 4.89543 36 6V30C36 31.1046 35.1046 32 34 32H14C12.8954 32 12 31.1046 12 30V6Z"/><circle cx="18" cy="26" r="2"/><circle cx="30" cy="26" r="2"/><path d="M12 20L36 20"/><path d="M21 38H27"/><path d="M18 44H30"/><path d="M17 32L11 44"/><path d="M31 32L37 44"/><path d="M36 15V25"/><path d="M12 15V25"/>';

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

module.exports = Railway;
