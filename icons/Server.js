'use strict';

var React = require('react');

function Server(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,1H2c-.6,0-1,.4-1,1v8c0,.6.4,1,1,1h20c.6,0,1-.4,1-1V2c0-.6-.4-1-1-1ZM7,6.5c0,.3-.2.5-.5.5h-1c-.3,0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h1c.3,0,.5.2.5.5v1ZM11,6.5c0,.3-.2.5-.5.5h-1c-.3,0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h1c.3,0,.5.2.5.5v1Z"/>   <path d="M22,13H2c-.6,0-1,.4-1,1v8c0,.6.4,1,1,1h20c.6,0,1-.4,1-1v-8c0-.6-.4-1-1-1ZM7,18.5c0,.3-.2.5-.5.5h-1c-.3,0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h1c.3,0,.5.2.5.5v1ZM11,18.5c0,.3-.2.5-.5.5h-1c-.3,0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h1c.3,0,.5.2.5.5v1Z"/>' : '<path d="M44 4H4V20H44V4Z"/><path d="M44 28H4V44H44V28Z"/><path d="M13 10H11C10.4477 10 10 10.4477 10 11V13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 13.5523 14 13V11C14 10.4477 13.5523 10 13 10Z"/><path d="M13 34H11C10.4477 34 10 34.4477 10 35V37C10 37.5523 10.4477 38 11 38H13C13.5523 38 14 37.5523 14 37V35C14 34.4477 13.5523 34 13 34Z"/><path d="M21 10H19C18.4477 10 18 10.4477 18 11V13C18 13.5523 18.4477 14 19 14H21C21.5523 14 22 13.5523 22 13V11C22 10.4477 21.5523 10 21 10Z"/><path d="M21 34H19C18.4477 34 18 34.4477 18 35V37C18 37.5523 18.4477 38 19 38H21C21.5523 38 22 37.5523 22 37V35C22 34.4477 21.5523 34 21 34Z"/>';

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

module.exports = Server;
