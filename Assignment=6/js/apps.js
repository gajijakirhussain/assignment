// News cetagory section start 
const loadNews = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url).then
        (res => res.json()).then(data => loadNewsData(data.data.news_category))
    // spinner on
    toggleSpinner(true);
}

const loadNewsData = (newses) => {
    newses.forEach(element => {
        console.log(element)
        const allNewsContainer = document.getElementById('allNewsContainer');
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
        <div class="headNwes mt-2 text-center px-2">
            <button id="lengthNews" onclick="loadDetailsNews('${element.category_id}')" class="fs-4 border-0 text-secondary bg-light">${element.category_name}</button>
        </div>
        `;
        allNewsContainer.appendChild(newsDiv);
        // spinner of
        toggleSpinner(false);
    })
};
// News cetagory section start 


// Spinner Start
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');
    };
}

// News cetagory Detail section start 
const loadDetailsNews = (id) => {
    const url = ` https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
        .then(res => res.json()).then(data => detailNews(data.data))

}
const detailNews = fulNewses => {
    const detailsContainer = document.getElementById('newsDetails');
    detailsContainer.innerHTML = '';
    fulNewses.forEach(fulNews => {

        const detailDivs = document.createElement('div');
        detailDivs.classList.add('add-row')
        detailDivs.innerHTML = `
        <div class="row mt-4">
            <div class="col-md-4">
                <img src="${fulNews.image_url}" class="img-fluid rounded-start p-2" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title fs-4 fw-bold">${fulNews.title}</h5>
                    <p class="card-text">${fulNews.details.slice(0, 300)}</p>
                <div>                  
                <div class="row align-items-end">
                    <div class="col d-flex justify-content-around">
                        <div class="mr-4">
                            <img src="${fulNews.author.img}" class="img-fluid rounded-circle ps-img" alt="...">  
                        </div> 
                        <div class="text-center ml-2 pt-3">  
                            <span class="fs-10 ">${fulNews.author.name ? fulNews.author.name : 'No Date Found'}</span><br>
                            <span class="fs-20">${fulNews.author.published_date ? fulNews.author.published_date : 'No release Date Found'}</span>
                        </div>              
                    </div>
                    <div class="col text-center">
                        <span><i class="fa-sharp fa-solid fa-eye fs-4"></i></span>
                        <span class="fs-4">${fulNews.rating.number}M</span>
                    </div>
                    <div class="col right-arrow">
                        <i class="fa-solid fa-arrow-right fs-4" data-bs-toggle="modal" data-bs-target="#newsModal"></i>
                    </div>
                </div>
            </div>
        </div> 
        `;
        detailsContainer.appendChild(detailDivs);
    })
}
// News cetagory Detail section end




//  Blog section start 
const blogContent = document.getElementById('blog-ns').addEventListener('click', function () {
    const blogPopobar = document.getElementById('blog-popobar');
    blogPopobar.classList.remove('d-none');
})

loadNews()

// Assignment-6 end