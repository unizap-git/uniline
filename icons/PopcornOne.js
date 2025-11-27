'use strict';

var React = require('react');

function PopcornOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M13,22v-14c0-.6.4-1,1-1h-4c.6,0,1,.4,1,1v14c0,.6-.4,1-1,1h4c-.6,0-1-.4-1-1Z"/>     <path d="M21.3,7.4c-.2-.2-.5-.4-.8-.4h-6.5c.6,0,1,.4,1,1v14c0,.6-.4,1-1,1h3c.5,0,.9-.3,1-.8l3.5-14c0-.3,0-.6-.2-.9Z"/>     <path d="M9,22v-14c0-.6.4-1,1-1H3.5c-.3,0-.6.1-.8.4s-.3.6-.2.9l3.5,14c.1.4.5.8,1,.8h3c-.6,0-1-.4-1-1Z"/>   </g>   <path d="M16.5,4.5c-1.1,0-2,.9-2,2s.3,1.1.7,1.5h2.6c.4-.4.7-.9.7-1.5,0-1.1-.9-2-2-2Z"/>   <path d="M12,4.5c-1.1,0-2,.9-2,2s.3,1.1.7,1.5h2.6c.4-.4.7-.9.7-1.5,0-1.1-.9-2-2-2Z"/>   <path d="M7.5,4.5c-1.1,0-2,.9-2,2s.3,1.1.7,1.5h2.6c.4-.4.7-.9.7-1.5,0-1.1-.9-2-2-2Z"/>   <path d="M11.4,4.5c0-.2,0-.3,0-.5,0-1.1-.9-2-2-2s-2,.9-2,2,0,.3,0,.5"/>   <path d="M16.4,4.5c0-.2,0-.3,0-.5,0-1.1-.9-2-2-2s-2,.9-2,2,0,.3,0,.5"/>   <path d="M8,8h8"/>   <path d="M16,23h-8c-.6,0-1-.4-1-1s.4-1,1-1h8c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M7 16H41L34 44H14L7 16Z"/><path d="M20 16V44"/><path d="M28 16V44"/><path d="M33 9C30.7909 9 29 10.7909 29 13C29 14.1947 29.5238 15.2671 30.3542 16H35.6458C36.4762 15.2671 37 14.1947 37 13C37 10.7909 35.2091 9 33 9Z"/><path d="M24 9C21.7909 9 20 10.7909 20 13C20 14.1947 20.5238 15.2671 21.3542 16H26.6458C27.4762 15.2671 28 14.1947 28 13C28 10.7909 26.2091 9 24 9Z"/><path d="M15 9C12.7909 9 11 10.7909 11 13C11 14.1947 11.5238 15.2671 12.3542 16H17.6458C18.4762 15.2671 19 14.1947 19 13C19 10.7909 17.2091 9 15 9Z"/><path d="M22.874 9C22.9562 8.68038 23 8.3453 23 8C23 5.79086 21.2091 4 19 4C16.7909 4 15 5.79086 15 8C15 8.3453 15.0438 8.68038 15.126 9"/><path d="M32.874 9C32.9562 8.68038 33 8.3453 33 8C33 5.79086 31.2091 4 29 4C26.7909 4 25 5.79086 25 8C25 8.3453 25.0438 8.68038 25.126 9"/><path d="M16 16L32 16"/><path d="M16 44L32 44"/>';

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

module.exports = PopcornOne;
