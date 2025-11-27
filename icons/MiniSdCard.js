'use strict';

var React = require('react');

function MiniSdCard(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20,1H7c-.6,0-1,.4-1,1v6.8l-2.5,1.3c-.3.2-.5.5-.5.9v11c0,.6.4,1,1,1h16c.6,0,1-.4,1-1V2c0-.6-.4-1-1-1ZM11.5,9c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3ZM14.5,9c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3ZM17.5,9c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9979 18.7386L8 21.9228V44H40V4H13.9979V18.7386Z"/><path d="M21 12V18"/><path d="M33 12V18"/><path d="M27 12V18"/>';

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

module.exports = MiniSdCard;
