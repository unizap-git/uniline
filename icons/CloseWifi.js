'use strict';

var React = require('react');

function CloseWifi(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44 18.9653C37.2253 12.545 28.1189 10.0059 19.5 11.3481"/><path d="M38 25.799C35.2866 23.0855 31.9815 21.3243 28.5 20.5154"/><path d="M10 25.799C11.3276 24.4714 12.7969 23.3717 14.3591 22.5"/><path d="M16 32.3138C17.4388 30.875 19.1686 29.9048 21 29.4031"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C25.3807 40 26.5 38.8807 26.5 37.5C26.5 36.1193 25.3807 35 24 35C22.6193 35 21.5 36.1193 21.5 37.5C21.5 38.8807 22.6193 40 24 40Z"/><path d="M40 40L8 8"/><path d="M4 18.9652C4.5888 18.4072 5.19522 17.8785 5.81741 17.3792C6.36642 16.9385 6.92771 16.5207 7.49999 16.1257"/>' : '<path d="M44 18.9653C37.2253 12.545 28.1189 10.0059 19.5 11.3481"/><path d="M38 25.799C35.2866 23.0855 31.9815 21.3243 28.5 20.5154"/><path d="M10 25.799C11.3276 24.4714 12.7969 23.3717 14.3591 22.5"/><path d="M16 32.3138C17.4388 30.875 19.1686 29.9048 21 29.4031"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C25.3807 40 26.5 38.8807 26.5 37.5C26.5 36.1193 25.3807 35 24 35C22.6193 35 21.5 36.1193 21.5 37.5C21.5 38.8807 22.6193 40 24 40Z"/><path d="M40 40L8 8"/><path d="M4 18.9652C4.5888 18.4072 5.19522 17.8785 5.81741 17.3792C6.36642 16.9385 6.92771 16.5207 7.49999 16.1257"/>';

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

module.exports = CloseWifi;
