# **Hearthstone kártya katalogizáló:**

## *Funkcionális követelmények:*

 - A „Kártyák” oldalon a Hearthstone játék kártyáit lehet megtekinteni
   
 - A további funkciók :
	 - Rá lehet keresni egy adott kártyára és bővebb információkat megtekinteni róla:
		 - A keresés különböző szempontok alapján történik (támadási erő, életpont, mana)
	 - A látogatók tudnak regisztrálni az oldalra és ezzel további funkciókat oldanak fel az oldalon
		 - Bejelentkezett felhasználók össze tudnak állítani egy vagy több paklit a fent lévő kártyákból
		 - A paklikat lehet módosítani: kártyát kivenni belőlük, illetve hozzáadni is lehet a paklihoz kártyát; paklit átnevezni
	 - Az admin felhasználók feltölthetnek új kártyákat a katalógusba, (minden adat 
 megadásával)

- Az adatok tárolása H2 adatbázisban történik, 4 különböző táblában:
Az oldal betöltésekor automatikusan lekérdeződnek az adatok a fent lévő kártyákról
Ha pedig egy adott kártyára kattintunk, a táblából az adott kártyára vonatkozó adatok > lesznek lekérdezve

## *Nem funkcionális követelmények:*

- ### hatékonyság:
	- válaszideje gyors minden funkcióra, 1 másodperc legyen maximum
	- adattároló és memóriaigénye arányos a teljes adatmennyiséggel
	- A alkalmazásnak ne legyen szüksége 1Ghz-nél nagyobb számítási sebességre
	- Az alkalmazás használatához legfeljebb 1MB/s sávszélesség legyen szükséges
	- Az indítás mindig ugyanannyi időt vesz igénybe, ez legfeljebb 3mp
	- A bezárás hosszabb időt vehet igénybe a teljes adatmennyiségtől függően, de nem lehet több, mint 10mp

- ### megbízhatóság:
	-  A funkciók mindig elérhetőek és végrehajtódnak akkor is, ha az adatok sérülnek
	- Ha a program mégis lefagyna, a felhasználónak muszáj, hogy engedélyezve legyen az erőltetett leállítás majd esetleg az újraindítás.
	- A felhasználói bevitel ellenőrzött, csak helyes input esetén reagál az alkalmazás

- ### hordozhatóság:
	- Webes alkalmazás, ami szerveren fut, internetről elérhető
	- Használatához egy böngészőre van szükség
	- Az alkalmazás akárhol elérhető, nem csak otthoni használatra van tervezve
	
- ### biztonság:
	- Az adatok csupán a felhasználónak, illetve az adminnak elérhetőek, harmadik fél felé nincsenek kiadva.

- ### felhasználhatóság:
	- Az alkalmazás főként a fiatalabb generációt célozza meg, mivel a játék közönsége is a fiatalabb generáció.
	- Az alkalmazás megértéséhez a játék ismerete szükséges, mint külső forrás.
	- Fejlesztők számára könnyen kezelhető.

- ### működési:
	- Egyszerre egy felhasználó tudja igénybe venni a programot egyetlen gépen.
	- Az átlagos használati idő fél-1 óra.
	- A használati idő alatt a program funkciói folyamatosan igénybe vannak véve.
	- A felhasználók többsége minimális informatikai ismeretekkel rendelkezik.
	
- ### fejlesztési:
	- *Fejlesztői környezet:* IntelliJ IDEA Ultimate Edition 2018.2.4 x64
	-  *Felhasznált programozási nyelv:* Java Spring és Angular Javascript
	-  *Programozási paradigma:* OOP(Objektum Orientált Programozás)
	
