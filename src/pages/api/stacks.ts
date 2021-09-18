import { NextApiRequest, NextApiResponse } from "next";

export default function handler(request: NextApiRequest, response: NextApiResponse){
  const stacks = [
    {
      id: 1,
      name: "Javascript",
      image: "https://w7.pngwing.com/pngs/725/775/png-transparent-javascript-html-logo-blog-css3-javanese-miscellaneous-angle-text.png",
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
      image: "https://w7.pngwing.com/pngs/437/300/png-transparent-sass-npm-cascading-style-sheets-node-js-sass-purple-violet-text.png",
      link: "https://sass-lang.com/"
    },
    {
      id: 6,
      name: "MongoDb",
      image: "https://w7.pngwing.com/pngs/768/167/png-transparent-mongodb-nosql-document-oriented-database-nosql-icon-leaf-grass-business.png",
      link: "https://www.mongodb.com/pt-br"
    },
    {
      id: 7,
      name: "Python",
      image: "https://w7.pngwing.com/pngs/140/948/png-transparent-blue-and-yellow-logo-python-logo-programmer-fierce-python-s-cdr-angle-text.png",
      link: "https://www.python.org/"
    },
    {
      id: 8,
      name: "Express",
      image: "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
      link: "https://expressjs.com/"
    }
  ]

  return response.status(200).json(stacks);
}