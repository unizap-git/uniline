'use strict';

var React = require('react');

function Lincoln(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M7,11h4V2c0-.6.4-1,1-1h-3.1c-1,0-1.9.8-2,1.8l-.9,9s0,0,0,.1c0-.5.5-.9,1-.9Z"/>     <path d="M13,2v9h4c.5,0,.9.4,1,.9,0,0,0,0,0-.1l-.9-9c-.1-1-1-1.8-2-1.8h-3.1c.6,0,1,.4,1,1Z"/>     <path d="M17,13h-4v9c0,.6-.4,1-1,1h3.1c1,0,1.9-.8,2-1.8l.9-9s0,0,0-.1c0,.5-.5.9-1,.9Z"/>     <path d="M11,22v-9h-4c-.5,0-.9-.4-1-.9,0,0,0,0,0,.1l.9,9c.1,1,1,1.8,2,1.8h3.1c-.6,0-1-.4-1-1Z"/>   </g>   <path d="M14,3h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M14,23h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M7.5,18c-.5,0-.9-.4-1-.9l-.5-4.9c0-.1,0-.3,0-.4l.5-4.9c0-.5.5-.9,1.1-.9.5,0,1,.5.9,1.1l-.5,4.9.5,4.9c0,.5-.3,1-.9,1.1,0,0,0,0-.1,0Z"/>   <path d="M16.5,18s0,0-.1,0c-.5,0-1-.5-.9-1.1l.5-4.9-.5-4.9c0-.5.3-1,.9-1.1.6,0,1,.3,1.1.9l.5,4.9c0,.1,0,.3,0,.4l-.5,4.9c0,.5-.5.9-1,.9Z"/>' : '<path d="M30.19 4H17.81C16.7825 4 15.9221 4.77859 15.8199 5.80099L14.0199 23.801C14.0067 23.9333 14.0067 24.0667 14.0199 24.199L15.8199 42.199C15.9221 43.2214 16.7825 44 17.81 44H30.19C31.2175 44 32.0779 43.2214 32.1801 42.199L33.9801 24.199C33.9933 24.0667 33.9933 23.9333 33.9801 23.801L32.1801 5.80099C32.0779 4.77859 31.2175 4 30.19 4Z"/><path d="M14 24L34 24"/><path d="M24 4V44"/><path d="M20 4H28"/><path d="M20 44H28"/><path d="M15 14L14.0199 23.801C14.0067 23.9333 14.0067 24.0667 14.0199 24.199L15 34"/><path d="M33 14L33.9801 23.801C33.9933 23.9333 33.9933 24.0667 33.9801 24.199L33 34"/>';

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

module.exports = Lincoln;
