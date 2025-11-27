'use strict';

var React = require('react');

function ReverseLens(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10,17.5l2,2-2,2"/>   <path d="M16,19.1c3.5-.8,6.5-2.5,6.5-4.6s-.7-2.2-2-3M12,19.5c-5.5,0-10.5-2.2-10.5-5s.7-2.2,2-3"/>   <path d="M17.5,4h-2.5l-.7-1.1c-.2-.3-.5-.4-.8-.4h-3c-.3,0-.6.2-.8.4l-.7,1.1h-2.5c-.6,0-1,.4-1,1v7.5c0,.6.4,1,1,1h11c.6,0,1-.4,1-1v-7.5c0-.6-.4-1-1-1ZM12,11c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5-1.1,2.5-2.5,2.5Z"/>' : '<path d="M13 25V10H19L21 7H27L29 10H35V25H13Z"/><path d="M20 35L24 39L20 43"/><path d="M32 38.1679C39.0636 36.6248 45 33.1006 45 29C45 26.7483 43.5116 24.6705 41 22.999M24 39C12.9543 39 3 34.5228 3 29C3 26.7483 4.48836 24.6705 7 22.999"/><path d="M24 20C25.6569 20 27 18.6569 27 17C27 15.3431 25.6569 14 24 14C22.3431 14 21 15.3431 21 17C21 18.6569 22.3431 20 24 20Z" stroke-miterlimit="10"/>';

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

module.exports = ReverseLens;
