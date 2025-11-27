'use strict';

var React = require('react');

function CityOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2,21h20"/>   <path d="M19,1h-8c-1.1,0-2,.9-2,2v7h-4c-1.1,0-2,.9-2,2v8c0,1.1.9,2,2,2h4c.4,0,.7-.1,1-.3.3.2.6.3,1,.3h8c1.1,0,2-.9,2-2V3c0-1.1-.9-2-2-2ZM8,17h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1ZM16,17h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1ZM16,12.5h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1ZM16,8h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M4 42H44"/><rect x="8" y="22" width="12" height="20" rx="2"/><rect x="20" y="4" width="20" height="38" rx="2"/><path d="M28 32.0083H32"/><path d="M12 32.0083H16"/><path d="M28 23.0083H32"/><path d="M28 14.0083H32"/>';

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

module.exports = CityOne;
