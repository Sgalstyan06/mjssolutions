import React from "react";
import Slider from "../../components/Slider/Slider";
import * as Styled from "./Comment.styles";

export interface ISlideData {
  name: string;
  comment: string;
  image: string;
}

const commentList: ISlideData[] = [
  {
    name: "Tina Lasley",
    comment:
      "If you’re looking for the best Miele appliance repair company in LA look no further. Aram with MJS Solutions is the most knowledgeable, qualified, and efficient Miele appliance repair technician I’ve found in the 17 years of owning Miele appliances (and I’ve worked with many others!). Aram has worked for and been trained by Miele.  Most importantly, Aram cares about fixing the appliance the right way - honest, efficient, trustworthy, and integrity - no bait and switch.  A refreshing experience and you won’t be taken advantage of.  Look no further than Aram at MJS Solutions.",

    image: "/icons/comment_icon.png",
  },
  {
    name: "Ted Penny",
    comment:
      "Aram came to our rescue after a different repair person twice failed to fix our built-in Miele coffee maker. Aram was fastidious in his work, explained what he was doing, made a diagnosis that totally befuddled the other technician and fixed the machine. He stayed to test it and showed us how to maintain it. We feel much better about the operation and reliability of the machine knowing that Aram is available to support us.",

    image: "/icons/comment_icon.png",
  },
  {
    name: "Ann K",
    comment:
      "Aram knows everything Miele, he is extremely professional and knowledgeable about Miele appliances and was exceptional at communicating, keeping us informed of parts availability, when he would arrive, etc.  He took special care in our kitchen, he offered suggestions on the functionality of our steam oven (not the appliance he was repairing), and he tweaked the installation of our refrigerator door panel, something the original installer never returned back to finish two years ago.  Can't say enough great things about Aram.",

    image: "/icons/comment_icon.png",
  },
  {
    name: "Lu Yin Wong",
    comment:
      "Aram was very professional and knowledgeable of the Miele Dishwasher. He diagnosed the issue and ordered the part and got it fixed. Aram also took the extra time to give us tips on how to use our new dishwasher. Definitely recommend his service!",

    image: "/icons/comment_icon.png",
  },
  {
    name: "Michael Ashikian",
    comment:
      "Aram was great! He was very responsive and prompt to come out to repair our Miele stove and Ice maker. He was very knowledgeable and got the job done quickly. Highly recommended",

    image: "/icons/comment_icon.png",
  },
  {
    name: "Deet Ezra",
    comment:
      "MJS Solutions is the very best for your Miele appliances. Today, Aram from MJS came and repaired our coffee machine. He was communicative, courteous, prompt, efficient and fixed it perfectly. When we have an issue with our Miele machines, Aram from MJS is the only tech we ask for to provide service.",

    image: "/icons/comment_icon.png",
  },
  {
    name: "Patrick Dolan",
    comment: `I can’t say enough great things about Aram. MJS Solutions is top notch. He was on time and completed the job quickly. I was in the middle of selling a home and needed the ice maker repaired. He diagnosed the problem quickly and repaired it.

      Thanks Aram for your professional and attention to detail. I appreciate you going above and beyond by sending pictures of each visit and following up the next day after the job was completed.
      `,
    image: "/icons/comment_icon.png",
  },
  {
    name: "Izabell B",
    comment: `There is not much to say about Aram’s service - this was a PERFECTION! Not only he was on time and fixed the problem, he went above and beyond his scheduled list of problems, stayed longer to explain all the additional details and services and shortcuts my new Miele appliances had to offer and even gave me cooking tips and maintanance advices. I wish I wrote all of them down.. Will have to consult with Aram again. In short - don’t even think twice, so call Aram. The best.`,
    image: "/icons/comment_icon.png",
  },
];
const halfCommentListLength: number = Math.floor(commentList.length / 2);
const CommentSection = () => {
  return (
    <Styled.Container>
      <Slider
        slideData={commentList}
        halfCommentListLength={halfCommentListLength}
      />
    </Styled.Container>
  );
};
export default CommentSection;
