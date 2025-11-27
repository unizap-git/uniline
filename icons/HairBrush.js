'use strict';

var React = require('react');

function HairBrush(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18.1968 31.4243C21.321 34.5485 28.919 32.0158 35.1674 25.7674C41.4158 19.519 43.9484 11.9211 40.8242 8.79688"/><path d="M27.3887 6.67529L28.8029 8.08951"/><path d="M22.4395 11.625L23.8537 13.0392"/><path d="M18.1963 17.2822L19.6105 18.6964"/><path d="M16.7822 24.353L18.1964 25.7672"/><path d="M35.167 4.5542L36.5812 5.96841"/><path d="M33.7529 13.0396L36.5814 15.868"/><path d="M28.8037 17.9893L31.6321 20.8177"/><path d="M23.1465 22.2319L25.9749 25.0604"/><rect x="16.0752" y="29.3027" width="6" height="14" rx="3" transform="rotate(45 16.0752 29.3027)"/>' : '<path d="M18.1968 31.4243C21.321 34.5485 28.919 32.0158 35.1674 25.7674C41.4158 19.519 43.9484 11.9211 40.8242 8.79688"/><path d="M27.3887 6.67529L28.8029 8.08951"/><path d="M22.4395 11.625L23.8537 13.0392"/><path d="M18.1963 17.2822L19.6105 18.6964"/><path d="M16.7822 24.353L18.1964 25.7672"/><path d="M35.167 4.5542L36.5812 5.96841"/><path d="M33.7529 13.0396L36.5814 15.868"/><path d="M28.8037 17.9893L31.6321 20.8177"/><path d="M23.1465 22.2319L25.9749 25.0604"/><rect x="16.0752" y="29.3027" width="6" height="14" rx="3" transform="rotate(45 16.0752 29.3027)"/>';

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

module.exports = HairBrush;
