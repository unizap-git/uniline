'use strict';

var React = require('react');

function WatchOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9.5,7V3c0-.6.4-1,1-1h3c.6,0,1,.4,1,1v4" stroke-miterlimit="2"/>   <path d="M14.5,17v4c0,.6-.4,1-1,1h-3c-.6,0-1-.4-1-1v-4" stroke-miterlimit="2"/>   <path d="M12,5.5c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5,6.5-2.9,6.5-6.5-2.9-6.5-6.5-6.5ZM13.5,12.5c0,.6-.4,1-1,1h-2c-.6,0-1-.4-1-1s.4-1,1-1h1v-1c0-.6.4-1,1-1s1,.4,1,1v2Z"/>' : '<path d="M19 14V6C19 4.89543 19.8954 4 21 4H27C28.1046 4 29 4.89543 29 6V14"/><path d="M29 34V42C29 43.1046 28.1046 44 27 44H21C19.8954 44 19 43.1046 19 42V34"/><circle cx="24" cy="24" r="11"/><path d="M21 25L25 25"/><path d="M25 21V25"/>';

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

module.exports = WatchOne;
