import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../../redux/shareSlice";

export default function ShareCounter() {

  const { count } = useSelector((s) => s.shares);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center">

      {/* COUNTER */}
      <div
        className="
        flex
        items-center
        justify-between
        w-[140px]
        h-[42px]
        bg-white/10
        border border-white/10
        rounded-lg
        overflow-hidden
        "
      >

        {/* DECREMENT */}
        <button
          onClick={() => dispatch(decrement())}
          className="
          w-[40px]
          h-full
          flex items-center justify-center
          text-[18px]
          hover:text-[#2ED3C6]
          transition
          "
        >
          −
        </button>

        {/* COUNT */}
        <span className="text-[16px] font-medium">
          {count}
        </span>

        {/* INCREMENT */}
        <button
          onClick={() => dispatch(increment())}
          className="
          w-[40px]
          h-full
          flex items-center justify-center
          text-[18px]
          hover:text-[#2ED3C6]
          transition
          "
        >
          +
        </button>

      </div>

    </div>
  );
}