const container = document.querySelector(".skeleton-feed");

window.addEventListener("scroll", () => {

    if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
    ) {

        container.innerHTML += `
            <article class="skeleton-card">
                <div class="skeleton skeleton-title"></div>
                <div class="skeleton skeleton-image"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text short"></div>
            </article>
        `;
    }
});
