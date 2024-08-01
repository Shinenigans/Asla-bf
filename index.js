const fetchData = async () => {
    try {
        let res = await fetch(
            "https://lust.scathach.id/pornhub/search?key=milf"
        );
        const data = await res.json();
        return data.data;
    } catch (err) {
        console.log(err);
    }
};

// fetchData().then((res) => console.log(res[0]));

const renderData = async () => {
    const data = await fetchData();
    if (!data) {
        document.querySelector("h2").style.display = "block";
    } else {
        document.querySelector("h2").style.display = "none";
        // console.log(data);
        const container = document.querySelector("main");
        data.forEach((d) => {
            const card = document.createElement("div");
            card.classList.add("card");
            container.appendChild(card);

            const img = document.createElement("img");
            img.src = d.image;
            card.appendChild(img);

            const title = document.createElement("a");
            title.href = d.link;
            title.innerHTML = d.title;

            card.appendChild(title);
        });
    }
};

renderData();
