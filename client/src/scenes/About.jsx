import React from "react";
import Header from "./widgets/Header";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Header title="About this blog" />
      <div className="flex flex-col md:flex-row gap-20 mx-auto pt-28 px-12 sm:px-24">
        <p className="text-5xl leading-tight text-orange flex-none">
          Where it <br /> all <span className="italic"> started</span>
        </p>
        <p className="text-2xl text-justify">
          On my journey to become a programmer, I have experienced a lot of
          hardship and problems, including lack of resources, guides, and doubts
          from others. There are even times when I have come close to quitting
          due to frustration. Fortunately, I have people encouraging me and
          guiding me along my journey. But I know not everyone does. I want to
          be able to help people throughout their coding process and offer them
          support so that they would not feel lonely and lose interest in this
          field. Hence, Code Her Way was born.
        </p>
      </div>
      <div className="flex flex-col md:flex-row-reverse gap-20 mx-auto pt-28 px-12 sm:px-24">
        <p className="text-5xl leading-tight text-green italic flex-none text-right">
          Purpose
        </p>
        <p className="text-2xl text-justify">
          Code Her Way’s main purpose is to empower people, especially girls,
          regardless of any background to pursue their passion: coding. This
          website is a platform that provides users with
          computer-science-related content as well as inspires them on their own
          journey to become a computer scientist. Despite the name, the blog is
          for everyone! People of all ages, genders, and levels can join this
          community to learn more about computer science and support each other!
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-20 mx-auto py-28 px-12 sm:px-24">
        <p className="text-5xl leading-tight text-orange italic flex-none">
          Creator
        </p>
        <p className="text-2xl text-justify">
          Hi! I’m Khue, a high school student in Viet Nam who has a passion for
          coding. As a girl, I was often asked questions such as “Why would you
          choose Computer Science?”, “Can you handle such a difficult major?”,
          or even been offered an “easier” major. But no one would ask a boy
          such questions. That’s why this blog was created specifically for
          women in order to help and inspire other girls to join me on this
          journey. I want to prove that not only boys but also girls can succeed
          in this industry, and that we are just equally capable as boys are.
        </p>
      </div>
    </div>
  );
};

export default About;
