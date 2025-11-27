'use strict';

var React = require('react');

function TwoKey(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM14.5,16c.6,0,1,.4,1,1s-.4,1-1,1h-5c-.6,0-1-.4-1-1,0-1.7,1.4-3,2.7-4.2,1.1-1.1,2.3-2.2,2.3-3.3s-.9-1.5-1.5-1.5-1.5.5-1.5,1.5-.4,1-1,1-1-.4-1-1c0-2.2,1.8-3.5,3.5-3.5s3.5,1.3,3.5,3.5-1.5,3.4-2.9,4.7c-.6.6-1.3,1.2-1.7,1.8h3.6Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M19 19C19 15.8334 21.6667 14 24 14C26.3334 14 29 15.8334 29 19C29 24.7 19 28.9333 19 34H29"/>';

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

module.exports = TwoKey;
