// Unsplash API
const count= 10; 
const apiKey = '58uWoncm0vmas-ADJaq03Jkzdczraubqz4QNtpp4tm0';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from UnsplashAPI

async function getPhotosFromUnsplasApi () {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)

    } catch (error) {
        alert ("Hmmm, somthing went wrong", eror);
    }
}

getPhotosFromUnsplasApi()