'use strict';

var React = require('react');

function CandyCane(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="m11 9.16318-5-.8017V10.5C6 11.8807 7.11929 13 8.5 13s2.5-1.1193 2.5-2.5V9.16318ZM6.1404 6.35844 11 7.13764V2.08771c-1.14494.19988-2.22828.73028-3.08702 1.47474-.83378.72283-1.49585 1.68517-1.77258 2.79599ZM13 2.08771v4.91232h4.9734c-.1477-1.38214-.8959-2.57887-1.8864-3.43758-.8587-.74446-1.9421-1.27485-3.087-1.47474Zm5 6.91232h-5V11h5V9.00003ZM18 13h-5v2h5v-2Zm0 4h-5v2.5c0 1.3807 1.1193 2.5 2.5 2.5s2.5-1.1193 2.5-2.5V17Z"/>' : '<path d="M20,16c0-1.7,1-4,4-4M20,16v5c0,1.7-1.3,3-3,3s-3-1.3-3-3v-6M20,16l-6-1M24,12c3,0,4,2.3,4,4M24,12v-6M14,15c0-5,5-9,10-9M24,6c5,0,10,4,10,9v24c0,1.7-1.3,3-3,3s-3-1.3-3-3v-23M28,16h6M28,24h6M28,32h6"/>';

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

module.exports = CandyCane;
