import handleArr from "../arr"

const handleObj = {
  // Object对象数据劫持，双向绑定
  defineReactive(obj,key,val){
    var dep = new Dep();
    Object.defineProperty(obj,key,{
      get(){
        
      },
      set(){

      },
    })
  },
  
}

export default handleObj