'use strict';

var React = require('react');

function TargetOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M11.9,2.9C7,2.9,2.9,7,2.9,11.9s4,9,9,9,9-4,9-9S16.9,2.9,11.9,2.9ZM11.9,16.9c-2.8,0-5-2.2-5-5s2.2-5,5-5,5,2.2,5,5-2.2,5-5,5Z"/>   <path d="M11.9,12.9c.6,0,1-.4,1-1s-.4-1-1-1-1,.4-1,1,.4,1,1,1Z"/>   <path d="M11.9,3.9V1.9"/>   <path d="M18.9,21.9l-2-3.5"/>   <path d="M6.9,18.4l-2,3.5"/>' : '<path d="M23.8887 39.8887C32.7287 39.8887 39.8887 32.7287 39.8887 23.8887C39.8887 15.0487 32.7287 7.88867 23.8887 7.88867C15.0487 7.88867 7.88867 15.0487 7.88867 23.8887C7.88867 32.7287 15.0487 39.8887 23.8887 39.8887Z" stroke-miterlimit="2"/><path d="M23.8887 31.8887C28.3087 31.8887 31.8887 28.3087 31.8887 23.8887C31.8887 19.4687 28.3087 15.8887 23.8887 15.8887C19.4687 15.8887 15.8887 19.4687 15.8887 23.8887C15.8887 28.3087 19.4687 31.8887 23.8887 31.8887Z" stroke-miterlimit="2"/><path d="M23.8887 25.8887C24.9887 25.8887 25.8887 24.9887 25.8887 23.8887C25.8887 22.7887 24.9887 21.8887 23.8887 21.8887C22.7887 21.8887 21.8887 22.7887 21.8887 23.8887C21.8887 24.9887 22.7887 25.8887 23.8887 25.8887Z"/><path d="M23.8887 7.88867V3.88867" stroke-miterlimit="2"/><path d="M37.8887 43.8887L33.8887 36.8887" stroke-miterlimit="2"/><path d="M13.8887 36.8887L9.88867 43.8887" stroke-miterlimit="2"/>';

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

module.exports = TargetOne;
