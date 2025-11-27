'use strict';

var React = require('react');

function LoadingThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM14.5,8.1l1.1-1.1c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-1.1,1.1c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4ZM5,12c0-.6.4-1,1-1h1.5c.6,0,1,.4,1,1s-.4,1-1,1h-1.5c-.6,0-1-.4-1-1ZM9.5,15.9l-1.1,1.1c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l1.1-1.1c.4-.4,1-.4,1.4,0s.4,1,0,1.4ZM9.5,9.5c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-1.1-1.1c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1.1,1.1c.4.4.4,1,0,1.4ZM13,18c0,.6-.4,1-1,1s-1-.4-1-1v-1.5c0-.6.4-1,1-1s1,.4,1,1v1.5ZM13,7.5c0,.6-.4,1-1,1s-1-.4-1-1v-1.5c0-.6.4-1,1-1s1,.4,1,1v1.5ZM16.9,16.9c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-1.1-1.1c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1.1,1.1c.4.4.4,1,0,1.4ZM18,13h-1.5c-.6,0-1-.4-1-1s.4-1,1-1h1.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M24 12V15"/><path d="M32.4852 15.5147L30.3639 17.636"/><path d="M36 24H33"/><path d="M32.4852 32.4853L30.3639 30.364"/><path d="M24 36V33"/><path d="M15.5148 32.4853L17.6361 30.364"/><path d="M12 24H15"/><path d="M15.5148 15.5147L17.6361 17.636"/>';

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

module.exports = LoadingThree;
