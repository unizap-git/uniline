'use strict';

var React = require('react');

function Checkerboard(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17 4H7C5.34315 4 4 5.34315 4 7V17V31V41C4 42.6569 5.34315 44 7 44H17H31H41C42.6569 44 44 42.6569 44 41V31V17V7C44 5.34315 42.6569 4 41 4H31H17Z"/><line x1="23" y1="17" x2="44" y2="17"/><line x1="4" y1="17" x2="13" y2="17"/><line x1="35" y1="31" x2="44" y2="31"/><line x1="6" y1="31" x2="25" y2="31"/><line x1="17" y1="21" x2="17" y2="44"/><path d="M31 4L31 27"/><path d="M31 35L31 44"/><path d="M17 4L17 13"/><path d="M35 31C35 33.2091 33.2091 35 31 35C28.7909 35 27 33.2091 27 31C27 28.7909 28.7909 27 31 27C33.2091 27 35 28.7909 35 31Z"/><path d="M21 17C21 19.2091 19.2091 21 17 21C14.7909 21 13 19.2091 13 17C13 14.7909 14.7909 13 17 13C19.2091 13 21 14.7909 21 17Z"/>' : '<path d="M17 4H7C5.34315 4 4 5.34315 4 7V17V31V41C4 42.6569 5.34315 44 7 44H17H31H41C42.6569 44 44 42.6569 44 41V31V17V7C44 5.34315 42.6569 4 41 4H31H17Z"/><line x1="23" y1="17" x2="44" y2="17"/><line x1="4" y1="17" x2="13" y2="17"/><line x1="35" y1="31" x2="44" y2="31"/><line x1="6" y1="31" x2="25" y2="31"/><line x1="17" y1="21" x2="17" y2="44"/><path d="M31 4L31 27"/><path d="M31 35L31 44"/><path d="M17 4L17 13"/><path d="M35 31C35 33.2091 33.2091 35 31 35C28.7909 35 27 33.2091 27 31C27 28.7909 28.7909 27 31 27C33.2091 27 35 28.7909 35 31Z"/><path d="M21 17C21 19.2091 19.2091 21 17 21C14.7909 21 13 19.2091 13 17C13 14.7909 14.7909 13 17 13C19.2091 13 21 14.7909 21 17Z"/>';

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

module.exports = Checkerboard;
