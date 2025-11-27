'use strict';

var React = require('react');

function ReverseLensOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7.5,6l1.5-3h6l1.5,3H7.5Z"/>   <path d="M20.5,5H3.5c-1.4,0-2.5,1.1-2.5,2.4v12.2c0,1.3,1.1,2.4,2.5,2.4h17c1.4,0,2.5-1.1,2.5-2.4V7.4c0-1.3-1.1-2.4-2.5-2.4ZM13.9,18.1c-.6.2-1.2.4-1.9.4-1.1,0-2.2-.4-3-1h0c0,.6-.4,1-1,1s-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1c0,1.7,1.3,3,3,3s.8,0,1.1-.2c.5-.2,1.1,0,1.3.6.2.5,0,1.1-.6,1.3ZM17,13.5c0,.6-.4,1-1,1s-1-.4-1-1c0-1.7-1.3-3-3-3s-.8,0-1.1.2c-.5.2-1.1,0-1.3-.6-.2-.5,0-1.1.6-1.3.6-.2,1.2-.4,1.9-.4,1.1,0,2.2.4,3,1h0c0-.6.4-1,1-1s1,.4,1,1v4Z"/>' : '<path d="M15 12L18 6H30L33 12H15Z"/><path d="M41 12H7C5.34315 12 4 13.2536 4 14.8V39.2C4 40.7464 5.34315 42 7 42H41C42.6569 42 44 40.7464 44 39.2V14.8C44 13.2536 42.6569 12 41 12Z"/><path d="M32 19V27"/><path d="M16 27V35"/><path d="M16 27C16 31.4183 19.5817 35 24 35C25.0609 35 26.0736 34.7935 27 34.4185"/><path d="M32 27C32 22.5817 28.4183 19 24 19C22.9391 19 21.9264 19.2065 21 19.5815"/>';

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

module.exports = ReverseLensOne;
