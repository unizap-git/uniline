'use strict';

var React = require('react');

function HandleA(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<polygon points="10.1 12 13.9 12 12 7.9 10.1 12"/>   <path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM17.4,17.4c-.1,0-.3,0-.4,0-.4,0-.7-.2-.9-.6l-1.3-2.9h-5.5l-1.3,2.9c-.2.4-.5.6-.9.6s-.3,0-.4,0c-.5-.2-.7-.8-.5-1.3l5-11s0,0,0-.1c0,0,0-.1.1-.2,0,0,.1,0,.2-.1,0,0,0,0,.1,0,0,0,0,0,0,0,0,0,.1,0,.2,0,0,0,.1,0,.2,0,0,0,.1,0,.2,0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,0,.1,0,0,0,.1,0,.2.1,0,0,0,.1.1.2,0,0,0,0,0,.1l5,11c.2.5,0,1.1-.5,1.3Z"/>' : '<circle cx="24" cy="24" r="20"/><path d="M24 11L14 33"/><path d="M18 26L30 26"/><path d="M24 11L34 33"/>';

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

module.exports = HandleA;
