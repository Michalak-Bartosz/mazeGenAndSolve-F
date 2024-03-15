import React from "react";
import "./Page.css";
import "./InfoPage.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function InfoPage() {
  return (
    <div className="page-backgroud">
      <div className="page">
        <h1 className="header-info">Informacje na temat strony</h1>
        <div id="Wstep" className="paragraph-info">
          <p>
            &ensp;&ensp;&ensp;Strona "MazeGen&Solve" umożliwia generowanie oraz
            rozwiązywanie labiryntów o zadanej przez użytkownika szerokości oraz
            wysokości. Do algorytmów generujących, które zostały udostępnione
            użytkownikowi należą:
          </p>
          <ul className="list-info">
            <li>randomizowany algorytm DFS,</li>
            <li>randomizowany algorym Kruskala,</li>
            <li>randomizowany algorym Prima,</li>
            <li> randomizowany algorym Aldusa-Bordera.</li>
          </ul>
          <p>
            Algorytmy, za pomocą których możliwe jest rozwiązanie wygenerowanego
            labiryntu to:
          </p>
          <ul className="list-info">
            <li>algorytm Djikstry,</li>
            <li>algorym Astar,</li>
            <li>algorym BFS,</li>
            <li>algorym DFS.</li>
          </ul>
          <p>
            &ensp;&ensp;&ensp;Wysokość oraz szerokość generowanych labiryntów
            została ograniczona do minimum 2 oraz maximum 30 pól. Działanie
            strony zostało przedstawione w plik pdf, który można pobrać z
            następnej sekcji o nazwie "Instrukcja poruszania się po stronie".
          </p>
        </div>
        <h1 className="header-info">Instrukcja poruszania się po stronie</h1>
        <Link
          className="download-info"
          to="/files/Instrukcja.pdf"
          target="_blank"
          download
        >
          Pobierz instrukcję
        </Link>
        <h1 className="header-info">Kod rozwiązania</h1>
        <div>
          <div id="Kod rozwiązania" className="paragraph-info">
            <p>
              &ensp;&ensp;&ensp;Kod rozwiązania dostępny jest w dwóch
              repozytoriach udostępnionych za pośrednictwem strony GitHub. Linki
              znajdują się poniżej.
            </p>
            <ul className="list-info">
              <li>
                <div className="list-item-info">
                  <p>Backend:&nbsp;</p>
                  <a
                    href="https://github.com/Michalak-Bartosz/mazeGenAndSolve-B"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Link
                  </a>
                </div>
              </li>
              <li>
                <div className="list-item-info">
                  <p>Frontend:&nbsp;</p>
                  <a
                    href="https://github.com/Michalak-Bartosz/mazeGenAndSolve-F"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Link
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <h1 className="header-info">
          Uzasadnienie dlaczego strona spełnia wymagania
        </h1>
        <div id="Uzasadnienie" className="paragraph-info">
          &ensp;&ensp;&ensp;Aplikacja webowa "MazeGen&Solve" została stworzona
          przy użyciu: REST API oraz modułu odpowiadającego za interakcję z
          użytkownikiem za pośrednictwem przeglądarki (ang. frontend).
          <br />
          &ensp;&ensp;&ensp;Pierwszy moduł oparty jest na technologii Java w
          wersji 16 oraz frameworku Spring Boot w wersji 2.5.3. Moduł
          odpowiedzialny za interfejs użytkownika został zbudowany w oparciu o
          język programowania JavaScript oraz bibliotekę React.js. W celu jego
          uruchomienia należy skorzystać z platformy Node.js w wersji 16.9.1
          bądź wyżej, która została oparta na środowisku wykonawczym JavaScript
          Chrome i służy do łatwego tworzenia szybkich i skalowalnych aplikacji
          sieciowych.
          <br />
          &ensp;&ensp;&ensp;Wykorzystanie tych rozwiązań pozwoliło stworzyć
          stronę internetową
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
