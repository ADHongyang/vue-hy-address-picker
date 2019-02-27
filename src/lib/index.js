import pickAddress from './pickAddress';

let address = {}

address.install = function (Vue, options) {
    Vue.component(pickAddress.name, pickAddress);
}

if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(address) 
}

export default address;