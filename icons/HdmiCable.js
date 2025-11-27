'use strict';

var React = require('react');

function HdmiCable(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,6H3c-1.1,0-2,.9-2,2v4.3c0,.7.4,1.4,1,1.8.5.3,1.2,1,1.4,2.1.2,1,1.1,1.8,2.1,1.8h13c1,0,1.9-.8,2.1-1.8.2-1.1.9-1.7,1.4-2.1.6-.4,1-1.1,1-1.8v-4.3c0-1.1-.9-2-2-2ZM13.5,9h1c.6,0,1,.4,1,1s-.4,1-1,1h-1c-.6,0-1-.4-1-1s.4-1,1-1ZM9.5,9h1c.6,0,1,.4,1,1s-.4,1-1,1h-1c-.6,0-1-.4-1-1s.4-1,1-1ZM4.5,10c0-.6.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1h-1c-.6,0-1-.4-1-1ZM18,14c0,.6-.4,1-1,1H7c-.6,0-1-.4-1-1v-1.5c0-.6.4-1,1-1s1,.4,1,1v.5h1.5v-.5c0-.6.4-1,1-1s1,.4,1,1v.5h1v-.5c0-.6.4-1,1-1s1,.4,1,1v.5h1.5v-.5c0-.6.4-1,1-1s1,.4,1,1v1.5ZM18.5,11h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M4 16C4 14.8954 4.89543 14 6 14H42C43.1046 14 44 14.8954 44 16V24.6459C44 25.4637 43.4982 26.2019 42.8208 26.6601C41.6014 27.4852 39.7937 29.1491 39.1982 32.0119C38.9732 33.0933 38.1046 34 37 34H11C9.89543 34 9.02678 33.0933 8.80182 32.0119C8.20628 29.1491 6.39864 27.4852 5.17918 26.6601C4.50184 26.2019 4 25.4637 4 24.6459V16Z"/><path d="M14 28H34"/><path d="M14 28V25"/><path d="M21 28V25"/><path d="M27 28V25"/><path d="M34 28V25"/><path d="M11 20H13"/><path d="M19 20H21"/><path d="M27 20H29"/><path d="M35 20H37"/>';

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

module.exports = HdmiCable;
