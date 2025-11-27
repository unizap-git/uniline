'use strict';

var React = require('react');

function BasketballClothes(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.3,9.9c-1.2-1.1-2.1-2.1-2.3-2.8-.2-.7-.4-2.2-.4-4.2,0-1.1-.9-2-2-2h-1.5c-.6,0-1,.4-1,1,0,1.1-.9,2-2,2s-2-.9-2-2-.4-1-1-1h-1.5c-1.1,0-2,.9-2,2,0,2-.2,3.5-.4,4.2-.2.6-1.1,1.7-2.3,2.8-.5.4-.7,1-.7,1.5v9.5c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2v-9.5c0-.6-.3-1.2-.7-1.5ZM11.5,18c0,.6-.4,1-1,1h-3c-.6,0-1-.4-1-1s.4-1,1-1h2v-1h-2c-.6,0-1-.4-1-1s.4-1,1-1h2v-1h-2c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1v6ZM17.5,18c0,.6-.4,1-1,1h-3c-.6,0-1-.4-1-1v-6c0-.6.4-1,1-1h3c.6,0,1,.4,1,1v6Z"/>   <rect x="14.5" y="13" width="1" height="4"/>' : '<path d="M30 4C30 7.31371 27.3137 10 24 10C20.6863 10 18 7.31371 18 4H15C13.8954 4 12.9976 4.89414 12.9681 5.99832C12.8995 8.57035 12.6829 12.9512 12 15C11.2389 17.2832 8.16103 20.1456 6.73361 21.3831C6.27454 21.7811 6 22.3537 6 22.9613V42C6 43.1046 6.89543 44 8 44H40C41.1046 44 42 43.1046 42 42V22.9613C42 22.3537 41.7255 21.7811 41.2664 21.3831C39.839 20.1456 36.7611 17.2832 36 15C35.3171 12.9512 35.1005 8.57035 35.0319 5.99832C35.0024 4.89414 34.1046 4 33 4H30Z"/><rect x="27" y="24" width="6" height="12"/><path d="M15 24H21V36H15"/><path d="M21 30H15"/>';

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

module.exports = BasketballClothes;
