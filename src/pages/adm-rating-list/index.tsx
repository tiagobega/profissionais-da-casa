import { NameValueType } from "Models/models";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { MarginContainer } from "styles/commonComponents";
import { ContentContainer, Header } from "./styles";
import { RatingList } from "./RatingList";
import { filterRating } from "utils/filterList";
import { useTheme } from "styled-components";

export interface AdmRatingListProps {}

export type RatingStatusOptions = "approved" | "refused" | "analysis";
export type RatingType = {
  id: string;
  userName: string;
  userMail: string;
  userPhone: string;
  date: string;
  professionalName: string;
  professionalMail: string;
  professionalPhone: string;
  rating: number;
  review: string;
  status: RatingStatusOptions;
};

const mockRatingList: RatingType[] = [
  {
    id: "h3u22n",
    userName: "Antonio Silva dos Santos Junior",
    userMail: "fernanda_aa_martins@zipmail.com",
    userPhone: "(11) 98765-4321",
    date: "12/09/2022",
    professionalName: "Santana Soluções em Projetos",
    professionalMail: "contato@santanaprojetos.com.br",
    professionalPhone: "(11) 12345-6789",
    rating: 4,
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia pariatur deserunt, impedit dolor tenetur commodi molestiae earum veniam assumenda vero.",
    status: "approved",
  },
  {
    id: "stefarhr",
    userName: "Fernanda Araújo de Albuquerque Martins",
    userMail: "fernanda_aa_martins@zipmail.com",
    userPhone: "(11) 98765-4321",
    date: "12/09/2022",
    professionalName: "Rolim Arquitetos Associados",
    professionalMail: "contato@rolimarquitetos.com.br",
    professionalPhone: "(11) 12345-6789",
    rating: 3,
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia pariatur deserunt, impedit dolor tenetur commodi molestiae earum veniam assumenda vero.",
    status: "approved",
  },
  {
    id: "themureeaqh",
    userName: "Antonio Silva dos Santos Junior",
    userMail: "fernanda_aa_martins@zipmail.com",
    userPhone: "(11) 98765-4321",
    date: "12/09/2022",
    professionalName: "Santana Soluções em Projetos",
    professionalMail: "contato@santanaprojetos.com.br",
    professionalPhone: "(11) 12345-6789",
    rating: 5,
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia pariatur deserunt, impedit dolor tenetur commodi molestiae earum veniam assumenda vero.",
    status: "analysis",
  },
  {
    id: "h3fnrthereu22n",
    userName: "Fernanda Araújo de Albuquerque Martins",
    userMail: "fernanda_aa_martins@zipmail.com",
    userPhone: "(11) 98765-4321",
    date: "12/09/2022",
    professionalName: "Rolim Arquitetos Associados",
    professionalMail: "contato@rolimarquitetos.com.br",
    professionalPhone: "(11) 12345-6789",
    rating: 3.5,
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia pariatur deserunt, impedit dolor tenetur commodi molestiae earum veniam assumenda vero.",
    status: "analysis",
  },
  {
    id: "ehrwehr",
    userName: "Antonio Silva dos Santos Junior",
    userMail: "fernanda_aa_martins@zipmail.com",
    userPhone: "(11) 98765-4321",
    date: "12/09/2022",
    professionalName: "Santana Soluções em Projetos",
    professionalMail: "contato@santanaprojetos.com.br",
    professionalPhone: "(11) 12345-6789",
    rating: 4.25,
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia pariatur deserunt, impedit dolor tenetur commodi molestiae earum veniam assumenda vero.",
    status: "refused",
  },
  {
    id: "yk4tjete",
    userName: "Fernanda Araújo de Albuquerque Martins",
    userMail: "fernanda_aa_martins@zipmail.com",
    userPhone: "(11) 98765-4321",
    date: "12/09/2022",
    professionalName: "Rolim Arquitetos Associados",
    professionalMail: "contato@rolimarquitetos.com.br",
    professionalPhone: "(11) 12345-6789",
    rating: 2,
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia pariatur deserunt, impedit dolor tenetur commodi molestiae earum veniam assumenda vero.",
    status: "refused",
  },
];

type ListOrderType = "userName" | "professionalName" | "rating";

export const AdmRatingList: React.FC<AdmRatingListProps> = () => {
  const [status, setStatus] = useState<RatingStatusOptions>("analysis");
  const [query, setQuery] = useState<string>("");
  const [order, setOrder] = useState<ListOrderType>("userName");
  const [isDetails, setIsDetails] = useState(false);
  const { color } = useTheme();

  const orderOptions: { name: string; value: ListOrderType }[] = [
    { name: "Nome do usuário", value: "userName" },
    { name: "Nome do Profissional", value: "professionalName" },
    { name: "Avaliação", value: "rating" },
  ];

  const filteredList = mockRatingList.filter((el) => el.status == status);
  const searchedList = filterRating(filteredList, query);
  const orderedList = searchedList.sort((a, b) =>
    a[order] > b[order] ? 1 : -1
  );

  const handleSelectOrder = (value: string) => {
    if (value == "userName" || value == "professionalName" || value == "rating")
      setOrder(value);
  };

  return (
    <MarginContainer>
      <Header>
        <h1>Depoimentos</h1>
        {
          <FlexBox
            mt={2}
            mb={1}
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <FlexBox gap={2}>
              <Button
                variant="text"
                onClick={() => setStatus("analysis")}
                color={status != "analysis" ? color.base[300] : "black"}
              >
                Esperando análise
              </Button>
              <Button
                variant="text"
                onClick={() => setStatus("approved")}
                color={status != "approved" ? color.base[300] : "black"}
              >
                Postados
              </Button>
              <Button
                variant="text"
                onClick={() => setStatus("refused")}
                color={status != "refused" ? color.base[300] : "black"}
              >
                Excluídos
              </Button>
            </FlexBox>
            <FlexBox gap={2}>
              <Input.Text
                placeholder="Buscar"
                aria-label="buscar-depoimento"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              />

              <Input.Select
                options={orderOptions}
                placeholder="Ordenar por"
                aria-label="Ordenar por"
                onChange={(e) => handleSelectOrder(e.target.value)}
                value={order}
              />
            </FlexBox>
          </FlexBox>
        }
      </Header>
      <ContentContainer>
        {!isDetails ? <RatingList list={orderedList} /> : "detalhes"}
      </ContentContainer>
    </MarginContainer>
  );
};
