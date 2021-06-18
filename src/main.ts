import Vue from "vue";
import App from "./ui/App";
// import Home from "./components/Home";


/* eslint-disable no-new */
 
const app = new Vue({
    el: "#app",
    components: {App},
    template: "<App/>",
    data:{

    }

});


app.$mount("#app");