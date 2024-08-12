---
tags: [Langages de programmation, Programmation]
---

# Liste des langages de programmation

Découvre une liste non-exhaustive des langages de programmation et de leur utilisation.

## A

### ActionScript

- **Date de création :** 1998
- **Créateur :** Macromedia (acquis par Adobe Systems)
- **Description :** ActionScript est un langage de script dérivé de JavaScript, utilisé principalement pour le développement d'applications sur la plateforme Adobe Flash. Il permet de contrôler l'interactivité des contenus multimédias, des animations, et des jeux sur le web.
- **Exemple d'utilisation :**
  ```actionscript
  var a:int = 5;
  var b:int = 10;
  var sum:int = a + b;
  trace("La somme est : " + sum);
  ```

### APL

- **Date de création :** 1966
- **Créateur :** Kenneth E. Iverson
- **Description :** APL (A Programming Language) est un langage de programmation destiné à la manipulation des données, utilisant une notation symbolique concise. Il est particulièrement adapté pour le traitement des tableaux et a influencé de nombreux autres langages et paradigmes de programmation.
- **Exemple d'utilisation :**
  ```apl
  5 + 10  ⍝ Additionne 5 et 10
  ```

### AWK

- **Date de création :** 1977
- **Créateur :** Alfred Aho, Peter Weinberger, et Brian Kernighan
- **Description :** AWK est un langage de programmation utilisé principalement pour le traitement de texte et de fichiers. Il est couramment utilisé dans les scripts Unix pour extraire, manipuler et analyser des données textuelles.
- **Exemple d'utilisation :**
  ```awk
  BEGIN { a = 5; b = 10; sum = a + b; print "La somme est : " sum }
  ```

## B

### Bash

- **Date de création :** 1989
- **Créateur :** Brian Fox pour le projet GNU
- **Description :** Bash (Bourne Again SHell) est un interpréteur de commandes Unix et un langage de script, utilisé principalement dans les systèmes Linux et macOS pour automatiser les tâches et gérer les systèmes.
- **Exemple d'utilisation :**
  ```bash
  #!/bin/bash
  a=5
  b=10
  sum=$((a + b))
  echo "La somme est : $sum"
  ```

### BCPL

- **Date de création :** 1967
- **Créateur :** Martin Richards
- **Description :** BCPL (Basic Combined Programming Language) est un langage de programmation influent, conçu pour être simple et portable. Il a inspiré le langage B, qui à son tour a conduit à la création de C.
- **Exemple d'utilisation :**

  ```bcpl
  GET "libhdr"

  LET start() = VALOF
  {
      LET a = 5
      LET b = 10
      LET sum = a + b
      WRITEF("La somme est : %n", sum)
      RESULTIS 0
  }
  ```

### Brainfuck

- **Date de création :** 1993
- **Créateur :** Urban Müller
- **Description :** Brainfuck est un langage de programmation ésotérique, conçu pour être extrêmement minimaliste, avec seulement huit instructions. Il est souvent utilisé pour des défis intellectuels ou des démonstrations de concepts informatiques.
- **Exemple d'utilisation :**
  ```brainfuck
  +++++ +++++           ; initialise la mémoire à 5
  > +++++ +++++ +++++   ; initialise la mémoire suivante à 15
  [<+>-]                ; ajoute les deux valeurs ensemble
  <.                    ; affiche le résultat (15)
  ```

## C

### Clojure

- **Date de création :** 2007
- **Créateur :** Rich Hickey
- **Description :** Clojure est un langage de programmation fonctionnel et une dialecte de Lisp, conçu pour le développement de logiciels concurrentiels et immuables. Il s'exécute sur la machine virtuelle Java (JVM) et est utilisé pour le développement d'applications scalables.
- **Exemple d'utilisation :**
  ```clojure
  (def a 5)
  (def b 10)
  (def sum (+ a b))
  (println "La somme est :" sum)
  ```

### CoffeeScript

- **Date de création :** 2009
- **Créateur :** Jeremy Ashkenas
- **Description :** CoffeeScript est un langage de programmation qui transcrit son code en JavaScript. Il est conçu pour améliorer la lisibilité et la concision du code JavaScript tout en ajoutant des fonctionnalités syntaxiques issues d'autres langages comme Python et Ruby.
- **Exemple d'utilisation :**
  ```coffeescript
  a = 5
  b = 10
  sum = a + b
  console.log "La somme est : #{sum}"
  ```

