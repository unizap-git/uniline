'use strict';

var React = require('react');

function BreadOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4.5,13s4-6,6.5-9c1.6-1.9,4.5-2.6,7-1.5s3.5,3.5,2.5,5.5-5,9.5-5,9.5"/>   <path d="M9.2,10.5c-4.3,0-7.2,2.5-7.2,6.1s.9,3.4,2.5,4.6c1.2.8,2.5.8,3.8.8.6,0,1.3,0,1.9,0,.3,0,.7,0,1,0,.9,0,1.8-.1,2.6-.7,1.7-1.2,2.7-2.9,2.7-4.7,0-3.4-3.3-6.1-7.2-6.1ZM11.2,18.7c-.4.2-.8.3-1.2.3s-.3,0-.4,0c-.1,0-.2,0-.3,0h-.3c-.5,0-1.1,0-1.7-.3-.8-.5-1.2-1.2-1.2-2,0-1.5,1.4-2.6,3.2-2.6s3.2,1.1,3.2,2.6-.5,1.6-1.3,2.1Z"/>   <path d="M7.5,9s1.8-.5,4,0"/>   <path d="M10,5.5s1.8-.8,3.5,0"/>' : '<path d="M9 26C9 26 17 14 22 7.99998C25.1307 4.24312 31 2.75 36 5C41 7.25 43 12 41 16C39 20 31 35 31 35"/><path d="M31 33.1882C31 36.3399 29.2441 39.1574 26.4861 41.0262C24.3203 42.4938 21.5366 41.867 18.5 41.867C15.2985 41.867 12.3782 42.3954 10.1667 40.7821C7.60938 38.9166 6 36.2056 6 33.1882C6 26.8125 11.5964 23 18.5 23C25.4036 23 31 27.5614 31 33.1882Z"/><path d="M23 33.2173C23 34.2126 22.3679 35.1023 21.375 35.6925C20.5953 36.1559 19.5932 35.958 18.5 35.958C17.3475 35.958 16.2961 36.1248 15.5 35.6154C14.5794 35.0263 14 34.1702 14 33.2173C14 31.2039 16.0147 30 18.5 30C20.9853 30 23 31.4404 23 33.2173Z"/><path d="M14.9998 18.0001C14.9998 18.0001 18.5 17.0001 23 18.0001"/><path d="M19.9997 10.9999C19.9997 10.9999 23.5 9.49985 26.9998 10.9999"/>';

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

module.exports = BreadOne;
