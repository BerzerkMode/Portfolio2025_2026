async function getData(url, render){
    const respose = await fetch(url)
    const data = await respose.json()
    render(data)
}

url = "https://raw.githubusercontent.com/BerzerkMode/portfolio/refs/heads/main/portfolio.json"

function render(data){
    let munkak = document.querySelector(".workContainer")
    munkak.innerHTML = ""
    console.log(data.photho_url);

    data.forEach(e => {
        munkak.innerHTML +=`
            <div class="projektek">
                <img src="${e.photo_url}" alt=""> 
                <div class="workText">                   
                    <h1>${e.title}</h1>
                    <hr>
                    <p>Témakörök</p>
                    <ul class="too${e.id}">
                    </ul>
                    <div class="links">
                        <a href="${e["repo-link"]}">Github link</a>
                        <a href="${e["site-link"]}">Weboldal link</a>
                    </div>
                </div>
            </div>` });
    data.forEach(e => {
        const ul = document.querySelector(`.too${e.id}`)
        e.topics.forEach((t) => {
            ul.innerHTML += ` <li>${t}</li>` 
        });
    })
}

getData(url, render)