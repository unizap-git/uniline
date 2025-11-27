'use strict';

var React = require('react');

function Duck(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.9,8.6c-.2-.3-.5-.5-.9-.6-.4,0-.7.2-.9.5-1.8,3.1-3.9,3.6-5.3,3.5-1.5-.1-2.6-1-2.8-1.4,0-.2.2-.3.6-.6.6-.4,1.5-1.1,1.9-2.8.6-2.9-1.1-5-3.1-5.8-2.4-.9-4.9,0-6.2,2-1.2,1.7-2.3,2.3-2.8,2.1-.4-.1-.8,0-1,.2-.3.3-.4.7-.3,1,.1.4.4,1.4,3.9,3.6-1.7,2.2-1.8,2.6-1.9,2.7-1.6,3-1,5.1-.2,6.3,1.7,2.7,5.7,3.7,8.4,3.7s.5,0,.8,0c5.8-.5,8.4-3.1,9.6-5.1,1.8-3.1,1.3-7,.2-9.3ZM7.5,6c0-.6.4-1,1-1s1,.4,1,1-.4,1-1,1-1-.4-1-1ZM18.1,17.3c-1.2,1-2.5,1.5-4,1.5s-.6,0-.8,0c-1.8-.2-3.7-1.3-4.6-2.6-.3-.4-.2-1.1.2-1.4.4-.3,1.1-.2,1.4.2.5.7,1.8,1.6,3.2,1.8,1.2.2,2.3-.2,3.3-1,.4-.4,1.1-.3,1.4.1.4.4.3,1.1-.1,1.4Z"/>' : '<path d="M12 7.99964C8.94774 12.5171 6.01307 13.8091 4 12.9992C4.54274 14.8333 8.44257 17.3755 10.9274 18.838C11.9978 19.4679 12.3095 20.9029 11.5649 21.897C10.2021 23.7164 8.31564 26.289 8 27.0001C0.954271 39.7887 16.482 44.6479 24 44.0001C46.1437 42.0918 45.3551 24.8027 42 18.0001C33.9477 31.9941 21.5186 23.9154 22 21C22.4814 18.0846 25.7922 18.6647 27 14C29.0131 4.76782 16.3737 0.398938 12 7.99964Z"/><path d="M19 31C21.5 34.5 29 38 35 33"/><circle cx="17" cy="12" r="2"/>';

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

module.exports = Duck;
