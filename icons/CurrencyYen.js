'use strict';

var React = require('react');

function CurrencyYen(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,2.2C6.6,2.2,2.2,6.6,2.2,12s4.4,9.8,9.8,9.8,9.8-4.4,9.8-9.8S17.4,2.2,12,2.2ZM9.6,7.1c-.2-.3-.7-.4-1-.2-.3.2-.4.7-.2,1l2.2,3.3h-1.6c-.4,0-.8.3-.8.8s.3.8.8.8h2.2v1.5h-2.2c-.4,0-.8.3-.8.8s.3.8.8.8h2.2v1.5c0,.4.3.8.8.8s.8-.3.8-.8v-1.5h2.2c.4,0,.8-.3.8-.8s-.3-.8-.8-.8h-2.2v-1.5h2.2c.4,0,.8-.3.8-.8s-.3-.8-.8-.8h-1.6l2.2-3.3c.2-.3.1-.8-.2-1s-.8-.1-1,.2c0,0,0,0,0,0l-2.4,3.6-2.4-3.6Z" fill-rule="evenodd"/>' : '<path d="M18,15l6,9M24,24l6-9M24,24v10.5M30,24h-12M30,30h-12M42,24c0,9.9-8.1,18-18,18S6,33.9,6,24,14.1,6,24,6s18,8.1,18,18Z"/>';

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

module.exports = CurrencyYen;
