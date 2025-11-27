'use strict';

var React = require('react');

function Drumstick(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7.1,16.9l-.7,4.9-4.2-4.2,4.9-.7Z"/>   <path d="M12,3.5l-4.9,4.9c-2.3,2.3-2.3,6.1,0,8.5h0c2.3,2.3,6.1,2.3,8.5,0l4.9-4.9"/>   <path d="M19.4,4.5c-1.3-1.3-2.7-2.2-4.2-2.5-1.6-.4-3-.2-4,.8-1.8,1.8-1,5.4,1.8,8.1,1.3,1.3,2.7,2.2,4.2,2.5.5.1,1,.2,1.4.2,1,0,1.9-.3,2.5-1,1.8-1.8,1-5.4-1.8-8.1ZM14.3,5c.4-.4,1-.4,1.4,0s.4,1,0,1.4-1,.4-1.4,0-.4-1,0-1.4ZM16.4,9.2c-.4.4-1,.4-1.4,0s-.4-1,0-1.4,1-.4,1.4,0,.4,1,0,1.4ZM19.3,9.9c-.4.4-1,.4-1.4,0-.4-.4-.4-1,0-1.4s1-.4,1.4,0c.4.4.4,1,0,1.4Z"/>' : '<path d="M14.1508 33.8198L12.7366 43.7193L4.25135 35.234L14.1508 33.8198Z"/><path d="M24.0498 6.9502L14.1503 16.8497C9.46402 21.536 9.46402 29.134 14.1503 33.8203V33.8203C18.8366 38.5065 26.4346 38.5065 31.1209 33.8203L41.0204 23.9208"/><ellipse cx="32.5355" cy="15.435" rx="12" ry="7" transform="rotate(45 32.5355 15.435)"/><circle cx="30.0605" cy="11.3983" r="2" transform="rotate(45 30.0605 11.3983)"/><circle cx="37.1318" cy="18.4691" r="2" transform="rotate(45 37.1318 18.4691)"/><circle cx="31.4746" cy="17.055" r="2" transform="rotate(45 31.4746 17.055)"/>';

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

module.exports = Drumstick;
