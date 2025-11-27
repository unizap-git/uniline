'use strict';

var React = require('react');

function UmbrellaTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M13.5,12v6.6c0,.9-.2,3.4-2,3.4s-2-2.2-2-2.8"/>   <path d="M12,1C4.1,1,1.4,8.1,1,11.9c0,.3,0,.6.3.8s.5.3.7.3h20c.3,0,.5-.1.7-.3s.3-.5.3-.8c-.4-3.8-3.1-10.9-11-10.9ZM15.3,6.2l-3,3.5c-.2.2-.4.3-.7.3,0,0,0,0,0,0-.3,0-.5-.1-.7-.3l-2-2c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1.2,1.2,2.3-2.7c.4-.4,1-.5,1.4-.1.4.4.5,1,.1,1.4Z"/>' : '<path d="M27 24V37.125C27 39 26.6379 44 23 44C19.5714 44 19 39.625 19 38.375"/><path d="M24 4C38.5 4 43.375 17.3333 44 24H4C4.625 17.3333 9.5 4 24 4Z"/><path d="M19 14L23 18L29 11"/>';

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

module.exports = UmbrellaTwo;
