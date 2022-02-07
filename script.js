document.body.innerHTML=
`<section class="main_container"></section>`;

async function getAllAnime(){
const data=await fetch("https://617062da23781c0017289a16.mockapi.io/data");
const anime=await data.json();
anime.forEach((a)=>{
`<h1>${a.anime_name}</h1>}`
console.log(a.anime_id, a.anime_name,a.anime_img);
});
}
getAllAnime();