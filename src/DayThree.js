import { useState, useEffect } from "react";

function DayThree() {
  //function to calculate number of seconds passed from a date
  const getSeconds = (date) => {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    return seconds;
  };

  const [secondsPassed, setSecondsPassed] = useState(
    getSeconds(
      new Date("Wed Jan 25 2022 11:00:00 GMT+0530 (India Standard Time)")
    )
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsPassed(secondsPassed + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsPassed]);

  return (
    <div className="w-screen bg-black">
      <div className="flex flex-col min-h-screen gap-y-4 px-8 md:w-1/2 mx-auto font-sans text-white">
        <div className="sticky top-0 bg-black  bg-opacity-50 filter backdrop-blur-md">
          <div className="w-max text-3xl md:text-4xl font-bold pt-4 md:pt-8">
            Time as Story
          </div>
          <div className="md:text-xl pb-4"> Malay Vasa - Day Three</div>
          <div className="md:text-xl">
            {" "}
            It has been{" "}
            <span className="text-xl md:text-3xl text-lime-400">
              {secondsPassed}s
            </span>
            <br /> since this was published.
            <hr className="border-lime-400 mt-4 md:mt-8"></hr>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col gap-y-4 text-justify md:text-xl text-lime-400">
            <p>“Once upon a time …’</p>
            <p>
              Reading that, you know you’re going to encounter a series of
              events will occur – almost certainly to a significant character.
              That’s the very best definition of a story: ‘Once upon a time, in
              such and such a place, something happened.”
            </p>
            <p>
              If we look at the typical structures that stories follow, there’s
              usually two : The Three-Act Structure and The Five-Act Structure.
            </p>
            <p>
              Three-act structure is the cornerstone of drama primarily because
              it follows the irrefutable laws of physics. Everything must have a
              beginning, middle and end.
            </p>
            <p>
              But why do we have to tell stories in three acts? The endless
              recurrence of the same underlying pattern suggests psychological,
              if not biological and physical reasons for the way we tell
              stories. If we don’t choose to tell them that way, we are
              compelled to.
            </p>
            <p>
              In the Book “Into The Woods”, Author John Yorke talks about why we
              use the Three-Act form. According to him, human beings order the
              world dialectically. Incapable of perceiving randomness, we insist
              on imposing order on any observed phenomena, any new information
              that comes our way. Every act of perception is an attempt to
              impose order, to make sense of a chaotic universe. Storytelling,
              at one level, is a manifestation of this process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DayThree;
