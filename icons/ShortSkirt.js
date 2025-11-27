'use strict';

var React = require('react');

function ShortSkirt(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.5,17.2l-3.5-13c0-.2-.1-.3-.3-.4l-2.5-2.5c-.2-.2-.4-.3-.7-.3h-7c-.3,0-.5.1-.7.3l-2.5,2.5c-.1.1-.2.3-.3.4l-3.5,13c0,.2,0,.4,0,.6,0,.2,1.8,5.2,10.4,5.2s10.4-5,10.4-5.2c0-.2,0-.4,0-.6ZM9.5,13.2l-2,8c-.1.5-.5.8-1,.8s-.2,0-.2,0c-.5-.1-.9-.7-.7-1.2l2-8c.1-.5.7-.9,1.2-.7.5.1.9.7.7,1.2Z"/>   <path d="M2.5,17.5s1.5,4.5,9.5,4.5"/>' : '<path d="M12 9L17 4H31L36 9L43 35C43 35 39.9997 44 24 44C8.00031 44 5 35 5 35L12 9Z"/><path d="M13 42L17 26"/><path d="M5 35C5 35 8.00031 44 24 44"/>';

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

module.exports = ShortSkirt;
