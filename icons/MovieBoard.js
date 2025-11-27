'use strict';

var React = require('react');

function MovieBoard(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,8V3H2v5h20Z"/>   <path d="M13,3l2,5"/>   <path d="M9,3l2,5"/>   <path d="M5,3l2,5"/>   <path d="M17,3l2,5"/>   <path d="M22,7H2c-.6,0-1,.4-1,1v13c0,.6.4,1,1,1h20c.6,0,1-.4,1-1v-13c0-.6-.4-1-1-1ZM12,17h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1ZM18,13H6c-.6,0-1-.4-1-1s.4-1,1-1h12c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M44 16H4V42H44V16Z"/><path d="M44 16V6H4V16H44Z"/><path d="M26 6L30 16"/><path d="M18 6L22 16"/><path d="M10 6L14 16"/><path d="M34 6L38 16"/><path d="M12 24H36"/><path d="M12 32H24"/>';

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

module.exports = MovieBoard;
