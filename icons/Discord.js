'use strict';

var React = require('react');

function Discord(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M30.4,34.7l2.4,3.4c.2.4.7.6,1.1.4,1.5-.6,5.2-2.1,8.2-4.3.2,0,.4-.4.4-.7,0-16.4-4.7-21.1-4.7-21.1,0,0-3.7-2.1-7.6-2.8-.4,0-.7,0-.9.6l-.7,1.7s-2.1-.4-4.5-.4-4.5.4-4.5.4l-.7-1.7c0-.4-.6-.6-.9-.6-3.9.6-7.6,2.8-7.6,2.8,0,0-4.7,4.7-4.7,21.1,0,0,0,.6.4.7,3,2.2,6.7,3.7,8.2,4.3.4,0,.7,0,1.1-.4l2.4-3.4"/>   <path d="M34.2,33s-4.3,2.8-10.3,2.8-10.3-2.8-10.3-2.8"/>   <path d="M33.6,24.6c0,2.1-1.5,3.7-3.2,3.7s-3.2-1.7-3.2-3.7,1.5-3.7,3.2-3.7,3.2,1.7,3.2,3.7Z" stroke-miterlimit="21.3"/>   <path d="M20.7,24.6c0,2.1-1.5,3.7-3.2,3.7s-3.2-1.7-3.2-3.7,1.5-3.7,3.2-3.7,3.2,1.7,3.2,3.7Z" stroke-miterlimit="21.3"/>' : '<path d="M30.4,34.7l2.4,3.4c.2.4.7.6,1.1.4,1.5-.6,5.2-2.1,8.2-4.3.2,0,.4-.4.4-.7,0-16.4-4.7-21.1-4.7-21.1,0,0-3.7-2.1-7.6-2.8-.4,0-.7,0-.9.6l-.7,1.7s-2.1-.4-4.5-.4-4.5.4-4.5.4l-.7-1.7c0-.4-.6-.6-.9-.6-3.9.6-7.6,2.8-7.6,2.8,0,0-4.7,4.7-4.7,21.1,0,0,0,.6.4.7,3,2.2,6.7,3.7,8.2,4.3.4,0,.7,0,1.1-.4l2.4-3.4"/>   <path d="M34.2,33s-4.3,2.8-10.3,2.8-10.3-2.8-10.3-2.8"/>   <path d="M33.6,24.6c0,2.1-1.5,3.7-3.2,3.7s-3.2-1.7-3.2-3.7,1.5-3.7,3.2-3.7,3.2,1.7,3.2,3.7Z" stroke-miterlimit="21.3"/>   <path d="M20.7,24.6c0,2.1-1.5,3.7-3.2,3.7s-3.2-1.7-3.2-3.7,1.5-3.7,3.2-3.7,3.2,1.7,3.2,3.7Z" stroke-miterlimit="21.3"/>';

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

module.exports = Discord;
