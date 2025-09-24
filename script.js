import { rands_a } from "./module.js";
  document.QuerySelector("b").onclick = () => {
    rands_a();
  }
rands_a().then(msg => {
  document.getElementById("s_a").innerHTML = msg;
}).catch(err => {
   document.getElementById("s_a").innerHTML = "Error: "+err;
});
