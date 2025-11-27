'use strict';

var React = require('react');

function DocumentArrowUp(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5.6,1.5h3.4c2.1,0,3.8,1.7,3.8,3.8v1.9c0,1,.8,1.9,1.9,1.9h1.9c2.1,0,3.8,1.7,3.8,3.8v7.9c0,1-.8,1.9-1.9,1.9H5.6c-1,0-1.9-.8-1.9-1.9h0V3.4c0-1,.8-1.9,1.9-1.9ZM12.5,11.5c-.3-.3-.8-.3-1.1,0l-3,3c-.3.3-.3.8,0,1.1.3.3.8.3,1.1,0,0,0,0,0,0,0l1.7-1.7v4.2c0,.4.3.8.8.8s.8-.3.8-.8v-4.2l1.7,1.7c.3.3.8.3,1.1,0,.3-.3.3-.8,0-1.1,0,0,0,0,0,0,0,0-3-3-3-3Z" fill-rule="evenodd"/>   <path d="M14.2,5.2c0-1.3-.5-2.5-1.3-3.4,3.4.9,6.1,3.6,7,7-1-.8-2.2-1.3-3.4-1.3h-1.9c-.2,0-.4-.2-.4-.4v-1.9Z"/>' : '<path d="M37.9,28.2v-4.9c0-3.4-2.8-6.2-6.2-6.2h-2.8c-1.1,0-2.1-.9-2.1-2.1h0v-2.8c0-3.4-2.8-6.2-6.2-6.2h-3.5M29.5,28.2l-5.5-5.5M24,22.6l-5.5,5.5M24,22.6v11.1M21.2,6h-9c-1.1,0-2.1.9-2.1,2.1v31.9c0,1.1.9,2.1,2.1,2.1h23.6c1.1,0,2.1-.9,2.1-2.1v-17.3c0-9.2-7.4-16.6-16.6-16.6Z"/>';

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

module.exports = DocumentArrowUp;
