
     console.log("coucou");
     // Fonction pour afficher ou masquer la liste déroulante
         function Afficher() {
            var dropdownMenu = document.querySelector('.dropdown-menu');
            var isOpen = dropdownMenu.classList.contains('show');
          
            if (!isOpen) {
              dropdownMenu.classList.add('show');
            } else {
              dropdownMenu.classList.remove('show');
            }
          }
          
          // Ajouter un événement de clic au bouton dropdown-toggle
          document.getElementById('dropdownMenuButton3').addEventListener('click', function(event) {
            event.stopPropagation(); // Empêche la propagation de l'événement de clic sur le document
            Afficher();
          });
          
          // Fermer la liste déroulante lorsque l'utilisateur clique en dehors de celle-ci
          document.addEventListener('click', function(event) {
            var dropdownMenu = document.querySelector('.dropdown-menu');
            var targetElement = event.target;
          
            if (!dropdownMenu.contains(targetElement)) {
              dropdownMenu.classList.remove('show');
            }
          });
          
          // Fonctions pour rediriger vers les différentes pages
          function redirigerVersSelection() {
            window.location.href = "selection.html";
          }
          
          function redirigerVersAp() {
            window.location.href = "ap.html";
          }
          
          function redirigerVersSup() {
            window.location.href = "sup.html";
          }
          
          function redirigerVersIp() {
            window.location.href = "ip.html";
          }
          function redirigerVersAbout() {
            window.location.href = "about.html";
          }
          
          
            