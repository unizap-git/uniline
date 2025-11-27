'use strict';

var React = require('react');

function InvalidFiles(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.8,6.6l-4.5-5.2c-.2-.2-.5-.3-.8-.3H4c-.6,0-1,.4-1,1v20c0,.6.4,1,1,1h16c.6,0,1-.4,1-1V7.2c0-.2,0-.5-.2-.7ZM12,18.5c-3.3,0-6-2.7-6-6s2.7-6,6-6,3,.6,4.1,1.6c1.2,1.1,1.9,2.7,1.9,4.4,0,3.3-2.7,6-6,6Z"/>   <path d="M15.5,17c-.3,0-.5,0-.7-.3l-7-7c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l7,7c.4.4.4,1,0,1.4s-.5.3-.7.3Z"/>   <path d="M12,18.5c-.6,0-1-.4-1-1s.4-1,1-1c2.2,0,4-1.8,4-4s.4-1,1-1,1,.4,1,1c0,3.3-2.7,6-6,6ZM7,13.5c-.6,0-1-.4-1-1,0-3.3,2.7-6,6-6s1,.4,1,1-.4,1-1,1c-2.2,0-4,1.8-4,4s-.4,1-1,1Z"/>' : '<path d="M8 44V4H31L40 14.5V44H8Z"/><path d="M34 25C34 30.5228 29.5228 35 24 35C18.4772 35 14 30.5228 14 25C14 19.4772 18.4772 15 24 15C26.6582 15 29.0742 16.0372 30.8653 17.729C32.7955 19.5521 34 22.1354 34 25Z"/><path d="M17 18L31 32"/><path d="M34 25C34 30.5228 29.5228 35 24 35M14 25C14 19.4772 18.4772 15 24 15"/>';

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

module.exports = InvalidFiles;
