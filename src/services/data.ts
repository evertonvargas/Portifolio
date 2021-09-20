interface Post{
  id: number;
  name: string;
  image: string;
  link: string;
}

interface IData{
  title: string;
  posts: Post[];
}

export const data:IData[] = [
  {
    title: "🚀 Stacks",
    posts:[
      {
        id: 1,
        name: "Javascript",
        image: "images/js.png",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
      },
      {
        id: 2,
        name: "Typescript",
        image: "images/typescript.png",
        link: "https://www.typescriptlang.org/"
      },
      {
        id: 3,
        name: "React",
        image: "images/react.png",
        link: "https://reactjs.org/"
      },
      {
        id: 4,
        name: "NodeJs",
        image: "images/nodejs.png",
        link: "https://nodejs.dev/"
      },
      {
        id: 5,
        name: "Sass",
        image: "images/sass.png",
        link: "https://sass-lang.com/"
      },
      {
        id: 6,
        name: "MongoDb",
        image: "images/mongodb.png",
        link: "https://www.mongodb.com/pt-br"
      },
      {
        id: 7,
        name: "Python",
        image: "images/python.png",
        link: "https://www.python.org/"
      },
      {
        id: 8,
        name: "Express",
        image: "images/express.png",
        link: "https://expressjs.com/"
      },
      {
        id: 9,
        name: "Docker",
        image: "images/docker.png",
        link: "https://www.docker.com/"
      },
      {
        id: 10,
        name: "Git",
        image: "images/git.png",
        link: "https://git-scm.com/"
      }
    ]
  },
  {
    title: "🔮 Projetos",
    posts:[
      {
        id: 1,
        name: "Loja Virtual",
        image: "images/shop-go-beyond.png",
        link: "https://go-beyond-shop.vercel.app/"
      },
      {
        id: 2,
        name: "Salário",
        image: "images/sales-salary.png",
        link: "https://sales-salary.vercel.app/"
      },
      {
        id: 3,
        name: "Bateria",
        image: "images/drum.png",
        link: "https://evertonvargas.github.io/Drum/index.html"
      },
      {
        id: 4,
        name: "Wildbeast",
        image: "images/wildbeast.png",
        link: "https://evertonvargas.github.io/CSS-Grid-Layout/"
      },
      {
        id: 5,
        name: "Shoes Store",
        image: "images/shoes-store.png",
        link: "https://shoes-store-ruby-tau.vercel.app/"
      },
      {
        id: 6,
        name: "Notas",
        image: "images/keeper.png",
        link: "https://keeper-six.vercel.app/"
      },
      {
        id: 7,
        name: "Link Aulas",
        image: "images/schedule.png",
        link: "https://schedule-92nlxpvl5-evertonvargas.vercel.app/"
      },
      {
        id: 8,
        name: "Jogo de Dados",
        image: "images/dice-game.png",
        link: "https://evertonvargas.github.io/Dice-game/index.html"
      },
      {
        id: 9,
        name: "Letmeask",
        image: "images/letmeask.png",
        link: "https://letmeask-server.web.app/"
      },
      {
        id: 10,
        name: "Dt money",
        image: "images/dtmoney.png",
        link: "https://github.com/evertonvargas/dtmoney"
      },
      {
        id: 11,
        name: "Go Restaurant",
        image: "images/go-restaurant.png",
        link: "https://github.com/evertonvargas/GoRestaurant"
      },
      {
        id: 12,
        name: "Watchme",
        image: "images/watchme.png",
        link: "https://github.com/evertonvargas/watchme"
      },
      {
        id: 13,
        name: "Cloker",
        image: "images/cloker.png",
        link: "https://github.com/evertonvargas/Clocker"
      },
      {
        id: 14,
        name: "To-Do-List",
        image: "images/to-do-list.png",
        link: "https://github.com/evertonvargas/To-Do-List"
      }
    ]
  },
  {
    title: "📺 Animes",
    posts: [
      {
        id: 1,
        name: "Kimetsu no Yaiba",
        image: "images/kimetsu.png",
        link: "https://animesbr.biz/anime/kimetsu-no-yaiba/"
      },
      {
        id: 2,
        name: "Shield Hero",
        image: "images/shield-hero.png",
        link: "https://animesbr.biz/anime/tate-no-yuusha-no-nariagari/"
      },
      {
        id: 3,
        name: "Hunter x Hunter",
        image: "images/hunter.png",
        link: "https://animesbr.biz/anime/hunter-x-hunter-2011/"
      },
      {
        id: 4,
        name: "Naruto",
        image: "images/naruto.png",
        link: "https://animesbr.biz/anime/naruto/"
      },
      {
        id: 5,
        name: "Slime",
        image: "images/slime.png",
        link: "https://animesbr.biz/anime/tensei-shitara-slime-datta-ken/"
      },
      {
        id: 6,
        name: "Dungeon ni deai",
        image: "images/dungeon.png",
        link: "https://animesbr.biz/anime/dungeon-ni-deai-o-motomeru-no-wa-machigatteiru-darou-ka/"
      },
      {
        id: 7,
        name: "The God of High School",
        image: "images/the-god-of-high-school.png",
        link: "https://animesbr.biz/anime/the-god-of-high-school/"
      },
      {
        id: 8,
        name: "Jujutsu Kaizen",
        image: "images/jujutsu.png",
        link: "https://animesbr.biz/anime/jujutsu-kaisen/"
      },
    
    ]
  }
]