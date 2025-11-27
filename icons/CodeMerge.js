'use strict';

var React = require('react');

function CodeMerge(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5,6c0-1.7,1.3-3,3-3,1.7,0,3,1.3,3,3,0,1.3-.8,2.4-2,2.8v.2c0,2.2,1.8,4,4,4h.2c.6-1.6,2.3-2.4,3.8-1.8,1.6.6,2.4,2.3,1.8,3.8s-2.3,2.4-3.8,1.8c-.9-.3-1.5-1-1.8-1.8h-.2c-1.5,0-2.9-.5-4-1.5v1.7c1.6.6,2.4,2.3,1.8,3.8-.6,1.6-2.3,2.4-3.8,1.8-1.6-.6-2.4-2.3-1.8-3.8.3-.9,1-1.5,1.8-1.8v-6.3c-1.2-.4-2-1.6-2-2.8Z" fill-rule="evenodd"/>' : '<path d="M15,15v18M15,15c2.5,0,4.5-2,4.5-4.5s-2-4.5-4.5-4.5-4.5,2-4.5,4.5,2,4.5,4.5,4.5ZM15,33c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5,4.5-2,4.5-4.5-2-4.5-4.5-4.5ZM28.5,28.5c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5-2,4.5-4.5,4.5-4.5-2-4.5-4.5ZM28.5,28.5h-2.2c-6.2,0-11.2-5-11.2-11.2v-1.1"/>';

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

module.exports = CodeMerge;
