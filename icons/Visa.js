'use strict';

var React = require('react');

function Visa(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.9,4.4H4.1c-1.1,0-2,.9-2,2v11.9c0,1.1.9,2,2,2h15.9c1.1,0,2-.9,2-2V6.4c0-1.1-.9-2-2-2h-.1ZM7.5,14.4l-.9-3.3c0-.2,0-.3-.3-.4h0c-.3-.2-.7-.3-1-.3h0c0-.1,1.8-.1,1.8-.1.2,0,.5.2.5.4h0l.5,2.4,1.1-2.8h1.1l-1.7,4.1s-1.1,0-1.1,0ZM10,14.4l.9-4.1h1.1l-.9,4.1h-1.1ZM13,14.4h0c-.4,0-.8,0-1.2-.2l.2-.9h0c.3.2.7.3,1.1.3s0,0,0,0c.3,0,.6-.1.6-.4s-.1-.3-.6-.5c-.4-.2-.9-.5-.9-1.1s.8-1.4,1.8-1.4h0c.4,0,.7,0,1,.2l-.2.9h0c-.3-.1-.6-.2-.9-.2s-.1,0-.2,0c-.3,0-.5.2-.5.3,0,.5,1.5.5,1.5,1.6h0c0,.9-.7,1.4-1.9,1.4h.2ZM17.6,14.4v-.6h-1.5l-.2.6h-1.1l1.6-3.8h0c0-.2.2-.3.5-.3h.9l.9,4.1h-1.1Z" fill-rule="evenodd"/>   <polygon points="16.4 12.9 17.3 12.9 17 11.4 16.4 12.9" fill-rule="evenodd"/>' : '<rect x="5.7" y="9.6" width="36.7" height="29.5" rx="3.7" ry="3.7" stroke-miterlimit="10"/>   <path d="M29.6,20.7" stroke-miterlimit="10"/>   <path d="M34.6,27.6v-1.1h-3.5l-.4,1.1h-.7l2.6-6.3c0-.2.4-.2.4-.2h.2l-1.9,4.8h3.2l-.9-4.8h.6l1.5,6.5h-.9ZM26,27.6c-.6,0-1.1,0-1.5-.2v-.4c.7.2,1.1.2,1.7.2.9,0,1.7-.6,1.7-1.3s-.6-.9-1.5-1.5c-.7-.4-1.3-.7-1.3-1.5,0-1.3,1.1-2,2.8-2s.9,0,1.1.2v.6h-1.7c-1.1,0-1.5.7-1.5,1.1,0,.6.6.9,1.1,1.3.9.6,1.7.9,1.7,1.7,0,1.3-.9,2-2.6,2v-.2ZM20.8,27.4l1.5-6.5h.9l-1.5,6.5h-.9ZM16.8,27.4l2.6-6.5h.7l-2.8,6.5h-.7.2ZM16.2,27.4l-1.5-5.7c0-.4,0-.6-.4-.7h.7s.4,0,.4.2l1.3,6.3h-.6Z" stroke-miterlimit="10"/>';

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

module.exports = Visa;
