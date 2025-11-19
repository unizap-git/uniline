'use strict';

var React = require('react');

function Discord(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>' : '<path d="M15.5,17.7l1.3,1.8c.1.2.4.3.6.2.8-.3,2.8-1.1,4.4-2.3.1,0,.2-.2.2-.4,0-8.8-2.5-11.3-2.5-11.3,0,0-2-1.1-4.1-1.5-.2,0-.4,0-.5.3l-.4.9s-1.1-.2-2.4-.2-2.4.2-2.4.2l-.4-.9c0-.2-.3-.3-.5-.3-2.1.3-4.1,1.5-4.1,1.5,0,0-2.5,2.5-2.5,11.3,0,.2,0,.3.2.4,1.6,1.2,3.6,2,4.4,2.3.2,0,.4,0,.6-.2l1.3-1.8"/>   <path d="M17.5,16.8s-2.3,1.5-5.5,1.5-5.5-1.5-5.5-1.5"/>   <path d="M17.2,12.3c0,1.1-.8,2-1.7,2s-1.7-.9-1.7-2,.8-2,1.7-2,1.7.9,1.7,2Z" stroke-miterlimit="21.3"/>   <path d="M10.3,12.3c0,1.1-.8,2-1.7,2s-1.7-.9-1.7-2,.8-2,1.7-2,1.7.9,1.7,2Z" stroke-miterlimit="21.3"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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
