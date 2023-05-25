class backgroundAudioController{
    constructor(audioURL, button, volume){
        this.button = button
        this.audio = new Audio(audioURL)
        // this.audio.volume = parseFloat(volume / 100)
        // this.audio.volume = volume
        this.volume = volume
        button.addEventListener('click', () => {
            if(!automaticStartedAudio){
                this.pause()
                automaticStartedAudio = true
            }else{
                if(this.audio.paused){
                    this.play()
                    // this.audio.play()
                    // this.button.innerHTML = "<span class=\"material-symbols-outlined\">" +
                    // "volume_up" +
                    // "</span>" // TODO Do this part of the code in a clearner and modular way.
                    // this.button.value = "Parar" // TODO Do this part of the code in a clearner and modular way.

                }else{
                    this.pause()
                    // this.audio.stop()
                    // this.audio.pause()
                    // this.button.innerHTML = "<span class=\"material-symbols-outlined\">" +
                    // "volume_off" +
                    // "</span>"
                    // this.button.value = "Reproducir"
                }
            }
        })
        volume.addEventListener('input', () => {
            // this.audio.volume = volume.value / 100
            if(volume.value == 0){
                this.pause()
            }else if(this.audio.paused && volume.value != 0){
                this.play()
                this.audio.volume = volume.value / 100
            }else{
                this.audio.volume = volume.value / 100
            }
        })
        volume.addEventListener('click', () => {
            if(volume.value != 0 && this.audio.paused){
                this.play()
            }
        })
        this.audio.addEventListener('ended', () => {
            this.audio.currentTime = 0;
            this.play()
        })
    }

    play(){
        this.audio.play()
        this.button.innerHTML = "<button class=\"highlighted-button\">" +
        "Pausar" +
        "</button>" // TODO Do this part of the code in a clearner and modular way.

    }

    pause(){
        this.audio.pause()
        this.button.innerHTML = "<button class=\"highlighted-button\">" +
        "Reanudar" +
        "</button>"
    }

    autoPlay(){
        this.audio.play()
    }
}
