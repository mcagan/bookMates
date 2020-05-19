exports.seed = function (knex) {
  return Promise.all([
    knex("books").then(function () {
      // Inserts seed entries
      return knex("books").insert([
        {
          name: "The Disposessed",
          author: "Ursula Le Guin",
          published_on: "1994-10-20",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51oB3LJckjL._SX300_BO1,204,203,200_.jpg",
          genre_id: 4,
        },
        {
          name: "Parable of the Sower",
          author: "Octavia E. Butler",
          published_on: "2000-01-01",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/71jg6gRAKkL.jpg",
          genre_id: 4,
        },
        {
          name: "Harry Potter and the Deathly Hallows",
          author: "J.K. Rowling",
          published_on: "2009-07-01",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/914CT7iyyvL.jpg",
          genre_id: 4,
        },
        {
          name: "A Game of Thrones: A Song of Ice and Fire, Book 1",
          author: "George R. R. Martin",
          published_on: "2005-08-01",
          image:
            "https://kbimages1-a.akamaihd.net/34b32e45-2800-4f82-8aed-22ade4953059/1200/1200/False/a-game-of-thrones-a-song-of-ice-and-fire-book-1-1.jpg",
          genre_id: 4,
        },
        {
          name: "Becoming",
          author: "Michelle Obama",
          published_on: "2018-11-13",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/81dDwAzxtrL.jpg",
          genre_id: 5,
        },
        {
          name: "The Fifth Vital",
          author: "Mike Majlak",
          published_on: "2020-04-20",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/71fhkx-XW8L.jpg",
          genre_id: 1,
        },
        {
          name: "The Shining",
          author: "Stephen King",
          published_on: "1977-01-28",
          image:
            "https://upload.wikimedia.org/wikipedia/en/4/4c/Shiningnovel.jpg",
          genre_id: 2,
        },
        {
          name: "The God Of Small Things",
          author: "Arundhati Roy",
          published_on: "199-01-01",
          image:
            "https://wordpress.clarku.edu/mixlit/files/2014/01/thegodofsmallthings.jpg",
          genre_id: 4,
        },
        {
          name: "On Earth We're Briefly Gorgeous",
          author: "Ocean Vuong",
          published_on: "2019-06-04",
          image:
            "https://upload.wikimedia.org/wikipedia/en/f/fc/On_Earth_We%27re_Briefly_Gorgeous_%28Vuong_novel%29.png",
          genre_id: 4,
        },
        {
          name: "White Teeth",
          author: "Zadie Smith",
          published_on: "2000-01-27",
          image:
            "https://upload.wikimedia.org/wikipedia/en/1/1f/WhiteTeeth.jpg",
          genre_id: 4,
        },
      ]);
    }),
  ]);
};
