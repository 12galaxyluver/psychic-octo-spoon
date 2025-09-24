import { rands_a } from "./module.js";
document.QuerySelector("b").addEventListener("click", rands_a);

async function gets_a(){
  try {
    r = await rands_a();
    document.QuerySelector("s_a").innerHTML = `Surah and ayah: {msg}`;
  }
  catch (e){
    document.QuerySelector("s_a").innerHTML = `Error: {e}`;
  }
};
