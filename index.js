let key = "AIzaSyDrqonOAIb6-hUvbNYzm7_H8ioZZza67zc";
let searchResultsDiv = document.getElementById("searchResults");

async function searchVideo() {
  try {
    let userInput = document.getElementById("searchTerm").value;
    let res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${key}&q=${userInput}&type=video&maxResults=20`
    );
    let data = await res.json();
    let videoList = data.items;
    console.log(videoList);
    displayData(videoList);
  } catch (err) {
    console.log(err);
  }
}

const displayData = (videoArry) => {
  searchResultsDiv.textContent = "";

  videoArry.forEach((video) => {
    const {
      id: { videoId },
    } = video;
    let videoCard = document.createElement("div");
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.width = "400px";
    iframe.height = "200px";
    iframe.setAttribute("allowfullscreen", true);

    videoCard.append(iframe);
    searchResultsDiv.append(videoCard);
  });
};
