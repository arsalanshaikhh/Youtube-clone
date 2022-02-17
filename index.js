let api_key = "AIzaSyCP3JuHROIp2h0N3nCNpE7xKcidgfZu40s";
let searchResultsDiv = document.getElementById("searchResults");

async function searchVideo() {
  try {
    let userInput = document.getElementById("searchTerm").value;
    let res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${api_key}&q=${userInput}&type=video&maxResults=20`
    );
    let data = await res.json();
    // console.log("data :", data);

    let videoList = data.items;
    console.log(videoList);
    displayData(videoList);
  } catch (err) {
    console.log(err);
  }
}
// first
// const displayData = (videoArry) => {
//   searchResultsDiv.textContent = "";

//   videoArry.forEach((video) => {
//     const {
//       id: { videoId },
//     } = video;
//     let videoCard = document.createElement("div");
//     let iframe = document.createElement("iframe");
//     iframe.src = `https://www.youtube.com/embed/${videoId}`;
//     iframe.width = "400px";
//     iframe.height = "200px";
//     iframe.setAttribute("allowfullscreen", true);
//     // videoCard.onclick = () => {
//     //   console.log("newww");
//     // };

//     videoCard.append(iframe);
//     searchResultsDiv.append(videoCard);
//   });
// };

const displayData = (videoArry) => {
  searchResultsDiv.textContent = "";

  videoArry.forEach((video) => {
    const {
      id: { videoId },
      snippet: {
        title,
        channelTitle,
        thumbnails: {
          medium: { url },
        },
      },
    } = video;

    let videoCard = document.createElement("div");
    let iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.width = "320px";
    iframe.height = "180px";
    // iframe.setAttribute("allowfullscreen", true);
    videoCard.addEventListener("click", () => {
      console.log("111111");
      window.location = "2.html";
    });
    let tit = document.createElement("div");
    tit.textContent = title;
    // videoCard.addEventListener("click", abc());
    // function abc() {
    //   console.log("neww");
    // }

    videoCard.append(iframe, tit);
    searchResultsDiv.append(videoCard);
  });
};

// function abc() {
//   console.log("neww");
// }
