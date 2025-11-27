'use strict';

var React = require('react');

function MapRoad(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.5,1H3.5c-1.4,0-2.5,1.1-2.5,2.5v17c0,1.4,1.1,2.5,2.5,2.5h17c1.4,0,2.5-1.1,2.5-2.5V3.5c0-1.4-1.1-2.5-2.5-2.5ZM7,18.2c0,.5-.5.8-1,.8s-.1,0-.2,0c-.5,0-.9-.6-.8-1.2l2-12c0-.5.6-.9,1.2-.8.5,0,.9.6.8,1.2l-2,12ZM13,18c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2ZM13,13c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2ZM13,8c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2ZM18.7,19c0,0-.1,0-.2,0-.5,0-.9-.3-1-.8l-2-12c0-.5.3-1.1.8-1.2.5,0,1.1.3,1.2.8l2,12c0,.5-.3,1.1-.8,1.2Z"/>' : '<path d="M41 4H7C5.34315 4 4 5.34315 4 7V41C4 42.6569 5.34315 44 7 44H41C42.6569 44 44 42.6569 44 41V7C44 5.34315 42.6569 4 41 4Z"/><path d="M33 12L37 36"/><path d="M16 12L12 36"/><path d="M24 12V16"/><path d="M24 22V26"/><path d="M24 32V36"/>';

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

module.exports = MapRoad;
