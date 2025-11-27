'use strict';

var React = require('react');

function Blossom(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.9,10.4c-.2-1-1-1.9-2-2.5-.9-.5-2.4-.9-4.6-.5,0-1.2-.2-2.5-1-3.6-.6-.8-1.7-1.8-3.7-1.9-1.1,0-2.2.4-3,1.2-.9,1-1.3,2.4-1.3,4.2-1.4-.3-2.9-.3-4.2.4-1.1.6-1.9,1.7-2.2,3.1-.2.8,0,1.7.5,2.5.5.8,1.6,1.8,3.8,2.4-.5,1.1-1,2.6-.5,3.9.3.7.9,1.7,2.5,2.2.3,0,.7.1,1.1.1,1.3,0,3-.5,4.3-2.2,1.2,1.4,3.2,2.7,6.1,1.9,0,0,0,0,.1,0,.9-.4,1.6-1.2,1.8-2.2.3-1.2,0-2.6-1-4.1.9-.3,1.7-.8,2.3-1.5.7-.9.9-2,.7-3.3ZM15.8,12.9l-1.3.4,1.1.9c.4.3.5,1,.2,1.4-.2.2-.5.4-.8.4s-.4,0-.6-.2l-1.7-1.4-1.4,1.7c-.2.2-.5.4-.8.4s-.4,0-.6-.2c-.4-.3-.5-1-.2-1.4l.9-1.2-1.3-.2c-.5,0-.9-.6-.8-1.2,0-.5.6-.9,1.2-.8l1.7.3-.3-2.1c0-.5.3-1.1.8-1.1.6,0,1.1.3,1.1.8l.3,2.3,1.9-.6c.5-.2,1.1.1,1.3.6.2.5-.1,1.1-.6,1.3Z"/>' : '<path d="M23.2663 6.00775C31 6.45947 31.2208 14.3708 30.285 17.623C39.6432 14.6492 43.2305 18.8621 43.8544 21.3403C44.9773 27.2874 39.3312 29.0839 36.3678 29.2387C42.357 36.6725 39.4872 40.3894 37.3036 41.3186C30.5657 43.1771 26.6977 38.3761 25.6059 35.7433C22.6112 42.062 17.4954 42.4027 15.3119 41.7832C8.94827 39.9248 11.7245 33.2654 13.9081 30.1679C4.92427 28.6812 3.61412 24.2829 4.08203 22.2696C5.57934 14.8358 13.4402 16.0745 17.1835 17.623C15.6862 7.95912 20.6148 5.85288 23.2663 6.00775Z"/><path d="M25 26L21 31"/><path d="M19 25L25 26"/><path d="M24 19L25 26"/><path d="M31 24L25 26"/><path d="M25 26L30 30"/>';

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

module.exports = Blossom;
