'use strict';

var React = require('react');

function Setting(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,9.6h-1.6c-.2-.7-.5-1.3-.8-1.9l1.1-1.1c.2-.2.3-.4.3-.7s-.1-.5-.3-.7l-1.9-1.9c-.4-.4-1-.4-1.4,0l-1.1,1.1c-.6-.3-1.2-.6-1.9-.8v-1.6c0-.6-.4-1-1-1h-2.7c-.6,0-1,.4-1,1v1.6c-.7.2-1.3.5-1.9.8l-1.1-1.1c-.4-.4-1-.4-1.4,0l-1.9,1.9c-.4.4-.4,1,0,1.4l1.1,1.1c-.3.6-.6,1.2-.8,1.9h-1.6c-.6,0-1,.4-1,1v2.7c0,.6.4,1,1,1h1.6c.2.7.5,1.3.8,1.9l-1.1,1.1c-.4.4-.4,1,0,1.4l1.9,1.9c.2.2.4.3.7.3s.5-.1.7-.3l1.1-1.1c.6.3,1.2.6,1.9.8v1.6c0,.6.4,1,1,1h2.7c.6,0,1-.4,1-1v-1.6c.7-.2,1.3-.5,1.9-.8l1.1,1.1c.4.4,1,.4,1.4,0l1.9-1.9c.4-.4.4-1,0-1.4l-1.1-1.1c.3-.6.6-1.2.8-1.9h1.6c.6,0,1-.4,1-1v-2.7c0-.6-.4-1-1-1ZM12,15.5c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5,3.5,1.6,3.5,3.5-1.6,3.5-3.5,3.5Z"/>' : '<path d="M36.686 15.171C37.9364 16.9643 38.8163 19.0352 39.2147 21.2727H44V26.7273H39.2147C38.8163 28.9648 37.9364 31.0357 36.686 32.829L40.0706 36.2137L36.2137 40.0706L32.829 36.686C31.0357 37.9364 28.9648 38.8163 26.7273 39.2147V44H21.2727V39.2147C19.0352 38.8163 16.9643 37.9364 15.171 36.686L11.7863 40.0706L7.92939 36.2137L11.314 32.829C10.0636 31.0357 9.18372 28.9648 8.78533 26.7273H4V21.2727H8.78533C9.18372 19.0352 10.0636 16.9643 11.314 15.171L7.92939 11.7863L11.7863 7.92939L15.171 11.314C16.9643 10.0636 19.0352 9.18372 21.2727 8.78533V4H26.7273V8.78533C28.9648 9.18372 31.0357 10.0636 32.829 11.314L36.2137 7.92939L40.0706 11.7863L36.686 15.171Z"/><path d="M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z"/>';

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

module.exports = Setting;
