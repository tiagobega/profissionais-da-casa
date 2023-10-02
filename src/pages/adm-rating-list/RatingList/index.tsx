import { FlexBox } from "components/FlexBox";
import { RatingType } from "..";
import { ReviewCard } from "components/ReviewCard";
import { ScrollingList } from "./styles";
import { Evaluation, Me, Professional } from "services/User/types";
import {
  evaluationAverage,
  evaluationSingleAverage,
} from "utils/EvaluationAverage";

export interface RatingListProps {
  list: { evaluation: Evaluation; user: Me; professional: Professional }[];
}

export const RatingList: React.FC<RatingListProps> = ({ list }) => {
  return (
    <ScrollingList direction="column" gap={1}>
      {!list.length && <FlexBox>Sem avaliações para mostrar!</FlexBox>}
      {list.map((item) => (
        <ReviewCard
          customerName={item.user.name}
          professionalName={item.professional.name}
          id={item.evaluation.id}
          key={item.evaluation.id}
          rating={evaluationSingleAverage(item.evaluation)}
          status={item.evaluation.status}
        />
      ))}
    </ScrollingList>
  );
};
