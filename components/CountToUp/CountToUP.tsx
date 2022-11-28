import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import * as Styled from "./CountToUp.styles";

interface ICountToUpProps {
  visible: boolean | undefined;
  quantity: number;
  children: string;
}

const CountToUp: React.FC<ICountToUpProps> = ({
  visible,
  quantity,
  children,
}) => {
  const [started, setStarted] = useState<null | boolean>(null);
  useEffect(() => {
    if (visible) {
      setStarted(true);
    }
  }, [visible]);
  return (
    <Styled.CountUpWrrapper>
      {started && (
        <CountUp start={0} end={quantity} delay={0} duration={1}>
          {({ countUpRef }) => (
            <>
              <span ref={countUpRef} />
              <span>{children}</span>
            </>
          )}
        </CountUp>
      )}
    </Styled.CountUpWrrapper>
  );
};

export default CountToUp;
