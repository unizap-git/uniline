'use strict';

var React = require('react');

function ChessOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M40 44H8V40L14 37H34L40 40V44Z" stroke-miterlimit="2"/><path d="M14 19H34" stroke-miterlimit="2"/><path d="M27.74 19L33 37H15L20.26 19"/><path d="M27.74 19L33 37H15L20.26 19" stroke-miterlimit="2"/><path d="M24 4C19.5817 4 16 7.58172 16 12C16 15.012 17.6646 17.6353 20.124 19H27.876C30.3354 17.6353 32 15.012 32 12C32 7.58172 28.4183 4 24 4Z"/>' : '<path d="M40 44H8V40L14 37H34L40 40V44Z" stroke-miterlimit="2"/><path d="M14 19H34" stroke-miterlimit="2"/><path d="M27.74 19L33 37H15L20.26 19"/><path d="M27.74 19L33 37H15L20.26 19" stroke-miterlimit="2"/><path d="M24 4C19.5817 4 16 7.58172 16 12C16 15.012 17.6646 17.6353 20.124 19H27.876C30.3354 17.6353 32 15.012 32 12C32 7.58172 28.4183 4 24 4Z"/>';

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

module.exports = ChessOne;
