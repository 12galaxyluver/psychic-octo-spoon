let ax = require("axios");
let randnum = Math.floor(Math.random() * 114) + 1;
export default function rands_a(){
ax.get(`http://api.alquran.cloud/v1/surah/${randnum}`).then(res => {
        randAyah = Math.floor(Math.random() * res.data.data.numberOfAyahs) + 1;
        return "Random surah: Surah ", res.data.data.englishName, "Random ayah: Ayah number ", randAyah;
}).catch(err => {
    return `error oof ${err}`;
});
}
