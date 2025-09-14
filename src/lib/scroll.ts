export function scrollToSection(id: string, offset: number = -64) {
    if (typeof window === "undefined") return; // guard for SSR

    const section = document.getElementById(id);
    if (section) {
        const y =
            section.getBoundingClientRect().top + window.pageYOffset + offset;

        window.scrollTo({top: y, behavior: "smooth"});

        // optional: keep the hash in the URL without reload
        window.history.replaceState(null, "", `#${id}`);
    }
}
