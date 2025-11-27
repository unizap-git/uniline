'use strict';

var React = require('react');

function Caption(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm6.962 4.856a1.475 1.475 0 0 1 1.484.066A1 1 0 1 0 11.53 9.24a3.475 3.475 0 1 0-.187 5.955 1 1 0 1 0-.976-1.746 1.474 1.474 0 1 1-1.405-2.593Zm6.186 0a1.475 1.475 0 0 1 1.484.066 1 1 0 1 0 1.084-1.682 3.475 3.475 0 1 0-.187 5.955 1 1 0 1 0-.976-1.746 1.474 1.474 0 1 1-1.405-2.593Z" clip-rule="evenodd"/>' : '<path d="M21.8,28.4c-2.3,1.3-5.1.5-6.4-1.8-1.3-2.3-.5-5.1,1.8-6.4,1.5-.8,3.4-.8,4.8.2M33.5,28.4c-2.3,1.3-5.1.5-6.4-1.8-1.3-2.3-.5-5.1,1.8-6.4,1.5-.8,3.4-.8,4.8.2M8.9,10.8h30.2c1,0,1.9.8,1.9,1.9v22.7c0,1-.8,1.9-1.9,1.9H8.9c-1,0-1.9-.8-1.9-1.9V12.7c0-1,.8-1.9,1.9-1.9Z"/>';

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

module.exports = Caption;
