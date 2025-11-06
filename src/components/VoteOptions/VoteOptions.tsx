import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";
import clsx from "clsx";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}
function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button onClick={() => onVote("good")} className={css.button}>
        Good
      </button>
      <button onClick={() => onVote("neutral")} className={css.button}>
        Neutral
      </button>
      <button onClick={() => onVote("bad")} className={css.button}>
        Bad
      </button>
      <button
        onClick={onReset}
        className={clsx(css.button, css.reset, !canReset && css.hidden)}
      >
        Reset
      </button>
    </div>
  );
}
export default VoteOptions;
