/* 1. Create a constructor function Playlist and Song. */

// Playlist
// Add: Pushes the passed-through song to the songs array
// Play: Plays current song based on array index
// Stop: Holds place in array, but calls above stop song prototype function
// Next: Sets the next song in the songs array, calling the above play prototype function

// Song should take in two arguments, title and artist, which should both be added as properties
// when the Song constructor function is used.
// Play: Sets the song as playing using isPlaying
// Stop: Sets the song as not playing (isPlaying = false)
function Playlist() {
    this.index = 0;
    this.songs = [];
  };
  
  function Song(title,artist,isPlaying){
    this.title=title;
    this.artist=artist;
    isPlaying = false;
  }

  Song.prototype.Play = function() {
    this.isPlaying = true;
  }

  Song.prototype.Stop = function() {
    this.isPlaying = false;
  }

  Playlist.prototype.Add = function(song) {
    this.songs.push(song);
  };
  
  Playlist.prototype.Play = function() {
    let curSong = this.songs[this.index];
    curSong.Play();
  };
  
  Playlist.prototype.Stop = function(){
    let curSong = this.songs[this.index];
    curSong.Stop();
  };
  
  Playlist.prototype.Next = function() {
    this.Stop();
    this.index++;
    if (this.this.songs.length === this.index) {
       this.index = 0;
    }
    this.Play();
  };

const playlist = new Playlist();
const heyJude = new Song('Hey Jude', 'The Beatles');
const jaded = new Song('Jaded', 'Aerosmith');

playlist.Add(heyJude);
playlist.Add(jaded);
