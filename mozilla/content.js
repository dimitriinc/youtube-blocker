const shortsSection = document.querySelectorAll('ytd-rich-section-renderer');
shortsSection.forEach(section => {
    section.remove()
})

const newsSection = document.querySelector('ytd-shelf-renderer#shelf-id-news');
if (newsSection) {
  newsSection.remove();
}
