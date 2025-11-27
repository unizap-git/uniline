'use strict';

var React = require('react');

function BeerMug(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20,7h-12c-.6,0-1,.4-1,1v10.6c0,1.3.7,4.4,7,4.4s7-3.1,7-4.4v-10.6c0-.6-.4-1-1-1ZM13.5,18.5c0,.6-.4,1-1,1s-1-.4-1-1v-7c0-.6.4-1,1-1s1,.4,1,1v7ZM16.5,18.5c0,.6-.4,1-1,1s-1-.4-1-1v-7c0-.6.4-1,1-1s1,.4,1,1v7Z"/>   <path d="M8,8s-1-2.2.5-3.5c1.5-1.2,3-.5,3-.5,0,0,.5-2,2.5-2s2.5,2,2.5,2c0,0,1.8-.8,3,.5s.5,3.5.5,3.5"/>   <path d="M8,9.5H3s.5,5,1,6.5c.5,1.5,4,1,4,1"/>' : '<path d="M16 37.2414C16 39.1724 16.8571 44 28 44C39.1429 44 40 39.1724 40 37.2414C40 35.3103 40 16 40 16H28H16C16 16 16 35.3103 16 37.2414Z"/><path d="M25 23V37"/><path d="M31 23V37"/><path d="M15.9983 16C15.9983 16 13.9992 11.5 16.9988 9C19.9983 6.5 22.9991 8 22.9991 8C22.9991 8 23.9983 4 27.9991 4C32 4 32.9985 8 32.9985 8C32.9985 8 36.5 6.5 39 9C41.5 11.5 39.9985 16 39.9985 16"/><path d="M16 19H6C6 19 7 29 7.9991 32C8.99821 35 16 34 16 34"/>';

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

module.exports = BeerMug;
