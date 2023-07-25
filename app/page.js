"use client";

import Image from 'next/image';
import Card from './Card';
import GithubIcon from './Icons/GithubIcon';

export default function Home() {
  const handleMouseMove = e => {
    for (const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }

  return (
    <>

      <div className='avatar'>
        <Image src="/images/profile.jpg" width={100} height={100} alt='Hamza ve kedisi Böcüş' />
      </div>

      <p className='description' >🚧 Yapım aşmasında</p>

      <div id="cards" onMouseMove={handleMouseMove}>

        <Card href="https://github.com/webCatDev" icon={<GithubIcon />} title="webcatdev" />
        <Card href="https://www.instagram.com/webcatdev/" icon={<GithubIcon />} title="@webcatdev" />
        <Card href="#" icon="" title="Hello World" />
        <Card href="#" icon="" title="Hello World" />
        <Card href="#" icon="" title="Hello World" />
        <Card href="#" icon="" title="Hello World" />


      </div>

    </>
  )
}
