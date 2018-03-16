<template>
  <div class="map" id="container">

  </div>
</template>

<script>
// import bikeLogo from '../assets/bike.png'
export default {
  name: 'hello',
  data () {
    return {

    }
  },
  methods: {
    addMarker: function(map, point,data){  // 创建图标对象
      // var myIcon = new BMap.Icon(bikeLogo, new BMap.Size(46, 50), {
      //    anchor: new BMap.Size(10, 25),
      //  });
      var marker = new BMap.Marker(new BMap.Point(114.3162001,30.58108413)); // 创建点
      // 创建标注对象并添加到地图
      var self = this;
      //var marker = new BMap.Marker(point);// 创建点
      map.addOverlay(marker);// 将标注添加到地图中
      marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      marker.addEventListener('click',function(){
        self.$router.push({name:'Detail',params:data})
      })
    },
      //定义在双击的时候执行的函数
    onDblClick:function(){
      let map,moveLsitener;
      moveLsitener=LTEvent.addListener(map,"moveend",onMoveEnd);
      //因为系统默认双击的时候会将地图定位到中心，因此，只需要定义地图在定位到中心完成之后放大地图即可
    }
},
  mounted () {
    var map = new BMap.Map("container");          // 创建地图实例
    var point = new BMap.Point(114.3162001,30.58108413);  // 创建点坐标

    // 定位
    var self = this;
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
         alert('您的位置：'+r.point.lng+','+r.point.lat);
        point = new BMap.Point(r.point.lng, r.point.lat);
      }
      else {
        alert('failed'+this.getStatus());
      }
      // 初始化地图，设置中心点坐标和地图级别
      map.centerAndZoom('wuhan', 15);
      map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

      //取得数据 ''es6的字符串模板 fetch H5里面获取接口的方法
      //${}es6的传参的语法
      fetch(`/api/broken-bikes?lat=${r.point.lat}&lng=${r.point.lng}`)
        .then((res)=>{
          //成功返回的数据
          console.log(res);
          return res.json();
          //第二个then的参数为第一个then成功之后返回的数据 json（）
        }).then((json)=>{
          //for循环出所有的经纬度的小黄车
          for(let i=0;i<json.length;i++){
            //并重新创建一个BMap实例 循环出所有的小黄车
            let point = new BMap.Point(json[i].lng,json[i].lat)
            //把图标addMarker对象放入里面来
            self.addMarker(map, point,json[i]);
          }
      })

      // self.addMarker(map, point);
    },{enableHighAccuracy: true})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#container {
  height: 100%;
}
/*.BMap_Marker div {*/
  /*border-radius: 50%;*/
/*}*/
/*.BMap_Marker img {*/
  /*width: 100%;*/
/*}*/
</style>
