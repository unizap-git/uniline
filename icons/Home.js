'use strict';

var React = require('react');

function Home(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.1,8.2l-7.5-6c-.4-.3-.9-.3-1.2,0l-7.5,6c-.2.2-.4.5-.4.8v12c0,.6.4,1,1,1h5c-.6,0-1-.4-1-1v-6.5c0-.6.4-1,1-1h5c.6,0,1,.4,1,1v6.5c0,.6-.4,1-1,1h5c.6,0,1-.4,1-1v-12c0-.3-.1-.6-.4-.8Z"/>   <path d="M19.5,22H4.5c-.6,0-1-.4-1-1s.4-1,1-1h15c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M9 18V42H39V18L24 6L9 18Z"/><path d="M19 29V42H29V29H19Z"/><path d="M9 42H39"/>';

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

module.exports = Home;
