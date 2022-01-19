import { useState, useEffect } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import TaskTwoSketch from "./TaskTwoSketch";
import timegif from "././assets/Time.gif";
// import { TextScramble } from "@a7sc11u/scramble";

function TaskTwo() {
  //function to calculate number of seconds passed from a date
  const getSeconds = (date) => {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    return seconds;
  };

  const [secondsPassed, setSecondsPassed] = useState(
    getSeconds(
      new Date("Wed Jan 19 2022 21:00:00 GMT+0530 (India Standard Time)")
    )
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsPassed(secondsPassed + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsPassed]);

  //   const handleComplete = () => {
  //     console.log("scramble is done");
  //   };

  return (
    <div className="w-screen bg-black">
      <div className="flex flex-col min-h-screen gap-y-4 px-8 md:w-1/2 mx-auto font-sans text-white">
        <div className="sticky top-0 bg-black  bg-opacity-50 filter backdrop-blur-md">
          <div className="w-max text-3xl md:text-4xl font-bold pt-4 md:pt-8">
            Time as Story
          </div>
          <div className="md:text-xl pb-4"> Malay Vasa - Task 2</div>
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
          <div className=" w-min mx-auto p-0 md:m-0 mb-8 md:mb-0">
            <ReactP5Wrapper className="hidden" sketch={TaskTwoSketch} />
          </div>
          <div className="flex flex-col gap-y-4 text-justify md:text-xl text-lime-400">
            <div className="font-bold mb-2">Part One</div>
            <p>
              I have used a forever twisting thread to represent time. You can
              manipulate the characterstics of the viusalization by moving your
              cursor across the screen.
            </p>
            <p>
              As you move the cursor rightwards, you will see the entangling of
              the thread speed up and moving the cursor leftwards will similarly
              slow down the thread. This is to indicate that we can to some
              extent control how we percieve time.
            </p>
            <p>But we can never truly stop experiencing time.</p>
            <p>
              Moving the cursor vertically changes the color of the thread from
              green to red. This is to visualize that, the way we think about
              having a "good time", or going through a "bad time" is in our
              control.
            </p>
          </div>
        </div>

        <div className="text-justify md:text-xl text-lime-400">
          The thread is a visual representation of time. It is a continuous line
          that never stops moving. There is a repeating pattern of entanglement
          and detanglement. In that sense, time is timeless. But the only way to
          experience time as timeless, is to step out of it. Like something
          inside a painting does not know it's in a painting, only a painter
          know so.
        </div>

        <hr className="border-lime-400 mt-4 md:my-8"></hr>

        <div className="flex flex-col md:flex-row">
          <img
            src={timegif}
            alt="time gif"
            className="w-full md:w-[400px] mx-auto"
          />
          <div className="flex flex-col space-y-4 text-justify md:text-xl text-lime-400">
            <div className="font-bold mb-2">Part Two</div>
            <p>
              When I imagine time as a currency, I see it being implemented
              exactly like a cryptocurrency.
            </p>
            <p>
              The form I've given it is similar to how cryptocurrencies are
              represented. An NFT, where the icon is embedded inside a coin.
              I've chosen to embed a stopwatch inside the coin.
            </p>
            <p>
              To understand why I chose cryptocurrencies as the form, we first
              need to look at money.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-4 text-justify md:text-xl text-lime-400">
          <p>
            Money is a form of communication. At its very basic level, money
            isn't value: money represents an abstraction of value. It's a way of
            communicating value. Money is a language. Money as linguistic
            technology is (and always has been) about the scale at which you can
            play your co-ordination game. The scale is now planetary.
          </p>
          <p>
            The move from precious metals (gold) to paper was highly
            controversial. It took about 400 years for paper as money to become
            broadly accepted. Then, 60 years ago, we saw a new form of money in
            the form of plastic cards.
          </p>
          <p>
            {" "}
            Now we have Bitcoin which represents a new form of 'doing money' and
            is as radical as the change from precious metals to paper, perhaps
            even more so.
          </p>

          <p>
            This is because our history as a species has to do with tangible
            expressions of wealth, and now we're dealing with a network-centric
            form of money which is totally abstract.
          </p>
          <p>
            Time as a currency would function in the same way as bitcoin, or any
            cryptocurrency. It would be a form of digital currency. Traded using
            blockchains. A blockchain is a decentralized ledger of all
            transactions across a peer-to-peer network. Using this technology,
            participants can confirm transactions without a need for a central
            clearing authority.
          </p>
          <p>
            This is important as instead of regulatory fiat, enforced by legal
            prose and human courts backed by the threat of violence; Blockchain
            enables a network of peers to create the conditions required for a
            functional currency through mathematics alone, enforced by
            deterministic computation
          </p>
          <p>
            'Peer-to-peer' refers to an architecture which describes the
            relationship between participants in a (distributed) system. The
            architecture of Blockchain is peer-to-peer because every participant
            in the network speaks the protocol at the same level. There are no
            "special" nodes. It means that every peer treats every transaction
            the same; it has no context in the peer's system apart from that
            which it gets from the network.
          </p>
          <p>
            Money is not “backed by” anything other than human trust in
            institutions whose stability is always uncertain. The theory behind
            all cryptocurrencies, is that the records produced by a distributed
            computer network Blockchain can be made tamperproof, thus
            theoretically guaranteeing the soundness of a currency better than
            governments can.
          </p>
        </div>

        <hr className="border-lime-400 mt-4 md:mb-8"></hr>
      </div>
    </div>
  );
}

export default TaskTwo;
