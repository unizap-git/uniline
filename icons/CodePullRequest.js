'use strict';

var React = require('react');

function CodePullRequest(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3,6c0-1.7,1.3-3,3-3s3,1.3,3,3c0,1.3-.8,2.4-2,2.8v6.3c1.6.6,2.4,2.3,1.8,3.8-.6,1.6-2.3,2.4-3.8,1.8-1.6-.6-2.4-2.3-1.8-3.8.3-.9,1-1.5,1.8-1.8v-6.3c-1.2-.4-2-1.6-2-2.8ZM14.2,3.3c.4.4.4,1,0,1.4l-.3.3h1.1c2.2,0,4,1.8,4,4v6.2c1.6.6,2.4,2.3,1.8,3.8-.6,1.6-2.3,2.4-3.8,1.8s-2.4-2.3-1.8-3.8c.3-.9,1-1.5,1.8-1.8v-6.2c0-1.1-.9-2-2-2h-1.1l.3.3c.4.4.4,1,0,1.4-.4.4-1,.4-1.4,0l-2-2c-.4-.4-.4-1,0-1.4l2-2c.4-.4,1-.4,1.4,0Z" fill-rule="evenodd"/>' : '<path d="M10.5,15v18M10.5,15c2.5,0,4.5-2,4.5-4.5s-2-4.5-4.5-4.5-4.5,2-4.5,4.5,2,4.5,4.5,4.5ZM10.5,33c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5,4.5-2,4.5-4.5-2-4.5-4.5-4.5ZM37.5,33c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5,4.5-2,4.5-4.5-2-4.5-4.5-4.5ZM37.5,33v-15.8c0-3.7-3-6.8-6.8-6.8h-6.8M27.4,6l-4.5,4.5,4.5,4.5"/>';

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

module.exports = CodePullRequest;
