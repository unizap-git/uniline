'use strict';

var React = require('react');

function Commodity(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.9,18.8l-1.8-14c-.1-1-1-1.8-2-1.8H5.9c-1,0-1.9.8-2,1.8l-1.8,14c0,.6.1,1.1.5,1.6s.9.7,1.5.7h15.7c.6,0,1.1-.2,1.5-.7.4-.4.6-1,.5-1.6ZM17.4,9.4c0,.1-1.3,2.6-5.4,2.6s-5.3-2.4-5.4-2.6c-.2-.5,0-1.1.4-1.3.5-.2,1.1,0,1.3.4,0,0,.9,1.5,3.6,1.5s3.6-1.4,3.6-1.5c.3-.5.9-.7,1.3-.4.5.3.7.8.4,1.3Z"/>' : '<path d="M9.78101 9.75193C9.90612 8.75107 10.7569 8 11.7656 8H36.2344C37.2431 8 38.0939 8.75107 38.219 9.75193L41.719 37.7519C41.8682 38.9456 40.9374 40 39.7344 40H8.26556C7.06257 40 6.1318 38.9456 6.28101 37.7519L9.78101 9.75193Z"/><path d="M15 18C15 18 17 22 24 22C31 22 33 18 33 18"/>';

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

module.exports = Commodity;
