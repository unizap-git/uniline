'use strict';

var React = require('react');

function Faceu(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<ellipse cx="14.5" cy="13" rx="1.5" ry="2"/>   <ellipse cx="9.5" cy="13" rx="1.5" ry="2"/>   <path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM12,19c-3.5,0-7-1.9-7-6s5.1-7.3,8.3-8c.3,0,.6,0,.8.2.2.2.4.5.4.8v1.3c3,1.1,4.5,3,4.5,5.7,0,4.1-3.5,6-7,6Z"/>' : '<path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"/><path d="M27 12V16C29.6667 16.8333 36 19 36 26C36 33 30 36 24 36C18 36 12 33 12 26C12 18 21.6667 13.1667 27 12Z"/><ellipse cx="29" cy="26" rx="3" ry="4"/><ellipse cx="19" cy="26" rx="3" ry="4"/>';

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

module.exports = Faceu;
