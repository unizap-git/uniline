'use strict';

var React = require('react');

function Nutrition(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,8.5H2c-.6,0-1,.4-1,1,0,4.4,2.6,8.3,6.7,10,0,.1.2.6.4,1.6,0,.5.5.9,1,.9h5.9c.5,0,1-.4,1-1,0-.9.1-1.3.2-1.4,4.1-1.7,6.9-5.7,6.9-10.1s-.4-1-1-1ZM9.8,16.1c-.2.3-.5.4-.8.4s-.4,0-.6-.2c-.5-.4-.9-.8-1.3-1.2-.4-.5-.7-1.1-.9-1.8-.2-.5.1-1.1.7-1.2.5-.2,1.1.1,1.2.7.1.5.3.9.6,1.2.2.3.5.6.9.9.4.3.5,1,.2,1.4Z"/>   <path d="M16.1,4c-.6-.4-1.3-.6-2-.8M11,3c-3.6.4-6.5,3-7.3,6.5M20.2,9.5c-.3-1.4-1-2.7-1.9-3.7" stroke-miterlimit="2"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 42C24.8653 42 26.8503 42 29.9551 42C30.0381 39.2631 30.4393 37.7582 31.1586 37.4852C38.6685 34.6357 44 27.434 44 19H4C4 27.2514 9.10319 34.3234 16.3568 37.2941C17.1151 37.6047 17.6815 39.1733 18.056 42C21.0857 42 23.067 42 24 42Z"/><path d="M14.4434 26.0225C14.803 27.2103 15.2786 28.191 15.8702 28.9646C16.4484 29.7209 17.1619 30.4223 18.0104 31.0688"/><path d="M32.2009 8.01759C30.9409 7.31418 29.5829 6.76784 28.1528 6.40474M22.0507 6C14.9273 6.8226 9.1442 12.0978 7.5 19M40.5 18.9965C39.8296 16.1847 38.4722 13.643 36.6172 11.5626"/>';

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

module.exports = Nutrition;
