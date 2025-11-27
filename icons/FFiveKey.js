'use strict';

var React = require('react');

function FFiveKey(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM10.5,11c.6,0,1,.4,1,1s-.4,1-1,1h-2.5v3c0,.6-.4,1-1,1s-1-.4-1-1v-8c0-.6.4-1,1-1h3.5c.6,0,1,.4,1,1s-.4,1-1,1h-2.5v2h2.5ZM15.2,9.8c1.3,0,2.8.7,2.8,3.8s-1.2,3.5-3.2,3.5-2.8-1.3-2.8-2.7.4-1,1-1,1,.4,1,1,.2.7.8.7,1.2-.1,1.2-1.5-.5-1.8-.8-1.8c-.9,0-1.6.5-1.6.5-.3.2-.7.3-1.1.1-.3-.2-.6-.5-.6-.9v-3.5c0-.6.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1h-3v.9c.4,0,.8-.2,1.2-.2Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M34 16H26V22.9185C26 22.9185 27.8333 21.5 30.5 21.5C33.1667 21.5 34 23.6585 34 27C34 30.3415 32.5 32 29.5556 32C26.8889 32 26 30.315 26 28.6365"/><path d="M21 16H14V32"/><path d="M14 24H21"/>';

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

module.exports = FFiveKey;
