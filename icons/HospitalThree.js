'use strict';

var React = require('react');

function HospitalThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M1.8,10.8c-.4.4-.4,1,0,1.4.4.4,1,.4,1.4,0l-1.4-1.4ZM12,2l.7-.7c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3l.7.7ZM20.8,12.2c.4.4,1,.4,1.4,0,.4-.4.4-1,0-1.4l-1.4,1.4ZM3.2,12.2L12.7,2.7l-1.4-1.4L1.8,10.8l1.4,1.4ZM11.3,2.7l9.5,9.5,1.4-1.4L12.7,1.3l-1.4,1.4Z"/>   <path d="M19.2,12.3l-6.5-6.5c-.4-.4-1-.4-1.4,0l-6.5,6.5c-.2.2-.3.4-.3.7v9c0,.6.4,1,1,1h13c.6,0,1-.4,1-1v-9c0-.3-.1-.5-.3-.7ZM14.5,16.5h-1.5v1.5c0,.6-.4,1-1,1s-1-.4-1-1v-1.5h-1.5c-.6,0-1-.4-1-1s.4-1,1-1h1.5v-1.5c0-.6.4-1,1-1s1,.4,1,1v1.5h1.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M12.7,26.1v15.7h22.6v-15.7l-11.3-11.3-11.3,11.3Z"/>   <path d="M19.6,30.5h8.7"/>   <path d="M24,26.1v8.7"/>   <path d="M40.8,23.8L24,7,7.2,23.8"/>';

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

module.exports = HospitalThree;
