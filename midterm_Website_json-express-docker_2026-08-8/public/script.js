// ==========================================
// ZODIAC WEBSITE JAVASCRIPT
// ==========================================


// ==========================================
// ELEMENTS
// ==========================================

const zodiacContainer =
    document.getElementById(
        "zodiac-container"
    );

const zodiacDetails =
    document.getElementById(
        "zodiac-details"
    );

const closeDetails =
    document.getElementById(
        "close-details"
    );

const constellation =
    document.getElementById(
        "constellation"
    );


// ==========================================
// NAVIGATION
// ==========================================

const pages =
    document.querySelectorAll(".page");

const navButtons =
    document.querySelectorAll(".nav-btn");


function showPage(pageId) {

    pages.forEach(page => {

        page.classList.remove(
            "active-page"
        );

    });


    const selectedPage =
        document.getElementById(pageId);


    if (selectedPage) {

        selectedPage.classList.add(
            "active-page"
        );

    }


    navButtons.forEach(button => {

        button.classList.remove(
            "active"
        );

        if (
            button.dataset.page ===
            pageId
        ) {

            button.classList.add(
                "active"
            );

        }

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ==========================================
// NAV BUTTONS
// ==========================================

navButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            showPage(
                button.dataset.page
            );

        }
    );

});


// ==========================================
// EXPLORE BUTTON
// ==========================================

document
    .getElementById("explore-btn")
    .addEventListener(
        "click",
        () => {

            showPage("zodiac");

        }
    );


// ==========================================
// GET ZODIAC DATA
// ==========================================

async function loadZodiacSigns() {

    try {

        const response =
            await fetch(
                "/api/zodiac"
            );


        if (!response.ok) {

            throw new Error(
                "Failed to load zodiac data"
            );

        }


        const zodiacSigns =
            await response.json();


        displayZodiacSigns(
            zodiacSigns
        );

    }

    catch (error) {

        console.error(
            "Error:",
            error
        );


        zodiacContainer.innerHTML = `

            <div class="error-message">

                <h3>
                    Unable to load Zodiac Signs
                </h3>

                <p>
                    Please make sure the
                    Express server is running.
                </p>

            </div>

        `;

    }

}


// ==========================================
// DISPLAY ZODIAC CARDS
// ==========================================

function displayZodiacSigns(
    zodiacSigns
) {

    zodiacContainer.innerHTML = "";


    zodiacSigns.forEach(sign => {

        const card =
            document.createElement(
                "div"
            );


        card.className =
            "zodiac-card";


        card.innerHTML = `

            <div class="zodiac-symbol">
                ${sign.symbol}
            </div>

            <h3>
                ${sign.name}
            </h3>

            <p class="zodiac-date">
                ${sign.date}
            </p>

            <span class="zodiac-element">
                ${sign.element}
            </span>

        `;


        // ==================================
        // CLICK ZODIAC
        // ==================================

        card.addEventListener(
            "click",
            () => {

                showZodiacDetails(
                    sign
                );

            }
        );


        zodiacContainer.appendChild(
            card
        );

    });

}


// ==========================================
// CREATE CONSTELLATION
// ==========================================

function createConstellation() {

    constellation.innerHTML = "";


    const points = [

        [20, 28],
        [32, 18],
        [44, 32],
        [57, 20],
        [70, 36],
        [82, 25],
        [75, 52],
        [60, 48],
        [45, 58],
        [31, 48],
        [20, 62]

    ];


    // ======================================
    // CREATE STARS
    // ======================================

    points.forEach(
        (point, index) => {

            const star =
                document.createElement(
                    "div"
                );


            star.className =
                "constellation-star";


            if (
                index === 0 ||
                index === 4 ||
                index === 7
            ) {

                star.classList.add(
                    "big"
                );

            }


            star.style.left =
                point[0] + "%";


            star.style.top =
                point[1] + "%";


            constellation.appendChild(
                star
            );

        }
    );


    // ======================================
    // CONNECT STARS
    // ======================================

    for (
        let i = 0;
        i < points.length - 1;
        i++
    ) {

        const start =
            points[i];

        const end =
            points[i + 1];


        createLine(
            start[0],
            start[1],
            end[0],
            end[1]
        );

    }


    // Additional constellation lines

    createLine(
        32,
        18,
        20,
        62
    );


    createLine(
        44,
        32,
        31,
        48
    );


    createLine(
        57,
        20,
        60,
        48
    );


    createLine(
        70,
        36,
        75,
        52
    );

}


