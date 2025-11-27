'use strict';

var React = require('react');

function DatabasePoint(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 36V30"/><path d="M20 40H6"/><path d="M28 40H42"/><path d="M28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36C26.2091 36 28 37.7909 28 40Z"/><path d="M39 9V25C39 27.7614 32.2843 30 24 30C15.7157 30 9 27.7614 9 25V9"/><path d="M39 17C39 19.7614 32.2843 22 24 22C15.7157 22 9 19.7614 9 17"/><path d="M39 9C39 11.7614 32.2843 14 24 14C15.7157 14 9 11.7614 9 9C9 6.23858 15.7157 4 24 4C32.2843 4 39 6.23858 39 9Z"/><path d="M39 9C39 11.7614 32.2843 14 24 14C15.7157 14 9 11.7614 9 9C9 6.23858 15.7157 4 24 4C32.2843 4 39 6.23858 39 9Z"/><path d="M39 9C39 11.7614 32.2843 14 24 14C15.7157 14 9 11.7614 9 9C9 6.23858 15.7157 4 24 4C32.2843 4 39 6.23858 39 9Z"/><path d="M39 9C39 11.7614 32.2843 14 24 14C15.7157 14 9 11.7614 9 9C9 6.23858 15.7157 4 24 4C32.2843 4 39 6.23858 39 9Z"/>' : '<path d="M24 36V30"/><path d="M20 40H6"/><path d="M28 40H42"/><path d="M28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36C26.2091 36 28 37.7909 28 40Z"/><path d="M39 9V25C39 27.7614 32.2843 30 24 30C15.7157 30 9 27.7614 9 25V9"/><path d="M39 17C39 19.7614 32.2843 22 24 22C15.7157 22 9 19.7614 9 17"/><path d="M39 9C39 11.7614 32.2843 14 24 14C15.7157 14 9 11.7614 9 9C9 6.23858 15.7157 4 24 4C32.2843 4 39 6.23858 39 9Z"/><path d="M39 9C39 11.7614 32.2843 14 24 14C15.7157 14 9 11.7614 9 9C9 6.23858 15.7157 4 24 4C32.2843 4 39 6.23858 39 9Z"/><path d="M39 9C39 11.7614 32.2843 14 24 14C15.7157 14 9 11.7614 9 9C9 6.23858 15.7157 4 24 4C32.2843 4 39 6.23858 39 9Z"/><path d="M39 9C39 11.7614 32.2843 14 24 14C15.7157 14 9 11.7614 9 9C9 6.23858 15.7157 4 24 4C32.2843 4 39 6.23858 39 9Z"/>';

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

module.exports = DatabasePoint;
