'use strict';

var React = require('react');

function CollectPicture(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44 21C44 19.8954 43.1046 19 42 19C40.8954 19 40 19.8954 40 21H44ZM23 8C24.1046 8 25 7.10457 25 6C25 4.89543 24.1046 4 23 4V8ZM39 40H9V44H39V40ZM8 39V9H4V39H8ZM40 21V39H44V21H40ZM9 8H23V4H9V8ZM9 40C8.44772 40 8 39.5523 8 39H4C4 41.7614 6.23857 44 9 44V40ZM39 44C41.7614 44 44 41.7614 44 39H40C40 39.5523 39.5523 40 39 40V44ZM8 9C8 8.44772 8.44771 8 9 8V4C6.23858 4 4 6.23857 4 9H8Z"/><path d="M6 35L16.6931 25.198C17.4389 24.5143 18.5779 24.4953 19.3461 25.1538L32 36"/><path d="M28 31L32.7735 26.2265C33.4772 25.5228 34.5914 25.4436 35.3877 26.0408L42 31"/><path d="M33.3 6C31.4775 6 30 7.43473 30 9.20455C30 12.4091 33.9 15.3223 36 16C38.1 15.3223 42 12.4091 42 9.20455C42 7.43473 40.5225 6 38.7 6C37.5839 6 36.5972 6.53804 36 7.3616C35.4028 6.53804 34.4161 6 33.3 6Z"/>' : '<path d="M8.1,34.1l9.7-8.9c.7-.6,1.7-.6,2.4,0l11.5,9.9"/>   <path d="M28.1,30.4l4.3-4.3c.6-.6,1.7-.7,2.4-.2l6,4.5"/>   <path d="M32.6,7.4c-1.7,0-3,1.3-3,3,0,3,3.6,5.6,5.5,6.3,1.9-.6,5.5-3.3,5.5-6.3s-1.4-3-3-3-1.9.5-2.5,1.3c-.6-.8-1.5-1.3-2.5-1.3Z"/>   <path d="M40.8,24v14.5c0,1.1-.9,1.9-1.9,1.9H10c-1.1,0-1.9-.9-1.9-1.9V9.5c0-1.1.9-1.9,1.9-1.9h14.5"/>';

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

module.exports = CollectPicture;
