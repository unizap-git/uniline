'use strict';

var React = require('react');

function QrCode(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3,4.9c0-1,.8-1.9,1.9-1.9h4.5c1,0,1.9.8,1.9,1.9v4.5c0,1-.8,1.9-1.9,1.9h-4.5c-1,0-1.9-.8-1.9-1.9h0v-4.5ZM4.9,4.5c-.2,0-.4.2-.4.4v4.5c0,.2.2.4.4.4h4.5c.2,0,.4-.2.4-.4v-4.5c0-.2-.2-.4-.4-.4h-4.5ZM12.8,4.9c0-1,.8-1.9,1.9-1.9h4.5c1,0,1.9.8,1.9,1.9v4.5c0,1-.8,1.9-1.9,1.9h-4.5c-1,0-1.9-.8-1.9-1.9h0v-4.5ZM14.6,4.5c-.2,0-.4.2-.4.4v4.5c0,.2.2.4.4.4h4.5c.2,0,.4-.2.4-.4v-4.5c0-.2-.2-.4-.4-.4h-4.5ZM6,6.8c0-.4.3-.8.8-.8h.8c.4,0,.8.3.8.8v.8c0,.4-.3.8-.8.8h-.8c-.4,0-.8-.3-.8-.8v-.8ZM15.8,6.8c0-.4.3-.8.8-.8h.8c.4,0,.8.3.8.8v.8c0,.4-.3.8-.8.8h-.8c-.4,0-.8-.3-.8-.8v-.8ZM3,14.6c0-1,.8-1.9,1.9-1.9h4.5c1,0,1.9.8,1.9,1.9v4.5c0,1-.8,1.9-1.9,1.9h-4.5c-1,0-1.9-.8-1.9-1.9h0v-4.5ZM4.9,14.2c-.2,0-.4.2-.4.4h0v4.5c0,.2.2.4.4.4h4.5c.2,0,.4-.2.4-.4v-4.5c0-.2-.2-.4-.4-.4h-4.5ZM12.8,13.5c0-.4.3-.8.8-.8h.8c.4,0,.8.3.8.8v.8c0,.4-.3.8-.8.8h-.8c-.4,0-.8-.3-.8-.8v-.8ZM18.8,13.5c0-.4.3-.8.8-.8h.8c.4,0,.8.3.8.8v.8c0,.4-.3.8-.8.8h-.8c-.4,0-.8-.3-.8-.8v-.8ZM6,16.5c0-.4.3-.8.8-.8h.8c.4,0,.8.3.8.8v.8c0,.4-.3.8-.8.8h-.8c-.4,0-.8-.3-.8-.8v-.8ZM15.8,16.5c0-.4.3-.8.8-.8h.8c.4,0,.8.3.8.8v.8c0,.4-.3.8-.8.8h-.8c-.4,0-.8-.3-.8-.8v-.8ZM12.8,19.5c0-.4.3-.8.8-.8h.8c.4,0,.8.3.8.8v.8c0,.4-.3.8-.8.8h-.8c-.4,0-.8-.3-.8-.8v-.8ZM18.8,19.5c0-.4.3-.8.8-.8h.8c.4,0,.8.3.8.8v.8c0,.4-.3.8-.8.8h-.8c-.4,0-.8-.3-.8-.8v-.8Z" fill-rule="evenodd"/>' : '<path d="M5.9,5.9h13.6v13.6H5.9V5.9ZM28.5,28.5h13.6v13.6h-13.6v-13.6ZM28.5,5.9h13.6v13.6h-13.6V5.9ZM19.5,28.5h0s0,0,0,0h0ZM19.5,37.6h0s0,0,0,0h0ZM12.7,42.1h0s0,0,0,0h0ZM12.7,33h0s0,0,0,0h0ZM5.9,37.6h0s0,0,0,0h0ZM5.9,28.5h0s0,0,0,0h0Z"/>   <path d="M12.7,12.7h0s0,0,0,0h0ZM35.3,35.3h0s0,0,0,0h0Z"/>';

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

module.exports = QrCode;
