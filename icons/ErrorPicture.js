'use strict';

var React = require('react');

function ErrorPicture(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44 23.9941C44 22.8896 43.1046 21.9941 42 21.9941C40.8954 21.9941 40 22.8896 40 23.9941H44ZM24 7.99414C25.1046 7.99414 26 7.09871 26 5.99414C26 4.88957 25.1046 3.99414 24 3.99414V7.99414ZM39 39.9941H9V43.9941H39V39.9941ZM8 38.9941V8.99414H4V38.9941H8ZM40 23.9941V38.9941H44V23.9941H40ZM9 7.99414H24V3.99414H9V7.99414ZM9 39.9941C8.44772 39.9941 8 39.5464 8 38.9941H4C4 41.7556 6.23857 43.9941 9 43.9941V39.9941ZM39 43.9941C41.7614 43.9941 44 41.7556 44 38.9941H40C40 39.5464 39.5523 39.9941 39 39.9941V43.9941ZM8 8.99414C8 8.44186 8.44771 7.99414 9 7.99414V3.99414C6.23858 3.99414 4 6.23272 4 8.99414H8Z"/><path d="M6 35L16.6931 25.198C17.4389 24.5143 18.5779 24.4953 19.3461 25.1538L32 36"/><path d="M28 31L32.7735 26.2265C33.4772 25.5228 34.5914 25.4436 35.3877 26.0408L42 31"/><path d="M33 7L41 15"/><path d="M41 7L33 15"/>' : '<path d="M8.1,34l9.7-8.9c.7-.6,1.7-.6,2.4,0l11.5,9.9"/>   <path d="M28.1,30.4l4.3-4.3c.6-.6,1.7-.7,2.4-.2l6,4.5"/>   <path d="M32.2,8.6l7.3,7.3"/>   <path d="M39.4,8.6l-7.3,7.3"/>   <path d="M40.8,24v14.5c0,1.1-.9,1.9-1.9,1.9H10c-1.1,0-1.9-.9-1.9-1.9V9.5c0-1.1.9-1.9,1.9-1.9h14.5"/>';

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

module.exports = ErrorPicture;
