const BTS = [
    {
        artistName: 'Dua Lipa',
        songName: "Levitating",
        song: 'Songs/Levitating.mp3'
    },
    {
        artistName: 'Dua Lipa',
        songName: "IDGAF",
        song: 'Songs/IDGAF.mp3'
    },
    {
        artistName: 'Dua Lipa',
        songName: "Love Again",
        song: 'Songs/Love Again.mp3'
    },
    {
        artistName: 'Dua Lipa',
        songName: "New Rules",
        song: 'Songs/New Rules.mp3'
    },

    {
        artistName: 'Justin Bebier',
        songName: "Peaches",
        song: 'Songs/Peaches.mp3'
    },
    {
        artistName: 'Justin Bebier',
        songName: "Company",
        song: 'Songs/Company.mp3'
    },
    {
        artistName: 'Justin Bebier',
        songName: "What do you mean",
        song: 'Songs/what do.mp3'
    },
    {
        artistName: 'Justin Bebier',
        songName: "Sorry",
        song: 'Songs/Sorry.mp3'
    },

    {
        artistName: 'Bebe Rexha',
        songName: "The way i are",
        song: 'Songs/the way.mp3'
    },
    {
        artistName: 'Bebe Rexha',
        songName: "Baby I'm Jealous",
        song: 'Songs/Baby jealous.mp3'
    },
    {
        artistName: 'Bebe Rexha',
        songName: "Say my name",
        song: 'Songs/Say My Name.mp3'
    },
    {
        artistName: 'Bebe Rexha',
        songName: "I am mess",
        song: 'Songs/i am mess.mp3'
    },

    {
        artistName: 'Charlie Puth',
        songName: "We don't talk anymore",
        song: 'Songs/we dont.mp3'
    },
    {
        artistName: 'Charlie Puth',
        songName: "See you again",
        song: 'Songs/see you.mp3'
    },
    {
        artistName: 'Charlie Puth',
        songName: "Attention",
        song: 'Songs/attent.mp3'
    },
    {
        artistName: 'Charlie Puth',
        songName: "One call away",
        song: 'Songs/one call.mp3'
    },


    {
        artistName: 'Ariana Grande',
        songName: "Love me Harder",
        song: 'Songs/love me harder.m4a'
    },
    {
        artistName: 'Ariana Grande',
        songName: "7 Rings",
        song: 'Songs/7 rings.mp3'
    },
    {
        artistName: 'Ariana Grande',
        songName: "34 35",
        song: 'Songs/34 35.mp3'
    },
    {
        artistName: 'Ariana Grande',
        songName: "Positions",
        song: 'Songs/position.mp3'
    },

    {
        artistName: 'Maroon 5',
        songName: "Stereo",
        song: 'Songs/stereo.mp3'
    },
    {
        artistName: 'Maroon 5',
        songName: "Beautiful Mistakes",
        song: 'Songs/Beautiful.mp3'
    },
    {
        artistName: 'Maroon 5',
        songName: "Animals",
        song: 'Songs/Animals.m4a'
    },
    {
        artistName: 'Maroon 5',
        songName: "Payphone",
        song: 'Songs/Payphone.mp3'
    }
];

let isplay = false;
let index = 0;
let inp = document.getElementsByTagName('input');
let label = document.getElementsByTagName('label');
let myAudio = document.getElementById("myAudio");
let artist = document.getElementById("artist");
let song = document.getElementById('song');
let list = document.getElementsByClassName('list');
let forward = document.getElementById('forward');
let flexc = document.getElementsByClassName('flex-container')

let progress = document.getElementById('bar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

myFunction = () => {
    for (let i = 0; i < inp.length; i++) {
        if (inp[i].checked) {
            index = i;
        }
    }
    song.innerHTML = BTS[index].songName;
    artist.innerHTML = BTS[index].artistName;
    myAudio.src = BTS[index].song;
    myAudio.play();
    isplay = true;
    playButton.className = 'fa fa-pause-circle fa-3x';
    modal.style.display = "block";
}
for (let j = 0; j < inp.length; j++) {
    inp[j].onchange = () => {
        myFunction();
    }
}

function toggle() {
    myAudio.src = BTS[index].song;
    song.innerHTML = BTS[index].songName;
    artist.innerHTML = BTS[index].artistName;
    myAudio.play();
    isplay = true;
    playButton.className = 'fa fa-pause-circle fa-3x';
    songName.innerHTML = names[index];
}

playButton.onclick = () => {
    if (isplay == false) {
        playButton.className = 'fa fa-pause-circle fa-3x';
        myAudio.play();
        isplay = true;
    } else {
        playButton.className = 'fa fa-play-circle fa-3x'
        myAudio.pause();
        isplay = false;
    }
    songName.innerHTML = names[index];
}

// forward button
forward.onclick = () => {
    index++;
    if (index == BTS.length) {
        index = 0;
    }
    toggle();
}
// backward button
let backward = document.getElementById('backward');
backward.onclick = () => {
    index--;
    if (index == -1) {
        index = BTS.length - 1;
    }
    toggle();
}

var modal = document.getElementById('id01');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

Swal.fire({
    title: "Welcome to LiveMusic.",
    text: "To listen songs go to Artists section, click on the name of artist and select a song. !Please Wait to Load Songs.",
    icon: "success"
});