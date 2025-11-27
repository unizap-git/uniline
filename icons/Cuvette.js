'use strict';

var React = require('react');

function Cuvette(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.2,18.8l-1.8-1.8-1.8-1.8"/>   <path d="M20.2,18.8l-1.8-1.8-1.8-1.8"/>   <path d="M7.2,15.2l-1.8,1.8-1.8,1.8"/>   <path d="M7.2,15.2l-1.8,1.8-1.8,1.8"/>   <path d="M9,2h6"/>   <path d="M22.7,19.8l-6.7-6.7V5c0-.6-.4-1-1-1h-6c-.6,0-1,.4-1,1v8.1l-6.7,6.7c-.2.2-.3.4-.3.7v1.5c0,.6.4,1,1,1h20c.6,0,1-.4,1-1v-1.5c0-.3-.1-.5-.3-.7ZM13,14c0,.6-.4,1-1,1s-1-.4-1-1v-.5c0-.6.4-1,1-1s1,.4,1,1v.5ZM13,10.5c0,.6-.4,1-1,1s-1-.4-1-1v-1.5c0-.6.4-1,1-1s1,.4,1,1v1.5Z"/>   <path d="M5,17.5h14"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M18 10H30V27L44 41V44H4V41L18 27V10Z"/><path d="M40.5 37.5L37 34L33.5 30.5"/><path d="M40.5 37.5L37 34L33.5 30.5"/><path d="M14.5 30.5L11 34L7.5 37.5"/><path d="M14.5 30.5L11 34L7.5 37.5"/><path d="M18 4H30"/><path d="M24 27V28"/><path d="M24 18V21"/><path d="M10 35H38"/>';

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

module.exports = Cuvette;
