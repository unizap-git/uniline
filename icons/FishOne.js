'use strict';

var React = require('react');

function FishOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17.2,6.1c-.8-1.4-2.9-3.1-6.8-2.6-.4,0-.7.3-.8.6s0,.7.1,1l1.1,1.4c-1.4.5-3.2,1.3-4.3,2.2-1-.8-2.9-2.2-4.5-2.2s-.7.2-.9.5c-.2.3-.2.7,0,1,.5.8,1.6,3.9,0,7.5-.2.4-.1.8.2,1.1.3.3.7.4,1.1.2.9-.4,2.7-1.3,4.1-2.5,1,.8,2.6,2.1,4.4,2.8l-1.2,1.8c-.2.3-.2.6,0,.9.1.3.4.5.7.6.3,0,.7,0,1.1,0,1.9,0,4.4-.7,5.7-3.2,1.9-.6,5.1-2.5,5.8-5.1,0-.1,0-.3,0-.4-.2-1.7-2-4.7-5.8-5.7ZM18,13c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M44 24C42.7848 28.6903 36.038 32.4667 33 32.9997C30.5696 38.9691 24.038 39.5327 21 38.9997L25 32.9997C20.5443 32.5733 15.0253 27.9544 13 26.0001C10.3861 28.8504 6.19409 31.0805 4 31.9688C7.64557 24.2939 5.51899 17.3097 4 15.0001C6.83544 15.0001 11.1435 18.2235 13 20.0001C15.0253 17.8681 21.962 14.8879 25 13.9997L21 8.99979C28.6962 8.147 32.1561 11.868 33 14C40.6962 15.7056 43.6624 21.6904 44 24Z"/><circle cx="36" cy="24.0001" r="2"/>';

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

module.exports = FishOne;
