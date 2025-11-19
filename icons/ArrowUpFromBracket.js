'use strict';

var React = require('react');

function ArrowUpFromBracket(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17,21H7c-2.2,0-4-1.8-4-4v-2c0-.6.4-1,1-1s1,.4,1,1v2c0,1.1.9,2,2,2h10c1.1,0,2-.9,2-2v-2c0-.6.4-1,1-1s1,.4,1,1v2c0,2.2-1.8,4-4,4ZM12,17c-.6,0-1-.4-1-1V6.4l-2.3,2.3c-.4.4-1,.4-1.4,0s-.4-1,0-1.4l4-4c0,0,.2-.2.3-.2.1,0,.2,0,.4,0h0c.1,0,.3,0,.4,0,.1,0,.2.1.3.2l4,4c.4.4.4,1,0,1.4s-1,.4-1.4,0l-2.3-2.3v9.6c0,.6-.4,1-1,1Z"/>' : '<path d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2M12 4v12m0-12 4 4m-4-4L8 8"/>';

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

module.exports = ArrowUpFromBracket;
