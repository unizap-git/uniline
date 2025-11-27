'use strict';

var React = require('react');

function LemonTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24.7,15.6c-6.3,2.5-8,6.8-7.6,12.9M30.1,6.1l-2.4,1.2c-.8.3-3.5.7-3.9.7-11.1,1.5-17.7,13.2-13.5,23.7l1,2.5c.2.4.3,1.1.3,1.3,0,.2.2,2.7.2,2.7,0,0,0,0,0,0,.2,3,3.4,4.8,6,3.5,0,0,0,0,0,0,.2,0,2.2-1.1,2.4-1.2.2,0,.8-.3,1.3-.4l2.7-.4c11.1-1.5,17.7-13.2,13.5-23.7l-1-2.5c-.2-.4-.3-.8-.3-1.3l-.2-2.7c-.2-3-3.4-4.8-6-3.5Z"/>' : '<path d="M24.7,15.6c-6.3,2.5-8,6.8-7.6,12.9M30.1,6.1l-2.4,1.2c-.8.3-3.5.7-3.9.7-11.1,1.5-17.7,13.2-13.5,23.7l1,2.5c.2.4.3,1.1.3,1.3,0,.2.2,2.7.2,2.7,0,0,0,0,0,0,.2,3,3.4,4.8,6,3.5,0,0,0,0,0,0,.2,0,2.2-1.1,2.4-1.2.2,0,.8-.3,1.3-.4l2.7-.4c11.1-1.5,17.7-13.2,13.5-23.7l-1-2.5c-.2-.4-.3-.8-.3-1.3l-.2-2.7c-.2-3-3.4-4.8-6-3.5Z"/>';

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

module.exports = LemonTwo;
