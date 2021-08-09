const solDay = document.querySelector(".day");
const select = document.querySelector(".form-select");
let content = document.getElementById("content");
function getData() {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" +
        solDay.value +
        "&camera=" +
        select.value +
        "&api_key=rrjsobD0npd5BmhuKcCKOcaBo1Xa65O0Q4XvZPpi"
    )
      .then((res) => res.json())
      .then((data) => {
				while (content.firstChild){
					content.removeChild(content.firstChild);
				}
				if (data.photos.length === 0) {
					let noPhoto = document.createElement("h2")
					noPhoto.innerHTML = "No photos available for this camera on Sol " + solDay.value+"."
					content.appendChild(noPhoto)
				} else {
					
					console.log(data);
					
					for (let i = 0; i < data.photos.length; i++) {
						const image = document.createElement("img");
						const title = document.createElement("h4");
						const photo = data.photos[i];
						image.src = photo.img_src;
						title.innerHTML = photo.earth_date;
						content.appendChild(title);
						content.appendChild(image);
					}
        }
      });
    
  }

