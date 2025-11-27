'use strict';

var React = require('react');

function Calculator(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20,1H4c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2V3c0-1.1-.9-2-2-2ZM5.5,5c0-.6.4-1,1-1h11c.6,0,1,.4,1,1v4.5c0,.6-.4,1-1,1H6.5c-.6,0-1-.4-1-1v-4.5ZM10.2,16.8c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-1-1-1,1c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l1-1-1-1c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1,1,1-1c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-1,1,1,1ZM18,18.5h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1ZM18,15.5h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M40 4H8.0002C6.89565 4 6.00022 4.89541 6.0002 5.99996L5.99955 42C5.99953 43.1045 6.89497 44 7.99955 44H40C41.1046 44 42 43.1046 42 42V6C42 4.89543 41.1046 4 40 4Z"/><path d="M35 10H13V19H35V10Z"/><path d="M12 28L19 35"/><path d="M19 28L12 35"/><path d="M28 35H36"/><path d="M28 29H36"/>';

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

module.exports = Calculator;
