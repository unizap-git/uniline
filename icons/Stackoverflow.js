'use strict';

var React = require('react');

function Stackoverflow(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17 20v-5h2v6.988H3V15h1.98v5H17Z"/>   <path d="m6.84 14.522 8.73 1.825.369-1.755-8.73-1.825-.369 1.755Zm1.155-4.323 8.083 3.764.739-1.617-8.083-3.787-.739 1.64Zm3.372-5.481L10.235 6.08l6.859 5.704 1.132-1.362-6.859-5.704ZM15.57 17H6.655v2h8.915v-2ZM12.861 3.111l6.193 6.415 1.414-1.415-6.43-6.177-1.177 1.177Z"/>' : '<polyline points="4 15 4 21 18.2 21 18.2 15" stroke-miterlimit="10"/>   <line x1="6.7" y1="18" x2="15.6" y2="18" stroke-miterlimit="10"/>   <line x1="7.1" y1="13.5" x2="15.6" y2="15.4" stroke-miterlimit="10"/>   <line x1="8.4" y1="9.2" x2="16.2" y2="12.9" stroke-miterlimit="10"/>   <line x1="10.8" y1="5.4" x2="17.7" y2="11.1" stroke-miterlimit="10"/>   <line x1="13.5" y1="2.5" x2="19.8" y2="8.8" stroke-miterlimit="10"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = Stackoverflow;
