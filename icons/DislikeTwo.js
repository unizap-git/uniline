'use strict';

var React = require('react');

function DislikeTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16.5,3c-1.7,0-3.3.7-4.5,1.8-1.2-1.1-2.8-1.8-4.5-1.8-3.6,0-6.5,2.9-6.5,6.5,0,6,6.9,11.3,10.7,12.6.1,0,.2,0,.3,0s.2,0,.3,0c3.8-1.3,10.7-6.6,10.7-12.6s-2.9-6.5-6.5-6.5ZM14.7,13.3c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-1.3-1.3-1.3,1.3c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l1.3-1.3-1.3-1.3c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1.3,1.3,1.3-1.3c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-1.3,1.3,1.3,1.3Z"/>' : '<path d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28 20L20 28L28 20Z"/><path d="M28 20L20 28"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20 20.0001L28 28L20 20.0001Z"/><path d="M20 20.0001L28 28"/>';

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

module.exports = DislikeTwo;
