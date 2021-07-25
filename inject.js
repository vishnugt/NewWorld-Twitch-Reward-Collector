const SEARCH_QUERY = "[class^=material_item]"; //Class name - All the elements that spawn starts with this class name

let observer = new MutationObserver((mutations) => {
    var collectibleElement = document.querySelectorAll(SEARCH_QUERY);
    collectibleElement.forEach(function(element) {
        element.click();
    });
  })
  
  observer.observe(document.body, {
    childList: true
  , subtree: true
})
