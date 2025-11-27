'use strict';

var React = require('react');

function Cola(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18,18.5l-1.4,3.2c0,.2-.3.3-.5.3H7.9c-.2,0-.4-.1-.5-.3l-1.4-3.2"/>   <path d="M6,5.5l1.4-3.2c0-.2.3-.3.5-.3h8.3c.2,0,.4.1.5.3l1.4,3.2"/>   <path d="M17,4H7c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h10c1.1,0,2-.9,2-2V6c0-1.1-.9-2-2-2ZM18,11.7l-1.7.5c-1,.3-1.9,1-2.4,1.9-1,1.8-2.8,3-4.8,3.1h-2.8c0,.1,0,.1,0,.1-.5,0-1-.4-1-1,0-.6.4-1,1-1h2.8c1.3-.2,2.5-1,3.2-2.1.7-1.4,2.1-2.5,3.6-2.9l1.7-.5c.5-.1,1.1.2,1.2.7.1.5-.2,1.1-.7,1.2ZM17.7,9h-1.9c-1.1-.2-2.1.2-2.8,1-.8.9-2,1.5-3.2,1.7l-3.2.5c0,0-.1,0-.2,0-.5,0-.9-.4-1-.8,0-.5.3-1.1.8-1.1l3.2-.5c.8-.1,1.5-.5,2-1.1,1.1-1.2,2.7-1.9,4.4-1.8h1.9c.6.2,1,.6.9,1.2s-.5,1-1.1.9Z"/>   <path d="M18,17c-.6,0-1-.4-1-1V6c0-.6.4-1,1-1s1,.4,1,1v10c0,.6-.4,1-1,1Z"/>   <path d="M6,19c-.6,0-1-.4-1-1v-10c0-.6.4-1,1-1s1,.4,1,1v10c0,.6-.4,1-1,1Z"/>' : '<path d="M36 37L33.2091 43.3997C33.0502 43.7643 32.6902 44 32.2925 44H15.7075C15.3098 44 14.9498 43.7643 14.7909 43.3997L12 37"/><path d="M12 11L14.7909 4.60027C14.9498 4.2357 15.3098 4 15.7075 4H32.2925C32.6902 4 33.0502 4.2357 33.2091 4.60027L36 11"/><path d="M12 12C12 10.8954 12.8954 10 14 10H34C35.1046 10 36 10.8954 36 12V36C36 37.1046 35.1046 38 34 38H14C12.8954 38 12 37.1046 12 36V12Z"/><path d="M13 22.5L19.3961 21.4901C21.4051 21.1729 23.2457 20.1798 24.6138 18.6748V18.6748C26.4382 16.668 29.0754 15.5985 31.7823 15.7676L35.5 16"/><path d="M12.5 32.5L18.053 32.2476C21.4281 32.0942 24.4704 30.167 26.0512 27.1811V27.1811C27.2938 24.834 29.4584 23.1111 32.0245 22.4268L35.5 21.5"/><path d="M36 12V32"/><path d="M12 16V36"/>';

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

module.exports = Cola;
