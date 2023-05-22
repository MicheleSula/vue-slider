const { createApp } = Vue;

createApp ({
    data() {
        return {
            activeImage: 0,
            movieItems: [
                {
                    image: 'img/01.webp',
                    title: "Marvel's Spiderman Miles Morale",
                    subTitle: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    subTitle: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    subTitle: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    subTitle: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    subTitle: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                }
            ]
        }
    },
    methods: {
        nextImage() {
        this.activeImage++;
        if (this.activeImage === this.movieItems.length) {
            this.activeImage = 0;
        }
        },
        prevImage() {
        this.activeImage--;
        if (this.activeImage < 0) {
            this.activeImage = this.movieItems.length - 1;
        }
        },
        selectImage(index) {
            this.activeImage = index;
        },
        stopAutoplay() {
            clearInterval(this.interval);
          },
        startAutoplay() {
            this.interval = setInterval(() => {
                this.nextImage();
            }, 2000);
        }
    },
    mounted(){
        console.log("Hey ho finito di creare l'app");
         
        this.interval = setInterval(() => {
             this.nextImage();
           }, 2000);
    }
}).mount('#app');