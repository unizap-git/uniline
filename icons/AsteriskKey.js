'use strict';

var React = require('react');

function AsteriskKey(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM15.8,13.5c.5.3.6.9.2,1.4-.2.3-.5.4-.8.4s-.4,0-.6-.2l-1.7-1.2v2.1c0,.6-.4,1-1,1s-1-.4-1-1v-2.1l-1.7,1.2c-.2.1-.4.2-.6.2-.3,0-.6-.1-.8-.4-.3-.5-.2-1.1.2-1.4l2.1-1.5-2.1-1.5c-.5-.3-.6-.9-.2-1.4.3-.5.9-.6,1.4-.2l1.7,1.2v-2.1c0-.6.4-1,1-1s1,.4,1,1v2.1l1.7-1.2c.5-.3,1.1-.2,1.4.2.3.5.2,1.1-.2,1.4l-2.1,1.5,2.1,1.5Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M24 16V32"/><path d="M17.447 19.4114L30.5535 28.5886"/><path d="M30.5532 19.4114L17.4468 28.5886"/>';

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

module.exports = AsteriskKey;
