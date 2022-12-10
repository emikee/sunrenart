var client = contentful.createClient({
    space: 'pgx49zgg3n2i',
    accessToken: 'sZ0JO2BCZ2u71n8maUd_CzUiH2WMZrkmY-h-L0E36u0',
});
  
client.getEntries().then(function (entries) {
    entries.items.forEach(function (entry) {
        let ceramicGallery = document.getElementById('ceramicwork');
        if(entry.metadata.tags[0].sys.id == "ceramic"){
            let box = document.createElement('div');
            box.classList.add('box');
            let artwork = document.createElement('img');
            artwork.src = entry.fields.artwork.fields.file.url;
            artwork.classList.add('artwork');
            let title = document.createElement('div');
            title.innerHTML = entry.fields.titleAndDescription;
            title.classList.add('title');
            ceramicGallery.append(box);
            box.append(artwork);
            box.append(title); 
            artwork.addEventListener("click", e => {
                document.getElementById("full-image").src=entry.fields.artwork.fields.file.url;
                document.getElementById("image-title").innerHTML= title.innerHTML;
                document.getElementById("image-size").innerHTML=entry.fields.size;
                document.getElementById("imgBox").classList.add("shown");
            })         
        }     
    });
});

client.getEntries().then(function (entries) {
    entries.items.forEach(function (entry) {
        let inkGallery = document.getElementById('inkwork');
        if(entry.metadata.tags[0].sys.id == "ink"){
            let box = document.createElement('div');
            box.classList.add('box');
            let artwork = document.createElement('img');
            artwork.src = entry.fields.artwork.fields.file.url;
            artwork.classList.add('artwork');
            let title = document.createElement('div');
            title.innerHTML = entry.fields.titleAndDescription;
            title.classList.add('title');
            inkGallery.append(box);
            box.append(artwork);
            box.append(title); 
            artwork.addEventListener("click", e => {
                document.getElementById("full-image").src=entry.fields.artwork.fields.file.url;
                document.getElementById("image-title").innerHTML= title.innerHTML;
                document.getElementById("image-size").innerHTML=entry.fields.size;
                document.getElementById("imgBox").classList.add("shown");
            })              
        }
    });
});

client.getEntries().then(function (entries) {
    entries.items.forEach(function (entry) {
        let oilGallery = document.getElementById('oilwork');
        if(entry.metadata.tags[0].sys.id == "oil"){
            let box = document.createElement('div');
            box.classList.add('box');
            let artwork = document.createElement('img');
            artwork.src = entry.fields.artwork.fields.file.url;
            artwork.classList.add('artwork');
            let title = document.createElement('div');
            title.innerHTML = entry.fields.titleAndDescription;
            title.classList.add('title');
            oilGallery.append(box);
            box.append(artwork);
            box.append(title);  
            artwork.addEventListener("click", e => {
                document.getElementById("full-image").src=entry.fields.artwork.fields.file.url;
                document.getElementById("image-title").innerHTML= title.innerHTML;
                document.getElementById("image-size").innerHTML=entry.fields.size;
                document.getElementById("imgBox").classList.add("shown");
            })             
        }
    });
});

window.addEventListener('load', function () {
    console.log("loaded");
    let loader = document.getElementsByClassName("loader");
    setTimeout(function() {
        loader[0].classList.add("loaded");
    })
} )

const overlay = document.getElementById("imgBox");
overlay.addEventListener("click", e => {
  document.getElementById("imgBox").classList.remove("shown");
})
