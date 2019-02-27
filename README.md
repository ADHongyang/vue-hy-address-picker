# vue-hy-address-picker

## Build Setup

# install dependencies
npm install vue-hy-address-picker --save

# import in main.js
import address from 'vue-ad-address-picker'   
Vue.use(address) 

# 在模块中引用，该标签放置位置如下

    <hyPickAddress @hypickaddress="mypick($event)" :city="send" ref="hypickaddress"></hyPickAddress>  
  </div>  
</template>  


 data () {  
      return {  
          send: '',  
      }  
    },  
mounted: function () {  
    this.$nextTick(function () {  
        var obj = {};  
        obj.province = '北京';  
        obj.city = '北京';  
        obj.area = '朝阳区';  
        this.send = JSON.stringify(obj);//这里是将当前的地址传给模块作为默认地址，为空时就传空值  
    })  
},  
methods: {  
    //将选择好的省市传给父模块  
    mypick: function(e) {  
        var self = this;  
        console.log(JSON.parse(e));  
    },  
    //触发弹出地址选择器的函数  
    selectcity: function() {  
        var self = this;  
        self.$refs.hypickaddress.$emit('initfunc');  
    },  
},   
