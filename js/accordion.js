document.addEventListener('DOMContentLoaded', () => {

    const featureLinksElems = document.querySelectorAll('.feature__link ');
    const featureSubElems = document.querySelectorAll('.feature-sub');

    // let active = featureLinksElems[0]
    // for (let i = 0; i < featureLinksElems.length; i++) {
    //     featureLinksElems[i].addEventListener('click', () => {

    //         for (let j = 0; j < featureSubElems.length; j++) {
    //             featureSubElems[j].classList.add('hidden');
    //         }

    //         for (let j = 0; j < featureLinksElems.length; j++) {
    //             featureLinksElems[j].classList.remove('feature__link_active');
    //         }

    //         if (featureLinksElems[i] != active) {
    //             featureSubElems[i].classList.toggle('hidden');
    //             featureLinksElems[i].classList.toggle('feature__link_active');
    //             active = featureLinksElems[i];
    //         } else active = null
    //     })
    // }

    let active = featureLinksElems[0]
    featureLinksElems.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {

            featureSubElems.forEach((featureSubElem) => {
                featureSubElem.classList.add('hidden')
            })
            featureLinksElems.forEach((featureLinksElem) => {
                featureLinksElem.classList.remove('feature__link_active')
            })

            if (btn != active) {
                featureSubElems[index].classList.toggle('hidden');
                btn.classList.toggle('feature__link_active');
                active = btn;
            } else active = null

        })
    })

})

