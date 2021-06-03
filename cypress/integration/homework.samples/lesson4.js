// Тестовое задание
// Нужно создать два базовых класса: трек и исполнитель. исполнитель будет содержать общую информацию: когда сформирован коллектив, жанры, в которых играет, био.
// Трек должен содержать референс на объект исполнителя, а так же поля: название, длительность. у него должен быть метод, который выводит на экран общую информацию вида «4:20 курган и агрегат - пострижись як в прошлий раз»
// Из класса трек создайте сабкласс - ремикс. это будет трек с дополнительным полем: original_author. кроме того, его info будет вида: «4:17 Noize MC - все как у людей (Гражданская оборона mix)»
// Также, у класса трек должен быть счетчик количества треков (то есть когда вы инициализируете новый трек через конструктор, счетчик должен увеличиваться - читайте о статических методах)
// А у экземпляров класса группы должно быть два дополнительны поля/метода: для возврата всех треков группы и для возврата ремиксов, где данная группа - оригинальный автор

class Artist {
  constructor(name, founded, genre, bio) {
    this.name = name
    this.founded = founded
    this.genre = genre
    this.bio = bio
    this.songs = []
    this.remixes = []
  }

  addTrack(name, duration) {
    new Track(this, name, duration)
  }

  addRemix(name, duration, originalAuthor) {
    new Remix(this, name, duration, originalAuthor)
  }
}

class Track {
  constructor(artist, name, duration) {
    this.artist = artist
    this.name = name
    this.duration = duration    

    this.constructor.songs_count += 1
    
    artist.songs.push(this)
  }

  static songs_count = 0

  info () {
    return `${this.duration} ${this.artist.name} - ${this.name}`
  }
}

class Remix extends Track {
  constructor(artist, name, duration, originalAuthor) {
    super(artist, name, duration);
    this.originalAuthor = originalAuthor   

    originalAuthor.remixes.push(this)
  }  

  info () {
    return `${super.info()} (${this.originalAuthor.name} mix)`
  }
}

let guiBoratto = new Artist('Gui Boratto', 2005, ['drum & bass', 'synthpop'], 'TBD')
let massiveAttack = new Artist('Massive Attack', 1994, ['trip-hop', 'alternative'], 'best band ever!')

let angelSong = new Track(massiveAttack, 'Angel', '6:18')
let teardropSong = new Track(massiveAttack, 'Teardrop', '5:29')
massiveAttack.addTrack('Paradise Circus', '4:58')

let ParadiseCircusRemix = new Remix(guiBoratto, 'Paradise Circus', '7:41', massiveAttack)

console.log(angelSong.info())
console.log(ParadiseCircusRemix.info())

console.log(massiveAttack.songs)
console.log(massiveAttack.remixes)
