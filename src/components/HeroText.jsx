import { FlipWords } from "./Flipword";

const HeroText = () => {
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop */}
      <div className="hidden md:flex flex-col c-space">
        <h1 className="text-4xl font-medium">Hi, I'm Karthik</h1>
        <div className="flex flex-col items-start">
          <p className="text-5xl font-medium text-neutral-300">
            A developer<br />loves to create something
          </p>
          <div>
            <FlipWords
              words={["Code", "Build", "Deploy"]}
              className="font-black text-white text-3xl"
            />
          </div>
          <p className="text-4xl font-medium text-neutral-300">Web Solution</p>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col md:hidden c-space">
        <h1 className="text-3xl font-medium">Hi, I'm Karthik</h1>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-medium text-neutral-300">
            A developer<br />loves to create something
          </p>
          <div>
            <FlipWords
              words={["Code", "Build", "Deploy"]}
              className="font-black text-white text-2xl"
            />
          </div>
          <p className="text-3xl font-medium text-neutral-300">Web Solution</p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
