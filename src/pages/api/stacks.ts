import { NextApiRequest, NextApiResponse } from "next";

export default function handler(request: NextApiRequest, response: NextApiResponse){
  const stacks = [
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

  return response.status(200).json(stacks);
}