import { useState } from "react";
import css from "./App.module.css";
import "../CafeInfo/CafeInfo";
import CafeInfo from "../CafeInfo/CafeInfo";
import type { VoteType, Votes } from "../../types/votes";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

const votesObj: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [votes, setVotes] = useState<Votes>(votesObj);

  function handleVote(type: VoteType) {
    setVotes({ ...votes, [type]: votes[type] + 1 });
  }

  function resetVotes() {
    setVotes(votesObj);
  }

  const totalVotes = votes.good + votes.neutral + votes.bad;

  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0 ? true : false}
      />
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
