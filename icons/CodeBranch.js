'use strict';

var React = require('react');

function CodeBranch(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8,3c-1.7,0-3,1.3-3,3,0,1.3.8,2.4,2,2.8v6.3c-1.6.6-2.4,2.3-1.8,3.8.6,1.6,2.3,2.4,3.8,1.8s2.4-2.3,1.8-3.8c-.3-.9-1-1.5-1.8-1.8v-.2c0-1.1.9-2,2-2h1c2.4,0,4.5-1.8,4.9-4.1,1.6-.5,2.4-2.2,1.9-3.8-.4-1.2-1.6-2.1-2.8-2.1-1.7,0-3,1.3-3,3,0,1.2.8,2.3,1.9,2.8-.4,1.3-1.5,2.2-2.9,2.2h-1c-.7,0-1.4.2-2,.5v-2.7c1.6-.6,2.4-2.3,1.8-3.8-.4-1.2-1.6-2-2.8-2Z"/>' : '<path d="M15,15v18M15,15c2.5,0,4.5-2,4.5-4.5s-2-4.5-4.5-4.5-4.5,2-4.5,4.5,2,4.5,4.5,4.5ZM15,33c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5,4.5-2,4.5-4.5-2-4.5-4.5-4.5ZM33,15c2.5,0,4.5-2,4.5-4.5s-2-4.5-4.5-4.5-4.5,2-4.5,4.5,2,4.5,4.5,4.5ZM33,15c0,5-4,9-9,9h-2.2c-3.7,0-6.8,3-6.8,6.8"/>';

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

module.exports = CodeBranch;
