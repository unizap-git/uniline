'use strict';

var React = require('react');

function DocSearch(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19,1H5c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V3c0-1.1-.9-2-2-2ZM11.5,4.5c1.9,0,3.5,1.6,3.5,3.5s-.1,1.2-.4,1.7l1.1,1.1c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-1.1-1.1c-.5.3-1.1.4-1.7.4-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5ZM12,19h-3.5c-.6,0-1-.4-1-1s.4-1,1-1h3.5c.6,0,1,.4,1,1s-.4,1-1,1ZM15.5,16h-7c-.6,0-1-.4-1-1s.4-1,1-1h7c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M11.5,9.5c.4,0,.8-.2,1.1-.4,0,0,0,0,0,0,.3-.3.4-.7.4-1.1,0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5,1.5.7,1.5,1.5,1.5Z"/>' : '<path d="M38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V6C40 4.89543 39.1046 4 38 4Z"/><path d="M28 16C28 17.3807 27.4404 18.6307 26.5355 19.5355C25.6307 20.4404 24.3807 21 23 21C20.2386 21 18 18.7614 18 16C18 13.2386 20.2386 11 23 11C25.7614 11 28 13.2386 28 16Z"/><path d="M30 23L26.5355 19.5355M26.5355 19.5355C27.4404 18.6307 28 17.3807 28 16C28 13.2386 25.7614 11 23 11C20.2386 11 18 13.2386 18 16C18 18.7614 20.2386 21 23 21C24.3807 21 25.6307 20.4404 26.5355 19.5355Z"/><path d="M17 30L31 30"/><path d="M17 36H24"/>';

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

module.exports = DocSearch;
