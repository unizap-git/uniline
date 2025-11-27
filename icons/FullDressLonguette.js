'use strict';

var React = require('react');

function FullDressLonguette(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10,2v3"/>   <path d="M14,2v3"/>   <g>     <path d="M21.1,21.5l-5.1-9.8v-1.3c0,.6-.4,1-1,1h-6c-.6,0-1-.4-1-1v1.2l-5.4,9.8c-.2.3-.2.7,0,1,.2.3.5.5.9.5h16.8c.4,0,.7-.2.9-.5.2-.3.2-.7,0-1Z"/>     <path d="M9,9.5h6c.6,0,1,.4,1,1v-1.3l1.9-3.8c.2-.3.1-.7,0-1-.2-.3-.5-.5-.9-.5H7c-.3,0-.7.2-.9.5-.2.3-.2.7,0,1l1.9,3.8v1.3c0-.6.4-1,1-1Z"/>   </g>   <path d="M9,9.5v2"/>   <path d="M15,9.5v2"/>' : '<path d="M18 18L14 10H34L30 18V24L40.5 44H7L18 24V18Z"/><path d="M20 4V10"/><path d="M28 4V10"/><path d="M18 21L30 21"/><path d="M18 19V23"/><path d="M30 19V23"/>';

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

module.exports = FullDressLonguette;
