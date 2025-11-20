'use strict';

var React = require('react');

function Ambulance(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="16.7" cy="17.7" r="1.9"/>   <path d="M7.3,19.6c-1,0-1.9-.8-1.9-1.9s.8-1.9,1.9-1.9,1.9.8,1.9,1.9-.8,1.9-1.9,1.9Z"/>   <path d="M21.1,11.8l-1.8-.6-1.5-2.9c-.3-.7-1-1.1-1.7-1.1h-1.8v-.9c0-1.3-1.1-2.4-2.4-2.4h-7.6c-1.3,0-2.4,1.1-2.4,2.4v10.4c0,.8.6,1.4,1.4,1.4h.9c0-.2,0-.3,0-.5,0-1.6,1.3-2.9,2.9-2.9s2.9,1.3,2.9,2.9,0,.3,0,.5h2.2c.2.3.5.5.8.5h.9c-.1-.3-.2-.6-.2-1,0-1.6,1.3-2.9,2.9-2.9s2.9,1.3,2.9,2.9,0,.7-.2,1h1.1c1.1,0,1.9-.9,1.9-1.9v-3.1c0-.8-.5-1.6-1.3-1.8ZM10.1,11.1h-.9v.9c0,.6-.4,1-1,1s-1-.4-1-1v-.9h-.9c-.6,0-1-.4-1-1s.4-1,1-1h.9v-.9c0-.6.4-1,1-1s1,.4,1,1v.9h.9c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M10.1,10.1h-3.8"/>   <path d="M13.9,17.7V6.3c0-1-.8-1.9-1.9-1.9h-7.6c-1,0-1.9.8-1.9,1.9v10.4c0,.5.4.9.9.9h1.9"/>   <path d="M18.6,17.7h1.9c.5,0,.9-.4.9-.9v-3.1c0-.4-.3-.8-.6-.9l-1.8-.6c-.2,0-.4-.3-.5-.5l-1.5-2.9c-.2-.3-.5-.5-.8-.5h-2.3"/>   <path d="M8.2,8.2v3.8"/>   <path d="M9.2,17.7h5.7"/>   <circle cx="16.7" cy="17.7" r="1.9"/>   <circle cx="7.3" cy="17.7" r="1.9"/>';

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

module.exports = Ambulance;
