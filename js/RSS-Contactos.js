document.addEventListener("DOMContentLoaded", function() {
    var url = 'https://noticias.sapo.pt/rss';
  
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://api.rss2json.com/v1/api.json?rss_url=" + url, true);
  
    xhr.onload = function() {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var noticias = data.items;
  
        var noticiasMenu = document.getElementById('noticias-menu');
  
        for (var i = 0; i < 4; i++) {
          var title = noticias[i].title;
          var link = noticias[i].link;
          var thumbnail = noticias[i].enclosure?.link || 'placeholder.png'; 
  
          var li = document.createElement('li');
          li.classList.add('noticia-item');
  
          var img = document.createElement('img');
          img.classList.add('noticia-thumbnail');
          img.src = thumbnail;
  
          var a = document.createElement('a');
          a.classList.add('noticia-link');
          a.href = link;
          a.target = "_blank";
          a.textContent = title;
  
          li.appendChild(img);
          li.appendChild(a);
  
          noticiasMenu.appendChild(li);
        }
      } else {
        alert('Ocorreu um erro ao carregar as notícias.');
      }
    };
  
    xhr.send();
  });
  