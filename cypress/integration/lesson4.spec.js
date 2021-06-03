let trackCount = 0

class Author {
  constructor (genre, year) {
    this.genre = genre
    this.singerBornYear = year
  }

  showAuthorsGenre () {
    console.log(this.genre)
  }

}

class Track {

  constructor (name, duration, author) {
    this.trackName = name
    this.trackDuration = duration
    this.authorName = author
    trackCount++
  }

  showInfo () {
    console.log(`${this.trackDuration}:  ${this.authorName} - ${this.trackName}`)
  }

  showTotalAmountOfTracks () {
    console.log(`Total amount of tracks right now is ${trackCount}`)
  }
}

class Remix extends Track {

  constructor (name, duration, author, remixAuthor) {
    super(name, duration, author)
    this.remixAuthor = remixAuthor
  }

  showInfo () {
    console.log(`${this.trackDuration}: ${this.remixAuthor} - ${this.trackName} (${this.authorName})`)
  }
}

const inTheEnd = new Track('In the end', 90, 'Linkin Park')
const numb = new Track('Numb', 55, 'Linkin Park')
const inTheEndRemix = new Remix('intheEnd', 90, 'Linkin Park', 'YK')
const linkinPark = new Author('rock', 2000)
inTheEnd.showInfo()
inTheEnd.showTotalAmountOfTracks()
numb.showInfo()
linkinPark.showAuthorsGenre()
inTheEndRemix.showInfo()
inTheEndRemix.showTotalAmountOfTracks()
