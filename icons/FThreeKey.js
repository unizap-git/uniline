'use strict';

var React = require('react');

function FThreeKey(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM10.5,11c.6,0,1,.4,1,1s-.4,1-1,1h-2.5v3c0,.6-.4,1-1,1s-1-.4-1-1v-8c0-.6.4-1,1-1h3.5c.6,0,1,.4,1,1s-.4,1-1,1h-2.5v2h2.5ZM15.2,17c-1.3,0-2.3-.8-2.6-1.6-.2-.5,0-1.1.4-1.3.5-.2,1.1,0,1.3.4,0,.2.4.4.9.4s.8-.1.8-1c0-1.3-1-1.4-1.5-1.4s-.7-.2-.9-.5c-.2-.3-.2-.7,0-1l1.4-2h-1.6c-.6,0-1-.4-1-1s.4-1,1-1h3.5c.4,0,.7.2.9.5.2.3.2.7,0,1l-1.6,2.4c1.1.5,1.8,1.6,1.8,3s-1.4,3-2.8,3Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M27 16H34L29.1 23.2C31.9 23.2 34 25 34 28C34 31 32 32 30.5 32C28.8333 32 27.5 31 27 30"/><path d="M21 16H14V32"/><path d="M14 24H21"/>';

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

module.exports = FThreeKey;
