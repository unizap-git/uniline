'use strict';

var React = require('react');

function BankTransfer(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2,12.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>   <path d="M22,12.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>   <g>     <path d="M22,11H2c-.6,0-1-.4-1-1v8c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2v-8c0,.6-.4,1-1,1ZM18.5,15.5h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>     <path d="M21,4H3c-1.1,0-2,.9-2,2v4c0-.6.4-1,1-1h20c.6,0,1,.4,1,1v-4c0-1.1-.9-2-2-2Z"/>   </g>' : '<rect x="4" y="10" width="40" height="28" rx="2"/><path d="M4 20H44"/><path d="M4 17V23"/><path d="M44 17V23"/><path d="M29 29L37 29"/>';

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

module.exports = BankTransfer;
