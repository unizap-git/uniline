'use strict';

var React = require('react');

function AvocadoOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3.5,16c1.5,2.5,4,4,6.5,4.5s5.4,0,7.5-1.5c3-2.2,4-6,4-8.5s-1-5.2-1.5-6-1.5-1-1.5-1"/>   <path d="M19.4,2.8c-.8-.7-1.8-.9-3-.8-1.1.2-2.1.9-3.1,1.6-.9.7-1.9,1.4-3.1,1.9-.8.3-1.6.3-2.4.4-1.4,0-2.9.2-4.3,1.3C.6,9.3,0,12.6,1.6,15.5c1.4,2.3,3.7,3.5,6.9,3.5s5.3-.9,7.7-3.3c3.2-3.2,4.3-8.3,4.3-10.2s-.4-2.1-1.1-2.7ZM13.1,13.3c-.8.9-1.6,1.2-2.7,1.2s-2-.5-2.6-1.4c-.7-1.2-.4-2.5.7-3.4.6-.5,1.2-.5,1.6-.5.2,0,.4,0,.5,0h0c.2,0,.5-.3.7-.5.3-.3.7-.6,1.2-.6.5,0,1,0,1.4.4.4.3.6.8.6,1.4,0,.8-.4,2.4-1.4,3.5Z"/>' : '<path d="M7 32C10 37 15 40 20 41C25 42 30.8085 41.1437 35 38C41 33.5 43 26 43 21C43 16 41 10.5 40 9C39 7.5 37 7 37 7"/><path d="M21.0002 12.9999C16.6452 14.6045 12 12.9999 8.00015 15.9999C3.30352 19.5225 1.99983 24.9999 5.00015 29.9999C7.35207 33.9193 10.9997 35.9999 16.9997 35.9999C22.9997 35.9999 26.7643 34.2353 30.9997 29.9999C36.9997 23.9999 38.9997 14.4999 38.9997 10.9999C38.9997 7.49987 36.5 5.49986 32.9997 5.99986C29.4994 6.49986 26.5726 10.9466 21.0002 12.9999Z"/><path d="M21.9452 20.1174C20.7223 20.5976 19.4178 20.1174 18.2945 21.0152C16.9755 22.0693 16.6094 23.7083 17.452 25.2045C18.1125 26.3774 19.1368 27 20.8218 27C22.5068 27 23.564 26.472 24.7534 25.2045C26.4383 23.4091 27 20.5663 27 19.519C27 18.4716 26.298 17.8731 25.315 18.0228C24.3321 18.1724 23.5101 19.503 21.9452 20.1174Z"/>';

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

module.exports = AvocadoOne;
