'use strict';

var React = require('react');

function Eyes(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,5.5c-5.3,0-10,4.5-10,8s4.7,8,10,8,10-4.5,10-8-4.7-8-10-8ZM12,17.5c-2.2,0-4-1.8-4-4s1.8-4,4-4,4,1.8,4,4-1.8,4-4,4Z"/>   <path d="M6.6,5.6l1.3,1.8" stroke-miterlimit="2"/>   <path d="M17.8,5.9l-1.3,1.8" stroke-miterlimit="2"/>   <path d="M12,3.5v3" stroke-miterlimit="2"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 41C33.9411 41 42 32.678 42 27C42 21.322 33.9411 13 24 13C14.0589 13 6 21.3278 6 27C6 32.6722 14.0589 41 24 41Z"/><path d="M24 33C27.3137 33 30 30.3137 30 27C30 23.6863 27.3137 21 24 21C20.6863 21 18 23.6863 18 27C18 30.3137 20.6863 33 24 33Z"/><path d="M13.2637 11.2661L15.8582 14.8863"/><path d="M35.625 11.7104L33.0304 15.3307"/><path d="M24.0088 7V13"/>';

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

module.exports = Eyes;
