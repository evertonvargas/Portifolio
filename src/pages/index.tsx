import { GetStaticProps } from "next";
import { useState, useEffect } from "react";
import Typist from "react-typist";
import { parseCookies, setCookie } from "nookies";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import Head from "next/head";

import { stacks } from "../services/stacks";
import { projects } from "../services/projects";
import { animes } from "../services/animes";

import styles from "./home.module.scss";
import { Card } from "../components/Card";

interface DataAPI {
  id: number;
  name: string;
  image: string;
  link: string;
}

interface HomeProps {
  pokemon: DataAPI[];
  rickAndMort: DataAPI[];
  stacks: DataAPI[];
}

//{ pokemon, rickAndMort, stacks } : HomeProps

export default function Home() {
  const [count, setCount] = useState(0);
  const array = [stacks, projects, animes];
  const [buttonActivate, setButtonActivate] = useState(0);

  useEffect(() => {
    const { USER_MENU } = parseCookies();
    const cookie = USER_MENU ? Number(USER_MENU) : 0;
    setButtonActivate(cookie);
  }, []);

  useEffect(() => {
    setCount(1);
  }, [count]);

  function handleButtonActivate(number: number) {
    setCookie(null, "USER_MENU", number.toString(), {
      maxAge: 86400 * 7,
      path: "/",
    });
    setButtonActivate(number);
  }

  return (
    <>
      <Head>
        <meta name="description" content="Portfólio Éverton Vargas" />
        <title>PortFólio Éverton Vargas</title>
      </Head>
      <main className={styles.container}>
        <section>
          <div></div>
          <img src="images/everton.jpg" alt="Éverton Vargas" />
          <h1>Éverton Vargas</h1>
          {count ? (
            <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
              <span> Full Stack</span>
              <Typist.Backspace count={11} delay={1500} />
              <span> Front-End</span>
              <Typist.Backspace count={10} delay={1500} />
              <span> Back-End</span>
              <Typist.Backspace count={9} delay={1500} />
            </Typist>
          ) : (
            <div>
              <span>|</span>
            </div>
          )}
        </section>
        <div>
          <a href="https://api.whatsapp.com/send?phone=5548991320628">
            <FaWhatsapp size={25} />
            <span>Whatsapp</span>
          </a>
          <a href="https://www.linkedin.com/in/everton-vargas/">
            <FaLinkedin size={25} />
            <span>Linkedin</span>
          </a>
          <a href="https://github.com/evertonvargas">
            <FaGithub size={25} />
            <span>Github</span>
          </a>
        </div>
        <div>
          <nav>
            <button
              className={buttonActivate === 0 ? styles.active : undefined}
              onClick={() => handleButtonActivate(0)}
            >
              🚀 Stacks
            </button>
            <button
              className={buttonActivate === 1 ? styles.active : undefined}
              onClick={() => handleButtonActivate(1)}
            >
              🔮 Projetos
            </button>
            <button
              className={buttonActivate === 2 ? styles.active : undefined}
              onClick={() => handleButtonActivate(2)}
            >
              📺 Animes
            </button>
          </nav>
        </div>
        <section>
          {array[buttonActivate].map((character) => (
            <Card
              key={character.id}
              name={character.name}
              urlImg={character.image}
              link={character.link}
            />
          ))}
        </section>
      </main>
    </>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const responsePokemon = await fetch("pages/api/pokemon");
//   const pokemon = await responsePokemon.json();

//   const responseRickAndMort = await fetch(
//     "pages/api/rickandmort"
//   );
//   const rickAndMort = await responseRickAndMort.json();

//   const responseStacks = await fetch("pages/api/stacks");
//   const stacks = await responseStacks.json();

//   return {
//     props: {
//       pokemon,
//       rickAndMort,
//       stacks,
//     },
//   };
// };
