'use strict';

var React = require('react');

function Banana(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g clip-path="url(#icon-7df2cf0a601bb0d7)"><path d="M15.9993 32C13.1998 31.0668 9.96483 28.8274 8.52376 26.5745C8.32636 26.2659 8.25521 25.8975 8.27911 25.5319L8.52427 21.7819C8.57721 20.9722 9.53405 20.5412 10.1952 21.0115C12.3289 22.5293 16.2279 25 18.9993 25C25.9993 25 31.9993 22.5 34.9993 17"/><path d="M25.9994 43C35.9993 40.9999 45.2422 30.5149 42.867 19.9413L41.9993 16L41.9993 7.99998L35.9993 6.99997C35.9993 19.9413 32.9995 30 19.9994 32C14.0231 32.9194 8.29412 31.6136 3.87018 29.0781L4.99939 36C6.99933 41 15.9995 45 25.9994 43Z"/></g><defs><clipPath id="icon-7df2cf0a601bb0d7"><rect width="48" height="48"/></clipPath></defs>' : '<g clip-path="url(#icon-380b24601bb0d7)"><path d="M15.9993 32C13.1998 31.0668 9.96483 28.8274 8.52376 26.5745C8.32636 26.2659 8.25521 25.8975 8.27911 25.5319L8.52427 21.7819C8.57721 20.9722 9.53405 20.5412 10.1952 21.0115C12.3289 22.5293 16.2279 25 18.9993 25C25.9993 25 31.9993 22.5 34.9993 17"/><path d="M25.9994 43C35.9993 40.9999 45.2422 30.5149 42.867 19.9413L41.9993 16L41.9993 7.99998L35.9993 6.99997C35.9993 19.9413 32.9995 30 19.9994 32C14.0231 32.9194 8.29412 31.6136 3.87018 29.0781L4.99939 36C6.99933 41 15.9995 45 25.9994 43Z"/></g><defs><clipPath id="icon-380b24601bb0d7"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = Banana;
