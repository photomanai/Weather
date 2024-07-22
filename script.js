const elements = {};

const elementIds = ["icon", "w_text", "d_text", "t_text"];

elementIds.forEach((id) => {
  elements[id] = document.getElementById(id);
});

var reload_time = 60;
const ApiInfo = {
  lat: `40.3875245`,
  lon: `49.8666098`,
  ApiKey: `0ab8cf31dd6d1b480fb472ef5aa8af40`,
};
const ApiLink = `https://api.openweathermap.org/data/2.5/forecast?lat=${ApiInfo.lat}&lon=${ApiInfo.lon}&appid=${ApiInfo.ApiKey}`;
// console.log(ApiLink);

setInterval(() => {
  location.reload();
}, reload_time * 1000);

function setWeatherIcon(weatherStyle) {
  const iconElement = elements.icon;
  let iconSVG = "";
  let themeClass = "";

  switch (true) {
    case weatherStyle.indexOf("Sun") !== -1:
      themeClass = "suny-theme";
      iconSVG = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="100px"
      height="100px"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
        stroke="#f3f3f3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`;
      break;
    case weatherStyle.indexOf("Cloud") !== -1:
      themeClass = "cloud-theme";
      iconSVG = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="100px"
      height="100px"
      viewBox="0 0 24 24"
      fill="none"
      >
      <path
        d="M11.0947 8.02658C11.5476 5.73111 13.5717 4 16 4C18.7614 4 21 6.23858 21 9C21 11.0345 19.7849 12.7852 18.0408 13.5659M11.0947 8.02658C9.24194 8.21766 7.68947 9.4193 7 11C4.6 11.375 3 13.3144 3 15.4137C3 17.9466 5.14903 20 7.8 20L15 20C17.2091 20 19 18.2719 19 16.1402C19 15.1829 18.6388 14.2698 18.0408 13.5659M11.0947 8.02658C11.265 8.00902 11.4378 8 11.6127 8C14.2747 8 16.4504 9.99072 16.6 12.5C17.1583 12.7354 17.6501 13.106 18.0408 13.5659"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      </svg>`;
      break;
    case weatherStyle.indexOf("Clear") !== -1:
      themeClass = "suny-theme";
      iconSVG = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="100px"
      height="100px"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`;
      break;
    case weatherStyle.indexOf("Rain") !== -1:
      themeClass = "rain-theme";
      iconSVG = `<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
      width="100px"
      height="100px"
      viewBox="0 0 32 32"
      version="1.1"
    >
      <title>rain-2</title>
      <desc>Created with Sketch Beta.</desc>
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="0.1"
        fill="none"
        fill-rule="evenodd"
        sketch:type="MSPage"
      >
        <g
          id="Icon-Set"
          sketch:type="MSLayerGroup"
          transform="translate(-153.000000, -827.000000)"
          fill="#000000"
        >
          <path
            d="M175,849 L161,849 C161,849 154.962,848.381 155,843 C155.021,839.964 157.813,837.25 161,837 C161,832.858 163.651,829 168,829 C171.433,829 173.723,831.096 174.539,834.014 C179.493,833.798 182.844,837.718 183,841 C183.21,845.413 178.601,849 175,849 L175,849 Z M176.067,832.028 C174.599,829.053 171.543,827 168,827 C163.25,827 159.37,830.682 159.033,835.345 C155.542,836.34 153,839.39 153,843 C153,847.26 156.54,850.731 161,850.977 C161,850.977 174.831,851 175,851 C180.247,851 185,846.747 185,841.5 C185,836.445 181.048,832.323 176.067,832.028 L176.067,832.028 Z M178,854 C177.448,854 177,854.447 177,855 L177,858 C177,858.553 177.448,859 178,859 C178.552,859 179,858.553 179,858 L179,855 C179,854.447 178.552,854 178,854 L178,854 Z M172,854 C171.448,854 171,854.447 171,855 L171,858 C171,858.553 171.448,859 172,859 C172.552,859 173,858.553 173,858 L173,855 C173,854.447 172.552,854 172,854 L172,854 Z M160,854 C159.448,854 159,854.447 159,855 L159,858 C159,858.553 159.448,859 160,859 C160.552,859 161,858.553 161,858 L161,855 C161,854.447 160.552,854 160,854 L160,854 Z M166,854 C165.448,854 165,854.447 165,855 L165,858 C165,858.553 165.448,859 166,859 C166.552,859 167,858.553 167,858 L167,855 C167,854.447 166.552,854 166,854 L166,854 Z"
            id="rain-2"
            sketch:type="MSShapeGroup"
          ></path>
        </g>
      </g>
    </svg>`;
      break;
    case weatherStyle.indexOf("Snow") !== -1:
      themeClass = "snow-theme";
      iconSVG = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="100px"
      height="100px"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M11.9994 3V7M11.9994 7V17M11.9994 7L8.99943 4M11.9994 7L14.9994 4M11.9994 17V21M11.9994 17L8.99943 20M11.9994 17L14.9994 20M4.20624 7.49999L7.67034 9.49999M7.67034 9.49999L16.3306 14.5M7.67034 9.49999L3.57227 10.5981M7.67034 9.49999L6.57227 5.40191M16.3306 14.5L19.7947 16.5M16.3306 14.5L17.4287 18.5981M16.3306 14.5L20.4287 13.4019M4.2067 16.5L7.6708 14.5M7.6708 14.5L16.3311 9.49999M7.6708 14.5L3.57273 13.4019M7.6708 14.5L6.57273 18.5981M16.3311 9.49999L19.7952 7.49999M16.3311 9.49999L17.4291 5.40192M16.3311 9.49999L20.4291 10.5981"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`;
      break;
    default:
      break;
  }

  document.body.className = themeClass;
  iconElement.innerHTML = iconSVG;
}

function getCurrentDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");

  const currentDate = `${hours}:${minutes} ${day}/${month}/${year}`;

  return currentDate;
}

fetch(ApiLink)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((weatherApi) => {
    getApi(weatherApi);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });

function getApi(weatherApi) {
  // console.log(weatherApi);
  const weatherStyle = weatherApi.list[0].weather[0].main;
  const tempurate = Math.round(weatherApi.list[0].main.temp - 273);

  elements.t_text.innerText = `${tempurate}°C`;
  elements.w_text.innerText = `${weatherStyle}`;
  elements.d_text.innerText = `${getCurrentDate()}`;

  setWeatherIcon(weatherStyle);
}
