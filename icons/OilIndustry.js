'use strict';

var React = require('react');

function OilIndustry(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19,2H5c-.6,0-1,.4-1,1v18c0,.6.4,1,1,1h14c.6,0,1-.4,1-1V3c0-.6-.4-1-1-1ZM14.5,14.6c-.6.9-1.6,1.4-2.6,1.4s-2-.7-2.6-1.7c-.5-1-.4-2.1.2-2.9.6-.8,1.2-2.1,1.4-2.7.1-.3.4-.6.8-.6.4,0,.7.1.9.4.5.7,1.7,2.6,2.1,3.7.3.8.2,1.8-.4,2.5Z"/>   <path d="M3,3h18"/>   <path d="M3,21h18"/>   <path d="M3,12h2"/>   <path d="M19,12h2"/>' : '<rect x="10" y="6" width="28" height="36"/><path d="M20.643 23.8886C22.0743 22.0081 23.1776 19.4103 23.774 18C24.8177 19.4103 27.084 22.9484 27.7997 24.8288C28.6942 27.1793 26.4578 30 23.774 30C21.0903 30 18.8538 26.2391 20.643 23.8886Z"/><path d="M6 6H42"/><path d="M6 42H42"/><path d="M6 24H10"/><path d="M38 24H42"/>';

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

module.exports = OilIndustry;
