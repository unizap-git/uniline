'use strict';

var React = require('react');

function Wallet(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9,6l6.9-4,2.3,4h-9.2Z"/>   <path d="M17.6,10.5h4.4c.6,0,1,.4,1,1v-4.5c0-1.1-.9-2-2-2H3c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2v-4.5c0,.6-.4,1-1,1h-4.4c-2,0-3.6-1.6-3.6-3.5s1.6-3.5,3.6-3.5Z"/>   <path d="M22,21.2c-.6,0-1-.4-1-1v-12c0-.6.4-1,1-1s1,.4,1,1v12c0,.6-.4,1-1,1Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.982 11.9689L31.7846 4L36.397 11.9889L17.982 11.9689Z"/><path d="M4 14C4 12.8954 4.89543 12 6 12H42C43.1046 12 44 12.8954 44 14V42C44 43.1046 43.1046 44 42 44H6C4.89543 44 4 43.1046 4 42V14Z"/><path d="M35.25 33H44V23H35.25C32.3505 23 30 25.2386 30 28C30 30.7614 32.3505 33 35.25 33Z"/><path d="M44 16.5V40.5"/>';

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

module.exports = Wallet;
