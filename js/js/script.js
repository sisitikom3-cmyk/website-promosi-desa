// ===============================
// ANIMASI SAAT SCROLL
// ===============================

const cards = document.querySelectorAll(
    '.feature-card, .potential-card, .gallery-item, .glass-card'
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach((card) => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "all .8s ease";

    observer.observe(card);

});


// ===============================
// FORM KONTAK
// ===============================

const form =
    document.querySelector(".contact-form form");


if (form) {

    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Terima kasih! Pesan Anda berhasil dikirim."
            );

            form.reset();

        }
    );

      }
