'use strict';

var React = require('react');

function BookOpenReader(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9,6c0-1.7,1.3-3,3-3s3,1.3,3,3-1.3,3-3,3-3-1.3-3-3ZM11,9.6c-.1,0-.2,0-.4-.1-1.3-.5-2.5-.9-4.8-.8-1,0-1.8.8-1.8,1.8v7.3c0,1.1.9,1.9,1.9,1.9,1.3,0,2,.1,2.8.4.3,0,.6.2.9.3h0c.1,0,.2,0,.4.1.3.1.6.2,1,.3,0,0,0-11.1,0-11.1ZM13,9.6v11.1c.6-.2,1-.3,1.5-.5.3-.1.6-.2.8-.3.7-.2,1.5-.4,2.7-.4.5,0,1-.2,1.3-.5.4-.3.7-.8.7-1.4v-7.3c0-.6-.3-1.1-.6-1.4-.3-.3-.8-.5-1.3-.5-2.3,0-3.4.4-4.7.8-.1,0-.3,0-.4.1Z"/>' : '<path d="M24.1,21.7v20.3M24.1,21.7c-5.6-1.6-7.2-3.1-13.8-3-1.1,0-1.9.9-1.9,1.9v16.4c0,1.1.9,2,2.1,1.9,6.3,0,7.8,1.5,13.7,3M24.1,21.7c5.6-1.6,7-3.1,13.6-3,1.1,0,2.1.9,2.1,1.9v16.4c0,1.1-1.1,2-2.3,1.9-6.3,0-7.6,1.5-13.5,3M28.6,10.5c0,2.5-2,4.5-4.5,4.5s-4.5-2-4.5-4.5,2-4.5,4.5-4.5,4.5,2,4.5,4.5Z"/>';

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

module.exports = BookOpenReader;
