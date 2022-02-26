(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{183:function(e,a,t){"use strict";t.r(a);var n=t(2),c=t.n(n),s=t(61),i=t.n(s),r=(t(74),t(75),t(4)),o=t(3),d=t.n(o),h=t(1);var l=function(){return Object(h.jsx)("div",{children:function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)}(new Date)})},j=t(62),b=t.n(j);var u=function(){return Object(h.jsx)("div",{className:b.a.loading,children:Object(h.jsx)("h1",{children:"Loading.."})})},m=t(8),_=t.n(m),O=t(39),x=t(64),p=t(63),g=t(65);var f=function(e){var a=e.sunrise,t=e.sunset,n=new Date(1e3*t),c=new Date(1e3*a);return Object(h.jsxs)("div",{className:_.a.weatherInfo,children:[Object(h.jsxs)("div",{className:_.a.humi,children:[Object(h.jsxs)("li",{className:_.a.icon,children:[" ",Object(h.jsx)(p.a,{})," Wind Speed : ",e.windSpeed," m/s"]}),Object(h.jsxs)("li",{className:_.a.icon,children:[" ",Object(h.jsx)(x.a,{})," Humidity : ",e.humidity," g.kg",Object(h.jsx)("sup",{children:"-1"})]}),Object(h.jsxs)("li",{className:_.a.icon,children:[" ",Object(h.jsx)(g.a,{})," Pressure : ",e.pressure," Pa"]})]}),Object(h.jsxs)("div",{className:_.a.sun,children:[Object(h.jsxs)("li",{className:_.a.icon,children:[" ",Object(h.jsx)(O.a,{})," Sunrise : ","".concat(c.getHours()," : ").concat(c.getMinutes()," : ").concat(c.getSeconds())]}),Object(h.jsxs)("li",{className:_.a.icon,children:[" ",Object(h.jsx)(O.b,{})," Sunset : ","".concat(n.getHours()," : ").concat(n.getMinutes()," : ").concat(n.getSeconds())]})]})]})},v=t(66),w=t.n(v),y=t(69);var M=function(e){var a=Object(n.useState)({}),t=Object(r.a)(a,2),c=t[0],s=t[1],i=Object(n.useState)(!0),o=Object(r.a)(i,2),d=o[0],l=o[1],j="https://api.openweathermap.org/data/2.5/forecast?q=".concat("bangalore","&appid=").concat("f32cfa0133a992d042027732e48eae99");if(Object(n.useEffect)((function(){fetch(j).then((function(e){return e.json()})).then((function(e){s(e),l(!1),console.log(e)}))}),[j]),d)return Object(h.jsx)("h1",{children:"Loading"});var b=[c.list[0],c.list[10],c.list[20],c.list[30],c.list[39]],u=[];b.forEach((function(e){var a=new Date(1e3*e.dt).getDate();u.push(a)})),console.log(u);var m={labels:[u[0]+" / 2021",u[1]+" / 2021",u[2]+" / 2021",u[3]+" / 2021",u[4]+" / 2021"],datasets:[{label:"High",backgroundColor:"rgb(255, 99, 132)",borderColor:"rgb(255, 99, 132)",data:[b[0].main.temp_max-273,b[1].main.temp_max-273,b[2].main.temp_max-273,b[3].main.temp_max-273,b[4].main.temp_max-273]},{label:"Low",borderColor:"#aba",backgroundColor:"#123",data:[b[0].main.temp_min-273,b[1].main.temp_min-273,b[2].main.temp_min-273,b[3].main.temp_min-273,b[4].main.temp_min-273]}]};return Object(h.jsx)("div",{className:w.a.chart,children:Object(h.jsx)(y.a,{data:m})})};var N=function(){var e=Object(n.useState)("bangalore"),a=Object(r.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)(!1),i=Object(r.a)(s,2),o=i[0],j=i[1],b=Object(n.useState)({}),m=Object(r.a)(b,2),_=m[0],O=m[1],x=Object(n.useState)(!1),p=Object(r.a)(x,2),g=p[0],v=p[1],w=Object(n.useState)(!1),y=Object(r.a)(w,2),N=y[0],S=y[1],W=function(){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("d2ca3fc4dd7727dde12d2573b53a9aca")).then((function(e){return e.json()})).then((function(e){c(""),console.log(e),O(e),j(!1)}))};return Object(n.useEffect)((function(){W()}),[]),o?Object(h.jsx)(u,{}):Object(h.jsx)("div",{className:d.a.container,children:Object(h.jsxs)("main",{className:d.a.main,children:[Object(h.jsx)("div",{className:d.a.search_box,children:Object(h.jsx)("input",{type:"text",className:"search-bar",placeholder:"search",onChange:function(e){return c(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&W()}})}),"undefined"!=typeof _.main?Object(h.jsxs)("div",{children:[Object(h.jsxs)("article",{children:[Object(h.jsxs)("div",{className:d.a.dateLocation,children:[Object(h.jsxs)("div",{className:d.a.location,children:[_.name,",",_.sys.country]}),Object(h.jsx)("div",{className:d.a.date,children:Object(h.jsx)(l,{})})]}),Object(h.jsxs)("div",{className:d.a.weatherbox,children:[Object(h.jsxs)("div",{className:d.a.temp,children:[Math.round(_.main.temp-273.15),"\xb0c"]}),Object(h.jsxs)("div",{className:d.a.desc,children:[Object(h.jsx)("h5",{children:_.weather[0].main}),Object(h.jsx)("p",{children:_.weather[0].description})]})]})]}),Object(h.jsxs)("div",{className:d.a.highLow,children:[Object(h.jsxs)("div",{className:d.a.high,children:["Todays's High : ",Math.round(_.main.temp_max-273.15),"\xb0c"]}),Object(h.jsxs)("div",{className:d.a.low,children:["Todays's Low : ",Math.round(_.main.temp_min-273.15),"\xb0c"]})]}),g?Object(h.jsx)(f,{windSpeed:_.wind.speed,pressure:_.main.pressure,sunrise:_.sys.sunrise,sunset:_.sys.sunset,humidity:_.main.humidity}):null]}):"",Object(h.jsxs)("div",{className:d.a.btn,children:[Object(h.jsx)("button",{onClick:function(){v(!g)},children:g?"Hide Details":"Show Details"}),Object(h.jsx)("button",{className:d.a.graphBtn,onClick:function(){S(!N)},children:N?"Hide Graph":"Show Graph"})]}),N?Object(h.jsx)(M,{city:t}):null]})})};var S=function(){var e=window.navigator.onLine;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:e?"connect":"notConneted"}),Object(h.jsx)(N,{})]})};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))},3:function(e,a,t){e.exports={container:"WeatherMain_container__2YqWR",main:"WeatherMain_main__31JY9",search_box:"WeatherMain_search_box__1Llc8",weatherbox:"WeatherMain_weatherbox__CKEkl",location:"WeatherMain_location__JnmbI",date:"WeatherMain_date__2GUlf",temp:"WeatherMain_temp__1HROO",desc:"WeatherMain_desc__UDA4I",weather:"WeatherMain_weather__15SGs",highLow:"WeatherMain_highLow__1jJs4",high:"WeatherMain_high__yAXKd",low:"WeatherMain_low__1KR56",cloud:"WeatherMain_cloud__1Tw6X",btn:"WeatherMain_btn__1MXva",graphBtn:"WeatherMain_graphBtn__nm8Ru"}},62:function(e,a,t){e.exports={loading:"Loading_loading__YZjl9"}},66:function(e,a,t){e.exports={chart:"Chart_chart__3zOFn"}},74:function(e,a,t){},75:function(e,a,t){},8:function(e,a,t){e.exports={weatherInfo:"WeatherInfo_weatherInfo__2YiCk",icon:"WeatherInfo_icon__3bMoI"}}},[[183,1,2]]]);
//# sourceMappingURL=main.2d2ccb23.chunk.js.map