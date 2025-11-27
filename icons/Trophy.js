'use strict';

var React = require('react');

function Trophy(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 30C30.6274 30 36 24.4694 36 17.6471V4H12V17.6471C12 24.4694 17.3726 30 24 30Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21V11H4C4 17.6667 8 21 12 21Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36 21V11H44C44 17.6667 40 21 36 21Z"/><path d="M24 32V36"/><path d="M15 42L18.69 36H29.0425L33 42H15Z"/>' : '<path d="M24 30C30.6274 30 36 24.4694 36 17.6471V4H12V17.6471C12 24.4694 17.3726 30 24 30Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21V11H4C4 17.6667 8 21 12 21Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36 21V11H44C44 17.6667 40 21 36 21Z"/><path d="M24 32V36"/><path d="M15 42L18.69 36H29.0425L33 42H15Z"/>';

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

module.exports = Trophy;
