
// Função para inicializar o mapa
function initMap() {
    var officeLatitude = 38.73356277955448; // Latitude do escritório (substitua com a latitude correta)
    var officeLongitude = -9.141164584806258; // Longitude do escritório (substitua com a longitude correta)

    // Configuração do mapa
    var mymap = L.map('map').setView([officeLatitude, officeLongitude], 13);

    // Adicione um layer do OpenStreetMap ao mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(mymap);

    // Adicione um marcador para a localização do escritório
    var officeIcon = L.icon({
        iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    });

    var officeMarker = L.marker([officeLatitude, officeLongitude], { icon: officeIcon }).addTo(mymap);
    officeMarker.bindPopup("<b>Escritório</b>").openPopup();

    // Verifique se a geolocalização é suportada pelo navegador
    if ('geolocation' in navigator) {
        // Obtenha a posição atual do usuário
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLatitude = position.coords.latitude;
            var userLongitude = position.coords.longitude;

            // Adicione um marcador para a localização do usuário
            var userIcon = L.icon({
                iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34]
            });

            var userMarker = L.marker([userLatitude, userLongitude], { icon: userIcon }).addTo(mymap);
            userMarker.bindPopup("<b>Sua localização</b>").openPopup();

            // Trace uma rota entre a localização do usuário e o escritório
            L.Routing.control({
                waypoints: [
                    L.latLng(userLatitude, userLongitude),
                    L.latLng(officeLatitude, officeLongitude)
                ],
                routeWhileDragging: true,
                lineOptions: {
                    styles: [{ color: '#3388ff', opacity: 0.7, weight: 5 }]
                }
            }).addTo(mymap);
        });
    }
}

// Chame a função de inicialização do mapa quando a página for carregada
window.onload = function() {
    initMap();
    };
