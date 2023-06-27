import { FlexBox } from "components/FlexBox";
import { RatingType } from "..";
import { ReviewCard } from "components/ReviewCard";
import { ScrollingList } from "./styles";

export interface RatingListProps {
  list: RatingType[];
}

export const RatingList: React.FC<RatingListProps> = ({ list }) => {
  return (
    <ScrollingList direction="column" gap={1}>
      {list.map((item) => (
        <ReviewCard
          customerName={item.userName}
          professionalName={item.professionalName}
          id={item.id}
          key={item.id}
          rating={item.rating}
          status={item.status}
        />
      ))}
    </ScrollingList>
  );
};
