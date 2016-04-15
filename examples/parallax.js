webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(203);


/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	// use jsx to render html, do not modify simple.html
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(2);
	
	var _rcScrollAnim = __webpack_require__(3);
	
	var _rcScrollAnim2 = _interopRequireDefault(_rcScrollAnim);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(37);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var ScrollParallax = _rcScrollAnim2['default'].Parallax;
	var ScrollElement = _rcScrollAnim2['default'].Element;
	
	var Demo = (function (_React$Component) {
	  _inherits(Demo, _React$Component);
	
	  function Demo() {
	    _classCallCheck(this, Demo);
	
	    _get(Object.getPrototypeOf(Demo.prototype), 'constructor', this).apply(this, arguments);
	    this.state = {
	      css: { backgroundColor: '#174270', height: 920 },
	      cssNoPosition: true
	    };
	  }
	
	  _createClass(Demo, [{
	    key: 'onComplete',
	    value: function onComplete() {
	      console.log('complete');
	    }
	  }, {
	    key: 'setCss',
	    value: function setCss() {
	      var css = this.state.css;
	      console.log('start');
	      if (this.state.cssNoPosition) {
	        css.position = 'fixed';
	        css.top = 0;
	      } else {
	        css.position = '';
	        css.top = '';
	      }
	      this.setState({
	        css: css,
	        cssNoPosition: !this.state.cssNoPosition
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'pack-page page0 ' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'home-title' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'page-title' },
	              _react2['default'].createElement(
	                'p',
	                null,
	                'rc-scroll-anim@0.1.5'
	              )
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'page-description', key: 'c' },
	              _react2['default'].createElement(
	                'p',
	                null,
	                'The parallax demo'
	              )
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'pack-page',
	            style: { backgroundColor: '#174270', position: 'relative', overflow: 'hidden', height: 1600 } },
	          _react2['default'].createElement(
	            ScrollParallax,
	            { animation: { opacity: 1 }, style: { opacity: 0, paddingTop: 60 },
	              className: 'tween-one' },
	            'transform 必需在 style 里设定初始值'
	          ),
	          _react2['default'].createElement(
	            ScrollParallax,
	            { animation: { opacity: 1 }, style: { opacity: 0, paddingTop: 0, fontSize: 24 },
	              className: 'tween-one' },
	            '默认显示位置[0 ,1]'
	          ),
	          _react2['default'].createElement(
	            ScrollParallax,
	            { animation: { scaleX: 1, scaleY: 1 }, style: { transform: 'scale(0)', color: '#fff' },
	              className: 'demo parallax-shape' },
	            'Scale'
	          ),
	          _react2['default'].createElement(
	            ScrollParallax,
	            { animation: { rotate: 360 }, style: { transform: 'rotate(0)' },
	              className: 'demo2 parallax-shape' },
	            'rotate'
	          ),
	          _react2['default'].createElement(
	            ScrollParallax,
	            { animation: { x: 0, opacity: 1 },
	              style: { transform: 'translateX(-200px)', opacity: 0, backgroundColor: '#133252', color: '#fff' },
	              className: 'demo2 parallax-shape' },
	            'X'
	          ),
	          _react2['default'].createElement(
	            ScrollParallax,
	            { animation: { rotateY: 360 },
	              style: { transform: 'perspective(100px) rotateY(0)', backgroundColor: '#0098CE' },
	              className: 'demo2 parallax-shape' },
	            'rotateY'
	          ),
	          _react2['default'].createElement(
	            ScrollParallax,
	            { animation: { opacity: 1 }, style: { opacity: 0, paddingTop: 60, fontSize: 24 },
	              className: 'tween-one' },
	            '自定义显示位置'
	          ),
	          _react2['default'].createElement(
	            ScrollParallax,
	            { animation: { filter: 'blur(0px)', playScale: [0.5, 0.8], opacity: 1 },
	              style: { filter: 'blur(20px)', opacity: 0, color: '#fff' },
	              className: 'demo parallax-shape' },
	            'blur'
	          ),
	          _react2['default'].createElement(
	            ScrollParallax,
	            { animation: { color: '#fff000', backgroundColor: '#F38EAD', playScale: [0.3, 0.8] },
	              style: { filter: 'blur(0px)', color: '#fff' },
	              className: 'demo parallax-shape' },
	            'color'
	          ),
	          _react2['default'].createElement(
	            ScrollParallax,
	            { animation: { opacity: 1 }, style: { opacity: 0, paddingTop: 60, fontSize: 24 },
	              className: 'tween-one' },
	            '多种样式时间轴动画'
	          ),
	          _react2['default'].createElement(
	            ScrollParallax,
	            {
	              animation: [{ opacity: 1, playScale: [0, 0.2] }, { filter: 'blur(0px)', backgroundColor: '#F38EAD', playScale: [0, 0.2] }, { translateX: -100, boxShadow: '5px 5px 5px #000', color: '#fff000', playScale: [0, 0.2] }, { translateX: 100, playScale: [0, 0.2] }, { translateX: 0, playScale: [0, 0.2] }],
	              style: { filter: 'blur(10px)', transform: 'translateX(0px)', opacity: 0, color: '#fff' },
	              className: 'demo parallax-shape' },
	            'timeline'
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'pack-page',
	            style: { backgroundColor: '#0097D0', position: 'relative', textAlign: 'center', fontSize: 36 } },
	          _react2['default'].createElement(
	            'div',
	            { className: 'page2-title' },
	            '视差示例'
	          ),
	          _react2['default'].createElement(
	            ScrollParallax,
	            { animation: { translateY: 120, opacity: 1, ease: 'linear', playScale: [0, 2] },
	              style: { transform: 'translateY(420px) scale(.8)', color: '#fff' } },
	            _react2['default'].createElement('img', { src: 'https://os.alipayobjects.com/rmsportal/CrVCkwvtTQQvQHL.png', style: { width: 100 } })
	          ),
	          _react2['default'].createElement(
	            ScrollParallax,
	            { animation: { translateY: 20, opacity: 1, ease: 'linear', playScale: [0, 1.5] },
	              style: { transform: 'translateY(380px) scale(.9)', color: '#fff' } },
	            _react2['default'].createElement('img', {
	              src: 'https://os.alipayobjects.com/rmsportal/sfmdyWNlweIvfUh.png', style: { width: 150 } })
	          ),
	          _react2['default'].createElement(
	            ScrollParallax,
	            { animation: { translateY: -100, opacity: 1, ease: 'linear', playScale: [0, 1] },
	              style: { transform: 'translateY(320px)', color: '#fff' } },
	            _react2['default'].createElement('img', {
	              src: 'https://os.alipayobjects.com/rmsportal/sfmdyWNlweIvfUh.png', style: { width: 200 } })
	          )
	        ),
	        _react2['default'].createElement(
	          ScrollElement,
	          { style: { height: 2000 }, scrollName: 'Scroll-Pack' },
	          _react2['default'].createElement(
	            ScrollParallax,
	            { className: 'pack-page',
	              location: 'Scroll-Pack',
	              animation: { backgroundColor: '#0097D0', playScale: [1, 2], onStart: this.setCss.bind(this), onComplete: this.onComplete.bind(this) },
	              style: this.state.css },
	            _react2['default'].createElement(ScrollParallax, { animation: { translateX: '0%', playScale: [1, 2] },
	              style: { transform: 'translateX(-100%)', backgroundColor: '#F38EAD', width: '100%', height: '100%', position: 'absolute' },
	              location: 'Scroll-Pack' }),
	            _react2['default'].createElement(
	              ScrollParallax,
	              { animation: [{ translateY: 0 }, { translateY: '450px' }],
	                location: 'Scroll-Pack',
	                style: { transform: 'translateY(300px)', color: '#fff', fontSize: 36, textAlign: 'center' } },
	              '示例示例'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Demo;
	})(_react2['default'].Component);
	
	_reactDom2['default'].render(_react2['default'].createElement(Demo, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=parallax.js.map