'use strict';

var React = require('react');

function Banknotes(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,7.5c-1.2,0-2.2,1-2.2,2.2s1,2.2,2.2,2.2,2.2-1,2.2-2.2-1-2.2-2.2-2.2h0Z"/>   <path d="M1.5,4.9c0-1,.8-1.9,1.9-1.9h17.2c1,0,1.9.8,1.9,1.9v9.8c0,1-.8,1.9-1.9,1.9H3.4c-1,0-1.9-.8-1.9-1.9h0V4.9ZM8.2,9.8c0-2.1,1.7-3.8,3.8-3.8s3.8,1.7,3.8,3.8-1.7,3.8-3.8,3.8-3.8-1.7-3.8-3.8ZM18.8,9c-.4,0-.8.3-.8.8h0c0,.4.3.8.8.8h0c.4,0,.8-.3.8-.8h0c0-.4-.3-.8-.8-.8h0ZM4.5,9.8c0-.4.3-.8.8-.8h0c.4,0,.8.3.8.8h0c0,.4-.3.8-.8.8h0c-.4,0-.8-.3-.8-.8h0Z" fill-rule="evenodd"/>   <path d="M2.2,18c-.4,0-.8.3-.8.8s.3.8.8.8c5.4,0,10.6.7,15.6,2.1,1.2.3,2.4-.6,2.4-1.8v-1c0-.4-.3-.8-.8-.8H2.2Z"/>' : '<path d="M6,35.9c9.9,0,19.7,1.3,29.2,3.9,1.3.4,2.7-.6,2.7-2v-1.9M8.8,9.6v1.4c0,.8-.6,1.4-1.4,1.4h-1.4M6,12.3v-.7c0-1.1.9-2.1,2.1-2.1h31.2M6,12.3v16.6M39.2,9.6v1.4c0,.8.6,1.4,1.4,1.4h1.4M39.2,9.6h.7c1.1,0,2.1.9,2.1,2.1v18c0,1.1-.9,2.1-2.1,2.1h-.7M42,28.9h-1.4c-.8,0-1.4.6-1.4,1.4v1.4M39.2,31.7H8.8M8.8,31.7h-.7c-1.1,0-2.1-.9-2.1-2.1v-.7M8.8,31.7v-1.4c0-.8-.6-1.4-1.4-1.4h-1.4M29.5,20.6c0,3.1-2.5,5.5-5.5,5.5s-5.5-2.5-5.5-5.5,2.5-5.5,5.5-5.5,5.5,2.5,5.5,5.5ZM35.1,20.6h0s0,0,0,0h0ZM12.9,20.6h0s0,0,0,0h0Z"/>';

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

module.exports = Banknotes;
