'use strict';

var React = require('react');

function Spikedshoes(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,3h-8v4h8V3Z"/>   <path d="M22,6h-8c-.6,0-1,.4-1,1v2h-2.5c.6,0,1,.4,1,1v3c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1h-3.5c.6,0,1,.4,1,1v3c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1h-1c-2.8,0-5,2.2-5,5v3c0,1.7,1.3,3,3,3h17c1.1,0,2-.9,2-2V7c0-.6-.4-1-1-1Z"/>   <path d="M7.5,21v-2"/>   <path d="M4,21v-2"/>   <path d="M11,21v-2"/>   <path d="M17,21v-2"/>   <path d="M20.5,21v-2"/>   <path d="M11.5,10h-5.5"/>' : '<path d="M44 6H28V14H44V6Z" stroke-miterlimit="2"/><path d="M44 14V36C44 37.11 43.11 38 42 38H8C5.79 38 4 36.21 4 34V28C4 23.58 7.58 20 12 20H28V14H44Z" stroke-miterlimit="2"/><path d="M14 26V20" stroke-miterlimit="2"/><path d="M21 26V20" stroke-miterlimit="2"/><path d="M15 42V38" stroke-miterlimit="2"/><path d="M8 42V38" stroke-miterlimit="2"/><path d="M22 42V38" stroke-miterlimit="2"/><path d="M34 42V38" stroke-miterlimit="2"/><path d="M41 42V38" stroke-miterlimit="2"/><path d="M23 20L12 20" stroke-miterlimit="2"/>';

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

module.exports = Spikedshoes;
