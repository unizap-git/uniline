'use strict';

var React = require('react');

function WindTurbine(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,23c-.6,0-1-.4-1-1v-7c0-.6.4-1,1-1s1,.4,1,1v7c0,.6-.4,1-1,1Z"/>   <path d="M23.4,18c-.1-.2-2.5-4.5-7.9-7.2-.2-6.4-2.6-9.4-2.7-9.5-.4-.5-1.2-.5-1.5,0-.1.1-2.6,3.1-2.7,9.5C3.2,13.1.7,17.8.6,18.1c-.2.3-.1.7,0,1s.5.5.9.5,5.9,0,10.5-3.7c4.6,3.7,10.3,3.7,10.5,3.7.4,0,.7-.2.9-.5.2-.3.2-.7,0-1ZM12,13c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M24 30V44"/><path d="M29 23C40 28 45 37 45 37C45 37 33 37 24 29C15 37 3 37 3 37C3 37 8 27 19 23C19 10 24 4 24 4C24 4 29 10 29 23Z"/><circle cx="24" cy="24" r="2"/>';

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

module.exports = WindTurbine;
