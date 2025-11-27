'use strict';

var React = require('react');

function Toxins(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12.5,1C6.7,1,2,5.7,2,11.5c.6,5.1,1.1,5.4,3.1,7.4s1,.9,1.6,1.3c0,0,.2.1.3.2v1.5c0,.6.4,1,1,1h9c.5,0,1-.4,1-1v-1.6c.1,0,.2-.1.4-.2.6-.4,1.1-.8,1.6-1.3,2-2,3.1-4.6,3.1-7.4C23.1,5.6,18.4.9,12.6.9h-.1ZM6,11.5c0-1.7,1.3-3,3-3s1.3.2,1.5.4l1.2,1.9c.2.2.3.4.3.7,0,1.7-1.3,3-3,3s-3-1.3-3-3ZM14.7,17.6c-.4.4-1,.4-1.4,0l-.8-.8-.8.8c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l1.5-1.5c.4-.4,1-.4,1.4,0l1.5,1.4c.4.4.4,1,0,1.4h0ZM16.1,14.5c-1.7,0-3.1-1.5-3.1-3.2s0,0,0,0c0-.7.4-1.3,1-1.7l1.3-.8c.3-.3.6-.4,1.1-.2,1.5.3,2.6,1.6,2.6,3.1s-1.3,2.8-2.9,2.8Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M33.9579 44.0002C33.9579 44.0002 33.9824 40.5294 33.9579 39.7603C34.5074 39.4659 35.0408 39.1454 35.5563 38.8002C36.5925 38.1066 37.5566 37.3137 38.435 36.4353C41.8734 32.9969 44 28.2469 44 23.0002C44 12.5068 35.4934 4.00024 25 4.00024C14.5066 4.00024 6 12.5068 6 23.0002C6 28.2469 8.12665 32.9969 11.565 36.4353C12.4434 37.3137 13.4075 38.1066 14.4437 38.8002C14.9592 39.1454 15.4547 39.4659 16.0043 39.7603C16.0043 40.0084 16.0043 41.4218 16.0043 44.0002C27.9733 44.0002 33.9579 44.0002 33.9579 44.0002Z"/><path d="M18 27.0002C20.2091 27.0002 22 25.2094 22 23.0002L18 19.0002C15.7909 19.0002 14 20.7911 14 23.0002C14 25.2094 15.7909 27.0002 18 27.0002Z"/><path d="M32 27.0002C29.7909 27.0002 28 25.2094 28 23.0002L32 19.0002C34.2091 19.0002 36 20.7911 36 23.0002C36 25.2094 34.2091 27.0002 32 27.0002Z"/><path d="M22 34.0002L24.9379 31.0002L28 33.8965"/>';

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

module.exports = Toxins;
