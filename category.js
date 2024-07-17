const categories = [
    { name: "Podcasts", color: "#00A781" , Image:("C:\Users\dell\Downloads\Rhythm\Rhythm\images\podcast.jpg")},
    { name: "Live Events", color: "#A53AAF" },
    { name: "Made For You", color: "#20304E" },
    { name: "New Releases", color: "#E9317B" },
    { name: "Hindi", color: "#EB2679" },
    { name: "Punjabi", color: "#9D53D2" },
    { name: "Tamil", color: "#8C533D" },
    { name: "Ghazals", color: "#5D5D5D" },
    { name: "Podcast Charts", color: "#0097EC" },
    { name: "Podcast New Releases", color: "#C5B4B4" },
    { name: "Video Podcasts", color: "#FF5C33" },
    { name: "Business & Technology", color: "#5FA55A" },
    { name:"Bollywood", color:"#9D53D2"}
];

const categoriesContainer = document.getElementById('categories');

categories.forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');
    categoryDiv.style.backgroundColor = category.color;

    const categoryButton = document.createElement('button');
    categoryButton.innerText = category.name;
    categoryButton.style.background = 'none';
    categoryButton.style.border = 'none';
    categoryButton.style.color = 'white';
    categoryButton.style.fontSize = '18px';
    categoryButton.style.cursor = 'pointer';
    categoryButton.addEventListener('click', (Bollywood) => {
        window.location.href = "index.html";
    });

    categoryDiv.appendChild(categoryButton);
    categoriesContainer.appendChild(categoryDiv);
});