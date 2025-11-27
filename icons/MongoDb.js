'use strict';

var React = require('react');

function MongoDb(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7.3,11.8c0-4,2.1-6.4,3.5-8,.7-.8,1.2-1.3,1.2-1.8,0,.4.5,1,1.2,1.8,1.4,1.6,3.5,4,3.5,8s-2.8,7-4.1,7.8l-.3,2.4h-.7l-.3-2.4c-1.3-.8-4.1-3.4-4.1-7.8ZM11.4,18.5l.6-9.4.6,9.4-.6.8-.6-.8Z" fill-rule="evenodd"/>' : '<path d="M22,9.1c1.3-1.5,2.2-2.4,2.2-3.3,0,.7.9,1.8,2.2,3.3,2.5,2.9,6.4,7.3,6.4,14.5s-5.1,12.7-7.4,14.2l-.5,4.4h-1.3l-.5-4.4s-17.8-13.8-.9-28.7ZM25.3,35.8l-1.1,1.5-1.1-1.5,1.1-14.9,1.1,14.9Z"/>';

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

module.exports = MongoDb;
