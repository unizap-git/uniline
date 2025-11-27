'use strict';

var React = require('react');

function SevenKey(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM15.4,7.9l-4,9c-.2.4-.5.6-.9.6s-.3,0-.4,0c-.5-.2-.7-.8-.5-1.3l3.4-7.6h-3.5c-.6,0-1-.4-1-1s.4-1,1-1h5c.3,0,.7.2.8.5.2.3.2.6,0,1Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M18.9983 15H29L20.9939 33"/>';

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

module.exports = SevenKey;