// ==========================================
// CREATE CONSTELLATION LINE
// ==========================================

function createLine(
    x1,
    y1,
    x2,
    y2
) {

    const line =
        document.createElement(
            "div"
        );


    line.className =
        "constellation-line";


    const dx = x2 - x1;

    const dy = y2 - y1;


    const distance =
        Math.sqrt(
            dx * dx +
            dy * dy
        );


    const angle =
        Math.atan2(
            dy,
            dx
        ) *
        (180 / Math.PI);


    line.style.left =
        x1 + "%";


    line.style.top =
        y1 + "%";


    line.style.width =
        distance + "%";


    line.style.transform =
        `rotate(${angle}deg)`;


    constellation.appendChild(
        line
    );

}


// ==========================================
// SHOW ZODIAC DETAILS
// ==========================================

function showZodiacDetails(
    sign
) {


    // ======================================
    // REMOVE OLD THEMES
    // ======================================

    const themes = [

        "theme-aries",
        "theme-taurus",
        "theme-gemini",
        "theme-cancer",
        "theme-leo",
        "theme-virgo",
        "theme-libra",
        "theme-scorpio",
        "theme-sagittarius",
        "theme-capricorn",
        "theme-aquarius",
        "theme-pisces"

    ];


    zodiacDetails.classList.remove(
        ...themes
    );


    // ======================================
    // CREATE THEME
    // ======================================

    const themeName =
        "theme-" +
        sign.name.toLowerCase();


    zodiacDetails.classList.add(
        themeName
    );


    // ======================================
    // DISPLAY INFORMATION
    // ======================================

    document
        .getElementById(
            "details-symbol"
        )
        .textContent =
        sign.symbol;


    document
        .getElementById(
            "details-element"
        )
        .textContent =
        sign.element.toUpperCase();


    document
        .getElementById(
            "details-name"
        )
        .textContent =
        sign.name;


    document
        .getElementById(
            "details-date"
        )
        .textContent =
        sign.date;


    document
        .getElementById(
            "details-element-value"
        )
        .textContent =
        sign.element;


    document
        .getElementById(
            "details-planet"
        )
        .textContent =
        sign.planet;


    document
        .getElementById(
            "details-date-value"
        )
        .textContent =
        sign.date;


    document
        .getElementById(
            "details-personality"
        )
        .textContent =
        sign.personality;


    document
        .getElementById(
            "details-description"
        )
        .textContent =
        sign.description;


    // ======================================
    // STRENGTHS
    // ======================================

    const strengthsList =
        document.getElementById(
            "strengths-list"
        );


    strengthsList.innerHTML = "";


    sign.strengths.forEach(
        strength => {

            const li =
                document.createElement(
                    "li"
                );


            li.textContent =
                strength;


            strengthsList.appendChild(
                li
            );

        }
    );


    // ======================================
    // WEAKNESSES
    // ======================================

    const weaknessesList =
        document.getElementById(
            "weaknesses-list"
        );


    weaknessesList.innerHTML = "";


    sign.weaknesses.forEach(
        weakness => {

            const li =
                document.createElement(
                    "li"
                );


            li.textContent =
                weakness;


            weaknessesList.appendChild(
                li
            );

        }
    );


    // ======================================
    // CREATE CONSTELLATION
    // ======================================

    createConstellation();


    // ======================================
    // SHOW DETAILS
    // ======================================

    zodiacDetails.style.display =
        "block";


    // ======================================
    // HIDE LIST
    // ======================================

    zodiacContainer.style.display =
        "none";


    document
        .querySelector(
            ".section-header"
        )
        .style.display =
        "none";


    // ======================================
    // SCROLL TO DETAILS
    // ======================================

    setTimeout(() => {

        zodiacDetails.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


// ==========================================
// BACK BUTTON
// ==========================================

closeDetails.addEventListener(
    "click",
    () => {

        zodiacDetails.style.display =
            "none";


        zodiacContainer.style.display =
            "grid";


        document
            .querySelector(
                ".section-header"
            )
            .style.display =
            "block";


        constellation.innerHTML =
            "";


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


// ==========================================
// START WEBSITE
// ==========================================

loadZodiacSigns();