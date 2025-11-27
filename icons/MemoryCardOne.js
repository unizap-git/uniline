'use strict';

var React = require('react');

function MemoryCardOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 9C6 7.34315 7.34315 6 9 6H30.3363C31.132 6 31.895 6.31607 32.4576 6.87868L36.3158 10.7368L41.1213 15.5424C41.6839 16.105 42 16.868 42 17.6637V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z"/><path d="M31 26H17C15.3431 26 14 27.3431 14 29V42H34V29C34 27.3431 32.6569 26 31 26Z"/><path d="M29 16H17C15.3431 16 14 14.6569 14 13V6"/>' : '<path d="M6 9C6 7.34315 7.34315 6 9 6H30.3363C31.132 6 31.895 6.31607 32.4576 6.87868L36.3158 10.7368L41.1213 15.5424C41.6839 16.105 42 16.868 42 17.6637V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z"/><path d="M31 26H17C15.3431 26 14 27.3431 14 29V42H34V29C34 27.3431 32.6569 26 31 26Z"/><path d="M29 16H17C15.3431 16 14 14.6569 14 13V6"/>';

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

module.exports = MemoryCardOne;
