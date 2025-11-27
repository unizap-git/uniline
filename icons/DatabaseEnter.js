'use strict';

var React = require('react');

function DatabaseEnter(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17,6v4.5c-1.5,0-2.8.6-3.7,1.7-.8.9-1.3,2.1-1.3,3.3s0,.6,0,.8c.3,1.5,1.2,2.8,2.5,3.5-1.3.4-3.1.6-5,.6-4.1,0-7.5-1.1-7.5-2.5V6"/>   <path d="M17,6c0,1.4-3.4,2.5-7.5,2.5s-7.5-1.1-7.5-2.5,3.4-2.5,7.5-2.5,7.5,1.1,7.5,2.5Z"/>   <path d="M2,14c0,1.4,3.4,2.5,7.5,2.5s1.8,0,2.6-.2"/>   <path d="M2,10c0,1.4,3.4,2.5,7.5,2.5s2.7-.1,3.8-.3"/>   <path d="M17,9.5c-1.7,0-3.3.7-4.5,2-1,1.1-1.5,2.5-1.5,4s0,.7,0,1c.3,1.8,1.4,3.3,3,4.2.9.5,1.9.8,3,.8,3.3,0,6-2.7,6-6s-2.7-6-6-6ZM20.5,15.5c0,.1,0,.3,0,.4,0,.1-.1.2-.2.3l-2,2c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l.3-.3h-2.6c-.6,0-1-.4-1-1s.4-1,1-1h2.6l-.3-.3c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l2,2c0,0,.2.2.2.3,0,.1,0,.2,0,.4h0Z"/>' : '<path d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z"/><path d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12"/><path d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z"/><path d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983"/><path d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198"/><path d="M39 31L35 27M39 31L35 35M39 31L29 31"/>';

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

module.exports = DatabaseEnter;
