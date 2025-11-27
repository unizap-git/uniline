'use strict';

var React = require('react');

function GlobeEuropeAfrica(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24,5.6C13.8,5.6,5.6,13.8,5.6,24s8.3,18.4,18.4,18.4,18.4-8.3,18.4-18.4S34.2,5.6,24,5.6ZM17.5,9.8c-7.8,3.6-11.2,12.9-7.6,20.7,3.6,7.8,12.9,11.2,20.7,7.6,5.1-2.3,8.5-7.2,9-12.8l-.9-.9c-.3-.3-.6-.7-.8-1.1l-2-4.1c-.2-.4-.7-.5-1.1-.3,0,0,0,0-.2.1-.4.4-1,.6-1.5.4l-2.4-.7c-.9-.3-1.8.3-2.1,1.2-.2.7,0,1.4.7,1.9l1.1.7c1.1.7,1.3,2.3.3,3.3l-.4.4c-.4.4-.6.9-.6,1.5v.8c0,.8-.2,1.5-.6,2.2l-2.5,4.1c-.7,1.2-2,1.9-3.4,1.9s-2-.9-2-2h0v-2.2c0-1.7-1.1-3.3-2.7-4l-1.2-.5c-1.9-.7-2.9-2.7-2.6-4.7h0c0-.6.3-1.1.5-1.6l.2-.3c.9-1.5,2.7-2.3,4.5-2l2.2.4c1.1.2,2.2-.4,2.5-1.5l.4-1.4c.3-1-.2-2-1.1-2.5l-1.3-.6-.2.2c-.8.8-1.9,1.2-3,1.2h-.3c-.5,0-.9.2-1.3.5-.7.7-1.8.7-2.5,0-.6-.6-.7-1.5-.3-2.2l2.4-4v.3Z" fill-rule="evenodd"/>' : '<path d="M42.2,26.9l-2.3-2.3c-.3-.4-.6-.8-.9-1.2l-2.2-4.4c-.2-.4-.7-.6-1.1-.4,0,0-.2,0-.2.2-.4.4-1.1.6-1.7.4l-2.6-.7c-1-.3-2,.3-2.2,1.3-.2.8,0,1.6.7,2l1.2.8c1.2.8,1.4,2.5.4,3.5l-.4.4c-.4.4-.7,1-.7,1.6v.8c0,.8-.2,1.7-.7,2.4l-2.7,4.5c-.8,1.3-2.2,2.1-3.7,2.1-1.2,0-2.2-1-2.2-2.2h0v-2.4c0-1.9-1.1-3.6-2.9-4.3l-1.3-.5c-2-.8-3.2-2.9-2.8-5h0c0-.7.3-1.2.6-1.7l.2-.3c1-1.7,2.9-2.5,4.9-2.1l2.4.5c1.2.2,2.3-.5,2.7-1.6l.4-1.5c.3-1.1-.2-2.2-1.2-2.7l-1.4-.7-.2.2c-.9.9-2,1.3-3.3,1.3h-.4c-.5,0-1,.2-1.4.6-.7.7-1.9.8-2.7,0-.6-.6-.7-1.6-.3-2.3l2.9-4.8c.3-.5.5-1,.6-1.6M42.2,26.9c1.6-10.1-5.3-19.5-15.3-21.1-3-.5-6.2-.2-9.1.9M42.2,26.9c-1.6,10.1-11,16.9-21.1,15.3-10.1-1.6-16.9-11-15.3-21.1,1-6.7,5.6-12.2,12-14.5"/>';

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

module.exports = GlobeEuropeAfrica;
