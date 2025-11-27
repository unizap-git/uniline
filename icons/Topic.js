'use strict';

var React = require('react');

function Topic(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<polygon points="11 13 12.5 13 12.9 10.9 11.4 10.9 11 13"/>   <path d="M12,1C5.9,1,1,5.9,1,12s.3,2.9.8,4.2c.2.6.5,1.1.9,1.7,0,.3-.2,1-.7,2.9,0,.3,0,.7.3,1s.6.4,1,.3c1.8-.5,2.6-.6,2.9-.7.5.3,1.1.6,1.7.9,1.3.6,2.8.8,4.2.8,6.1,0,11-4.9,11-11S18.1,1,12,1ZM16.7,10.9h-1.8l-.4,2.1h1.2c.6,0,1,.4,1,1s-.4,1-1,1h-1.5l-.2,1.3c0,.5-.5.8-1,.8s-.1,0-.2,0c-.5,0-.9-.6-.8-1.2l.2-1h-1.5l-.2,1.3c0,.5-.5.8-1,.8s-.1,0-.2,0c-.5,0-.9-.6-.8-1.2l.2-1h-1.3c-.6,0-1-.4-1-1s.4-1,1-1h1.7l.4-2.1h-1.1c-.6,0-1-.4-1-1s.4-1,1-1h1.4l.2-1.2c0-.5.6-.9,1.2-.8.5,0,.9.6.8,1.2l-.2.9h1.5l.2-1.2c0-.5.6-.9,1.2-.8.5,0,.9.6.8,1.2l-.2.9h1.4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 26.7117 4.53967 29.2974 5.51747 31.6554C6.02232 32.8729 6.64396 34.0297 7.36843 35.1119C7.61157 35.4751 7.15543 37.7711 6 42C10.2289 40.8446 12.5249 40.3884 12.8881 40.6316C13.9703 41.356 15.1271 41.9777 16.3446 42.4825C18.7026 43.4603 21.2883 44 24 44Z"/><path d="M16.6045 19.8201H33.3838"/><path d="M21.8467 15.7378L18.933 32.2622"/><path d="M28.8467 15.7378L25.933 32.2622"/><path d="M14.6045 28H31.3838"/>';

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

module.exports = Topic;
