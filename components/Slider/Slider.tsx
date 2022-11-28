import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import * as Styled from "./Slider.styles";
import { DotButton } from "./CarouselButton";
import { ISlideData } from "../../sections/CommentSection/CommentSection";

const Slider: React.FC<{
  slideData: ISlideData[];
  halfCommentListLength: number;
}> = ({ slideData, halfCommentListLength }) => {
  const [viewportRef, embla] = useEmblaCarousel(
    {
      loop: true,
      skipSnaps: false,
    },
    [Autoplay()],
  );
  const [selectedIndex, setSelectedIndex] = useState(halfCommentListLength);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [defaultSelect, setDefaultSelect] = useState(true);
  const viewSlide = useRef(0);
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla],
  );
  const onSelect = useCallback(() => {
    if (!embla) return;
    if (viewSlide.current < 3) viewSlide.current++;
    if (!defaultSelect || viewSlide.current > 1) {
      setSelectedIndex(embla.selectedScrollSnap());
    }
  }, [embla, setSelectedIndex, defaultSelect]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    if (defaultSelect) scrollTo(selectedIndex);
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect, scrollTo]);

  const onSlideClick = useCallback(
    (index: number) => {
      if (embla && embla.clickAllowed()) {
        embla.scrollTo(index);
      }
    },
    [embla],
  );

  return (
    <>
      <Styled.Embla>
        <Styled.EmblaViewport ref={viewportRef}>
          <Styled.EmblaContainer>
            {slideData.map((item, index) => (
              <Styled.EmblaSlide key={index}>
                <Styled.EmblaSlideInner
                  onClick={() => onSlideClick(index)}
                  selected={index === selectedIndex}
                >
                  <Styled.EmblaSlideImg>
                    <Styled.TitleWrrapper>
                      <Styled.IconWrapper>
                        <Image
                          src={item.image}
                          width="64px"
                          height="64px"
                          alt="comment"
                        />
                      </Styled.IconWrapper>
                      <Styled.Name>{item.name}</Styled.Name>
                    </Styled.TitleWrrapper>
                    <Styled.Comment>{item.comment}</Styled.Comment>
                  </Styled.EmblaSlideImg>
                </Styled.EmblaSlideInner>
              </Styled.EmblaSlide>
            ))}
          </Styled.EmblaContainer>
        </Styled.EmblaViewport>
        {slideData && slideData.length > 1 ? (
          <Styled.EmblaDots>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => {
                  scrollTo(index);
                  setDefaultSelect(false);
                }}
              />
            ))}
          </Styled.EmblaDots>
        ) : (
          ""
        )}
      </Styled.Embla>
    </>
  );
};

export default Slider;
