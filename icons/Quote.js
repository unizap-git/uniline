'use strict';

var React = require('react');

function Quote(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6,6c-1.1,0-2,.9-2,2v3c0,1.1.9,2,2,2h3c0,1.7-1.3,3-3,3h-1c-.6,0-1,.4-1,1s.4,1,1,1h1c2.8,0,5-2.2,5-5v-5c0-1.1-.9-2-2-2h-3ZM15,6c-1.1,0-2,.9-2,2v3c0,1.1.9,2,2,2h3c0,1.7-1.3,3-3,3h-1c-.6,0-1,.4-1,1s.4,1,1,1h1c2.8,0,5-2.2,5-5v-5c0-1.1-.9-2-2-2h-3Z" fill-rule="evenodd"/>' : '<path d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = Quote;
