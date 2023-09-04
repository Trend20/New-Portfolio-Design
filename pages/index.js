import { useRef } from "react";
import Header from "../components/Header/Header";
import Socials from "../components/Socials/Socials";
import WorkCard from "../components/WorkCard/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer/Footer";
import Cursor from "../components/Cursor/Cursor";
import {
  SiJavascript,
  SiReact,
  SiAngular,
  SiRedux,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { DiMaterializecss } from "react-icons/di";
// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div
      className={`relative ${data.showCursor && "cursor-none"}`}
      style={{ overflow: "hidden", height: "100%", width: "100%" }}
    >
      {data.showCursor && <Cursor />}
      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div
          className="laptop:mt-20 mt-10"
          style={{ marginTop: "230px" }}
          id="hero"
        >
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>
          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div
          className="mt-10 laptop:mt-30 p-2 laptop:p-0"
          ref={workRef}
          style={{ marginTop: "230px", overflow: "hidden" }}
        >
          <h1 className="text-2xl text-bold">Work.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                url={project.url}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        {/*<div className="mt-10 laptop:mt-40 p-2 laptop:p-0">*/}
        {/*  <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>*/}
        {/*  <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">*/}
        {/*    {data.services.map((service, index) => (*/}
        {/*      <ServiceCard*/}
        {/*        key={index}*/}
        {/*        name={service.title}*/}
        {/*        description={service.description}*/}
        {/*      />*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/* This button should not go into production */}
        {/* {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )} */}
        <div
          className="mt-10 laptop:mt-40 p-2 laptop:p-0"
          ref={aboutRef}
          style={{ display: "flex", alignItems: "center", padding: "70px 0" }}
          id="about-contents"
        >
          <div className="about-description">
            <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
            <p
              className="tablet:m-10 mt-2 text- laptop:text-3xl w-full laptop:w-3/5"
              style={{ fontSize: "20px", opacity: 0.5 }}
            >
              {data.aboutpara}
            </p>
            <p
              className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5"
              style={{ fontSize: "20px", opacity: 0.5 }}
            >
              I am a highly collaborative team player who thrives in dynamic and
              fast-paced environments. My excellent communication and
              problem-solving skills allow me to work effectively with
              cross-functional teams to deliver solutions that exceed
              expectations.
            </p>
          </div>
          <div className="about-icons">
            <h1 className="tablet:m-10 text-2xl text-bold">Stack</h1>
            <div
              className="tech"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 3fr)",
                gridGap: "20px",
              }}
            >
              <p>
                <SiJavascript style={{ fontSize: 60, color: "#f0d824" }} />
              </p>
              <p>
                <SiTypescript style={{ fontSize: 60, color: "#007acc" }} />
              </p>
              <p>
                <SiReact style={{ fontSize: 60, color: "#0074a6" }} />
              </p>
              <p>
                <SiAngular style={{ fontSize: 60, color: "#ed1123" }} />
              </p>
              <p>
                <FaNodeJs style={{ fontSize: 60, color: "#026e00" }} />
              </p>
              <p>
                <TbBrandNextjs style={{ fontSize: 60, color: "#0062d1" }} />
              </p>
              <p>
                <DiMaterializecss style={{ fontSize: 60, color: "#3399FF" }} />
              </p>
              <p>
                <SiRedux style={{ fontSize: 60, color: "#764abc" }} />
              </p>
              <p>
                <TbBrandReactNative
                  style={{ fontSize: 60, color: "#61dafb" }}
                />
              </p>
              <p>
                <SiMongodb style={{ fontSize: 60, color: "#234526" }} />
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
