'use strict';

var React = require('react');

function Local(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4.9,16.4c-1.8.5-2.9,1.3-2.9,2.1,0,1.7,4.5,3,10,3s10-1.3,10-3-1.1-1.6-2.9-2.1"/>   <path d="M12,1c-4.1,0-7.5,3.3-7.5,7.3s6.7,9.8,7,10c.2.1.4.2.5.2s.4,0,.5-.2c.3-.2,7-4.6,7-10s-3.4-7.3-7.5-7.3ZM12,12c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5,3.5,1.6,3.5,3.5-1.6,3.5-3.5,3.5Z"/>' : '<path d="M9.85786 32.7574C6.23858 33.8432 4 35.3432 4 37C4 40.3137 12.9543 43 24 43C35.0457 43 44 40.3137 44 37C44 35.3432 41.7614 33.8432 38.1421 32.7574"/><path d="M24 35C24 35 37 26.504 37 16.6818C37 9.67784 31.1797 4 24 4C16.8203 4 11 9.67784 11 16.6818C11 26.504 24 35 24 35Z"/><path d="M24 22C26.7614 22 29 19.7614 29 17C29 14.2386 26.7614 12 24 12C21.2386 12 19 14.2386 19 17C19 19.7614 21.2386 22 24 22Z"/>';

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

module.exports = Local;
