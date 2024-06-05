$(document).ready(() => {
    let config = document.querySelector(".mymixcont");
    let mixer = mixitup(config, {
        selectors: {
            target: ".mix",
        },
        animation: {
            easing: "ease-in-out",
            applyPerspective: true,
            duration: 750,
            reverseOut: true,
            effects: "fade rotateY(90deg) stagger(100ms)",
            staggerSequence: function (i) {
                return 2 * i - 5 * (i / 3 - (1 / 3) * (i % 3));
            },
            nudge: false,
        },
        controls: {
            live: false,
        },
    });

    $(".closeButton").click(() => {
        document.querySelector(".closeButton .icon").classList.toggle("active");
        $(".description").slideToggle(500);
    });

    $(".exitButton").click(() => {
        tip.classList.remove("view");
    });

    function portfolioView(object) {
        let namePlate = document.querySelector(
            ".tip .allContent .description .pro_intro .nameplate h1"
        );
        namePlate.textContent = object.namePlate;

        let category = document.querySelector(
            ".tip .allContent .description .pro_intro .nameplate span span"
        );
        category.textContent = object.category;

        let pro_brief = document.querySelector(
            ".tip .allContent .description .pro_intro .other_text p"
        );
        pro_brief.textContent = object.project_brief;

        let project_date = document.querySelector(
            ".tip .allContent .description .pro_info .Date span"
        );
        project_date.textContent = object.project_date;

        let project_client = document.querySelector(
            ".tip .allContent .description .pro_info .client span"
        );
        project_client.textContent = object.project_client;

        let project_link = document.querySelector(
            ".tip .allContent .description .pro_info .link a"
        );
        project_link.textContent = object.project_link;

        let swiper_wrapper = document.querySelector(
            ".tip .swiper-container-2 .swiper-wrapper"
        );

        let image = swiper_wrapper.querySelectorAll(".swiper-slide img");

        for (let i = 0; i < object.image.length; i++) {
            image[i].src = object.image[i];
        }
    }

    // Swiper js
    var swiper = new Swiper(".swiper-container-2", {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        // effect: "flip",
        // cubeEffect: {
        //     shadow: true,
        //     slideShadows: true,
        //     shadowOffset: 20,
        //     shadowScale: 0.94,
        // },
        // effect: "coverflow",
        // coverflowEffect: {
        //     rotate: 30,
        //     stretch: 0,
        //     depth: 100,
        //     modifier: 1,
        //     slideShadows: true,
        // },

        effect: "cube",
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });

    let about_nav_btn_2 = document.querySelectorAll(".about_nav a");

    function collapse2() {
        about_nav_btn_2.forEach((link) => {
            link.classList.remove("active");
        });
    }

    function slider1(selector) {
        selector.addEventListener("click", () => {
            collapse2();
            selector.classList.add("active");
        });
    }

    slider1(about_nav_btn_2[0]);
    slider1(about_nav_btn_2[1]);
    slider1(about_nav_btn_2[2]);
    slider1(about_nav_btn_2[3]);
    slider1(about_nav_btn_2[4]);
    slider1(about_nav_btn_2[5]);

    let cards = document.querySelectorAll(".mix");
    let tip = document.querySelector(".tip");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            if (card.classList.contains("web")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "Pagina Web",
                    project_brief: `Desarrollé un sitio web corporativo moderno
                     y responsivo para una empresa de consultoría usando HTML5, 
                     CSS3 y Bootstrap 5. El sitio incluye una página de inicio con ban
                     ner, servicios y testimonios; una sección detallada de servicios; 
                     perfiles del equipo; y una página de contacto con formulario y mapa. 
                     El diseño es adaptable a todos los dispositivos, asegurando una experiencia 
                     de usuario óptima.`,

                    project_date: "2024",
                    project_client: "Sintactyc",
                    project_link: `www.${website}.com`,

                    image: [
                        "resources/img/portfolios/web/html.png",
                        "resources/img/portfolios/web/html1.png",
                        "resources/img/portfolios/web/jquery2.png",
                        "resources/img/portfolios/web/page.png",
                        "resources/img/portfolios/web/html.png",
                        "resources/img/portfolios/web/html1.png",
                        "resources/img/portfolios/web/jquery2.png",
                        "resources/img/portfolios/web/page.png",
                    
                    ],
                });
            } else if (card.classList.contains("logo")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "Freameworks",
                    project_brief: `
                    Estos son los frameworks que manejo: React para
                     la construcción de interfaces de usuario dinámicas;
                      jQuery para la manipulación eficiente del DOM; Bootstrap 
                      y Tailwind CSS para diseño responsivo y estilización moderna;
                       Node.js para desarrollo backend; Postman para pruebas y documentación de APIs;
                        y Photoshop para diseño gráfico y edición de imágenes.`,

                    project_date: "2024",
                    project_client: `${
                        card.querySelector(".title").textContent
                    } Corporation`,
                    project_link: `www.${website}.com`,

                    image: [
                        "resources/img/portfolios/logo/react.png",
                        "resources/img/portfolios/logo/tailwind.png",
                        "resources/img/portfolios/logo/bootstrap.jpg",
                        "resources/img/portfolios/logo/git.png",
                        "resources/img/portfolios/logo/jquery.png",
                        "resources/img/portfolios/logo/postman.jpg",
                        "resources/img/portfolios/logo/photo.png",
                        "resources/img/portfolios/logo/node.png",
                        "resources/img/portfolios/logo/react.png",
                    ],
                });
            } else if (card.classList.contains("card")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "Diseños Graficos",
                    project_brief: `Estos son mis diseños gráficos utilizando Photoshop,
                     Figma y Canva, donde he creado mis propios logos y banners.
                      Cada herramienta me ha permitido desarrollar piezas visuales únicas
                       y profesionales que destacan en cualquier proyecto`,

                    project_date: "2024",
                    project_client: `${
                        card.querySelector(".title").textContent
                    } Corporation`,
                    project_link: `www.${website}.com`,

                    image: [
                        "resources/img/portfolios/card/diseño.png",
                        "resources/img/portfolios/card/ds.png",
                        "resources/img/portfolios/card/Layoner M.jpg",
                        "resources/img/portfolios/card/diseño.png",
                    ],
                });
            } else if (card.classList.contains("icon")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "Mis Lenguajes",
                    project_brief: `Estos son los lenguajes que manejo: PHP, JavaScript,
                     HTML, CSS, y SQL. Con ellos, desarrollo aplicaciones web robustas, dinámicas
                      y eficientes, cubriendo tanto frontend como backend.`,

                    project_date: "2024",
                    project_client: `${
                        card.querySelector(".title").textContent
                    } Corporation`,
                    project_link: `www.${website}.com`,

                    image: [
                        "resources/img/portfolios/icon/css.png",
                        "resources/img/portfolios/icon/html.jpg",
                        "resources/img/portfolios/icon/java.png",
                        "resources/img/portfolios/icon/mysql.png",
                        "resources/img/portfolios/icon/PHp.jpg",
                        "resources/img/portfolios/icon/css.png",
                        "resources/img/portfolios/icon/html.jpg",
                        "resources/img/portfolios/icon/java.png",
                        "resources/img/portfolios/icon/mysql.png",
                    ],
                });
            } else if (card.classList.contains("app")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "Mis Aplicaciones ",
                    project_brief: `He diseñado aplicaciones en PHP, MySQL y jQuery,
                     incluyendo sistemas CRUD y listas de compras. Estas aplicaciones
                      destacan por su funcionalidad y eficiencia, permitiendo gestionar datos de manera sencilla y dinámica.`,

                    project_date: "2024",
                    project_client: `${
                        card.querySelector(".title").textContent
                    } Corporation`,
                    project_link: `www.${website}.com`,

                    image: [
                        "resources/img/portfolios/app/coomeva.png",
                        "resources/img/portfolios/app/crud.png",
                        "resources/img/portfolios/app/jquery.png",
                        "resources/img/portfolios/app/loginphp.png",
                        "resources/img/portfolios/app/coomeva.png",
                        "resources/img/portfolios/app/crud.png",
                        "resources/img/portfolios/app/jquery.png",
                        "resources/img/portfolios/app/loginphp.png",
                      
                    ],
                });
            }
        });
    });
});
