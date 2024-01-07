const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden');
            entry.target.classList.add('active');
        } else {
            entry.target.classList.add('hidden');
            entry.target.classList.remove('active')
        }
    })

})



const cards = document.querySelectorAll(".card");
const changeCards = (current) => {

    if (current === 0) {
        cards[0].classList.add('firstViewed');
        cards[1].classList.add('firstViewed');
        cards[2].classList.add('firstViewed');
    }
    else if (current === 1) {
        cards[1].classList.add('secondViewed');
        cards[2].classList.add('secondViewed');
    }
}
const removeCards = (current) => {

    if (current === 0) {
        cards[0].classList.remove('firstViewed');
        cards[1].classList.remove('firstViewed');
        cards[2].classList.remove('firstViewed');
    }
    else if (current === 1) {
        cards[1].classList.remove('secondViewed');
        cards[2].classList.remove('secondViewed');
    }
}

cards.forEach((card,index) =>  {
    observer.observe(card)
    card.addEventListener('animationend',e => {
        e.target.classList.remove('active');
        e.target.classList.add('animate');

    } )
    card.addEventListener('mouseover', c => {
        index === 0 && changeCards(index);
        index === 1 && changeCards(index);
    })
    card.addEventListener('mouseout', c => {
        index === 0 && removeCards(index);
        index === 1 && removeCards(index);
    })

})



const plane = document.querySelector('.plane');


document.addEventListener("scroll", setScroll);
window.addEventListener("resize", setScroll);

function setScroll() {
    const textContainer = document.querySelector(".text-container");
    const htmlElement = document.documentElement;
    const percentScrolled =htmlElement.scrollTop / htmlElement.clientHeight;
    const scrollPosition = window.scrollY;
    textContainer.style.top = 30 + scrollPosition * 0.1 + "%";
    const scroll = Math.min(percentScrolled * 100,100);
    document.querySelector('.text-container').style.display = scroll > 90 ? `none` : `initial`;
    document.querySelector('.plane').style.translate = `${-scroll * 25}px  ${scroll * 7}px`;
}

setScroll();
