'use strict';

var React = require('react');

function Bold(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 3C4 2.44772 4.44772 2 5 2H11C13.4853 2 15.5 4.01472 15.5 6.5C15.5 7.69501 15.0342 8.78123 14.2742 9.58698C15.3283 10.4582 16 11.7757 16 13.25C16 15.8734 13.8734 18 11.25 18H5C4.44772 18 4 17.5523 4 17V3ZM6.5 8.5V4.5H11C12.1046 4.5 13 5.39543 13 6.5C13 7.60457 12.1046 8.5 11 8.5H6.5ZM6.5 11V15.5H11.25C12.4926 15.5 13.5 14.4926 13.5 13.25C13.5 12.0074 12.4926 11 11.25 11H6.5Z"/>' : '<path d="M6.75 3.744h-.753v8.25h7.125a4.125 4.125 0 0 0 0-8.25H6.75Zm0 0v.38m0 16.122h6.747a4.5 4.5 0 0 0 0-9.001h-7.5v9h.753Zm0 0v-.37m0-15.751h6a3.75 3.75 0 1 1 0 7.5h-6m0-7.5v7.5m0 0v8.25m0-8.25h6.375a4.125 4.125 0 0 1 0 8.25H6.75m.747-15.38h4.875a3.375 3.375 0 0 1 0 6.75H7.497v-6.75Zm0 7.5h5.25a3.75 3.75 0 0 1 0 7.5h-5.25v-7.5Z"/>';

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

module.exports = Bold;