### COBOL

- **Date de création :** 1959
- **Créateur :** Grace Hopper et le CODASYL (Conference on Data Systems Languages)
- **Description :** COBOL (Common Business-Oriented Language) est un langage de programmation conçu pour les applications commerciales et administratives. Il est toujours largement utilisé dans les systèmes financiers, bancaires, et gouvernementaux.
- **Exemple d'utilisation :**
  ```cobol
  IDENTIFICATION DIVISION.
  PROGRAM-ID. AdditionExample.
  DATA DIVISION.
  WORKING-STORAGE SECTION.
  01 A PIC 9(2) VALUE 5.
  01 B PIC 9(2) VALUE 10.
  01 SUM PIC 9(2).
  PROCEDURE DIVISION.
      ADD A TO B GIVING SUM.
      DISPLAY 'La somme est : ' SUM.
      STOP RUN.
  ```

### Crystal

- **Date de création :** 2011
- **Créateur :** Ary Borenszweig, Juan Wajnerman, et Brian Cardiff
- **Description :** Crystal est un langage de programmation orienté objet, inspiré par Ruby, avec une syntaxe similaire, mais avec des performances proches de celles du C. Il est compilé statiquement et supporte la programmation concurrente avec les fibres.
- **Exemple d'utilisation :**
  ```crystal
  a = 5
  b = 10
  sum = a + b
  puts "La somme est : #{sum}"
  ```

## D

### D

- **Date de création :** 2001
- **Créateur :** Walter Bright
- **Description :** D est un langage de programmation conçu pour combiner l'efficacité du C++ avec la simplicité des langages modernes. Il supporte la programmation impérative, orientée objet, et fonctionnelle, et est utilisé pour des applications de haute performance.
- **Exemple d'utilisation :**

  ```d
  import std.stdio;

  void main() {
      int a = 5;
      int b = 10;
      int sum = a + b;
      writeln("La somme est : ", sum);
  }
  ```

### Dart

- **Date de création :** 2011
- **Créateur :** Google
- **Description :** Dart est un langage de programmation optimisé pour le développement d'applications front-end, notamment pour le framework Flutter. Il permet de créer des interfaces utilisateur réactives et performantes pour le web, le mobile, et le bureau.
- **Exemple d'utilisation :**
  ```dart
  void main() {
    int a = 5;
    int b = 10;
    int sum = a + b;
    print('La somme est : $sum');
  }
  ```

### Dylan

- **Date de création :** Années 1990
- **Créateur :** Apple Computer
- **Description :** Dylan est un langage de programmation orienté objet et fonctionnel, conçu pour développer des applications complexes tout en étant facile à utiliser. Il est partiellement inspiré par Lisp et a été développé à l'origine pour les systèmes de programmation dynamiques.
- **Exemple d'utilisation :**
  ```dylan
  let a = 5;
  let b = 10;
  let sum = a + b;
  format-out("La somme est : ~d", sum);
  ```

## E

### Eiffel

- **Date de création :** 1985
- **Créateur :** Bertrand Meyer
- **Description :** Eiffel est un langage de programmation orienté objet, conçu pour supporter la conception par contrat (Design by Contract). Il met l'accent sur la fiabilité du logiciel et est principalement utilisé dans les domaines où la qualité logicielle est cruciale.
- **Exemple d'utilisation :**
  ```eiffel
  class
      ADDITION
  create
      make
  feature
      make
      do
          local
              a, b, sum: INTEGER
          do
              a := 5
              b := 10
              sum := a + b
              print ("La somme est : " + sum.out + "%N")
          end
  end
  ```

### Elixir

- **Date de création :** 2011
- **Créateur :** José Valim
- **Description :** Elixir est un langage de programmation fonctionnel et concurrent,

conçu pour créer des applications distribuées et scalables. Il s'exécute sur la machine virtuelle Erlang (BEAM) et est utilisé principalement dans le développement de systèmes robustes et à haute disponibilité.

- **Exemple d'utilisation :**
  ```elixir
  a = 5
  b = 10
  sum = a + b
  IO.puts "La somme est : #{sum}"
  ```

### Elm

- **Date de création :** 2012
- **Créateur :** Evan Czaplicki
- **Description :** Elm est un langage de programmation fonctionnel, conçu pour créer des interfaces utilisateur robustes et sans erreurs pour le web. Il compile en JavaScript et offre un système de gestion des effets secondaires pour assurer la fiabilité du code.
- **Exemple d'utilisation :**

  ```elm
  add a b = a + b

  main =
    let
      sum = add 5 10
    in
      text ("La somme est : " ++ String.fromInt(sum))
  ```

