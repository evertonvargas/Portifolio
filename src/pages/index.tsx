import { GetStaticProps } from "next"
import { useState, useEffect } from "react";
import Typist from "react-typist";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

import styles from "./home.module.scss";
import { Card } from "../components/Card";



export default function Home({pokemon, rickAndMort, stacks}) {
  const [count, setCount] = useState(1);
  const [buttonActivate, setButtonActivate] = useState(0);
  const array = [pokemon,stacks, rickAndMort]

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <main className={styles.container}>
      <section>
        <div></div>
        <img src="images/everton.jpg" alt="Éverton Vargas" />
        <h1>Éverton Vargas</h1>
        {count ? (
          <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
            <span> Full Stack</span>
            <Typist.Backspace count={11} delay={1500} />
            <span> Front End</span>
            <Typist.Backspace count={10} delay={1500} />
            <span> Back End</span>
            <Typist.Backspace count={9} delay={1500} />
          </Typist>
        ) : (
          <div><span>|</span></div>
        )}
      </section>
      <div>
        <a href="https://wa.me/48991320628">
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
          <button className={buttonActivate === 0 ? styles.active : null} onClick={()=>setButtonActivate(0)}>Pokémon</button>
          <button className={buttonActivate === 1 ? styles.active : null} onClick={()=>setButtonActivate(1)}>Stacks</button>
          <button className={buttonActivate === 2 ? styles.active : null} onClick={()=>setButtonActivate(2)}>Rick and Mort</button>
        </nav>
      </div>
      <section>
        {array[buttonActivate].map(character=> 
          <Card key={character.id}
          name={character.name}
          urlImg={character.image}
          />
        )}
      </section>
    </main>
  );
}

export const getStaticProps:GetStaticProps = async () => {
  const responsePokemon = await fetch('http://localhost:3000/api/pokemon')
  const pokemon = await responsePokemon.json()

  const responseRickAndMort = await fetch('http://localhost:3000/api/rickandmort')
  const rickAndMort = await responseRickAndMort.json()

  const responseStacks = await fetch('http://localhost:3000/api/stacks')
  const stacks = await responseStacks.json()


  return {
    props:{
      pokemon,
      rickAndMort,
      stacks
    }
  }
}
