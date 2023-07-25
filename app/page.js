"use client";

import Image from "next/image";
import Card from "./Card.js";
import GithubIcon from "./Icons/GithubIcon.js";
import InstagramIcon from "./Icons/InstagramIcon.js";
import BoookIcon from "./Icons/BookIcon.js";

export default function Home() {
  const handleMouseMove = (e) => {
    for (const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <>
      <div className="avatar">
        <Image
          src="/images/profile.jpg"
          width={100}
          height={100}
          alt="Hamza ve kedisi Böcüş"
        />
      </div>

      <p className="description">🚧 Yapım aşamasındadır.</p>

      <div
        id="cards"
        onMouseMove={handleMouseMove}
        onTouchMove={handleMouseMove}
      >
        <Card
          href="https://github.com/webCatDev"
          icon={<GithubIcon />}
          title="webcatdev"
        />
        <Card
          href="https://www.instagram.com/webcatdev/"
          icon={<InstagramIcon />}
          title="@webcatdev"
        />
        <Card
          href="https://1000kitap.com/Hamzaessiz"
          icon={<BoookIcon />}
          title="Hamzaessiz"
        />
        <Card href="#" icon="" title="Hello World" />
        <Card href="#" icon="" title="Hello World" />
        <Card href="#" icon="" title="Hello World" />
      </div>
    </>
  );
}