## F

### F#

- **Date de création :** 2005
- **Créateur :** Don Syme et Microsoft Research
- **Description :** F# est un langage de programmation fonctionnel, qui fait partie de la plateforme .NET. Il combine les paradigmes fonctionnel, impératif, et orienté objet, et est utilisé pour les analyses de données, les calculs financiers, et les applications d'intelligence artificielle.
- **Exemple d'utilisation :**
  ```fsharp
  let a = 5
  let b = 10
  let sum = a + b
  printfn "La somme est : %d" sum
  ```

### Fortran

- **Date de création :** 1957
- **Créateur :** John Backus et IBM
- **Description :** Fortran (FORmula TRANslation) est l'un des plus anciens langages de programmation, principalement utilisé pour les calculs scientifiques, les simulations, et le traitement numérique. Il a connu de nombreuses évolutions et reste utilisé dans les domaines nécessitant des calculs intensifs.
- **Exemple d'utilisation :**
  ```fortran
  PROGRAM Addition
  INTEGER :: a, b, sum
  a = 5
  b = 10
  sum = a + b
  PRINT *, "La somme est : ", sum
  END PROGRAM Addition
  ```

### Factor

- **Date de création :** 2003
- **Créateur :** Slava Pestov
- **Description :** Factor est un langage de programmation concis et expressif, conçu pour être hautement extensible. Inspiré par Forth, il utilise une pile pour gérer les données et est orienté vers la programmation fonctionnelle.
- **Exemple d'utilisation :**
  ```factor
  5 10 + .  ; Additionne 5 et 10, puis affiche le résultat
  ```

## G

### Go

- **Date de création :** 2009
- **Créateur :** Robert Griesemer, Rob Pike, et Ken Thompson (chez Google)
- **Description :** Go (ou Golang) est un langage de programmation conçu pour le développement de systèmes distribués et parallèles. Il se distingue par sa simplicité, sa gestion automatique de la mémoire, et son support natif de la concurrence avec les goroutines.
- **Exemple d'utilisation :**

  ```go
  package main

  import "fmt"

  func main() {
      a := 5
      b := 3
      fmt.Println("La somme est :", a + b)
  }
  ```

### Groovy

- **Date de création :** 2003
- **Créateur :** James Strachan
- **Description :** Groovy est un langage de script orienté objet pour la plateforme Java, conçu pour améliorer la productivité des développeurs. Il est utilisé dans les scripts, les tests, et les configurations de build, et s'intègre parfaitement avec Java.
- **Exemple d'utilisation :**
  ```groovy
  def a = 5
  def b = 3
  println "La somme est : ${a + b}"
  ```

### GAMS

- **Date de création :** 1976
- **Créateur :** Anthony Brooke et la Banque mondiale
- **Description :** GAMS (General Algebraic Modeling System) est un langage de programmation conçu pour la modélisation mathématique, l'optimisation, et la simulation. Il est utilisé pour résoudre des problèmes complexes de recherche opérationnelle et de gestion des ressources.
- **Exemple d'utilisation :**
  ```gams
  VARIABLES z, a, b;
  EQUATIONS add;
  add.. z =E= a + b;
  MODEL simple /all/;
  a.L = 5;
  b.L = 3;
  SOLVE simple USING LP MAXIMIZING z;
  DISPLAY z.L;
  ```

## H

### Haskell

- **Date de création :** 1990
- **Créateur :** Un comité dirigé par Simon Peyton Jones
- **Description :** Haskell est un langage de programmation fonctionnel pur, avec un typage statique et une évaluation paresseuse. Il est utilisé pour des applications académiques, de recherche, et des projets nécessitant une grande fiabilité et des fonctionnalités avancées.
- **Exemple d'utilisation :**
  ```haskell
  main = print (5 + 3)
  ```

### HTML

