'use strict';

var React = require('react');

function Visa(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.9,4.4H4.1c-1.1,0-2,.9-2,2v11.9c0,1.1.9,2,2,2h15.9c1.1,0,2-.9,2-2V6.4c0-1.1-.9-2-2-2ZM7.5,14.4l-.9-3.3c0-.2-.1-.3-.3-.4h0c-.3-.2-.7-.3-1-.3h0s0-.1,0-.1h1.8c.2,0,.5.2.5.4h0s.5,2.4.5,2.4l1.1-2.8h1.1s-1.7,4.1-1.7,4.1h-1.1ZM10,14.4l.9-4.1h1.1l-.9,4.1h-1.1ZM13,14.4h0c-.4,0-.8,0-1.2-.2l.2-.9h0c.3.2.7.3,1.1.3s0,0,0,0c.3,0,.6-.1.6-.4,0-.2-.1-.3-.6-.5-.4-.2-.9-.5-.9-1.1,0-.8.8-1.4,1.8-1.4h0c.4,0,.7,0,1,.2l-.2.9h0c-.3-.1-.6-.2-.9-.2s-.1,0-.2,0c-.3,0-.5.2-.5.3,0,.5,1.5.5,1.5,1.6h0c0,.9-.7,1.4-1.9,1.4ZM17.6,14.4v-.6h-1.5l-.2.6h-1.1l1.6-3.8h0c0-.2.2-.3.5-.3h.9l.9,4.1h-1Z" fill-rule="evenodd"/>   <polygon points="16.4 12.9 17.3 12.9 17 11.4 16.4 12.9" fill-rule="evenodd"/>' : '<rect x="2.1" y="4.4" width="19.8" height="15.9" rx="2" ry="2" stroke-miterlimit="10"/>   <path d="M15,10.4" stroke-miterlimit="10"/>   <path d="M17.7,14.1v-.6h-1.9l-.2.6h-.4l1.4-3.4c0-.1.2-.1.2-.1h.1l-1,2.6h1.7l-.5-2.6h.3l.8,3.5h-.5ZM13.1,14.1c-.3,0-.6,0-.8-.1v-.2c.4.1.6.1.9.1.5,0,.9-.3.9-.7s-.3-.5-.8-.8c-.4-.2-.7-.4-.7-.8,0-.7.6-1.1,1.5-1.1s.5,0,.6.1v.3c-.3,0-.5,0-.7,0h-.2c-.6,0-.8.4-.8.6,0,.3.3.5.6.7.5.3.9.5.9.9,0,.7-.5,1.1-1.4,1.1ZM10.3,14l.8-3.5h.5l-.8,3.5h-.5ZM8.1,14l1.4-3.5h.4l-1.5,3.5h-.4ZM7.8,14l-.8-3.1c0-.2,0-.3-.2-.4h.4c0,0,.2,0,.2.1l.7,3.4h-.3Z" stroke-miterlimit="10"/>';

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

module.exports = Visa;
