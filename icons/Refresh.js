'use strict';

var React = require('react');

function Refresh(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6,21c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1h-1.6c2.1,1.5,5.1,1.5,7.3-.1,1.2-.9,2-2.3,2.3-3.8,0-.5.6-.9,1.2-.8.5,0,.9.6.8,1.2-.3,2-1.4,3.8-3.1,5.1-3,2.3-7.1,2.2-10,0v1.6c0,.6-.4,1-1,1ZM5,11.8c0,0-.1,0-.2,0-.5,0-.9-.6-.8-1.2.3-2,1.4-3.8,3.1-5.1,3-2.3,7.1-2.2,10,0v-1.6c0-.6.4-1,1-1s1,.4,1,1v4c0,.6-.4,1-1,1h-4c-.6,0-1-.4-1-1s.4-1,1-1h1.5c-2.1-1.5-5.1-1.5-7.3.1-1.2.9-2,2.3-2.3,3.8,0,.5-.5.8-1,.8Z"/>' : '<path d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/>';

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

module.exports = Refresh;
