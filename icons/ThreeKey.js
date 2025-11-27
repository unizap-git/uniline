'use strict';

var React = require('react');

function ThreeKey(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM12,18c-1.3,0-2.4-.5-3.2-1.4-.4-.4-.3-1,0-1.4.4-.4,1-.3,1.4,0,.3.3.8.7,1.8.7s1.5-.3,1.5-1.5-1.6-2-2.5-2-.7-.2-.9-.6c-.2-.3-.1-.8.1-1.1l2.2-2.9h-3c-.6,0-1-.4-1-1s.4-1,1-1h5c.4,0,.7.2.9.6.2.3.1.8-.1,1.1l-2.5,3.2c1.7.6,2.7,1.9,2.7,3.7s-1.8,3.5-3.5,3.5Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M19 14H29L22 23C26 23 29 25 29 29C29 33 26 34 24 34C21.619 34 20 33 19 31.9"/>';

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

module.exports = ThreeKey;
