'use strict';

var React = require('react');

function MaslowPyramids(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g clip-path="url(#icon-30a677f2ecf42a35)"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 4L15 19.9803H33L24 4Z"/><path d="M24 19.9805L24.0083 44.0001"/><path d="M11.3466 25.9746L1.99998 42.0001H17.0045"/><path d="M9.10008 30.9951H17.0044"/><path d="M36.7477 25.9746L46.0943 42.0001H31"/><path d="M39.0943 30.9951H31.1002"/></g><defs><clipPath id="icon-30a677f2ecf42a35"><rect width="48" height="48"/></clipPath></defs>' : '<g clip-path="url(#icon-8012c0fecf42a35)"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 4L15 19.9803H33L24 4Z"/><path d="M24 19.9805L24.0083 44.0001"/><path d="M11.3466 25.9746L1.99998 42.0001H17.0045"/><path d="M9.10008 30.9951H17.0044"/><path d="M36.7477 25.9746L46.0943 42.0001H31"/><path d="M39.0943 30.9951H31.1002"/></g><defs><clipPath id="icon-8012c0fecf42a35"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = MaslowPyramids;
