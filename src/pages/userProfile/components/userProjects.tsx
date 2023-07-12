import { ProjectType } from "Models/models";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { FormSendReview } from "components/Forms/FormSendReview";
import Input from "components/Input";
import { Modal } from "components/Modal";
import { ProjectCard } from "components/ProjectCard";
import { useState } from "react";

export interface UserProjectsProps {
  list: ProjectType[];
}

export const UserProjects: React.FC<UserProjectsProps> = ({ list }) => {
  const [query, setQuery] = useState<string>("");
  const [sort, setSort] = useState<string | undefined>(undefined);
  const [currentProject, setCurrentProject] = useState<ProjectType | null>(
    null
  );

  const filteredList = list
    ? list.filter(
        (el) => el.name.includes(query) || el.customer.includes(query)
      )
    : [];

  const sortedList =
    sort == "name"
      ? filteredList.sort((a, b) => (a.name > b.name ? 1 : -1))
      : sort == "customer"
      ? filteredList.sort((a, b) => (a.name > b.name ? 1 : -1))
      : filteredList;
  return (
    <FlexBox my={3} direction="column" full gap={2}>
      <FlexBox gap={2} full justifyContent="flex-start">
        <Input.Text
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Buscar"
          aria-label="Busca"
        />
        <Input.Select
          options={[
            { name: "Cliente", value: "customer" },
            { name: "Nome", value: "name" },
          ]}
          onChange={(e) => setSort(e.target.value)}
          value={sort}
          placeholder="Ordenar por"
          aria-label="Ordenação"
        />
      </FlexBox>

      <FlexBox direction="column" gap={1} full>
        {sortedList?.map((item) => (
          <ProjectCard
            key={Math.random()}
            project={item}
            isCustomer
            toReview={() => setCurrentProject(item)}
          />
        ))}
      </FlexBox>
      <Modal
        isOpened={currentProject != null}
        onClose={() => setCurrentProject(null)}
      >
        {currentProject && <FormSendReview project={currentProject} />}
      </Modal>
    </FlexBox>
  );
};
