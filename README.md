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

## UML Adatbázis diagram

![] (https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.drawio#R7VrbcuI4EP0aqmYfQlk2NvBojCdhA4SxMzvJo4IFqGIs1igTyNevZMv4IptwzU5SpKjEarVacl9ON63UNGu%2Bug7hYjYgHvJrquKtalq3pqoA6Cr7wynrmGJoRkyYhtgTTCnBxW9IEBVBfcEeWuYYKSE%2BxYs8cUyCAI1pjgbDkLzm2SbEz%2B%2B6gFMkEdwx9GXqL%2BzRWUxtqc2UfoPwdJbsDIx2PDOHCbN4k%2BUMeuQ1Q9LsmmaFhND4ab6ykM%2BVl%2BglXve9YnZzsBAFdJcFf1%2F9O5uMrLfhA8GE%2FHh%2BdIfrq0Ys5Tf0X8QLd23r1hUnputEDctXPPdhwEadCQmoK2YUNh7PsO%2F14Zq88GMsKRw%2FJ6POjIT4jfFDn00BRmDTIRVWVg0uDfu%2BRXwSMkJAog3SRS4XJrYJ0ZItGyWvCwqkAVzlGPtwSZMDEt%2BHiyV%2Bio7MF85hOMVBh1BK5oJJ6AGFFK0qFQw2ZmP%2Bjsgc0XDNWJIFTS1eIly9LQz%2FmvoNaAnaLOMzTUGDwlWnG8mpNdmDMOgextUl4%2Fa6Nc1kpN7w3r62HfY0cnoD03lkT7c2%2B82CUwNcH5bpdBNu03HMR8klmKJoZNGQPKOCCUusCn08DdjQRxO%2BjGsaszAzBZmSBRe2gGMcTPsRT7eRUhyhLk4ibO3Ej0Jphj0PBdzohEIKnzZOuSA4oJE%2B9Q77MA1bSl2v6ezgFhuDdMw%2BnD2kFgnYu0AcGRsx93lF3IV284zq4JLdRbiHauzmHo3GmdxD1ST%2FkIyMAs%2FkKJqJTjpPgplNilAGahLbCbeH4ZwE3v0MB4WwB42E8B3zA0f2Qh5DXbEts8WMTEkAfTul8s0y%2FPFB%2BaoDTMJSCAMAtI2vVW66EPmQ4t%2F5TcsMI5aOuBumCNFo5gCiGPhL8hKOkViTRfKCGFXJyzEKcuK3k%2BQw08B1hk3EyK6nBcX8UmBP5iv42UN8gNRhN4o9woflBAbq9XogOXKUFTIAkXHjnZDJh0%2FI77B0NA3JS%2BAl4MbgchL9JIlR%2BHjqo6IwEVun5cAhgBJHbGUCuhJydvbS4%2BBDTi%2FgELWHMdR9Yr1%2FqNpbktZ5qr5UbKeo2DaInMnJaqMkJ4Mi5J7MvO0jarahObBj3n9Mx7oxnW%2BqrvyVYRiYQ7MgbDPXNQfmtV01ezOqXGe7ltMb3ffuhlv37g2uXcfasHR6Q%2FYK3wbmQ5bJ6puuWybmUnvuCVkVBUx17Vnu59q5is%2Fk%2B33G0X%2B6tnPBsUNwTAf50kvVdsUx9Vw4BsARQMY94V0wswdmr7%2BVY8TA5Ned093K5Nz1C%2Fvk5y%2FYszf2AKXcW%2FcEn%2FbZsEctxZ5L5%2BtU%2BAPA%2F936AnJv46eEP5kaxrqVZi9hv2%2FYq%2FuG%2FQf3uwzJJ5Sv0CrYHpsbaE1is70l5so7O7qek6BreQFkMlkiKpnnBN0dTS4SJWtlOpT5nmN5o3LTfCy0NU%2FaoYz3ZO%2F%2BwBfXgWIkhMeIoChaQugm4B2P1tnRCIWYqRCFtZ2bnkkHJuok7oCP7zZCq3L5sZ3QYsWqHNgLbRhqva2rWksRv4283GKBe6LeqKGUn7%2FqmLp%2BJL%2F2Ac1UTa7ZvwRAbsGWP6SXqskV6Vftpb6j949V%2B343YLvkF%2Bki7Bz5JeJfYcrTyxVLJ0AXhDi9NDfjNLvwwTozKOaWfF3LXEKJfrKJDLC81conMq3R%2FCyJTP%2BQPCY1VHbNY1qr4ivUyS%2F1CvsYze3n0hvb%2BM%2BUiEpu9b5oFvqTbvQ0%2BUZPOfQy9TNkotPe6lXc1Rcu0Zt1PS%2FikG9PbJj%2B31jMnv73nWb%2FBw%3D%3D)
