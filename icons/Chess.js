'use strict';

var React = require('react');

function Chess(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M34 4H14V14H34V4Z" stroke-miterlimit="2"/><path d="M27 14L33 37H15L21 14" stroke-miterlimit="2"/><path d="M40 44H8V40L14 37H34L40 40V44Z" stroke-miterlimit="2"/><path d="M12 23.02H36" stroke-miterlimit="2"/><path d="M20.5 4V8" stroke-miterlimit="2"/><path d="M27.5 4V8" stroke-miterlimit="2"/>' : '<path d="M34 4H14V14H34V4Z" stroke-miterlimit="2"/><path d="M27 14L33 37H15L21 14" stroke-miterlimit="2"/><path d="M40 44H8V40L14 37H34L40 40V44Z" stroke-miterlimit="2"/><path d="M12 23.02H36" stroke-miterlimit="2"/><path d="M20.5 4V8" stroke-miterlimit="2"/><path d="M27.5 4V8" stroke-miterlimit="2"/>';

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

module.exports = Chess;
