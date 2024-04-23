/*
Miért jobb a bacground-size: 100% auto; mint a sima 100%

The difference between background-size: 100% auto; and background-size: 100%; lies in 
how they handle the aspect ratio of the background image when resizing.

background-size: 100% auto;

This value specifies that the background image should cover the entire width of the element while maintaining its aspect ratio. 
The auto value for the height ensures that the height of the background image adjusts proportionally based on the width,
preserving the aspect ratio.

Using 100% auto ensures that the background image covers the full width of the element, regardless of its aspect ratio. 
This can be particularly useful when you want the background image to fill the width of the element entirely 
while maintaining its original aspect ratio.


background-size: 100%;
This value sets the width of the background image to cover the entire width of the element without specifying an aspect ratio for the height. 
As a result, the height of the background image may not necessarily maintain its original aspect ratio.


While background-size: 100%; will stretch the background image to cover the entire width of the element, 
it may distort the image if the element's aspect ratio differs from the background image's aspect ratio.


In summary, background-size: 100% auto; is often preferred 
when you want the background image to cover the entire width of the element while preserving its aspect ratio. 
It ensures that the background image scales proportionally, maintaining its original dimensions and avoiding distortion. 

On the other hand, background-size: 100%; stretches the background image to fill the entire width of the element 
but may distort the image if its aspect ratio differs from that of the element.
*******************************************************************************************************************
Mire jó az active, hover, focus stb. és milyen elemeknél használjuk őket 
Ezek pseudo osztályok!!!!!!! 
És attól fűggően, hogy milyen felhasználói interaction van, olyan stílust kapnak css-ben 

1. :hover: Applies styles when the mouse pointer is over the element.

button:hover {
  background-color: red;
}
This CSS rule will change the background color of a button to red when the mouse pointer hovers over it.


2. :active: Applies styles when the element is being activated by the user (e.g., clicked).

button:active {
  transform: translateY(2px);
}
This CSS rule will move a button 2 pixels down when it's being clicked.


3. :focus: Applies styles when the element has keyboard focus.

input:focus {
  border-color: blue;
}
This CSS rule will change the border color of an input field to blue when it's focused.


4. :visited: Applies styles to visited links.

a:visited {
  color: purple;
}
This CSS rule will change the color of visited links to purple.


5. :nth-child(): Applies styles to elements based on their position in the parent.

li:nth-child(odd) {
  background-color: lightgray;
}
This CSS rule will give a light gray background color to odd-numbered list items (li) within their parent.

1. :hover, amit legtöbbször használunk, ez amikor az egér ez az elem fölött van
legtöbbször megváltoztatjuk a border-nek a színét vagy a háttérszínét 

2. :active 
Ez, amikor rákattintunk valamire és akkor történik a változás 

3. :focus
Ezt lehet mondjuk egy input mező esetén használni, amikor belekattintunk az input mezejében, akkor van a változás 

4: visited 
Amikor rákattintunk egy link-re, akkor van a változás 

5: nth-child() 
akkor használjuk, amikor van több elem a parent-ban és csak bizonyos elemeknek akarjuk megváltoztatni valamilyét 
ezt mondjuk egy táblázatnál használtuk 
***********************************************************************
    <header>
        <div class="header-marketing">
            <div class="vertical-text uppercase">
                because we love coffee 
            </div>
            <div>
                <h2>Quality Coffee delivered to your door</h2>
                <p>
                    Everything we do is a matter of heart, body and soul. Our 
                    mission is to provide sustainably souurced, hand-picked, quality 
                    coffee
                </p>
                <button class="brown-bordered-btn">we love coffee</button>
            </div>
        </div>
    </header>

header {
    height: 30vw; ezzel nagyon jól responsive be lehet állítani a magasságot
    background-image: url(../images/menu-header.jpg); ..ki kell jönni és úgy bemenni az images-be
    background-size: 100%; ha ez nincsen beállítva, akkor nagyon rosszul fog kinézni, ha mondjuk nagyobb a kép
    background-position: center; ezzel meg középre helyezzük a képet
}

.header-marketing {
    max-width: 350px;
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-gap: 10px;
}

.header-marketing h2 {
    font-size: 40px;
}

.brown-devider {
    width:2px;
    height:50px;
    background-color:var(--light-brown);
    margin:15px auto;
}

    <div class="container-xl">
        <div class="center-text">
            <h4 class="uppercase color-light-brown">spotlight</h4>
            <h1>Now Roasting</h1>
            <p>
                "Featuring a bright spectrum of flavors and essences"
            </p>
        </div>
        <div class="brown-devider"></div>
    </div>

**************************************************************
Onnan folytatás, ahol a abbahagytuk 

    <div class="container-xl center-text">
        <h1>About us</h1>

        <div class="brown-devider"></div>

        <p class="container-xs">
            Everything we do is a matter of heart, body and soul.
            We strive to form profound relationships with farmers
            from all over the world to create perspective together
            and form healthy working relationships built on trust and respect
        </p>

        <button class="brown-bordered-btn uppercase">learn more</button>

        <h4 class="color-light-brown">@Amaya</h4>
    </div>

Megvan ez a about-us-os dolog és amit csináltunk még alatta, hogy csak ki van írva amaya egy h4-esben 
Az amaya és a button, ami felette van aközött van egy 80px-es hely, ezt meg tudjuk úgy csinálni, hogy csinálunk egy sima div-et 
aminek a magassága 80px és kész 
Ezt ő úgy csinálta meg, hogy csinált egy spacer-t, amiben az is volt neki, hogy clear: both, de ha grid-eket meg flexbox-ot használunk
és nincsen float left meg right, amit jobb kikerülni, akkor ez a clear: both igazából nekünk nem is nagyon kell 
********************************
Mit ne csináljunk? 
-> 
<div style="height:80px"></div>
style="" 
Ezt valamiért nem szereti a google és hátrébb is sorolhat, ha nagyon sok ilyen inline css van 
Mert a google-nek az a lényeg, hogy nagyon gyorsan be tudja tölteni a dolgokat és utána kiolvasni az adatokat a weboldalról és több
dolog akadályoztathatja ezt 
->
Az egyik a css, a második a JavaScript, a harmadik pedig az amikor ilyen style-os dolgok vannak beleírva a html kódba és hiába 
egy-két milliszekundummal lesz lassabb, de neki ez azért fontos, mert hogyha egymillió weboldalt látogat meg, akkor az onnantól kezdve már 
1millió * 2milliszekundum és ennyivel többet megy a szerver és ennyivel több erőforrást eszik meg a szerver és ez pénz, ezért az összes ilyen 
dolog, ami nem szükséges a html szerkezetbe, ezt ő nem szereti 

Egyébként a JavaScript-et meg a css-t is úgy kell elvileg metölteni, hogy késleltetve, van egy ilyen mód, hogy késleltetett betöltés és 
az azért jó, mert ő csak a html szerkezetet látja, amig kiolvassa a dolgokat és utána pár milliszekundummal jön a css meg JavaScript és 
akkor az jóval kevesebb adat, amit betölt 
->
ilyennel egy pár oldalt előrébb mehet a weboldal ha ezeket figyelembe vesszük 
*****************************
Ha mégis akarunk egy elválasztót -> settings.css
csinéltunk egy olyan class-t hogy 
diveder {
    width: 100%;
    clear: both;
}

meg height-okat is pl.
height-60 {
    heigth: 60px;
}

és itt az elemek között tudunk csinálni egy olyat, hogy egy div és megadjuk neki ezt a két class-t és akkor lesz egy 60px szünet 
az elemek között 

    <div class="container-xl center-text">
        <h1>About us</h1>

        <div class="brown-devider"></div>

        <p class="container-xs">
            Everything we do is a matter of heart, body and soul.
            We strive to form profound relationships with farmers
            from all over the world to create perspective together
            and form healthy working relationships built on trust and respect
        </p>

        <button class="brown-bordered-btn uppercase">learn more</button>

        <div class="divider height-60"></div>   -> ezt bettettük ide, hogy legyen 60px hely a kettő között 

        <h4 class="color-light-brown">@Amaya</h4>

        <h1>Follow on Instagram</h1>

        <div class="brown-devider"></div>
    </div>

ez a brown-devider után jönnek a képek és 6 darab van egymás mellett 
itt tudunk csinálni elöször neki egy 6 osztható grid-et, de ez már nem ide fog tartozni, szóval a container-en kivül lesz 
ha ezeket megnézzük akkor így fog kinézni a honlapon 
element.style {
    height: 241.234px;
    background-image: url(https....)
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
}

<div class="grid-col-6">
        
</div>

csinálunk a style.css-be egy square-t 
.square {
    padding-bottom: 100%; 
    ez nagyon fontos, ha nem szeretnénk megadni magasságot
    mert ez olyan magas lesz mint széles  
}

ezt belerakjuk a div-ami 6-os osztható, ugye itt nem kell beállítani egy grid-nél a szélességet és a square-ben pedig a 
padding-bottom: 100%-val megadtuk a magasságot 
adunk neki egy id-t is és akkor id-alapján pedig mindegyikbe belerakjuk background-image-vel a képet!!! 

<div class="grid-col-6">
    <div class="square" id="cookie-1"></div>
</div>

#cookie-1 {
    background-image: url(../images/coffee-2.jpg); fontos itt a ..val kezdeni, hogy kimenjünk a könyvtárból!!
    background-size: 100%;
    background-position: center;
}

megjelent a kép, fontos, hogy a square-ben ott legyen a padding-bottom: 100%
mert ha az ott nincsen, akkor nem jelenik meg semmi, ha az mondjuk 50%, akkor pedig fele olyan magas lesz, mint széles!!!!!
100% az meg olyan magas amilyen széles 

itt csinálunk a grid-col-6-ban 6 darab div-et, amik megkapják a square class-t és még kapnak egy id-it is 
    <div class="grid-col-6">
        <div class="square" id="cookie-1"></div>
        <div class="square" id="cookie-2"></div>
        <div class="square" id="cookie-3"></div>
        <div class="square" id="cookie-4"></div>
        <div class="square" id="cookie-5"></div>
        <div class="square" id="cookie-6"></div>
    </div>

a background-size: 100% meg a background-position-ra csinálunk egy class-t, mert az sok helyen előfordul 
és akkor a id-val csak a background-image-t rakjuk majd bele!!!! 
-> 
.center-bg {
    background-size: 100%;
    background-position: center;
}

#cookie-1 {
    background-image: url(../images/coffee-2.jpg); fontos itt a ..val kezdeni, hogy kimenjünk a könyvtárból!!
}

#cookie-2 {
    background-image: url(../images/cookie_2.jpg);
}

.center-bg-t megadjuk az összesnek class-ként
-> 
<div class="grid-col-6">
    <div class="square center-bg" id="cookie-1"></div>
    <div class="square center-bg" id="cookie-2"></div>
    <div class="square center-bg" id="cookie-3"></div>
    <div class="square center-bg" id="cookie-4"></div>
    <div class="square center-bg" id="cookie-5"></div>
    <div class="square center-bg" id="cookie-6"></div>
</div>

ez így meg van, jöhet a never miss out-os rész 
fontos, hogy id-t használjunk, azok a dolgok amik meg megegyeznek azokat bele lehet rakni egy class-ba
még fontosabb a padding-bottom: 100% -> hogy beállítsuk a magasságot!!!!! 
**************************************************************************
A következő rész egy kicsit távolabb lesz ezért rakunk egy divider div-et 
<div class="divider height-60"></div>

<div class="bg-light-grey p-md container-lg"></div>
majd csinálunk egy container-lg-t, aminek lesz egy kis padding-je illetve egy háttérszíne!!! 
    <div class="bg-light-grey p-md container-lg center-text">
        <h2>Never miss out</h2>

        <p>
            Sign up for our Newsletter and get the latest AMAYA news, 
            unique offers and access to exclusive products
        </p>
    </div>

Még ugyanebben a div-ben lesz egy input mező és egy sign up button is, amiket belerakunk egy flex-be 
itt az inputnál nagyon fontos ha azt szeretnénk, hogy legyen valami alapból beleírva az input mezőbe, akkor placeholder!!!!!! 
<div class="flex js-center">
    <input type="text" placeholder="Enter Email">

    <button class="black-btn">Sign-Up</button>
</div>
eddig így néz ki 
fontos, hogy meg legyen adva a flex mellett a jc-center is, hogy justify-content: center - tehát horizontálisan középen legyenek a dolgok 
inputs-ban pedig csinálunk egy text-inputs-ot és megcsináljuk a black-btn-t is!!!!! 

.text-input {
    background-color: var(--light-grey);
    border: 1px solid #d0d0d0;
    padding: 8px 15px;
    font-size: 20px; -> ezzel lehet növelni az input mező nagyságát, hogy milyen font-size-a lesz a dolognak, ami bele van írva a placeholder-be
}

.black-btn {
    background-color: black;
    color: var(--light-brown);
    padding: 8px 15px;
    transition: all 0.5s ease;
}

.black-btn:hover {
    background-color: var(--light-brown);
    color: black;
}

ez lesz html-ben 
    <div class="bg-light-grey p-md container-lg center-text">
        <h2>Never miss out</h2>

        <p>
            Sign up for our Newsletter and get the latest AMAYA news, 
            unique offers and access to exclusive products
        </p>

        <div class="flex js-center">
             <input type="text" class="text-input" placeholder="Enter Email">

             <button class="brown-btn uppercase">Sign-Up</button>
        </div>
    </div>

ezalatt lesz egy grid-es dolog ahol van 4 dolog, ebben vannak 
- legfelül egy ikon 
- középen valami rövid szöveg 
- legalul is egy szöveg, ez sem olyan hosszú 

leszedjük az ikonokat a fontAwesome-ról 

ezt a részt nagyon hasonlóan meg lehet csinálni, mint a 3 osztható grid-est 
de az első dolog, hogy teszünk egy divider-t meg egy height-80-at
<div class="divider height-80"></div>
********************************************************************************************
<div class="grid-col-3 center-text" style="margin-top:50px;">
        <div class="learn-more-box coffee-cup-black-bg color-white">
            <div class="learn-more-inner-box">
                <div class="uppercase">refer a friend</div>

                <div class="font-xxl playfair-font">Earn $10</div>

                <div>Share your love of coffee with friends.</div>

                <button class="white-btn uppercase">learn more</button>
            </div>
        </div>

        <div class="learn-more-box leaf-bg color-white">
            <div class="learn-more-inner-box">
                <div class="uppercase">roasting in august</div>

                <div class="font-xxl playfair-font">Ethiopia Peaberry</div>

                <div>Essence of cherry and macadamia for a rich, creamy espresso..</div>

                <button class="white-btn uppercase">shop now</button>
            </div>
        </div>

        <div class="learn-more-box coffee-bean-iced-coffee color-white">
            <div class="learn-more-inner-box">
                <div class="uppercase">more than just a cold coffee</div>

                <div class="font-xxl playfair-font">Cold Brew</div>

                <div>
                    Refresh your mind with organic,
                    sustainbly-sourced cold brew coffee..
                </div>

                <button class="white-btn uppercase">learn more</button>
            </div>
        </div>
    </div>
    
ezt fogjuk itt lemásolni 
itt a legkülső div van 2 darab class-ja 
- grid-col-3 -> itt nekünk egy 3 osztható div kell 
- center-text -> ebben vannak szövegek és azok így már horizontálisan középen lesznek 

ebben a legkülső div-ben van egy box 
- fontos, hogy kell adni neki egy magasságot, mert ugye a szélessége az már meg van 
    jó ha ez a magasság vw-ben van vagy %-ban, mert akkor flexibilis lesz, ha mondjuk behúzzuk 
- kell adni valamit, hogy vertikálisan is középen legyen az a valami amit ide belerakunk 
      ehhez, kell, hogy ez flex legyen és align-items: center;

.learn-more-box {
    height: 30vw;
    display:flex;
    align-items: center;
}

ebben lesz egy kisebb box, amiben lesznek a szövegek divek-ben 
- fontos, hogy ez is olyan legyen, hogy a szöveg, ami benne van az vertikálisan és horizontálisan is középen legyen 
    illetve csak horizontálisan középen, mert itt ebben lesz több div és azok pedig egyenlő távolságra legyenek 
de itt a szövegek egymás alatt lesznek és nem egymás mellett, szóval itt nem jó flex-nek az a tulajdonsága, hogy row
    ezért kell egy olyan, hogy flex-direction: column, de így már meg van fordítva tehát 
fontos, hogy legyen egy magassága és egy szélessége is, ez %-ban adtuk meg, hogy a box-ban, amiben benne van annak hány %-a
a magasság és a szélesség 
-> 
.learn-more-inner-box {
    width: 80%;
    height: 60%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
még fontos, hogy ez a dolog vertikálisan ugye középen van, mert a learn-more-box az flex és align-items: center
és akkor itt a kisebb box-ban meg adtunk neki egy margin: auto, amivel horizontálisan is középen lett 
width meg height ugye az jó így %-ban, mert flexibilis lesz!!!!! 

ez egyik div-nek másmilyen font-ja, volt ezért ennek a div-nek adtunk egy font-family-t
.playfair-font {
    font-family: "Playfair Display", serif;
}

a button-nal ami legalul van, annak adtunk egy border-t, background-color-t, padding-et, max-width-et meg egy transition-t, 
mert ha :hover, akkor meg fog változni a background-color és a border is!!! 
.black-btn {
    background-color: black;
    color: var(--light-brown);
    padding: 8px 15px;
    transition: all 0.5s ease;
}

.black-btn:hover {
    background-color: var(--light-brown);
    color: black;
}

meg csak annyi, ahova beleraktuk a képeket, ott megadtuk őket class-nak 
és ami közös azt egybe raktuk, tehát a background-size: 100% auto; background-position: center;
azt meg ugye külön, amikor beleraktuk a background-image-t 
-> 
.coffee-cup-black-bg, .leaf-bg, .coffee-bean-iced-coffee {
    background-size:100% auto;  
    background-position: center;
}

.coffee-cup-black-bg {
    background-image: url("../images/coffeebean-coffee-cup-black.jpg");
}

.leaf-bg {
    background-image: url("../images/leaf.jpg");
}
.coffee-bean-iced-coffee {
    background-image: url("../images/coffeebean-iced-coffee-1.jpg");
}
************************************************************************
na ehhez hasonlóna fogjuk megcsinálni ezt a dolgot!! 
levettük az 50px-es margin-top-ot róla, mert ide tettünk egy elválasztót a divider-t és erre már nem lesz itt szükség 
első dolog, hogy itt nincsen háttér de viszont van háttérszín 
ezeket megadjuk a nagyobbik box-nak 
-> 
<div class="grid-col-4 center-text">
    <div class="learn-more-box bg-light-grey">
pl. itt az első az light-grey lesz és majd ugyanígy a többinek!!!! 

az elöbbinél kellett a height: 30vw a hármas oszthatónál (learn-more-box) de itt kicsit kisebbek a boxok ezért elég nekünk egy magasság 20vw
ezért most a settings-ben csinálunk 
->
.vh-25 {
    height: 25vh!important;
}
ez most nem vw hanem vh lett valamiért és akkor ezt meg kell adni a külsőnek, tehát a learn-more-box-oknak 
ugye fontos, hogy ez !important legyen ez az újabb class és felülírja a height-ot ami meg van adva a learn-more-box-nak 
(mert ugye ott még meg van adva a height: 30vw)!!! 
->
<div class="grid-col-4 center-text">
    <div class="learn-more-box bg-light-grey vh-25">
és akkor így már sokkal kisebbek lettek ezek a boxok!! 
így néz ki az első box
->
<div class="learn-more-box bg-light-grey vh-25">
    <div class="learn-more-inner-box">
        <i class="fa-solid fa-cube"></i>
        <div class="weight-bold">Shipped FREE to your Door</div>
        <div>with orders above $35+</div>
    </div>
</div>
div-ekbe beleírtuk ami kell és adtunk a másodiknak egy weight-bold-ot, amit a settings-ben csináltunk, mert ez bold-val van 
.weight-bold {
    font-weight: bold;
}
még annyi, hogy az ikonok alapból kisebbek, mint amit szerettünk volna, de ezt majd font-size-val lehet növelni!!!!!! 
de erre csináltunk font-sm-et, md-ét, lg-ét stb.
és akkor csak annyi, hogy a i-nek megadunk egy font-lg-t -> <i class="fa-solid fa-cube font-xxl"></i>
-> 
    <div class="learn-more-box bg-light-grey vh-25">
        <div class="learn-more-inner-box">
            <i class="fa-solid fa-cube font-xxl"></i>
            <div class="weight-bold">Shipped FREE to your Door</div>
            <div>with orders above $35+</div>
        </div>
    </div>

így néz ki az egész
-> 
    <div class="grid-col-4 center-text">
        <div class="learn-more-box bg-light-grey vh-25">
            <div class="learn-more-inner-box">
                <i class="fa-solid fa-cube font-xxl"></i>
                <div class="weight-bold">Shipped FREE to your Door</div>
                <div>with orders above $35+</div>
            </div>
        </div>

        <div class="learn-more-box bg-beige vh-25">
            <div class="learn-more-inner-box">
                <i class="fa-regular fa-heart font-xxl"></i>
                <div class="weight-bold">Shipped FREE to your Door</div>
                <div>with orders above $35+</div>
            </div>
        </div>

        <div class="learn-more-box vh-25">
            <div class="learn-more-inner-box">
                <i class="fa-solid fa-leaf font-xxl"></i>
                <div class="weight-bold">Carefully delivered within 1-3 days</div>
                <div>
                    An exceptional coffee experience
                    starts with only the best ingredients.
                </div>
            </div>
        </div>

        <div class="learn-more-box bg-light-grey vh-25">
            <div class="learn-more-inner-box">
                <i class="fa-solid fa-life-ring font-xxl"></i>
                <div class="weight-bold">We would love to help you</div>
                <div>+1 234 567 89</div>
            </div>
        </div>
    </div>
fontos-dolgok itt 
1. középre helyezés 
    learn-more-box -> flex és align-items: center és a learn-more-inner-box: margin: auto
    ezzel megtörtént a learn-more-inner-box vertikális és horizontális középrehelyezése 
    és, hogy a learn-more-inner-box-ban is középre legyenek, de viszont itt egymás alatt lesznek a dolgok 
    flex, flex-direction: column, align-items: center, justify-content: space-evenly (mert több div van)

2. ha van egy ikon és kicsi -> font-size-val lehet nővelni a nagyságát meg csökkenteni is 
3. ami a grid-ben van közvetlenül elem, annak a magassága lehet vw-vel -> flexibilitás 
4. height-ja és width-je a learn-more-inner-box-nak lehet úgy, hogy meghatározzuk %-ba a szűlőeleméhez képest (learn-more-box)
pl. height: 80% width: 60%
5. felül tudunk írni egy elemet ha meg van adva neki már egy class-ba, hogy csinálunk egy másik class-t, azt is megadjuk az elemnek 
és oda kell írni, hogy !important és akkor azt veszi a kettő közül!!!!

még egy dolog, hogy megadhatunk a linkeknek egy light-brown-t mert úgy jobban fognak látszani
-> 
<i class="fa-solid fa-cube font-xxl color-light-brown"></i>
*********************************************************************
Most jön a legalsó rész, ami egy háromosztható valami, amit meg lehet oldani egy grid-vel 
meg ez legalul lesz, szóval belerakjuk egy footer-be!!! 
de mindenek előtt, mivel ez már egy új dolog, itt is csinálunk egy divider height-80-as div-et 

eddig ez így néz ki, megadtunk a footer-nek egy black background-color-t ezért kell, hogy a div-ek, amik benne vannak a grid-ben 
azok rendelkezzenek egy color-white-os class-val!!! 
-> 
    <footer class="bg-black p-xl">
        <div class="grid-col-3">
            <div class="color-white">

            </div>
            <div class="color-white">
                
            </div>
            <div class="color-white">
                
            </div>
        </div>
    </footer>

Itt ahol a grid-col-3 van, ennek megadunk egy container-lg, azért, hogy középre kerüljenek a dolgok!!! 
mert a container-lg annak van egy margin: auto-os beállítása!!! és még ide megadunk egy center-text-et is 

    <footer class="bg-black p-xl">
        <div class="container-lg grid-col-3 center-text uppercase">
            <div class="color-white">
                 <h2>about</h2>

                 <ul>
                    <li>
                        <a href="#">the company</a>
                    </li>
                    <li>
                        <a href="#">faq</a>
                    </li>
                    <li>
                        <a href="#">privacy policy</a>
                    </li>
                 </ul>
            </div>
            <div class="color-white">
                <h2>locations</h2>

                <ul>
                   <li>
                       <a href="#">san francisco</a>
                   </li>
                   <li>
                       <a href="#">newport beach</a>
                   </li>
                   <li>
                       <a href="#">sun city</a>
                   </li>
                </ul>
            </div>
            <div class="color-white">
                <h2>follow along</h2>

                <ul>
                   <li>
                       <a href="#">san francisco</a>
                   </li>
                   <li>
                       <a href="#">newport beach</a>
                   </li>
                   <li>
                       <a href="#">sun city</a>
                   </li>
                </ul>
            </div>
        </div>
    </footer>

Miért jó ha benne van a container-be, mert responsive desing, annak meg van adva egy max-height és akkor azt bele lehet húzni!!!! 
következő órán megcsináljuk, hogy jó legyen minden mobilnézetben is meg a felső menüt is!!!! 
*/