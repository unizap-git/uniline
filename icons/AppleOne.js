'use strict';

var React = require('react');

function AppleOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,7.8c.4-3.9,2.1-5.8,5-5.8.3.8.3,1.6.2,2.4,0,.4-.3.9-.6,1.5" stroke-miterlimit="2"/>   <path d="M19.6,6.2c-1.4-1.2-2.4-1.4-4.2-1.2-1,.1-1.8.7-2.4,1.2-.4.3-.8.6-1,.6s-1-.4-1.6-.7c-.7-.4-1.5-.9-2.3-1-1.6-.3-2.6,0-4,1.2-1.5,1.4-2.2,3.3-2.2,6.2s.8,5.6,2.6,7.4c.9,1,1.6,1.7,2.9,2.2.4.2.9.3,1.3.3s.8,0,1.1-.1c.4,0,.7-.2.9-.4.4-.2.7-.4,1.2-.4s.8.2,1.2.4c.3.1.6.3,1,.4.7.2,1.5.3,2.4-.1,1.3-.6,2-1.2,2.9-2.2,1.7-1.8,2.5-4.3,2.5-7.5s-.8-4.9-2.4-6.3ZM8.8,17.4c-.2.2-.5.3-.8.3s-.5,0-.7-.2c-.6-.5-1-1.3-1.2-2.2-.2-.8-.2-1.7,0-2.5.1-.5.6-.9,1.2-.8.5.1.9.6.8,1.2-.1.5-.1,1.1,0,1.7,0,.5.3.8.6,1.1.4.4.5,1,.1,1.4Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 41.0202C26.4311 41.0202 27.4311 42.3302 28.7342 42.6214C30.0373 42.9127 31.1312 42.9935 32.2515 42.4999C34.47 41.5223 35.8224 40.3578 37.4634 38.6186C40.5046 35.3953 42 30.9635 42 25.0286C42 19.0936 40.3996 16.0265 37.9334 14.0202C35.4672 12.014 34.037 11.6296 31.0549 12.014C28.0727 12.3983 26.4489 15.6025 24.0083 15.6025C21.5678 15.6025 18.5933 12.4431 16.0055 12.014C13.4177 11.5848 12 12.014 9.75967 14.0202C7.51934 16.0265 6 19.1506 6 25.0286C6 30.9066 7.55155 35.265 10.5927 38.4882C12.2337 40.2275 13.53 41.5223 15.7485 42.4999C16.8688 42.9935 18.0267 42.9127 19.2844 42.6214C20.5422 42.3302 21.5422 41.0202 24 41.0202Z"/><path d="M24.0088 15.6025C24.7936 7.86751 28.1278 4 34.0114 4C34.5509 5.62786 34.6902 7.20336 34.4295 8.7265C34.3056 9.45008 33.9212 10.4819 33.2764 11.8219"/><path d="M14.2289 26C13.9523 27.3457 13.9523 28.7313 14.2289 30.1566C14.5054 31.5819 15.0944 32.6818 15.9957 33.4563"/>';

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

module.exports = AppleOne;