- ### külső követelmények:
	- A fejlesztők az alábbiakban ismertetik adatkezelési elveiket. Adatkezelési alapelveik összhangban vannak az adatvédelemről szóló jogszabályokkal:
		- 1998.évi XIX. törvény – a büntetőeljárásról
		- 2003.évi C. törvény – az elektronikus hírközlésről
		- 2011.évi CXII. törvény – az információs önrendelkezési jogról és az információszabadságról
	- Személyes adat csak megfelelő tájékoztatáson alapuló beleegyezéssel kezelhető.
	- Az érintettet egyértelműen és részletesen tájékoztatni kell az adatai kezelésével kapcsolatos minden tényről.
	- Az adatokért megtesz minden olyan technikai, biztonsági és szervezési intézkedést, mely az adatok biztonságát garantálja.
	- A felhasználó kérhet tájékoztatást a személyes adatai kezeléséről, illetve kérheti az adatok helyesbítését, valamint törlését.
	- A felhasználó jogainak megsértése esetén a fejlesztők ellen bírósághoz fordulhat.
	
## *Szerepkörök:*
- **admin:** A katalógus kezelője, a legmagasabb szerepkör
-  **bejelentkezett (és regisztrált) felhasználó:** A kártyákból paklikat tud létrehozni, módosítani és törölni
 - **látogató:** A kártyák között tud böngészni és részletesebb információkat megtudni róluk, illetve beregisztrálni

## *Fogalomjegyzék*

**Életerő:** Jobb alsó sarokban található, egy vízcsepp forma vörössel kitöltve. Ha 0 lesz a kártya elpusztul és többet nem használható. Valamint nekünk játékosoknak is van életerőnk, kezdetben 30, amely ha a 0-át eléri, a játék végét jelenti. Ez a kasztból a kezdeti hősünk életereje.

**Támadási erő:** A kártya támadási ereje a bal alsó sarokban egy sárga gömbben található, ezzel tudjuk meg az ellenfél életerejéből mennyit vesz el, ha támad az adott kártya.

**Mana:** A kártya leidézéséhez szükséges, a bal felső sarokban található szám egy kék hatszögben.
**A kártya kasztja:** Különböző kasztok találhatóak meg a játékban amelyek a következő színekkel vannak jelölve:

 > 1. Világoskék -> Mage
>  2. Sárga -> Paladin
 > 3. Piros -> Warrior
 > 4. Narancssárga -> Druid
 > 5. Lila -> Warlock
 > 6. Fehér -> Priest
> 7. Zöld -> Hunter
 > 8. Sötétkék -> Shaman 
 > 9. Sötétszürkés kék -> Rogue
 > 10. Barna -> Neutral
 
### **A kártya típusa:**
 
 1. *Fegyver:* A fegyver kártyák sötét szürke-fekete színűek, hasonlóan a Rogue kártyákhoz, azzal a különbséggel, hogy a kört, amiben a kép szerepel, hat darab tüske veszi körül. A fegyvereket a hősök használhatják és támadási erejük van, illetve meg van adva egy érték a jobb alsó sarokban, hogy hányszor lehet őket használni. Azután minden fegyver elpusztul.
 
 2. *Varázslat:* A varázslat kártyáknak csupán manájuk van, és egyszer használatosak. Valamilyen különleges hatást biztosítanak vagy a hősöknek vagy a minionoknak. Minden kasztnak vannak hős kártyái.

3. *Hős:* A hős kártyák a kezdeti hősünket módosítják, valamilyen új és az adott helyzetben jobb saját hős képességgel rendelkező hőssel, illetve több életerővel (általában). A hős, amellyel a játék elején kezdünk is ide sorolható, habár az kártya formában nem jelenik meg a játék során.

4. *Minion:* A minion kártyák a leggyakrabban használt kártyák. Egy kasztban nagyon sokféle és nagyon sok mennyiségű is van belőle. Ezekkel lehet támadni, az ellenfél hősét leggyakrabban és ezek is védenek minket az ellenfél támadásaitól. Ők a mi saját harcosaink. Sokféle képességgel bírnak, ők befolyásolják a leggyakrabban a játék menetét.
