'use strict';

var React = require('react');

function TvOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7,2.2l4.5,3.8,5.5-5"/>   <path d="M21,5H3c-1.1,0-2,.9-2,2v13c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2V7c0-1.1-.9-2-2-2ZM16.5,17.5c0,.6-.4,1-1,1H5.5c-.6,0-1-.4-1-1v-8c0-.6.4-1,1-1h10c.6,0,1,.4,1,1v8ZM20,13c0,.6-.4,1-1,1s-1-.4-1-1v-.5c0-.6.4-1,1-1s1,.4,1,1v.5ZM20,9.5c0,.6-.4,1-1,1s-1-.4-1-1v-.5c0-.6.4-1,1-1s1,.4,1,1v.5Z"/>' : '<path d="M42 12H6C4.89543 12 4 12.8954 4 14V40C4 41.1046 4.89543 42 6 42H42C43.1046 42 44 41.1046 44 40V14C44 12.8954 43.1046 12 42 12Z"/><path d="M31 19H11V35H31V19Z"/><path d="M14 4.5L23.0909 12L34 2"/><path d="M38 18V19"/><path d="M38 25V26"/>';

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

module.exports = TvOne;
