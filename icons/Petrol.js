'use strict';

var React = require('react');

function Petrol(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6,8l5-5h9"/>   <path d="M21,2h-1.5c-.3,0-.6.1-.7.3l-4.2,4.7H6c-.3,0-.5.1-.7.3l-3,3c-.2.2-.3.4-.3.7v10c0,.6.4,1,1,1h18c.6,0,1-.4,1-1V3c0-.6-.4-1-1-1ZM14.5,17.1c-.6.9-1.6,1.4-2.6,1.4s-2-.7-2.6-1.7c-.5-1-.4-2.1.2-2.9.6-.8,1.2-2.1,1.4-2.7.1-.3.4-.6.8-.6.4,0,.7.1.9.4.5.7,1.7,2.6,2.1,3.7.3.8.2,1.8-.4,2.5Z"/>   <path d="M5.5,4l-3.5,3.5"/>' : '<path d="M42 42V6H39L30 16H12L6 22V42H42Z"/><path d="M12 16L22 6H40"/><path d="M20.643 28.8886C22.0743 27.0081 23.1776 24.4103 23.774 23C24.8177 24.4103 27.084 27.9484 27.7997 29.8288C28.6942 32.1793 26.4578 35 23.774 35C21.0903 35 18.8538 31.2391 20.643 28.8886Z"/><path d="M11 8L4 15"/>';

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

module.exports = Petrol;
