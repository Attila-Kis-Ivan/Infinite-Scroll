const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];


// Unsplash API
const count= 10; 
const apiKey = '58uWoncm0vmas-ADJaq03Jkzdczraubqz4QNtpp4tm0';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


// Helper function to set Attributes on DOM elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

// Create elements for Links & photos, add to DOM
function displayFetchedPhotos () {
    // run finction for each object in photosArray
    photosArray.forEach((photo) => {
        //  create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // Create <img> for photo
        const img = document.createElement('img');
      setAttributes(img, {
        src: photo.urls.regular,
            alt: photo.alt_descreption,
            alt: photo.alt_descreption,
      })
        
        // Put <img> inside <a>, then put both inside imageContainer
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}


// Get photos from UnsplashAPI

async function getPhotosFromUnsplashApi () {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayFetchedPhotos();


    } catch (error) {
        console.log(error);
    }
}

getPhotosFromUnsplashApi()