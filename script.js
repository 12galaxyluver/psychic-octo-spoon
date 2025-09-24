import { rands_a } from "./module.js";
document.QuerySelector("b").onclick = () => {
  rands_a();
}
async function gets_a(){
  try {
    r = await rands_a();
    document.getQuerySelector("s_a").innerHTML = `Surah and ayah: {msg}`;
  }
  catch (e){
    document.getQuerySelector("s_a").innerHTML = `Error: {e}`;
  }
};
