window.onload = function () {
    const parallax = document.querySelector('.parallax');

    if(parallax) {
        const branches = document.querySelector('.first__parallax');

        const forBranches = 10;

        const speed = 0.15;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouse () {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            branches.style.cssText = `transform: translate(${positionX / forBranches}%,${positionY / forBranches}%);`;

            requestAnimationFrame(setMouse);
        }
        setMouse();

        parallax.addEventListener("mousemove", function (e) {
            const parallaxWidht = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidht / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidht * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        }); 

    }
}