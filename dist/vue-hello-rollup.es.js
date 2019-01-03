function __$$styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

const styles = {
	'font-size': '16px'
};

var Hello = { render: function () {
		var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "hello", style: _vm.allStyles }, [_vm._v(" Hello, Rollup Vue! ")]);
	}, staticRenderFns: [], _scopeId: 'data-v-5de655f2',
	name: 'Hello',
	data() {
		return {
			allStyles: _extends({}, styles, {
				'font-weight': 'bold'
			})
		};
	}
};

/**
 * An install function.
 *
 * @param {any} Vue Vue API.
 */
function install(Vue) {
  Vue.component('hello', Hello);
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var index = {
  install
};

export default index;
//# sourceMappingURL=vue-hello-rollup.es.js.map
