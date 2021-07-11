// Select elements here
const videos = document.querySelectorAll(".video");
const videoControls = document.querySelectorAll(".video-controls");

// formatTime takes a time length in seconds and returns the time in
// minutes and seconds
function formatTime(timeInSeconds) {
  const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

  return {
    minutes: result.substr(3, 2),
    seconds: result.substr(6, 2),
  };
}

// render main controller
function renderMainController(node, index) {
  const containerMainController = document.createElement("div");
  const containerIconPlay = document.createElement("div");
  const containerBackward = document.createElement("div");
  const containerForward = document.createElement("div");
  const containerPause = document.createElement("div");

  // ============================= icon play ================================//
  const playSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const playPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  //cvg
  playSvg.setAttribute("fill", "none");
  playSvg.setAttribute("viewBox", "0 0 16 18");
  playSvg.setAttribute("width", "16");
  playSvg.setAttribute("height", "18");
  // path
  playPath.setAttribute(
    "d",
    "M2.93847 0.396886C1.31566 -0.533976 0 0.228597 0 2.09878V15.8999C0 17.772 1.31566 18.5335 2.93847 17.6036L15.0013 10.6856C16.6247 9.75439 16.6247 8.24572 15.0013 7.31475L2.93847 0.396886Z"
  );
  playPath.setAttribute("fill", "white");
  playSvg.appendChild(playPath);

  //container icon
  containerIconPlay.appendChild(playSvg);
  containerIconPlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  containerIconPlay.style.width = "44px";
  containerIconPlay.style.height = "44px";
  containerIconPlay.style.display = "flex";
  containerIconPlay.style.justifyContent = "center";
  containerIconPlay.style.alignItems = "center";
  containerIconPlay.style.borderRadius = "100px";
  containerIconPlay.style.cursor = "pointer";

  //==========================icon backward==========================//
  const backwardSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  const backwardPath1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const backwardPath2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  //cvg
  backwardSvg.setAttribute("fill", "none");
  backwardSvg.setAttribute("viewBox", "0 0 40 54");
  backwardSvg.setAttribute("width", "40");
  backwardSvg.setAttribute("height", "54");

  // backwardPath1
  backwardPath1.setAttribute(
    "d",
    "M5.13781 21.4613C5.03354 21.0927 5.24502 20.7042 5.6102 20.5935C5.97537 20.4829 6.35588 20.6921 6.4602 21.0606L7.01852 23.0342L7.46764 21.9561C10.2898 15.1817 18.0147 11.968 24.7138 14.7588C31.413 17.5497 34.5713 25.2973 31.7491 32.0717C28.9269 38.846 21.2021 42.0598 14.5029 39.269C10.2668 37.5042 7.44835 33.759 6.66002 29.5332C6.58966 29.156 6.83514 28.7884 7.20835 28.7119C7.5815 28.6356 7.94109 28.8794 8.01144 29.2566C8.71741 33.0411 11.2417 36.3964 15.0404 37.979C21.0524 40.4836 27.9629 37.5941 30.4833 31.5443C33.0036 25.4946 30.1885 18.5534 24.1764 16.0488C18.1644 13.5442 11.2538 16.4337 8.7335 22.4834L8.28438 23.5615L10.0787 22.5681C10.4138 22.3826 10.8304 22.5054 11.0089 22.8426C11.1875 23.1798 11.0607 23.6036 10.7255 23.7891L7.21477 25.7328C7.03151 25.8342 6.81386 25.8469 6.62268 25.7673C6.4315 25.6876 6.28726 25.5242 6.23019 25.3227L5.13781 21.4613Z"
  );
  backwardPath1.setAttribute("fill", "white");
  backwardSvg.appendChild(backwardPath1);

  //forwardPath2
  backwardPath2.setAttribute(
    "d",
    "M17.3342 31.7422L16.3733 31.7422L16.3733 24.4824C16.2991 24.5566 16.1897 24.6426 16.0452 24.7402C15.9045 24.834 15.7444 24.9277 15.5647 25.0215C15.3889 25.1152 15.2014 25.2031 15.0022 25.2852C14.8069 25.3672 14.6155 25.4316 14.428 25.4785L14.428 24.5059C14.6389 24.4473 14.8616 24.3691 15.0959 24.2715C15.3342 24.1699 15.5667 24.0586 15.7932 23.9375C16.0237 23.8125 16.2405 23.6836 16.4436 23.5508C16.6467 23.4141 16.8225 23.2813 16.9709 23.1523L17.3342 23.1523L17.3342 31.7422ZM25.5374 27.5059C25.5374 28.209 25.4729 28.832 25.344 29.375C25.219 29.918 25.0354 30.377 24.7932 30.752C24.5549 31.123 24.26 31.4063 23.9084 31.6016C23.5608 31.793 23.1643 31.8887 22.719 31.8887C22.2971 31.8887 21.9202 31.7969 21.5881 31.6133C21.26 31.4258 20.9827 31.1543 20.7561 30.7988C20.5295 30.4434 20.3577 30.0078 20.2405 29.4922C20.1233 28.9727 20.0647 28.3789 20.0647 27.7109C20.0647 26.9766 20.1252 26.3281 20.2463 25.7656C20.3713 25.2031 20.553 24.7324 20.7913 24.3535C21.0295 23.9707 21.3245 23.6836 21.676 23.4922C22.0315 23.2969 22.4377 23.1992 22.8948 23.1992C24.6565 23.1992 25.5374 24.6348 25.5374 27.5059ZM24.553 27.5996C24.553 25.209 23.9846 24.0137 22.8479 24.0137C21.6487 24.0137 21.0491 25.2305 21.0491 27.6641C21.0491 29.9336 21.637 31.0684 22.8127 31.0684C23.9729 31.0684 24.553 29.9121 24.553 27.5996Z"
  );
  backwardPath2.setAttribute("fill", "white");
  backwardSvg.appendChild(backwardPath2);

  //containerBackward
  containerBackward.appendChild(backwardSvg);
  containerBackward.style.backgroundColor = "rgba(0,0,0,0.5)";
  containerBackward.style.width = "38px";
  containerBackward.style.height = "38px";
  containerBackward.style.display = "flex";
  containerBackward.style.justifyContent = "center";
  containerBackward.style.alignItems = "center";
  containerBackward.style.borderRadius = "100px";
  containerBackward.style.cursor = "pointer";
  containerBackward.style.marginRight = "32px";

  //=================================== icon pause =================================//
  const pauseSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  const rectPause1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect"
  );
  const rectPause2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect"
  );

  //pauseSvg
  pauseSvg.setAttribute("fill", "none");
  pauseSvg.setAttribute("viewBox", "0 0 14 20");
  pauseSvg.setAttribute("width", "14");
  pauseSvg.setAttribute("height", "20");

  //rectPause1
  rectPause1.setAttribute("width", "4");
  rectPause1.setAttribute("height", "20");
  rectPause1.setAttribute("rx", "2");
  rectPause1.setAttribute("fill", "white");

  //rectPause2
  rectPause2.setAttribute("x", "10");
  rectPause2.setAttribute("width", "4");
  rectPause2.setAttribute("height", "20");
  rectPause2.setAttribute("rx", "2");
  rectPause2.setAttribute("fill", "white");

  //svg
  pauseSvg.appendChild(rectPause1);
  pauseSvg.appendChild(rectPause2);
  //   containerPause.appendChild(pauseSvg);

  //=================================== icon forward =================================//
  const forwardSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  const forwardPath1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const forwardPath2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  //cvg
  forwardSvg.setAttribute("fill", "none");
  forwardSvg.setAttribute("viewBox", "0 0 38 38");
  forwardSvg.setAttribute("width", "38");
  forwardSvg.setAttribute("height", "38");

  // frowardPath1
  forwardPath1.setAttribute(
    "d",
    "M32.1384 11.9554C32.1984 11.5741 31.938 11.2165 31.5567 11.1565C31.1755 11.0965 30.8179 11.357 30.7579 11.7381L30.4367 13.7792L29.8528 12.7678C26.1834 6.41227 18.0123 4.27413 11.6074 7.97196C5.20257 11.6698 2.96871 19.8153 6.63808 26.1708C10.3074 32.5263 18.4786 34.6645 24.8834 30.9667C28.9335 28.6284 31.314 24.5135 31.5917 20.199C31.6164 19.8139 31.3243 19.4816 30.9392 19.4568C30.5541 19.432 30.2218 19.7241 30.197 20.1092C29.9485 23.9732 27.8165 27.6596 24.1847 29.7564C18.4368 33.075 11.1252 31.1478 7.84833 25.4721C4.57147 19.7964 6.55823 12.5008 12.3062 9.18221C18.0541 5.86365 25.3657 7.79085 28.6426 13.4665L29.2265 14.4779L27.2983 13.7355C26.9382 13.5969 26.5338 13.7763 26.3952 14.1365C26.2565 14.4967 26.436 14.901 26.7962 15.0397L30.5688 16.4923C30.7657 16.5681 30.9864 16.5509 31.1692 16.4453C31.352 16.3398 31.4773 16.1573 31.5101 15.9489L32.1384 11.9554Z"
  );
  forwardPath1.setAttribute("fill", "white");
  forwardSvg.appendChild(forwardPath1);

  //forwardPath2
  forwardPath2.setAttribute(
    "d",
    "M15.2737 24L14.3127 24L14.3127 16.7402C14.2385 16.8145 14.1292 16.9004 13.9846 16.998C13.844 17.0918 13.6838 17.1855 13.5042 17.2793C13.3284 17.373 13.1409 17.4609 12.9417 17.543C12.7463 17.625 12.5549 17.6895 12.3674 17.7363L12.3674 16.7637C12.5784 16.7051 12.801 16.627 13.0354 16.5293C13.2737 16.4277 13.5061 16.3164 13.7327 16.1953C13.9631 16.0703 14.1799 15.9414 14.3831 15.8086C14.5862 15.6719 14.762 15.5391 14.9104 15.4102L15.2737 15.4102L15.2737 24ZM23.4768 19.7637C23.4768 20.4668 23.4124 21.0898 23.2834 21.6328C23.1584 22.1758 22.9749 22.6348 22.7327 23.0098C22.4944 23.3809 22.1995 23.6641 21.8479 23.8594C21.5002 24.0508 21.1038 24.1465 20.6584 24.1465C20.2366 24.1465 19.8596 24.0547 19.5276 23.8711C19.1995 23.6836 18.9221 23.4121 18.6956 23.0566C18.469 22.7012 18.2971 22.2656 18.1799 21.75C18.0627 21.2305 18.0042 20.6367 18.0042 19.9688C18.0042 19.2344 18.0647 18.5859 18.1858 18.0234C18.3108 17.4609 18.4924 16.9902 18.7307 16.6113C18.969 16.2285 19.2639 15.9414 19.6155 15.75C19.9709 15.5547 20.3772 15.457 20.8342 15.457C22.5959 15.457 23.4768 16.8926 23.4768 19.7637ZM22.4924 19.8574C22.4924 17.4668 21.9241 16.2715 20.7874 16.2715C19.5881 16.2715 18.9885 17.4883 18.9885 19.9219C18.9885 22.1914 19.5764 23.3262 20.7522 23.3262C21.9124 23.3262 22.4924 22.1699 22.4924 19.8574Z"
  );
  forwardPath2.setAttribute("fill", "white");
  forwardSvg.appendChild(forwardPath2);

  //containerForward
  containerForward.appendChild(forwardSvg);
  containerForward.style.backgroundColor = "rgba(0,0,0,0.5)";
  containerForward.style.width = "38px";
  containerForward.style.height = "38px";
  containerForward.style.display = "flex";
  containerForward.style.justifyContent = "center";
  containerForward.style.alignItems = "center";
  containerForward.style.borderRadius = "100px";
  containerForward.style.cursor = "pointer";
  containerForward.style.marginLeft = "32px";

  // =========================== container Main Controller ============================//
  containerMainController.appendChild(containerBackward);
  containerMainController.appendChild(containerIconPlay);
  containerMainController.appendChild(containerForward);
  containerMainController.style.display = "flex";
  containerMainController.style.alignItems = "center";
  containerMainController.style.justifyContent = "center";

  containerMainController.style.position = "absolute";
  containerMainController.style.top = "0";
  containerMainController.style.left = "0";
  containerMainController.style.right = "0";
  containerMainController.style.bottom = "0px";
  containerMainController.style.background = "rgba(0,0,0,0.3)";

  containerIconPlay.addEventListener("click", () => {
    videos[index];
    if (videos[index].paused || videos[index].ended) {
      videos[index].play();
    } else {
      videos[index].pause();
    }
  });

  node.appendChild(containerMainController);

  //------------------------==========================Main Progesss ===================--------------------//
  const mainPorgress = document.createElement("div");
  const containerActionProgress = document.createElement("div");
  const inputRange = document.createElement("input");

  const containerIconZoom = document.createElement("div");
  const containerTimer = document.createElement("div");
  const containerVol = document.createElement("div");
  const containerZoomAndVol = document.createElement("div");
  const containerProgressBar = document.createElement("div");

  ///======inputRange====//
  inputRange.type = "range";
  inputRange.min = "0";
  inputRange.max = "100";
  inputRange.style.width = "100%";
  inputRange.style.padding = "0px";
  inputRange.style.margin = "0px";
  inputRange.value = "0";
  inputRange.style.backgroundSize = "0% 100%";

  // ========= icon zoom ========///
  const zoomSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const zoomPath1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const zoomPath2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const zoomPath3 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const zoomPath4 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const zoomPath5 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const zoomPath6 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const zoomPath7 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const zoomPath8 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  //zoomPath1
  zoomPath1.setAttribute(
    "d",
    "M1.04005 3.28005H1.24005V3.08005V1.24005H3.08005H3.28005V1.04005V0.800049V0.600049H3.08005H0.920049C0.83518 0.600049 0.753786 0.633763 0.693775 0.693775C0.633763 0.753786 0.600049 0.83518 0.600049 0.920049V3.08005V3.28005H0.800049H1.04005Z"
  );
  zoomPath1.setAttribute("fill", "white");
  zoomPath1.setAttribute("stroke", "white");
  zoomPath1.setAttribute("stroke-width", "0.4");

  //zoomPath2
  zoomPath2.setAttribute(
    "d",
    "M0.69354 0.863706L0.552118 1.00513L0.69354 1.14655L4.05303 4.50604L4.19445 4.64746L4.33587 4.50604L4.50555 4.33636L4.64697 4.19494L4.50555 4.05352L1.14606 0.694026L1.00464 0.552604L0.863219 0.694026L0.69354 0.863706Z"
  );
  zoomPath2.setAttribute("fill", "white");
  zoomPath2.setAttribute("stroke", "white");
  zoomPath2.setAttribute("stroke-width", "0.4");

  //zoomPath3
  zoomPath3.setAttribute(
    "d",
    "M9.19992 3.28005H9.39992V3.08005V0.920049C9.39992 0.83518 9.36621 0.753786 9.3062 0.693775C9.24618 0.633763 9.16479 0.600049 9.07992 0.600049H6.91992H6.71992V0.800049V1.04005V1.24005H6.91992H8.75992V3.08005V3.28005H8.95992H9.19992Z"
  );
  zoomPath3.setAttribute("fill", "white");
  zoomPath3.setAttribute("stroke", "white");
  zoomPath3.setAttribute("stroke-width", "0.4");

  //zoomPath4
  zoomPath4.setAttribute(
    "d",
    "M5.4931 4.05401L5.35168 4.19543L5.4931 4.33686L5.66278 4.50654L5.8042 4.64796L5.94562 4.50654L9.30512 1.14704L9.44654 1.00562L9.30512 0.8642L9.13544 0.69452L8.99401 0.553099L8.85259 0.69452L5.4931 4.05401Z"
  );
  zoomPath4.setAttribute("fill", "white");
  zoomPath4.setAttribute("stroke", "white");
  zoomPath4.setAttribute("stroke-width", "0.4");

  //zoomPath5
  zoomPath5.setAttribute(
    "d",
    "M3.08005 9.40004H3.28005V9.20004V8.96004V8.76004H3.08005H1.24005V6.92004V6.72004H1.04005H0.800049H0.600049V6.92004V9.08004C0.600049 9.16491 0.633763 9.24631 0.693775 9.30632C0.753787 9.36633 0.83518 9.40004 0.920049 9.40004H3.08005Z"
  );
  zoomPath5.setAttribute("fill", "white");
  zoomPath5.setAttribute("stroke", "white");
  zoomPath5.setAttribute("stroke-width", "0.4");

  //zoomPath6
  zoomPath6.setAttribute(
    "d",
    "M0.693051 8.85309L0.55163 8.99451L0.693051 9.13593L0.862731 9.30561L1.00415 9.44703L1.14557 9.30561L4.50507 5.94612L4.64649 5.8047L4.50507 5.66327L4.33539 5.49359L4.19396 5.35217L4.05254 5.49359L0.693051 8.85309Z"
  );
  zoomPath6.setAttribute("fill", "white");
  zoomPath6.setAttribute("stroke", "white");
  zoomPath6.setAttribute("stroke-width", "0.4");

  //zoomPath7
  zoomPath7.setAttribute(
    "d",
    "M6.71992 9.20004V9.40004H6.91992H9.07992C9.16479 9.40004 9.24618 9.36633 9.30619 9.30632C9.36621 9.24631 9.39992 9.16491 9.39992 9.08004V6.92004V6.72004H9.19992H8.95992H8.75992V6.92004V8.76004H6.91992H6.71992V8.96004V9.20004Z"
  );
  zoomPath7.setAttribute("fill", "white");
  zoomPath7.setAttribute("stroke", "white");
  zoomPath7.setAttribute("stroke-width", "0.4");

  //zoomPath8
  zoomPath8.setAttribute(
    "d",
    "M5.49261 5.66375L5.35119 5.80518L5.49261 5.9466L8.8521 9.30609L8.99353 9.44751L9.13495 9.30609L9.30463 9.13641L9.44605 8.99499L9.30463 8.85357L5.94513 5.49407L5.80371 5.35265L5.66229 5.49407L5.49261 5.66375Z"
  );
  zoomPath8.setAttribute("fill", "white");
  zoomPath8.setAttribute("stroke", "white");
  zoomPath8.setAttribute("stroke-width", "0.4");

  //svg
  zoomSvg.setAttribute("width", "10");
  zoomSvg.setAttribute("height", "10");
  zoomSvg.setAttribute("viewBox", "0 0 10 10");
  zoomSvg.setAttribute("fill", "none");

  zoomSvg.appendChild(zoomPath1);
  zoomSvg.appendChild(zoomPath2);
  zoomSvg.appendChild(zoomPath3);
  zoomSvg.appendChild(zoomPath4);
  zoomSvg.appendChild(zoomPath5);
  zoomSvg.appendChild(zoomPath6);
  zoomSvg.appendChild(zoomPath7);
  zoomSvg.appendChild(zoomPath8);

  //containerIconZoom
  containerIconZoom.appendChild(zoomSvg);
  containerIconZoom.style.backgroundColor = "rgba(0,0,0,0.5)";
  containerIconZoom.style.width = "26px";
  containerIconZoom.style.height = "26px";
  containerIconZoom.style.borderRadius = "30px";
  containerIconZoom.style.display = "flex";
  containerIconZoom.style.justifyContent = "center";
  containerIconZoom.style.alignItems = "center";
  containerIconZoom.style.cursor = "pointer";
  containerIconZoom.style.marginRight = "8px";

  //containerTimer
  containerTimer.textContent = "00:00/00:00";
  containerTimer.style.color = "white";
  containerTimer.style.fontSize = "14px";

  //=====================icon volumn ==================//
  const volSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const volPath1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const volPath2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const volPath3 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const volPath4 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  //volPath1
  volPath1.setAttribute(
    "d",
    "M8.62491 1.05273C8.45942 0.969559 8.26088 0.98573 8.11125 1.0945L4.2862 3.87526H0.492327C0.220431 3.87526 0 4.09379 0 4.36333V10.6367C0 10.9062 0.220431 11.1248 0.492327 11.1248H4.2862L8.11125 13.9055C8.19731 13.9681 8.29958 14 8.40244 14C8.47836 14 8.55464 13.9826 8.62491 13.9473C8.79043 13.8642 8.89474 13.6958 8.89474 13.5119V1.48808C8.89474 1.30415 8.79043 1.13586 8.62491 1.05273ZM7.91005 12.5488L4.73851 10.2431C4.65406 10.1817 4.55209 10.1486 4.44735 10.1486H0.984654V4.8514H4.44735C4.55205 4.8514 4.65406 4.81828 4.73851 4.75691L7.91005 2.45121V12.5488Z"
  );
  volPath1.setAttribute("fill", "white");

  //volPath2
  volPath2.setAttribute(
    "d",
    "M0.684204 10.579V4.4211H4.44736L8.21052 2.02637V12.9737L4.10526 10.579H0.684204Z"
  );
  volPath2.setAttribute("fill", "white");

  //volPath3
  volPath3.setAttribute(
    "d",
    "M11.6018 0.0400177C11.3845 -0.0654507 11.1312 0.0447539 11.0362 0.286015C10.9413 0.527277 11.0405 0.808398 11.2579 0.913835C13.6166 2.05797 15.1408 4.64312 15.1409 7.49989C15.1409 10.3568 13.6166 12.9421 11.2577 14.0862C11.0403 14.1916 10.9411 14.4727 11.036 14.714C11.1065 14.8932 11.2643 15 11.4299 15C11.4873 15 11.5457 14.9872 11.6016 14.96C14.2735 13.6641 16 10.7359 16 7.49986C15.9999 4.26406 14.2735 1.3359 11.6018 0.0400177Z"
  );
  volPath3.setAttribute("fill", "white");

  //volPath4
  volPath4.setAttribute(
    "d",
    "M11.6396 4.10901C11.4817 3.9515 11.2392 3.96644 11.0978 4.1424C10.9565 4.31838 10.9699 4.5887 11.1278 4.74624C11.8299 5.44684 12.2327 6.45054 12.2327 7.5C12.2327 8.54943 11.8299 9.55316 11.1278 10.2538C10.9699 10.4113 10.9565 10.6816 11.0978 10.8576C11.1736 10.9519 11.2785 11 11.3838 11C11.4749 11 11.5664 10.9641 11.6396 10.891C12.5042 10.0284 13 8.79238 13 7.49997C13 6.20759 12.5041 4.9716 11.6396 4.10901Z"
  );
  volPath4.setAttribute("fill", "white");

  //svg
  volSvg.setAttribute("width", "16");
  volSvg.setAttribute("height", "15");
  volSvg.setAttribute("viewBox", "0 0 16 15");

  volSvg.setAttribute("fill", "none");
  volSvg.appendChild(volPath1);
  volSvg.appendChild(volPath2);
  volSvg.appendChild(volPath3);
  volSvg.appendChild(volPath4);

  //containerVol
  containerVol.appendChild(volSvg);
  containerVol.style.backgroundColor = "rgba(0,0,0,0.5)";
  containerVol.style.width = "26px";
  containerVol.style.height = "26px";
  containerVol.style.borderRadius = "30px";
  containerVol.style.display = "flex";
  containerVol.style.justifyContent = "center";
  containerVol.style.alignItems = "center";
  containerVol.style.cursor = "pointer";

  //containerZoomAndVol
  containerZoomAndVol.appendChild(containerIconZoom);
  containerZoomAndVol.appendChild(containerVol);
  containerZoomAndVol.style.display = "flex";

  // ========================= mute icon ========================= //
  const muteSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const mutePath1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const mutePath2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const mutePath3 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  muteSvg.setAttribute("width", "18");
  muteSvg.setAttribute("height", "13");
  muteSvg.setAttribute("viewBox", "0 0 18 13");
  muteSvg.setAttribute("fill", "none");

  //mutePath1
  mutePath1.setAttribute(
    "d",
    "M8.62491 0.052726C8.45942 -0.030441 8.26088 -0.0142696 8.11125 0.0945047L4.2862 2.87526H0.492327C0.220431 2.87526 0 3.09379 0 3.36333V9.63668C0 9.90623 0.220431 10.1248 0.492327 10.1248H4.2862L8.11125 12.9055C8.19731 12.9681 8.29958 13 8.40244 13C8.47836 13 8.55464 12.9826 8.62491 12.9473C8.79043 12.8642 8.89474 12.6958 8.89474 12.5119V0.488084C8.89474 0.304147 8.79043 0.13586 8.62491 0.052726ZM7.91005 11.5488L4.73851 9.2431C4.65406 9.1817 4.55209 9.14861 4.44735 9.14861H0.984654V3.8514H4.44735C4.55205 3.8514 4.65406 3.81828 4.73851 3.75691L7.91005 1.45121V11.5488Z"
  );
  mutePath1.setAttribute("fill", "white");
  //mutePath2
  mutePath2.setAttribute(
    "d",
    "M0.684204 9.579V3.4211H4.44736L8.21052 1.02637V11.9737L4.10526 9.579H0.684204Z"
  );
  mutePath2.setAttribute("fill", "white");

  //mutePath3
  mutePath3.setAttribute(
    "d",
    "M14.7745 6.15786L16.9503 4.22377C17.1569 4.04015 17.1569 3.74238 16.9503 3.55873C16.7438 3.37512 16.4088 3.37512 16.2022 3.55873L14.0263 5.49283L11.8505 3.55873C11.6439 3.37512 11.3089 3.37512 11.1023 3.55873C10.8957 3.74235 10.8957 4.04012 11.1023 4.22377L13.2782 6.15786L11.1023 8.09195C10.8957 8.27557 10.8957 8.57333 11.1023 8.75698C11.2056 8.84881 11.341 8.8947 11.4764 8.8947C11.6118 8.8947 11.7472 8.84878 11.8505 8.75698L14.0263 6.82289L16.2021 8.75698C16.3054 8.84881 16.4408 8.8947 16.5762 8.8947C16.7116 8.8947 16.847 8.84878 16.9503 8.75698C17.1569 8.57336 17.1569 8.2756 16.9503 8.09195L14.7745 6.15786Z"
  );
  mutePath3.setAttribute("fill", "white");

  muteSvg.appendChild(mutePath1);
  muteSvg.appendChild(mutePath2);
  muteSvg.appendChild(mutePath3);

  //----containerActionProgress----//
  containerActionProgress.appendChild(containerTimer);
  containerActionProgress.appendChild(containerZoomAndVol);
  containerActionProgress.style.display = "flex";
  containerActionProgress.style.justifyContent = "space-between";
  containerActionProgress.style.alignItems = "center";
  containerActionProgress.style.padding = "0 6px";

  //====== mainPorgress=====//
  mainPorgress.appendChild(containerActionProgress);
  //   mainPorgress.appendChild(inputRange);
  mainPorgress.style.position = "absolute";
  mainPorgress.style.bottom = "12px";
  mainPorgress.style.left = "0";
  mainPorgress.style.right = "0";

  //containerProgressBar
  containerProgressBar.appendChild(inputRange);
  containerProgressBar.style.position = "absolute";
  containerProgressBar.style.left = "0";
  containerProgressBar.style.right = "0";
  containerProgressBar.style.bottom = "-4px";

  node.appendChild(containerProgressBar);
  node.appendChild(mainPorgress);

  // Dislay containerMainController in 3s when hover or touch
  let timer;
  function handleShowFullController() {
    containerMainController.style.display = "flex";
    mainPorgress.style.display = "block";

    clearTimeout(timer);
    timer = setTimeout(() => {
      containerMainController.style.display = "none";
      mainPorgress.style.display = "none";
    }, 3000);
  }
  node.addEventListener("mousemove", handleShowFullController);

  //-- inital video listerner loadedmetadata
  videos[index].addEventListener("loadedmetadata", () => {
    let totalTime = Math.floor(videos[index].duration);
    const timeFormat = formatTime(totalTime);
    containerTimer.textContent = `${timeFormat.minutes}:${timeFormat.seconds}/00:00`;
    // listener input range
    inputRange.addEventListener("input", (e) => {
      let target = e.target;
      const val = target.value;
      target.style.backgroundSize = val + "% 100%";
      videos[index].currentTime = totalTime * (val / 100);
    });
  });

  // listener timeupdate of video
  videos[index].addEventListener("timeupdate", () => {
    const totalTime = Math.floor(videos[index].duration);
    const currentTime = Math.floor(videos[index].currentTime);
    const percentTime = (currentTime / totalTime) * 100;
    inputRange.value = `${percentTime}`;
    inputRange.style.backgroundSize = `${percentTime}% 100%`;
    const currentTimeFormat = formatTime(currentTime);
    const totalTimeFormat = formatTime(totalTime);
    containerTimer.textContent = `${totalTimeFormat.minutes}:${totalTimeFormat.seconds}/${currentTimeFormat.minutes}:${currentTimeFormat.seconds}`;
  });

  // listener on / off video
  videos[index].addEventListener("play", () => {
    containerIconPlay.removeChild(playSvg);
    containerIconPlay.appendChild(pauseSvg);
  });
  videos[index].addEventListener("pause", () => {
    containerIconPlay.removeChild(pauseSvg);
    containerIconPlay.appendChild(playSvg);
  });

  // listener forward and backward
  containerForward.addEventListener("click", () => {
    handleShowFullController();
    const currentTime = videos[index].currentTime;
    videos[index].currentTime = currentTime + 10;
  });
  containerBackward.addEventListener("click", () => {
    handleShowFullController();
    const currentTime = videos[index].currentTime;
    if (currentTime <= 0) {
      return;
    }
    videos[index].currentTime = currentTime - 10;
  });

  // volumn listener
  containerVol.addEventListener("click", () => {
    console.log("ok", videos[index].muted);
    if (videos[index].muted) {
      containerVol.removeChild(muteSvg);
      containerVol.appendChild(volSvg);
      videos[index].muted = false;
    } else {
      containerVol.removeChild(volSvg);
      containerVol.appendChild(muteSvg);

      videos[index].muted = true;
    }
  });

  // zoom listener
  function toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (document.webkitFullscreenElement) {
      // Need this to support Safari
      document.webkitExitFullscreen();
    } else if (node.webkitRequestFullscreen) {
      // Need this to support Safari
      node.webkitRequestFullscreen();
    } else {
      node.requestFullscreen();
    }
  }
  containerIconZoom.addEventListener("click", () => {
    toggleFullScreen();
  });

  ///fullscreenchange

  function handleFullScreenChange() {
    if (
      window.fullScreen ||
      (window.innerWidth == screen.width && window.innerHeight == screen.height)
    ) {
      console.log("is Full");
      containerProgressBar.style.bottom = "2px";
    } else {
      console.log("is not Full");
      containerProgressBar.style.bottom = "-4px";
    }
  }

  document.addEventListener(
    "webkitfullscreenchange",
    handleFullScreenChange,
    false
  );
  document.addEventListener(
    "mozfullscreenchange",
    handleFullScreenChange,
    false
  );
  document.addEventListener("fullscreenchange", handleFullScreenChange, false);
}

// Render list video
videoControls.forEach((item, index) => {
  item.style.position = "relative";
  item.style.display = "flex";
  item.style.justifyContent = "center";
  item.style.alignItems = "center";

  renderMainController(item, index);
});

videos.forEach((video) => {
  video.style.zIndex = "0";
  video.style.width = "100%";
  video.preload = "metadata";
});
