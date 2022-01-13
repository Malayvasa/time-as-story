import { useState, useEffect } from "react";
import { TextScramble } from "@a7sc11u/scramble";

function App() {
  //function to calculate amount of seconds passed from a particular date and update it every second
  const [secondsPassed, setSecondsPassed] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsPassed(secondsPassed + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsPassed]);

  const handleComplete = () => {
    console.log("scramble is done");
  };

  const text =
    "Time is a contextual illusion. <br/><br/> This is the definition of time that I came up with, when I asked to do so in 10 minutes. Now that I have had more time and have been able to research more here’s what I think. <br/><br/> So, What is time? <br/><br/> I want to start in context of the human brain. Time has often been called a human construct, but where in the evolution of humans did we decide we need time? It seems unlikely that we understand the differences between past, present, and future in the same way that we understand the differences between up, down, left, and right. The brain comes better equipped to navigate, sense, represent, and understand space than time. Our sense of time can diverge radically from objective clock time, and much is often made of the these illusions. <br/><br/> Another interesting aspect of the human brain is memory. Memory did not evolve to allow us to reminisce about the past. The sole evolutionary function of memory is to allow animals to predict what will happen, when it will happen, and how to best respond when it does happen. Our unique ability to grasp the concept of time and peer into the distant future is, however, both a gift and curse. Over the course of evolution we went from being subjugated to nature’s unpredictable and capricious ways to overruling nature: manipulating the present to assure survival in the future. <br/><br/> I now move on to another field from which majority of our understanding about time comes from : Physics. <br/><br/> You’d think physicists would have figured out time by now right? Nope. The laws of physics provide no evidence that now is any more special than here, implying that all moments in time are as equally real as all locations in space. The laws of physics do not unambiguously state that we live in a 4D block universe, it is widely recognised that even within physics there is no universal agreement about the nature of time. <br/><br/>  And if this mystery were not sufficiently challenging as it is, there is a further wrinkle to consider: the laws of physics and the human brain are not independent of one another. It is not simply that the inner workings of the human brain must obey the laws of physics, but that our interpretation of the laws of physics is filtered by the architecture of the human brain. <br/><br/> I think at the end  of all this my definition still stands, you can select a context and define time inside it, but time itself is a contextual illusion. Perhaps time is not something we define but only something we measure.";

  return (
    <div className="w-screen bg-black">
      <div className="flex flex-col min-h-screen gap-y-4 px-8 md:w-1/2 mx-auto font-sans text-white">
        <div className="w-max md:text-4xl font-bold pt-12 md:pt-24">
          Time as Story
        </div>
        <div className="md:text-2xl"> Malay Vasa - Task 1</div>
        <div className="md:text-2xl">
          {" "}
          It has been{" "}
          <span className="text-xl md:text-4xl text-lime-400">
            {secondsPassed}s
          </span>
          <br /> since you've been here.
        </div>

        <hr className="border-lime-400 mt-4 md:mt-12"></hr>

        <div className="md:text-xl text-justify text-lime-400 my-4 pb-8">
          <TextScramble
            as="div"
            play={true}
            speed={3}
            scramble={3}
            step={3}
            stepInterval={1}
            seed={3}
            seedInterval={10}
            onComplete={handleComplete}
            text={text}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
