'use strict';

var React = require('react');

function Stretching(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g clip-path="url(#icon-f78ed637b4bd3c0)"><path d="M23.0005 5.99951H8.00049C6.89592 5.99951 6.00049 6.89494 6.00049 7.99951V39.9999C6.00049 41.1044 6.89592 41.9998 8.00049 41.9998H40.0005C41.1051 41.9998 42.0005 41.1044 42.0005 39.9998V24.9998"/><path d="M24.001 15.9998V23.9998"/><path d="M42 5.99951V13.9995"/><path d="M32.001 23.9998H24.001"/><path d="M42 5.99951L24 23.9995"/><path d="M42.0005 5.99951H34.0005"/></g><defs><clipPath id="icon-f78ed637b4bd3c0"><rect width="48" height="48"/></clipPath></defs>' : '<g clip-path="url(#icon-315c7307b4bd3c0)"><path d="M23.0005 5.99951H8.00049C6.89592 5.99951 6.00049 6.89494 6.00049 7.99951V39.9999C6.00049 41.1044 6.89592 41.9998 8.00049 41.9998H40.0005C41.1051 41.9998 42.0005 41.1044 42.0005 39.9998V24.9998"/><path d="M24.001 15.9998V23.9998"/><path d="M42 5.99951V13.9995"/><path d="M32.001 23.9998H24.001"/><path d="M42 5.99951L24 23.9995"/><path d="M42.0005 5.99951H34.0005"/></g><defs><clipPath id="icon-315c7307b4bd3c0"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = Stretching;
