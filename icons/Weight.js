'use strict';

var React = require('react');

function Weight(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.5,1H3.5c-1.4,0-2.5,1.1-2.5,2.5v17c0,1.4,1.1,2.5,2.5,2.5h17c1.4,0,2.5-1.1,2.5-2.5V3.5c0-1.4-1.1-2.5-2.5-2.5ZM12,15.5c-.8,0-1.5-.7-1.5-1.5s0-.2,0-.3l-1.9-2.6c-.3-.4-.2-1.1.2-1.4.4-.3,1.1-.2,1.4.2l1.9,2.6c.7,0,1.3.7,1.3,1.5s-.7,1.5-1.5,1.5ZM18.6,10.3c-.2.2-.4.2-.6.2s-.6-.1-.8-.4c-1.5-1.8-3.2-2.6-5.2-2.6s-3.8.9-5.2,2.6c-.4.4-1,.5-1.4.1-.4-.4-.5-1-.1-1.4,1.9-2.2,4.1-3.4,6.8-3.4s4.9,1.1,6.8,3.4c.4.4.3,1.1-.1,1.4Z"/>' : '<path d="M41 4H7C5.34315 4 4 5.34315 4 7V41C4 42.6569 5.34315 44 7 44H41C42.6569 44 44 42.6569 44 41V7C44 5.34315 42.6569 4 41 4Z"/><path d="M12 19.0537C15.3249 15.0537 19.3249 13.0537 24 13.0537C28.6751 13.0537 32.6751 15.0537 36 19.0537"/><path d="M24 31C25.6569 31 27 29.6569 27 28C27 26.3431 25.6569 25 24 25C22.3431 25 21 26.3431 21 28C21 29.6569 22.3431 31 24 31Z"/><path d="M19 21L24.0083 28"/>';

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

module.exports = Weight;
