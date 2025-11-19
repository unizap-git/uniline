'use strict';

var React = require('react');

function Facebook(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>' : '<path d="M6.2,10.3c-1,0-1.2.2-1.2,1.1v1.7c0,.9.2,1.1,1.2,1.1h2.4v6.7c0,.9.2,1.1,1.2,1.1h2.4c1,0,1.2-.2,1.2-1.1v-6.7h2.7c.7,0,.9-.1,1.1-.8l.5-1.7c.3-1.1.1-1.4-1.1-1.4h-3.2v-2.8c0-.6.5-1.1,1.2-1.1h3.4c1,0,1.2-.2,1.2-1.1v-2.2c0-.9-.2-1.1-1.2-1.1h-3.4c-3.3,0-5.9,2.5-5.9,5.6v2.8h-2.4Z"/>';

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

module.exports = Facebook;
