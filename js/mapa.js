function initMap() {
    const officeLatitude = 38.73356277955448;
    const officeLongitude = -9.141164584806258;
  
    const mymap = L.map("map").setView([officeLatitude, officeLongitude], 13);
  
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(mymap);
  
    const officeIcon = L.icon({
      iconUrl: "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });
  
    const officeMarker = L.marker([officeLatitude, officeLongitude], { icon: officeIcon }).addTo(
      mymap
    );
    officeMarker.bindPopup("<b>Escritório</b>").openPopup();
  
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;
  
        const userIcon = L.icon({
          iconUrl:
            "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
        });
  
        const userMarker = L.marker([userLatitude, userLongitude], { icon: userIcon }).addTo(
          mymap
        );
        userMarker.bindPopup("<b>Sua localização</b>").openPopup();
  
        L.Routing.control({
          waypoints: [
            L.latLng(userLatitude, userLongitude),
            L.latLng(officeLatitude, officeLongitude),
          ],
          routeWhileDragging: true,
          lineOptions: {
            styles: [{ color: "#3388ff", opacity: 0.7, weight: 5 }],
          },
        }).addTo(mymap);
      });
    }
  }
  
  window.onload = function () {
    initMap();
  };
  