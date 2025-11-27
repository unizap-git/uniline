'use strict';

var React = require('react');

function FiveStarBadge(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M23.1033 20.817C23.4701 20.0737 24.5299 20.0737 24.8967 20.817L27.8818 26.8654C28.0275 27.1606 28.3091 27.3652 28.6348 27.4125L35.3096 28.3824C36.1298 28.5016 36.4574 29.5096 35.8638 30.0881L31.0339 34.7962C30.7982 35.0259 30.6906 35.3569 30.7463 35.6813L31.8865 42.3292C32.0266 43.1461 31.1691 43.769 30.4355 43.3834L24.4653 40.2446C24.174 40.0915 23.826 40.0915 23.5347 40.2446L17.5645 43.3834C16.8309 43.769 15.9734 43.1461 16.1135 42.3292L17.2537 35.6813C17.3094 35.3569 17.2018 35.0259 16.9661 34.7962L12.1362 30.0881C11.5426 29.5096 11.8702 28.5016 12.6904 28.3824L19.3652 27.4125C19.6909 27.3652 19.9725 27.1606 20.1182 26.8654L23.1033 20.817Z"/><path d="M36 4H12V14L24 19L36 14V4Z"/>' : '<path d="M23.1033 20.817C23.4701 20.0737 24.5299 20.0737 24.8967 20.817L27.8818 26.8654C28.0275 27.1606 28.3091 27.3652 28.6348 27.4125L35.3096 28.3824C36.1298 28.5016 36.4574 29.5096 35.8638 30.0881L31.0339 34.7962C30.7982 35.0259 30.6906 35.3569 30.7463 35.6813L31.8865 42.3292C32.0266 43.1461 31.1691 43.769 30.4355 43.3834L24.4653 40.2446C24.174 40.0915 23.826 40.0915 23.5347 40.2446L17.5645 43.3834C16.8309 43.769 15.9734 43.1461 16.1135 42.3292L17.2537 35.6813C17.3094 35.3569 17.2018 35.0259 16.9661 34.7962L12.1362 30.0881C11.5426 29.5096 11.8702 28.5016 12.6904 28.3824L19.3652 27.4125C19.6909 27.3652 19.9725 27.1606 20.1182 26.8654L23.1033 20.817Z"/><path d="M36 4H12V14L24 19L36 14V4Z"/>';

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

module.exports = FiveStarBadge;
