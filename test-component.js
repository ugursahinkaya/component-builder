(function (n, e) {
  typeof exports == 'object' && typeof module < 'u'
    ? e(exports, require('vue'))
    : typeof define == 'function' && define.amd
      ? define(['exports', 'vue'], e)
      : ((n = typeof globalThis < 'u' ? globalThis : n || self),
        e((n.TestComponent = {}), n.Vue));
})(this, function (n, e) {
  'use strict';
  const l = e.defineComponent({
      __name: 'test-component',
      props: { values: {} },
      setup(c) {
        const o = e.ref([1, 2, 3, 4, 5]),
          p = c;
        return (m, i) => (
          e.openBlock(),
          e.createElementBlock(
            e.Fragment,
            null,
            [
              e.createElementVNode(
                'button',
                {
                  onClick: i[0] || (i[0] = (t) => o.value.push(Math.random())),
                },
                ' TEST BUTTON',
              ),
              e.createElementVNode(
                'div',
                null,
                'Test Component props:' + e.toDisplayString(p),
                1,
              ),
              e.createElementVNode('ul', null, [
                (e.openBlock(!0),
                e.createElementBlock(
                  e.Fragment,
                  null,
                  e.renderList(
                    o.value,
                    (t) => (
                      e.openBlock(),
                      e.createElementBlock(
                        'li',
                        { key: t },
                        e.toDisplayString(t),
                        1,
                      )
                    ),
                  ),
                  128,
                )),
              ]),
            ],
            64,
          )
        );
      },
    }),
    s = 'TestComponent';
  function r() {
    console.log('initialize TestComponent');
  }
  (n.componentName = s),
    (n.default = l),
    (n.initialize = r),
    Object.defineProperties(n, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: 'Module' },
    });
});
