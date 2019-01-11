# devops-gulp

## Linki

https://gulpjs.com/ - oficjalna strona gulp.js
https://nodejs.org/en/ - oficjalna strona node.js

## Zadania 1

1. Upewnij się, ze node oraz gulp są zainstalowane globalnie:
   > node -v
   > gulp -v
2. Jezeli node nie jest zainstalowany, zainstaluj go z tej strony:
   > https://nodejs.org/en/
3. Jezeli gulp nie jest zainstalowany globalnie, zainstaluj go globalnie tą komendą:
   > npm install gulp-cli -g
4. Przejdz w terminalu do katalogu projektu i uruchom instalację pakietów:
   > npm install
5. Obejrzyj plik gulpfile.js.
6. Uruchom funkcję domyslną komendą:
   > gulp
7. Uruchom funkcję 'task' komenda:
   > gulp task
8. Dodaj swoją funkcję i ją wykonaj.

## Zadania 2

1. Zainstaluj 'gulp-sass' komendą:
   > npm install gulp-sass -D
2. Zmień branch na 'part-2'
3. Wejdź do gulpfile.js i sprawdź to, co się zmieniło.
4. Uruchom w przeglądarce plik index.html.
5. Uruchom zadanie gulpa o nazwie 'styles' komentą:
   > gulp styles
6. Odśwież stronę i sprawdź zmiany. Sprawdź zmiany w folderze projektu.
7. Zmień kolor backgroundu w pliku main.scss na inny i uruchom zadanie 'sass' ponownie. Sprawdź zmiany.
8. Zmień lokalizację pliku i stwórz nowe zadanie, które kompiluje nowy plik sass do pliku css i użyj go w index.html.

## Zadanie 3

1. Zmień branch na 'part-3'
2. Wejdź do gulpfile.js i sprawdź to, co się zmieniło.
3. Uruchom w przeglądarce plik index.html.
4. Uruchom zadanie gulpa o nazwie 'styleswatch' komentą:
   > gulp styleswatch
5. Odśwież stronę i sprawdź zmiany. Sprawdź zmiany w folderze projektu.
6. Zmień kolor backgroundu w pliku main.scss na inny i od razu sprawdź zmiany na stronie. Odświe stronę i sprawdź jeszcze raz.

## Zadanie 4

1. Zmień branch na 'part-4'
2. Zainstaluj zalezności komendą:
   > npm install --save-dev gulp-babel @babel/core @babel/preset-env
3. Wejdź do gulpfile.js i sprawdź to, co się zmieniło.
4. Uruchom w przeglądarce plik index.html.
5. Uruchom zadanie gulpa o nazwie 'scripts' komentą:
   > gulp scripts
6. Odśwież stronę i sprawdź zmiany. Sprawdź zmiany w folderze projektu.
7. Uruchom zadanie gulpa o nazwie 'scriptsswatch' komentą:
   > gulp scriptswatch
8. Odśwież stronę i sprawdź zmiany. Sprawdź zmiany w folderze projektu.
9. Zmień imię w pliku index.js na inne i od razu sprawdź zmiany na stronie. Odświe stronę i sprawdź jeszcze raz.
