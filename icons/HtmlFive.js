'use strict';

var React = require('react');

function HtmlFive(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.4,2.2c-.4-.4-.9-.7-1.5-.7H5.1c-.6,0-1.1.2-1.5.7-.4.4-.6,1-.5,1.5l1.3,14.3c0,.7.5,1.3,1.2,1.6l5.6,2.6c.3.1.6.2.8.2s.6,0,.8-.2l5.6-2.6c.6-.3,1.1-.9,1.2-1.6l1.3-14.3c0-.6-.1-1.1-.5-1.5ZM16,7h-6.9l.3,2.5h6.1c.3,0,.5.1.7.3s.3.5.3.8l-.5,5.5c0,.3-.2.6-.5.8l-3,1.5c-.1,0-.3.1-.4.1s-.3,0-.4-.1l-3-1.5c-.3-.2-.5-.5-.5-.8l-.2-2.5c0-.5.3-1,.9-1.1.5,0,1,.3,1.1.9l.2,2,2.1,1,2.1-1,.4-3.9h-5.9c-.5,0-.9-.4-1-.9l-.5-4.5c0-.3,0-.6.2-.8.2-.2.5-.3.7-.3h8c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M37.8037 5H10.1963C9.01796 5 8.09502 6.01352 8.205 7.18668L10.8925 35.8534C10.959 36.5632 11.3984 37.1839 12.0457 37.4826L23.1619 42.6132C23.6937 42.8586 24.3063 42.8586 24.8381 42.6132L35.9543 37.4826C36.6016 37.1839 37.041 36.5632 37.1075 35.8534L39.795 7.18668C39.905 6.01352 38.982 5 37.8037 5Z"/><path d="M32 12H16L17 21H31L30 32L24 35L18 32L17.5 27"/>';

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

module.exports = HtmlFive;
