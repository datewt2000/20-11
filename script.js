function showFlower() {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.innerHTML = "🌸";
    flower.style.left = Math.random() * 90 + "%";
    document.body.appendChild(flower);

    setTimeout(() => flower.remove(), 3000);
}
