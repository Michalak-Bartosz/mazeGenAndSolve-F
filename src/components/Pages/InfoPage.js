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
          download="Instrukcja.pdf"
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
          <p>
            &ensp;&ensp;&ensp;Aplikacja webowa "MazeGen&Solve" została stworzona
            przy użyciu: REST API oraz modułu odpowiadającego za interakcję z
            użytkownikiem za pośrednictwem przeglądarki (ang. frontend).
          </p>
          <p>
            &ensp;&ensp;&ensp;Pierwszy moduł oparty jest na technologii Java w
            wersji 16 oraz frameworku Spring Boot w wersji 2.5.3. Moduł
            odpowiedzialny za interfejs użytkownika został zbudowany w oparciu o
            język programowania JavaScript oraz bibliotekę React.js. W celu jego
            uruchomienia należy skorzystać z platformy Node.js w wersji 16.9.1
            bądź wyżej, która została oparta na środowisku wykonawczym
            JavaScript Chrome i służy do łatwego tworzenia szybkich i
            skalowalnych aplikacji sieciowych.
          </p>
          <p>
            &ensp;&ensp;&ensp;Wykorzystanie tych rozwiązań pozwoliło stworzyć
            stronę internetową spełniającą wymagania przedmiotu. W rozwiązaniu
            jako wybraną technologię zaimplementowałem oddzielny serwis REST API
            z bazą danych do przechowywania informacji przetwarzanych w
            aplikacji. System zarządania bazą danych który wybrałem to H2. Baza
            danych użyta w projekcie przechowywana jest w pamięci maszyny na
            której działa aplikacja.
          </p>
          <p>
            &ensp;&ensp;&ensp; Framework React.js generuje HTML'a poprzez
            wywołanie funkcji createRoot() oraz metody render(). Pierwsza z nich
            przyjmuje jeden argument, którym jest element HTML, w którym
            komponenty React powinny być wyświetlone. Druga odpowiada za
            renderowanie komponentów React. W folderze public projektu znajduje
            się plik index.html, który zawiera w sobie element {"<div>"} o id
            'root'. Jest on argumentem metody createRoot() i na nim wywoływana
            jest runkcja render(), która jako argument przyjmuje komponent
            React, który przechowuje w sobie pozostałe komponenty. Komponenty
            React tworzy się przy pomocy JSX (ang. JavaScript XML). Jest to
            format zapisu kodu HTML oraz XML wewnątrz języka JavaScript.
            Komponenty React zostały przeze mnie sformatowane przy pomocy CSS.
            Napisałem je sam - bez pomocy zewnętrznych bibliotek.
          </p>
          <p>
            &ensp;&ensp;&ensp;W celu spradzenia kompatybilności przeprowadziłem
            testy strony na następujących popularnych przeglądarkach:
          </p>
          <ul className="list-info">
            <li>Firefox,</li>
            <li>Google Chrome,</li>
            <li>Microsoft Edge,</li>
            <li>Opera GX,</li>
            <li>Brave.</li>
          </ul>
          <p>Na każdej z nich strona internetowa działała poprawnie.</p>
          <p>
            &ensp;&ensp;&ensp;Jeśli chodzi o dostępność dla osób
            niepełnosprawnych strona została zaprojektowana tak, że nie posiada
            obrazków, a każdy z komponentów jeśli możliwe jest jego
            wygenerowanie posiada opis. Nawigacja została przemyślana i
            najważniejsze elementy sterujące znajdują się na górnym pasku
            nawigacji strony. Element pozwalający na podejrzenie wygenerowanych
            labiryntów znajduje się na dole strony i można z niego skorzystać w
            każdym momencie korzystania z rozwiązania.
          </p>
          <p>
            &ensp;&ensp;&ensp;Serwis posiada czytelne kolory, kontrastujące ze
            sobą w celu ułatwienia korzystania z rozwiązania. Czcionki oraz ich
            wielność zostały dobrane w taki sposób, aby były czytelne. Podczas
            testów strony nie odnotowałem migania elementów oraz innych
            utrudniających korzystanie anomalii.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
