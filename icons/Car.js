'use strict';

var React = require('react');

function Car(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.9,10.2c-1.7-.5-4.2-1-4.2-1,0,0-1.2-1.3-2-2.1-.5-.4-1-.7-1.7-.7h-6.5c-.6,0-1,.4-1.3.8l-1.3,2.7c-.1.4-.2.7-.2,1.1v3.7c0,.6.4.9.9.9h1.9c0-1,.8-1.9,1.9-1.9s1.9.8,1.9,1.9h5.6c0-1,.8-1.9,1.9-1.9s1.9.8,1.9,1.9h1.9c.6,0,.9-.4.9-.9v-2.8c0-.8-.7-1.6-1.4-1.8Z"/>   <path d="M7.3,17.1c-.8,0-1.4-.6-1.4-1.4s.6-1.4,1.4-1.4,1.4.6,1.4,1.4-.6,1.4-1.4,1.4Z"/>   <circle cx="16.7" cy="15.7" r="1.4"/>' : '<path d="M18.5,15.7h1.9c.6,0,.9-.4.9-.9v-2.8c0-.8-.7-1.6-1.4-1.8-1.7-.5-4.2-1-4.2-1,0,0-1.2-1.3-2-2.1-.5-.4-1-.7-1.7-.7h-6.5c-.6,0-1,.4-1.3.8l-1.3,2.7c-.1.4-.2.7-.2,1.1v3.7c0,.6.4.9.9.9h1.9"/>   <circle cx="7.3" cy="15.7" r="1.9"/>   <path d="M9.2,15.7h5.6"/>   <circle cx="16.7" cy="15.7" r="1.9"/>';

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

module.exports = Car;
