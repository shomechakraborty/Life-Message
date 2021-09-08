let a1 = ['Never try to plan exactly how your life should be in the future. ', 'Always learn from the wisdom of others. ', 'Any loss in life is an opportunity to grow in the future. ', 'A master in anything has has lost more times than you have tried. ', 'Concentrate all your effort on what your heart tells you. '];
let a2 = ['Life will always be a race, so if you go too fast now, you just might to be too tired to finish. ', 'Think of life as a parabola. ', 'Always remember two questions: why are you here and what is your purpose in life. ', 'Life can either be smooth as a plain, rougher as a hill, and the toughest as a mountain, but only a mountanous life will exert most meaning. ', 'Never concentrate you mind on the past, for the past can never be fixed. ', 'It is the most unexpected plots in life which will define our jouney. '];
let a3 = ['The thing that kills us most inside is fear. ', 'Never forget the ones who wish you well. ', 'Your life is a line in a thread, and the infinite options your line moves through the thread comes from your choices. ', 'Nothing worthy in life can ever be found if it is so simplistic. ', 'It is our ideas which causes our actions, and it is our actions which builds the world. '];

const messageGenerator = () => {
    const random1 = Math.floor(Math.random() * 4);
    const random2 = Math.floor(Math.random() * 4);
    const random3 = Math.floor(Math.random() * 4);
    document.getElementById("message").textContent = a1[random1] + a2[random2] + a3[random3];
}

