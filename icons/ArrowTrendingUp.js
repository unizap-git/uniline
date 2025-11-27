'use strict';

var React = require('react');

function ArrowTrendingUp(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15.2,6.3c.1-.4.6-.6,1-.4l5.9,2.3c.4.1.6.6.4,1,0,0,0,0,0,0l-2.3,5.9c-.1.4-.6.6-1,.5-.4-.1-.6-.6-.5-1,0,0,0,0,0,0l1.6-4.3-1.1.5c-2.4,1-4.3,2.9-5.4,5.2-.2.4-.6.5-1,.3,0,0-.1,0-.2-.1l-3.8-3.8-6.2,6.2c-.3.3-.8.3-1.1,0-.3-.3-.3-.8,0-1l6.8-6.8c.3-.3.8-.3,1.1,0l3.6,3.6c1.3-2.2,3.3-3.9,5.7-5l1.1-.5-4.3-1.6c-.4-.1-.6-.6-.4-1,0,0,0,0,0,0h0Z" fill-rule="evenodd"/>' : '<path d="M6,34.8l12.4-12.4,7.9,7.9c2.3-4.5,6.1-8.1,10.7-10.2l5-2.2M42.1,17.9l-10.9-4.2M42.1,17.9l-4.2,10.9"/>';

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

module.exports = ArrowTrendingUp;
