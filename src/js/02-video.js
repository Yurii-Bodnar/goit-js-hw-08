import Player from '@vimeo/player'
const iframe = document.querySelector("#vimeo-player");
    const player = new Player(iframe);

    player.on('timeupdate',(data)=> localStorage.setItem('videoplayer-current-time', data.seconds))

    player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) { }).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
    });

