'use strict';

var React = require('react');

function PhoneTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM18,15.8c0,.7-.3,1.4-.9,1.8-.4.3-.8.4-1.2.4s-.5,0-.7-.1c-1.8-.6-4.2-1.6-5.8-3.3s-2.7-4.1-3.3-5.8c-.2-.7-.1-1.3.3-1.9.4-.6,1.1-.9,1.8-.9h1.6c.6,0,1.1.3,1.4.8l.7,1.3c.3.5.3,1,0,1.5l-.4.9c0,.3.3.8.7,1.2.4.4.9.6,1.2.7l1-.4c.4-.2,1-.2,1.4,0l1.4.8c.5.3.8.8.8,1.4v1.6Z"/>' : '<path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"/><path d="M19.4401 14C19.8845 14 20.2939 14.241 20.5096 14.6295L22.006 17.3249C22.2019 17.6778 22.2111 18.1047 22.0305 18.4658L21 21C21 21 21.2517 23.2517 23 25C24.7484 26.7483 27 27 27 27L29.5266 25.9625C29.8879 25.7818 30.315 25.7911 30.6681 25.9874L33.3711 27.4902C33.7593 27.7061 34 28.1153 34 28.5594V31.6625C34 33.2428 32.5321 34.3842 31.0348 33.8789C27.9595 32.8413 23.1858 30.8656 20.1601 27.8398C17.1345 24.8142 15.1587 20.0405 14.121 16.9652C13.6158 15.4679 14.7572 14 16.3375 14H19.4401Z"/>';

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

module.exports = PhoneTwo;
