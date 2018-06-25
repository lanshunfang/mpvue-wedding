// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
var store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: function (state) {
            var obj = state;
            obj.count += 1;
        },
        decrement: function (state) {
            var obj = state;
            obj.count -= 1;
        }
    }
});
export default store;
//# sourceMappingURL=store.js.map