'use strict';

var React = require('react');

function Notebook(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20,1H6c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V3c0-1.1-.9-2-2-2ZM18,21c0,.6-.4,1-1,1s-1-.4-1-1V3c0-.6.4-1,1-1s1,.4,1,1v18Z"/>   <path d="M3,7h4"/>   <path d="M3,12h4"/>   <path d="M3,17h4"/>   <path d="M13.5,2h6"/>   <path d="M13.5,22h6"/>' : '<path d="M10 6C10 4.89543 10.8954 4 12 4H40C41.1046 4 42 4.89543 42 6V42C42 43.1046 41.1046 44 40 44H12C10.8954 44 10 43.1046 10 42V6Z"/><path d="M34 6V42"/><path d="M6 14H14"/><path d="M6 24H14"/><path d="M6 34H14"/><path d="M27 4H39"/><path d="M27 44H39"/>';

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

module.exports = Notebook;