- **Date de création :** 1993
- **Créateur :** Tim Berners-Lee
- **Description :** HTML (Hypertext Markup Language) est un langage de balisage utilisé pour créer des pages web. Il permet de structurer le contenu et d'ajouter des éléments multimédias, des liens, et des formulaires dans les documents web.
- **Exemple d'utilisation :**
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Addition</title>
    </head>
    <body>
      <h1>
        La somme de 5 et 3 est :
        <script>
          document.write(5 + 3);
        </script>
      </h1>
    </body>
  </html>
  ```

## I

### Io

- **Date de création :** 2002
- **Créateur :** Steve Dekorte
- **Description :** Io est un langage de programmation orienté prototype, influencé par Smalltalk, Lisp, et Lua. Il est conçu pour être simple, flexible, et facile à comprendre, avec un focus sur la manipulation dynamique des objets et des messages.
- **Exemple d'utilisation :**
  ```io
  a := 5
  b := 3
  (a + b) println
  ```

### Icon

- **Date de création :** 1977
- **Créateur :** Ralph Griswold
- **Description :** Icon est un langage de programmation de haut niveau conçu pour le traitement de chaînes et de structures de données. Il est souvent utilisé pour les tâches de manipulation de texte et d'analyse de données.
- **Exemple d'utilisation :**
  ```icon
  procedure main()
      a := 5
      b := 3
      write("La somme est : ", a + b)
  end
  ```

### Inform

- **Date de création :** 1993
- **Créateur :** Graham Nelson
- **Description :** Inform est un langage de programmation orienté texte, utilisé pour créer des fictions interactives. Il est spécialisé dans la conception de jeux textuels où les joueurs interagissent avec l'environnement à l'aide de commandes textuelles.
- **Exemple d'utilisation :**

  ```inform
  "Simple Addition" by Example Author

  The AdditionRoom is a room. "This is where we solve an addition problem."

  When play begins, say "The sum of 5 and 3 is [5 + 3]."
  ```

## J

### Java

- **Date de création :** 1995
- **Créateur :** James Gosling et Sun Microsystems
- **Description :** Java est un langage de programmation orienté objet, conçu pour être portable, sécurisé, et robuste. Il est utilisé pour le développement d'applications mobiles, de logiciels d'entreprise, et de systèmes embarqués, grâce à la JVM (Java Virtual Machine).
- **Exemple d'utilisation :**
  ```java
  public class Addition {
      public static void main(String[] args) {
          int a = 5;
          int b = 3;
          System.out.println("La somme est : " + (a + b));
      }
  }
  ```

### JavaScript

- **Date de création :** 1995
- **Créateur :** Brendan Eich
- **Description :** JavaScript est un langage de programmation dynamique, principalement utilisé pour le développement web. Il permet de créer des pages web interactives et dynamiques, en manipulant les éléments du DOM et en communiquant avec les serveurs.
- **Exemple d'utilisation :**
  ```javascript
  let a = 5;
  let b = 3;
  console.log("La somme est : " + (a + b));
  ```

### Julia

- **Date de création :** 2012
- **Créateur :** Jeff Bezanson, Alan Edelman, Stefan Karpinski, et Viral B. Shah
- **Description :** Julia est un langage de programmation performant, conçu pour le calcul scientifique, l'analyse de données, et l'intelligence artificielle. Il combine la vitesse du C avec la simplicité d'utilisation des langages de haut niveau.
- **Exemple d'utilisation :**
  ```julia
  a = 5
  b = 3
  println("La somme est : ", a + b)
  ```

## K

### Kotlin

- **Date de création :** 2011
- **Créateur :** JetBrains
- **Description :** Kotlin est un langage de programmation statiquement typé qui fonctionne sur la machine virtuelle Java (JVM) et peut également être compilé en JavaScript ou en code natif. Il est conçu pour être plus concis, sûr et expressif que Java, tout en restant entièrement interopérable avec celui-ci.
- **Exemple d'utilisation :**
  ```kotlin
  fun main() {
      val a = 5
      val b = 3
      println("La somme est : ${a + b}")
  }
  ```

### KRL

- **Date de création :** 1980s
- **Créateur :** Daniel G. Bobrow, et al.
- **Description :** KRL (Knowledge Representation Language) est un langage utilisé pour représenter des connaissances dans les systèmes d'intelligence artificielle. Il permet de modéliser des objets, des actions et des événements, souvent utilisés dans les systèmes experts.
- **Exemple d'utilisation :**

  ```krl
  (define-class (addition)
      (a :type integer)
      (b :type integer))

  (make-instance 'addition '(a 5) '(b 3))
  ```

### KornShell (ksh)

- **Date de création :** 1983
- **Créateur :** David Korn
- **Description :** KornShell, ou ksh, est un langage de script et un interpréteur de commande pour les systèmes Unix. Il est une extension du shell Bourne et inclut des fonctionnalités de programmation avancées, telles que les fonctions, les types de données et les trap handlers.
- **Exemple d'utilisation :**
  ```ksh
  a=5
  b=3
  echo "La somme est : $((a + b))"
  ```

## L

### Lisp

- **Date de création :** 1958
- **Créateur :** John McCarthy
- **Description :** Lisp (LISt Processing) est l'un des plus anciens langages de programmation, et il est fortement influent dans le développement de la programmation fonctionnelle. Il est souvent utilisé en intelligence artificielle, pour le traitement des symboles, et pour les systèmes experts.
- **Exemple d'utilisation :**
  ```lisp
  (+ 5 3)
  ```

### Lua

- **Date de création :** 1993
- **Créateur :** Roberto Ierusalimschy, Luiz Henrique de Figueiredo,

et Waldemar Celes

- **Description :** Lua est un langage de script léger, conçu pour être intégré dans d'autres applications. Il est souvent utilisé dans les jeux vidéo, les systèmes embarqués, et les applications nécessitant un moteur de script rapide et extensible.
- **Exemple d'utilisation :**
  ```lua
  a = 5
  b = 3
  print("La somme est : ", a + b)
  ```

### Ladder Logic (Ladder Diagram)

- **Date de création :** 1960s
- **Créateur :** Développé pour les automates programmables industriels (API)
- **Description :** Ladder Logic est un langage de programmation graphique utilisé pour le contrôle des processus industriels. Il est basé sur la représentation des circuits électriques à relais, permettant de créer des logiques de commande pour les systèmes automatisés.
- **Exemple d'utilisation :**

  ```
  |---[ ]---[ ]---( + )---|
       A     B      C

  Where A = 5, B = 3, and C = A + B
  ```

Voici la version mise à jour du cours en Markdown avec des exemples de code pour effectuer une addition dans chaque langage :

## M

### MATLAB

- **Date de création :** 1984
- **Créateur :** Cleve Moler
- **Description :** MATLAB est un langage de programmation et un environnement de calcul numérique, principalement utilisé pour les calculs scientifiques, l'ingénierie, et l'analyse de données. Il est largement utilisé pour la modélisation mathématique, le traitement du signal, et le contrôle des systèmes.
- **Exemple d'utilisation :**
  ```matlab
  a = 5;
  b = 3;
  c = a + b;
  disp(['La somme est : ', num2str(c)])
  ```

### ML

- **Date de création :** 1973
- **Créateur :** Robin Milner
- **Description :** ML (MetaLanguage) est un langage de programmation fonctionnel statiquement typé, souvent utilisé en recherche académique, en intelligence artificielle, et pour le développement de langages. Il inclut un système de types polymorphiques et une gestion avancée des exceptions.
- **Exemple d'utilisation :**
  ```ml
  let a = 5 in
  let b = 3 in
  let c = a + b in
  print_int c;
  print_newline();
  ```

### Modula-2

- **Date de création :** 1978
- **Créateur :** Niklaus Wirth
- **Description :** Modula-2 est un langage de programmation modulaire, conçu pour la programmation système et le développement de logiciels embarqués. Il succède à Pascal et introduit des concepts de modularité et de contrôle d'accès.
- **Exemple d'utilisation :**
  ```modula-2
  MODULE SumExample;
  FROM InOut IMPORT WriteInt, WriteLn;
  VAR a, b, c: INTEGER;
  BEGIN
      a := 5;
      b := 3;
      c := a + b;
      WriteInt(c, 0);
      WriteLn;
  END SumExample.
  ```

## N

### Nim

- **Date de création :** 2008
- **Créateur :** Andreas Rumpf
- **Description :** Nim combine la performance de C avec la flexibilité des langages de script. Il est conçu pour être efficace, expressif, et facile à utiliser, avec une syntaxe inspirée de Python.
- **Exemple d'utilisation :**
  ```nim
  let a = 5
  let b = 3
  let c = a + b
  echo "La somme est : ", c
  ```

### Neko

- **Date de création :** 2005
- **Créateur :** Nicolas Cannasse
- **Description :** Neko est un langage léger et dynamique, utilisé souvent pour les jeux et les scripts web, accompagné d'une machine virtuelle dédiée.
- **Exemple d'utilisation :**
  ```neko
  var a = 5;
  var b = 3;
  var c = a + b;
  trace("La somme est : " + c);
  ```

### NXT-G

- **Date de création :** 2006
- **Créateur :** LEGO Group
- **Description :** Langage graphique pour programmer le robot LEGO Mindstorms NXT, adapté aux débutants. Pas de code textuel.

## O

### Objective-C

- **Date de création :** 1984
- **Créateur :** Brad Cox et Tom Love
- **Description :** Langage orienté objet basé sur C, utilisé principalement pour le développement sur macOS et iOS.
- **Exemple d'utilisation :**

  ```objectivec
  #import <Foundation/Foundation.h>

  int main() {
      @autoreleasepool {
          int a = 5;
          int b = 3;
          int c = a + b;
          NSLog(@"La somme est : %d", c);
      }
      return 0;
  }
  ```

### OCaml

- **Date de création :** 1996
- **Créateur :** Xavier Leroy et l'INRIA
- **Description :** Langage fonctionnel, impératif, et orienté objet, utilisé dans la recherche et l'industrie.
- **Exemple d'utilisation :**
  ```ocaml
  let a = 5 in
  let b = 3 in
  let c = a + b in
  Printf.printf "La somme est : %d\n" c;
  ```

### Oberon

- **Date de création :** 1986
- **Créateur :** Niklaus Wirth
- **Description :** Langage modulaire utilisé dans les systèmes d'exploitation et les environnements de développement.
- **Exemple d'utilisation :**
  ```oberon
  MODULE SumExample;
  IMPORT Out;
  VAR a, b, c: INTEGER;
  BEGIN
      a := 5;
      b := 3;
      c := a + b;
      Out.Int(c, 0); Out.Ln;
  END SumExample.
  ```

## P

### Pascal

- **Date de création :** 1970
- **Créateur :** Niklaus Wirth
- **Description :** Langage impératif conçu pour enseigner la programmation structurée.
- **Exemple d'utilisation :**
  ```pascal
  program SumExample;
  var a, b, c: integer;
  begin
      a := 5;
      b := 3;
      c := a + b;
      writeln('La somme est : ', c);
  end.
  ```

### Perl

- **Date de création :** 1987
- **Créateur :** Larry Wall
- **Description :** Langage polyvalent, adapté au traitement de texte et à l'administration système.
- **Exemple d'utilisation :**
  ```perl
  my $a = 5;
  my $b = 3;
  my $c = $a + $b;
  print "La somme est : $c\n";
  ```

### PHP

- **Date de création :** 1995
- **Créateur :** Rasmus Lerdorf
- **Description :** Langage de script open-source pour le développement web.
- **Exemple d'utilisation :**
  ```php
  <?php
  $a = 5;
  $b = 3;
  $c = $a + $b;
  echo "La somme est : $c";
  ?>
  ```

## Q

### Q#

- **Date de création :** 2017
- **Créateur :** Microsoft
- **Description :** Langage pour le développement de programmes quantiques.
- **Exemple d'utilisation :**
  ```qsharp
  operation AddTwoNumbers() : Int {
      let a = 5;
      let b = 3;
      return a + b;
  }
  ```

### QBasic

- **Date de création :** 1991
- **Créateur :** Microsoft
- **Description :** Version simplifiée de BASIC, utilisée pour l'enseignement.
- **Exemple d'utilisation :**
  ```qbasic
  a = 5
  b = 3
  c = a + b
  PRINT "La somme est : "; c
  ```

### QuakeC

- **Date de création :** 1996
- **Créateur :** John Carmack
- **Description :** Langage de script pour développer des mods pour le jeu Quake.
- **Exemple d'utilisation :**
  ```quakec
  void() CalculateSum =
  {
      local float a, b, c;
      a = 5;
      b = 3;
      c = a + b;
      bprint("La somme est : ", ftos(c), "\n");
  };
  ```

## R

### R

- **Date de création :** 1993
- **Créateur :** Ross Ihaka et Robert Gentleman
- **Description :** Langage pour les statistiques et le calcul graphique.
- **Exemple d'utilisation :**
  ```r
  a <- 5
  b <- 3
  c <- a + b
  print(paste("La somme est :", c))
  ```

### Ruby

- **Date de création :** 1995
- **Créateur :** Yukihiro Matsumoto
- **Description :** Langage orienté objet, utilisé pour le développement web et l'automatisation.
- **Exemple d'utilisation :**
  ```ruby
  a = 5
  b = 3
  c = a + b
  puts "La somme est : #{c}"
  ```

### Rust

- **Date de création :** 2010
- **Créateur :** Graydon Hoare
- **Description :** Langage performant et sûr, utilisé pour le développement de systèmes.
- **Exemple d'utilisation :**
  ```rust
  fn main() {
      let a = 5;
      let b = 3;
      let c = a + b;
      println!("La somme est : {}", c);
  }
  ```

## S

### Scala

- **Date de création :** 2003
- **Créateur :** Martin Odersky
- **Description :** Langage multi-paradigme, combinant la programmation fonctionnelle et orientée objet.
- **Exemple d'utilisation :**
  ```scala
  object SumExample {
      def main(args: Array[String]): Unit = {
  val a = 5
  val b = 3
  val c = a + b
  println(s"La somme est : $c")
  }
  }
  ```

### Scheme

- **Date de création :** 1975
- **Créateur :** Guy L. Steele et Gerald Jay Sussman
- **Description :** Dialecte de Lisp, utilisé dans l'enseignement de la programmation fonctionnelle.
- **Exemple d'utilisation :**

```scheme
(define a 5)
(define b 3)
(define c (+ a b))
(display (string-append "La somme est : " (number->string c)))
(newline)
```

### Smalltalk

- **Date de création :** 1972
- **Créateur :** Alan Kay, Dan Ingalls, et Adele Goldberg
- **Description :** Langage orienté objet, ayant influencé de nombreux autres langages.
- **Exemple d'utilisation :**
  ```smalltalk
  | a b c |
  a := 5.
  b := 3.
  c := a + b.
  Transcript show: 'La somme est : ', c printString; cr.
  ```

## T

### Tcl

- **Date de création :** 1988
- **Créateur :** John Ousterhout
- **Description :** Langage de script polyvalent pour l'automatisation et le développement d'applications.
- **Exemple d'utilisation :**
  ```tcl
  set a 5
  set b 3
  set c [expr $a + $b]
  puts "La somme est : $c"
  ```

### TypeScript

- **Date de création :** 2012
- **Créateur :** Microsoft
- **Description :** Sur-ensemble de JavaScript avec des types statiques, utilisé pour de grandes applications.
- **Exemple d'utilisation :**
  ```typescript
  let a: number = 5;
  let b: number = 3;
  let c: number = a + b;
  console.log(`La somme est : ${c}`);
  ```

## U

### Ubercode

- **Date de création :** 2004
- **Créateur :** Ubercode Software
- **Description :** Langage pour créer des applications Windows facilement, adapté aux débutants.
- **Exemple d'utilisation :**
  ```ubercode
  MESSAGE "La somme est : " + (5 + 3)
  ```

### Unlambda

- **Date de création :** 1999
- **Créateur :** David Madore
- **Description :** Langage ésotérique basé sur les fonctions combinatoires, minimaliste et expérimental.
- **Exemple d'utilisation :**
  ```unlambda
  `r` (λr`r`5 `r 3)
  ```

### Unix Shell (sh)

- **Date de création :** 1977
- **Créateur :** Stephen Bourne
- **Description :** Interpréteur de commandes pour les systèmes Unix, utilisé pour l'automatisation.
- **Exemple d'utilisation :**
  ```sh
  a=5
  b=3
  c=$((a + b))
  echo "La somme est : $c"
  ```

## V

### VHDL

- **Date de création :** 1983
- **Créateur :** Ministère de la Défense des États-Unis
- **Description :** Langage de description matérielle pour la modélisation et la synthèse de circuits électroniques.
- **Exemple d'utilisation :**

  ```vhdl
  library IEEE;
  use IEEE.STD_LOGIC_1164.ALL;

  entity SumExample is
  end SumExample;

  architecture Behavioral of SumExample is
      signal a, b, c: integer := 0;
  begin
      process
      begin
          a <= 5;
          b <= 3;
          c <= a + b;
          report "La somme est : " & integer'image(c);
          wait;
      end process;
  end Behavioral;
  ```

### Verilog

- **Date de création :** 1984
- **Créateur :** Phil Moorby et Prabhu Goel
- **Description :** Langage de description matérielle, utilisé dans la conception de circuits numériques.
- **Exemple d'utilisation :**

  ```verilog
  module sum_example;
      reg [3:0] a, b;
      wire [3:0] c;

      assign c = a + b;

      initial begin
          a = 5;
          b = 3;
          #1;
          $display("La somme est : %d", c);
          $finish;
      end
  endmodule
  ```

### Visual Basic

- **Date de création :** 1991
- **Créateur :** Microsoft
- **Description :** Langage de programmation événementiel et impératif, principalement utilisé pour les applications Windows.
- **Exemple d'utilisation :**
  ```vbnet
  Module SumExample
      Sub Main()
          Dim a As Integer = 5
          Dim b As Integer = 3
          Dim c As Integer = a + b
          Console.WriteLine("La somme est : " & c)
      End Sub
  End Module
  ```

## W

### Wolfram Language

- **Date de création :** 1988
- **Créateur :** Stephen Wolfram
- **Description :** Langage de programmation symbolique, utilisé dans Mathematica pour les calculs mathématiques complexes.
- **Exemple d'utilisation :**
  ```wolfram
  a = 5;
  b = 3;
  c = a + b;
  Print["La somme est : ", c]
  ```

### Whitespace

- **Date de création :** 2003
- **Créateur :** Edwin Brady et Chris Morris
- **Description :** Langage ésotérique où seules les espaces, tabulations, et retours à la ligne sont significatifs.
- **Exemple d'utilisation :**
  (Pas de représentation textuelle possible)

### Wren

- **Date de création :** 2014
- **Créateur :** Bob Nystrom
- **Description :** Langage de script léger et rapide, conçu pour être facilement embarqué dans des applications.
- **Exemple d'utilisation :**
  ```wren
  var a = 5
  var b = 3
  var c = a + b
  System.print("La somme est : " + c)
  ```

## X

### X++

- **Date de création :** 1998
- **Créateur :** Microsoft
- **Description :** Langage orienté objet utilisé dans Microsoft Dynamics AX pour le développement d'applications d'entreprise.
- **Exemple d'utilisation :**
  ```x++
  static void SumExample(Args _args)
  {
      int a = 5;
      int b = 3;
      int c = a + b;
      info(strFmt("La somme est : %1", c));
  }
  ```

### XAML

- **Date de création :** 2006
- **Créateur :** Microsoft
- **Description :** Langage de balisage pour les interfaces utilisateurs dans WPF, UWP, et Xamarin.
- **Exemple d'utilisation :**
  ```xaml
  <TextBlock Text="{Binding Path=Sum}" />
  ```

### Xtend

- **Date de création :** 2012
- **Créateur :** Équipe Eclipse
- **Description :** Langage qui compile en Java, avec une syntaxe plus concise et expressive.
- **Exemple d'utilisation :**
  ```xtend
  def static void main(String[] args) {
      val a = 5
      val b = 3
      val c = a + b
      println("La somme est : " + c)
  }
  ```

## Y

### Yacc (Yet Another Compiler Compiler)

- **Date de création :** 1970
- **Créateur :** Stephen C. Johnson
- **Description :** Outil pour créer des analyseurs syntaxiques, souvent utilisé avec lex.
- **Exemple d'utilisation :**

  ```yacc
  %{
  #include <stdio.h>
  %}

  %%
  sum: NUMBER '+' NUMBER { printf("La somme est : %d\n", $1 + $3); }
  %%
  ```

### Yorick

- **Date de création :** 1996
- **Créateur :** David Munro
- **Description :** Langage interprété pour le traitement numérique et graphique, utilisé en physique.
- **Exemple d'utilisation :**
  ```yorick
  a = 5
  b = 3
  c = a + b
  print, "La somme est : ", c
  ```

## Z

### Zsh (Z Shell)

- **Date de création :** 1990
- **Créateur :** Paul Falstad
- **Description :** Interpréteur de commandes pour les systèmes Unix, plus puissant que sh ou bash.
- **Exemple d'utilisation :**
  ```zsh
  a=5
  b=3
  c=$((a + b))
  echo "La somme est : $c"
  ```

### ZPL (Z-level Programming Language)

- **Date de création :** 1990s
- **Créateur :** Équipe de l'Université de Washington

- **Description :** Langage parallèle pour le calcul haute performance, destiné aux supercalculateurs.
- **Exemple d'utilisation :**
  ```zpl
  program SumExample;
  begin
      a := 5;
      b := 3;
      c := a + b;
      writeln("La somme est : ", c);
  end;
  ```

---

## Définitions

:::note[Programmation ésotérique]
Les langages de programmation ésotériques sont des langages minimalistes, conçus pour être des défis ou des preuves de concept, tant pour leur création que pour leur utilisation.
:::
