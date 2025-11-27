'use strict';

var React = require('react');

function Balance(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18.4,6.1c-3.8-1.6-9-1.6-12.8,0-.4.2-.6.6-.6,1l.5,5.5c0,.3.2.6.5.8.2.1.3.2.5.2s.2,0,.3,0c3.3-1.2,7-1.2,10.3,0,.3.1.6,0,.9,0,.3-.2.4-.4.5-.8l.5-5.5c0-.4-.2-.8-.6-1ZM12.5,12.4c-.2,0-.3.1-.5.1-.3,0-.7-.2-.9-.5l-1.5-2.5c-.3-.5-.1-1.1.3-1.4.5-.3,1.1-.1,1.4.3l1.5,2.5c.3.5.1,1.1-.3,1.4Z"/>   <path d="M21,19.5c0,.8-.7,1.5-1.5,1.5H4.5c-.8,0-1.5-.7-1.5-1.5V4.5c0-.8.7-1.5,1.5-1.5h15c.8,0,1.5.7,1.5,1.5v15Z"/>   <path d="M14.5,12.7c0,0-.1,0-.2,0-1.6-.2-3.1-.2-4.7,0-.6,0-1.1-.3-1.1-.8,0-.5.3-1.1.8-1.1,1.8-.3,3.5-.3,5.3,0,.5,0,.9.6.8,1.1,0,.5-.5.8-1,.8Z"/>' : '<path d="M35 25C27.89 22.42 20.11 22.42 13 25L12 14C19 11 29 11 36 14L35 25Z" stroke-miterlimit="2"/><path d="M24 23L21 18" stroke-miterlimit="2"/><path d="M42 39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6H39C40.6569 6 42 7.34315 42 9V39Z" stroke-miterlimit="2"/><path d="M29 23.4552C25.6869 22.9348 22.3131 22.9348 19 23.4552" stroke-miterlimit="2"/>';

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

module.exports = Balance;
