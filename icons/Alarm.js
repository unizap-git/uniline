'use strict';

var React = require('react');

function Alarm(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M14 25C14 19.4772 18.4772 15 24 15C29.5228 15 34 19.4772 34 25V41H14V25Z"/><path d="M24 5V8"/><path d="M35.8918 9.32823L33.9634 11.6264"/><path d="M42.2187 20.2873L39.2642 20.8083"/><path d="M5.78116 20.2874L8.73558 20.8083"/><path d="M12.1086 9.32802L14.037 11.6262"/><path d="M6 41H43"/>' : '<path d="M14 25C14 19.4772 18.4772 15 24 15C29.5228 15 34 19.4772 34 25V41H14V25Z"/><path d="M24 5V8"/><path d="M35.8918 9.32823L33.9634 11.6264"/><path d="M42.2187 20.2873L39.2642 20.8083"/><path d="M5.78116 20.2874L8.73558 20.8083"/><path d="M12.1086 9.32802L14.037 11.6262"/><path d="M6 41H43"/>';

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

module.exports = Alarm;
