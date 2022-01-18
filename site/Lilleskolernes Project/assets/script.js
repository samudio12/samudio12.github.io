/*Creating Storyblok bridge*/
let token = "c3xn8SiDWKP2ax4hZjdQlwtt"
let path = 'home'

let request = new XMLHttpRequest()
request.open('GET', `https://api.storyblok.com/v1/cdn/stories/${path}?version=draft&token=${token}`, true)
request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        let data = JSON.parse(request.responseText)
        document.getElementsByClassName("text").innerHTML = data.story.content.body[2].text
        console.log(data)
    } else {
        console.log("Server error");
    }
    request.onerror = function () {
        console.log("Connection Error")
    };
};

request.send()



storyblok.init({
    accessToken: "c3xn8SiDWKP2ax4hZjdQlwtt"
})

storyblok.on('change', function () {
    location.reload(true)
})

storyblok.on('published', function () {
    location.reload(true)
})

storyblok.pingEditor(function () {
    if (storyblok.inEditor) {
        storyblok.enterEditmode()
    }
})

/*Getting the pageIDs*/

window.onload = function () {
    let pageId = getPageIdFromUrl();
    drawSite(pageId);
}

function getPageIdFromUrl() {
    let pageId = 0;
    let url = window.location.href;
    if (url.indexOf("pageId") > -1) {
        let urlSplit = url.split("?pageId=");
        pageId = urlSplit[1];
    }
    return pageId;
}


function drawData(elementId, newContent) {
    document.getElementById(elementId).innerHTML = newContent;
}