let trackIndex=0;
var overlayContainer = document.getElementById('enlargedAlbumContainer');
var enlargedImage = document.getElementById('enlargedAlbum');
var closeBtn = document.getElementById('closeButton');
var prevBtn = document.getElementById('prevButton');
var nextBtn = document.getElementById('nextButton');
var galleryImages = document.querySelectorAll('.gallery-movement');

//OPEN AND DISPLAY ALBUM (CALLED LATER ON)
function openOverlay(index) {
    trackIndex = index;
    enlargedImage.src = galleryImages[trackIndex].src;
    overlayContainer.style.display = 'flex';
}

// CLOSE ALBUM OVERLAY
function closeOverlay() {
    overlayContainer.style.display = 'none';
}

// NAVIGATE THROUGH ALBUMS
function navigateImage(direction) {
    trackIndex += direction;

// LOOP THAT UPDATES POSITION OF ALBUM INDEX. ALSO PREVENTS OVERFLOW FOR FIRST AND LAST IMAGE.
    if (trackIndex <0) {
        trackIndex = galleryImages.length - 1;
    } else if (trackIndex >= galleryImages.length) {
        trackIndex = 0;
    }

// UPDATE INDEX ON ALBUM'S NUMBER
    enlargedImage.src = galleryImages[trackIndex].src;
}

// INDEX TRACKER FOR ALBUM BASED ON POSITION AND CLICKS
galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => openOverlay(index));
});

//BUTTONS TO CLOSE, ADVANCE, OR GO BACK
closeBtn.addEventListener('click', closeOverlay);
prevBtn.addEventListener('click', () => navigateImage(-1));
nextBtn.addEventListener('click', () => navigateImage(1));