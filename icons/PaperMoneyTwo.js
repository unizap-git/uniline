'use strict';

var React = require('react');

function PaperMoneyTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 13H44V37H4V13Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 21C8.41828 21 12 17.4183 12 13H4V21Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 29C8.41828 29 12 32.5817 12 37H4V29Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M44 29V37H36C36 32.5817 39.5817 29 44 29Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M44 21C39.5817 21 36 17.4183 36 13H44V21Z"/><path d="M24 31C26.7614 31 29 28.3137 29 25C29 21.6863 26.7614 19 24 19C21.2386 19 19 21.6863 19 25C19 28.3137 21.2386 31 24 31Z"/>' : '<path d="M4 13H44V37H4V13Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 21C8.41828 21 12 17.4183 12 13H4V21Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 29C8.41828 29 12 32.5817 12 37H4V29Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M44 29V37H36C36 32.5817 39.5817 29 44 29Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M44 21C39.5817 21 36 17.4183 36 13H44V21Z"/><path d="M24 31C26.7614 31 29 28.3137 29 25C29 21.6863 26.7614 19 24 19C21.2386 19 19 21.6863 19 25C19 28.3137 21.2386 31 24 31Z"/>';

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

module.exports = PaperMoneyTwo;
