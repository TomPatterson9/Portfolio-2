import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/hero';
import {ContainerBlock } from '../components/ContainerBlock'


export default function Home() {
  return (
<div>

<ContainerBlock
      title="Tom Patterson - Developer, Photographer, Creator"
      description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
    >
      <Hero />

</ContainerBlock>

</div>
  )
}