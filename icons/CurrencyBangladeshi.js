'use strict';

var React = require('react');

function CurrencyBangladeshi(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,21.8c5.4,0,9.8-4.4,9.8-9.8S17.4,2.2,12,2.2,2.2,6.6,2.2,12s4.4,9.8,9.8,9.8ZM10.5,8c0-.8-.7-1.5-1.5-1.5-.2,0-.5,0-.7.2l-.4.2c-.4.2-.5.6-.3,1,.2.4.6.5,1,.3l.4-.2v1.8h-.8c-.4,0-.8.3-.8.8s.3.8.8.8h.8v4.7c0,.6.3,1.2.9,1.5,2.2,1.2,4.9.4,6.1-1.8.2-.4.4-.8.4-1.2.2-1-.6-1.6-1.4-1.6h-.7c-.4,0-.8.3-.8.8s.3.8.8.8h.7c-.4,1.6-2.1,2.6-3.7,2.2-.2,0-.5-.1-.7-.3,0,0,0,0,0,0,0,0,0-.1,0-.2v-4.7h5.2c.4,0,.8-.3.8-.8s-.3-.8-.8-.8h-5.2v-1.8Z" fill-rule="evenodd"/>' : '<path d="M16.5,15l.8-.4c.7-.4,1.6,0,2,.7.1.2.2.4.2.7v5.1M19.5,21h12M19.5,21h-3M19.5,21v10.9c0,.7.3,1.4.9,1.7,3.6,2,8.2.6,10.2-3.1.3-.6.6-1.3.7-2.1.2-.8-.5-1.5-1.4-1.5h-1.5M42,24c0,9.9-8.1,18-18,18S6,33.9,6,24,14.1,6,24,6s18,8.1,18,18Z"/>';

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

module.exports = CurrencyBangladeshi;
