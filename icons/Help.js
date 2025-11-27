'use strict';

var React = require('react');

function Help(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.8,4.2c-2.1-2.1-4.8-3.2-7.8-3.2s-5.7,1.1-7.8,3.2c-2.1,2.1-3.2,4.8-3.2,7.8s1.1,5.7,3.2,7.8c2.1,2.1,4.8,3.2,7.8,3.2s5.7-1.1,7.8-3.2,3.2-4.8,3.2-7.8-1.1-5.7-3.2-7.8ZM12,18.8c-.7,0-1.2-.6-1.2-1.2s.6-1.2,1.2-1.2,1.2.6,1.2,1.2-.6,1.2-1.2,1.2ZM13,13.2v1.1c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1,1.1,0,2-.9,2-2s-.9-2-2-2-2,.9-2,2-.4,1-1,1-1-.4-1-1c0-2.2,1.8-4,4-4s4,1.8,4,4-1.3,3.4-3,3.9Z"/>' : '<path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z"/><path d="M24 28.6248V24.6248C27.3137 24.6248 30 21.9385 30 18.6248C30 15.3111 27.3137 12.6248 24 12.6248C20.6863 12.6248 18 15.3111 18 18.6248"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 37.6248C25.3807 37.6248 26.5 36.5055 26.5 35.1248C26.5 33.7441 25.3807 32.6248 24 32.6248C22.6193 32.6248 21.5 33.7441 21.5 35.1248C21.5 36.5055 22.6193 37.6248 24 37.6248Z"/>';

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

module.exports = Help;
