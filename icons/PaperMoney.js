'use strict';

var React = require('react');

function PaperMoney(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2.5H4.5c-1.9,0-3.5,1.6-3.5,3.5v12c0,1.9,1.6,3.5,3.5,3.5h15c1.9,0,3.5-1.6,3.5-3.5V6c0-1.9-1.6-3.5-3.5-3.5ZM14.6,9.6h.8c.6,0,1,.4,1,1s-.4,1-1,1h-.8c-.4,1.7-1.8,3.1-3.6,3.4l1.7,1.7c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-3.4-3.4c-.3-.3-.4-.7-.2-1.1s.5-.6.9-.6h1.7c1,0,1.8-.6,2.2-1.4h-3.9c-.6,0-1-.4-1-1s.4-1,1-1h3.9c-.4-.8-1.2-1.4-2.2-1.4h-1.7c-.6,0-1-.4-1-1s.4-1,1-1h6.8c.6,0,1,.4,1,1s-.4,1-1,1h-1.4c.3.4.5.9.6,1.4Z"/>' : '<path d="M39 7H9C6.23858 7 4 9.23858 4 12V36C4 38.7614 6.23858 41 9 41H39C41.7614 41 44 38.7614 44 36V12C44 9.23858 41.7614 7 39 7Z"/><path d="M18 15L24 21L30 15"/><path d="M17 23H31"/><path d="M17 29H31"/><path d="M24 23V34"/>';

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

module.exports = PaperMoney;
