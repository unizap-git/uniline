'use strict';

var React = require('react');

function Bread(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6,4.5v2" stroke-miterlimit="2"/>   <path d="M18,4.5v2" stroke-miterlimit="2"/>   <path d="M12,3.5v3" stroke-miterlimit="2"/>   <path d="M22.3,13.8c-1-1.4-4.1-4.8-10.3-4.8.6,0,1,.4,1,1v4c0,.6-.4,1-1,1s-1-.4-1-1v-4c0-.6.4-1,1-1-6.2,0-9.3,3.3-10.3,4.8-.4.6-.7,1.4-.7,2.3,0,2.7,2.2,5,5,5h12.1c2.7,0,5-2.2,5-5s-.2-1.7-.7-2.3ZM8,13c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2ZM18,13c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2Z"/>   <path d="M20,13.7c-.2,0-.5,0-.7-.2-1.3-1.1-3.7-2.5-7.3-2.5s-6,1.3-7.3,2.5c-.4.4-1.1.3-1.4-.1s-.3-1,.1-1.4c1.6-1.4,4.3-3,8.7-3s7.1,1.6,8.7,3c.4.4.5,1,.1,1.4-.2.2-.5.3-.8.3Z"/>' : '<path d="M4 32.0833C4 30.8812 4.266 29.6884 4.97123 28.7148C7.04541 25.8514 12.6701 20 24 20C35.3299 20 40.9546 25.8514 43.0288 28.7148C43.734 29.6884 44 30.8812 44 32.0833C44 36.4556 40.4556 40 36.0833 40H11.9167C7.54441 40 4 36.4556 4 32.0833Z"/><path d="M12 9L12 13"/><path d="M14 22L14 26"/><path d="M36 9L36 13"/><path d="M34 22L34 26"/><path d="M24 7L24 13"/><path d="M24 20L24 28"/><path d="M40 25.4434C36.9058 22.7787 31.8075 20 24 20C16.1925 20 11.0942 22.7787 8 25.4434"/>';

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

module.exports = Bread;
