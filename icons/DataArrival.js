'use strict';

var React = require('react');

function DataArrival(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,2h-6c-.4,0-.8.2-.9.6-.7,1.6-1.5,1.8-2.1,1.8s-1.4-.2-2.1-1.8c-.2-.4-.5-.6-.9-.6H3c-.6,0-1,.4-1,1v18c0,.6.4,1,1,1h18c.6,0,1-.4,1-1V3c0-.6-.4-1-1-1ZM17.2,9.7l-6,6c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-3-3c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l2.3,2.3,5.3-5.3c.4-.4,1-.4,1.4,0s.4,1,0,1.4Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M6 42H42V6H32H30C28.6758 9.15854 26.6758 10.7378 24 10.7378C21.3242 10.7378 19.3242 9.15854 18 6H16H6V42Z"/><path d="M15 24L21 30L33 18"/>';

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

module.exports = DataArrival;
