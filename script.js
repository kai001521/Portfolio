/* SCROLL */
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* CUSTOM CURSOR */
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

/* MAGNETIC BUTTON */
const magnetic = document.querySelector(".magnetic");

magnetic.addEventListener("mousemove", e => {
    const rect = magnetic.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    magnetic.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
});

magnetic.addEventListener("mouseleave", () => {
    magnetic.style.transform = "translate(0,0)";
});