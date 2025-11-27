'use strict';

var React = require('react');

function IcecreamFive(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1c-3.3,0-6,2.7-6,6v8.9c0,.6.5,1.1,1.1,1.1h9.7c.6,0,1.1-.5,1.1-1.1V7c0-3.3-2.7-6-6-6ZM11.5,11c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3ZM14.5,11c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3Z"/>   <path d="M10.5,16v4.5c0,.8.7,1.5,1.5,1.5s1.5-.7,1.5-1.5v-4.5"/>' : '<path d="M14 14C14 8.47715 18.4772 4 24 4C29.5228 4 34 8.47715 34 14V31.7308C34 31.8795 33.8795 32 33.7308 32H14.2692C14.1205 32 14 31.8795 14 31.7308V14Z"/><path d="M21 16V22"/><path d="M27 16V22"/><path d="M21 32V41C21 42.6569 22.3431 44 24 44C25.6569 44 27 42.6569 27 41V32"/>';

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

module.exports = IcecreamFive;
