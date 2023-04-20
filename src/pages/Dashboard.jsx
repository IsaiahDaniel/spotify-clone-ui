import React from "react";
import Rightsidebar from "../components/sidebar/Rightsidebar";
import Leftsidebar from "../components/sidebar/Leftsidebar";
import Header from "../components/Header";
import { ARTISTS } from "../constants/artists";
import ArtistsCard from "../components/Cards/ArtistsCard";
import Card from "../components/Cards/Card";
import { GENRES } from "../constants/genres";

const Dashboard = () => {
  const TOP_GENRES = [
    {
      id: 1,
      genre: "Hip Pop",
      image: require("../assets/genre-cards/1.png"),
      cardBg: "#E90F5B",
    },
    {
      id: 2,
      genre: "Electronic",
      image: require("../assets/genre-cards/2.png"),
      cardBg: "#54A891",
    },
    {
      id: 3,
      genre: "Alternative",
      image: require("../assets/genre-cards/3.png"),
      cardBg: "#F037A5",
    },
  ];

  return (
    <div className="flex items-center">
      <div>
        <Leftsidebar />
      </div>
      <main className="flex-1 ml-60 mr-60 bg-[#191414] h-full p-5">
        <Header />
        <section className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl text-white font-bold mb-7">Recent Searches</h2>
            <p className="text-white uppercase font-bold">See All</p>
          </div>
          <div className="flex items-center space-x-10">
            {ARTISTS.map((artist) => (
              <ArtistsCard
                artist={artist.name}
                image={artist.image}
                key={artist.id}
              />
            ))}
          </div>
        </section>
        
        <section className="mt-10">
          <h2 className="text-4xl text-white font-bold">Your Top genres</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {TOP_GENRES.map((genre) => (
              <Card
                cardBg={genre.cardBg}
                image={genre.image}
                text={genre.genre}
                classNames="w-[380px]"
                key={genre.id}
              />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-4xl text-white font-bold ">Browse All</h2>
          <div className="grid grid-cols-6 gap-5 mt-5">
            {GENRES.map((genre) => (
              <Card
                cardBg={genre.cardBg}
                image={genre.image}
                text={genre.genre}
                classNames="w-100px]"
                key={genre.id}
              />
            ))}
          </div>
        </section>
      </main>
      <div>
        <Rightsidebar />
      </div>
    </div>
  );
};

export default Dashboard;
