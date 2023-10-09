import {
  MagnifyingGlass,
  SlidersHorizontal,
  XCircle,
} from "@phosphor-icons/react";
import { Button } from "components/Button";
import Input from "components/Input";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import {
  Container,
  FilterContainer,
  FilterContent,
  FilterSearchContainer,
  ProfileList,
  Triangle,
} from "./styles";
import { CardProfile } from "components/Card";
import { useApi, useUser } from "contexts/User";
import { Professional } from "services/User/types";
import { Loading } from "components/Loading";
import { FlexBox } from "components/FlexBox";
import { professions } from "constants/professions";
import { states } from "constants/states";
import { tags } from "constants/tags";

export interface ListProps {}

export const List: React.FC<ListProps> = () => {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  //selected tags
  const [selected, setSelected] = useState<string[]>([]);
  //professions
  const [selectedProfession, setSelectedProfession] = useState<string[]>([]);
  //states
  const [selectedState, setSelectedState] = useState<string[]>([]);
  //online
  const [acceptOnline, setAcceptOnline] = useState<boolean>(false);

  const [allProfessionals, setAllProfesisonals] = useState<Professional[]>();
  //search
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { color } = useTheme();

  const profissões = professions;
  const locations = states;
  const categorias = tags;

  const toggleTagOnFilter = (item: string) => {
    const currentList = [...selected];
    if (currentList.includes(item)) {
      const filtered = currentList.filter((el) => el !== item);
      setSelected(filtered);
    } else {
      currentList.push(item);
      setSelected(currentList);
    }
  };
  const toggleProfessionOnFilter = (item: string) => {
    let currentList = [...selectedProfession];
    if (currentList.includes(item)) {
      currentList = currentList.filter((el) => el !== item);
    } else {
      currentList.push(item);
    }
    setSelectedProfession(currentList);
  };
  const toggleLocationOnFilter = (item: string) => {
    let currentList = [...selectedState];
    if (currentList.includes(item)) {
      currentList = currentList.filter((el) => el !== item);
    } else {
      currentList.push(item);
    }
    setSelectedState(currentList);
  };
  const toggleOnline = () => {
    acceptOnline ? setAcceptOnline(false) : setAcceptOnline(true);
  };

  const clearFilter = () => {
    setAcceptOnline(false);
    setSelected([]);
    setSelectedProfession([]);
    setSelectedState([]);
  };

  const { professional } = useApi();

  const { getAll } = professional;

  useEffect(() => {
    (async () => {
      const professionalResponse = await getAll();
      if (!professionalResponse) return;
      setAllProfesisonals(professionalResponse.proProfiles);
    })();
  }, []);

  const filteredProfessionals = (list: Professional[]) => {
    let filteredList = [...list].filter((el) => el.active == true);

    if (acceptOnline) {
      filteredList = filteredList.filter((el) => el.onlineAppointment === true);
    }

    if (selectedState.length > 0) {
      filteredList = filteredList.filter(
        (el) =>
          !!el.locations
            .map((location) =>
              selectedState.includes(location.state) ? location : false
            )
            .filter((x) => x).length
      );
    }

    if (selectedProfession.length > 0) {
      filteredList = filteredList.filter((el) =>
        selectedProfession.includes(el.formation)
      );
    }
    if (selected.length > 0) {
      filteredList = filteredList.filter((el) => {
        let isIncluded = false;
        el.tags.forEach((t) => {
          if (selected.includes(t)) isIncluded = true;
        });
        return isIncluded;
      });
    }

    return searchByQuery(filteredList);
  };

  const searchByQuery = (list: Professional[]) => {
    if (searchQuery.length < 3) return list;
    return list.filter((el) =>
      el.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <Container>
      <div>
        <FilterSearchContainer>
          <Input.Text
            placeholder="Buscar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            className="icon-button"
            variant="text"
            name="busca"
            onClick={() => console.log("search")}
          >
            <MagnifyingGlass />
          </Button>
          <Button
            background={color.brand.purple}
            color="white"
            onClick={() => setFilterIsOpen(!filterIsOpen)}
          >
            <SlidersHorizontal /> Filtrar
          </Button>
          <Button
            variant="text"
            color={color.brand.purple}
            disabled={
              selected.length == 0 &&
              selectedProfession.length == 0 &&
              acceptOnline == false &&
              selectedState.length == 0
            }
            onClick={clearFilter}
          >
            <XCircle size={24} /> Limpar filtros
          </Button>
        </FilterSearchContainer>

        {filterIsOpen && (
          <FilterContainer>
            <Triangle width={32} color={color.brand.purple} triangle />
            <FilterContent direction="column" full gap={2}>
              <li className="profession-list">
                {profissões.map((item) => (
                  <Button
                    variant={
                      selectedProfession.includes(item.name)
                        ? "primary"
                        : "outline"
                    }
                    background={
                      selectedProfession.includes(item.name)
                        ? "white"
                        : "transparent"
                    }
                    color={
                      selectedProfession.includes(item.name)
                        ? color.brand.purple
                        : "white"
                    }
                    key={item.name}
                    onClick={() => toggleProfessionOnFilter(item.name)}
                  >
                    {item.name}
                  </Button>
                ))}
              </li>
              <li className="category-list">
                {locations.length > 0 &&
                  locations.map((item) => (
                    <Button
                      variant={
                        selectedState.includes(item.id) ? "primary" : "outline"
                      }
                      background={
                        selectedState.includes(item.id)
                          ? "white"
                          : "transparent"
                      }
                      color={
                        selectedState.includes(item.id)
                          ? color.brand.purple
                          : "white"
                      }
                      key={item.name}
                      onClick={() => toggleLocationOnFilter(item.id)}
                      width={2}
                    >
                      {item.id}
                    </Button>
                  ))}
              </li>
              <FlexBox full centralized>
                <Button
                  variant={acceptOnline ? "primary" : "outline"}
                  background={acceptOnline ? "white" : "transparent"}
                  color={acceptOnline ? color.brand.purple : "white"}
                  onClick={() => toggleOnline()}
                >
                  Atendimento Online
                </Button>
              </FlexBox>
              <li className="category-list">
                {categorias.length > 0 &&
                  categorias.map((item) => (
                    <Button
                      variant={selected.includes(item) ? "primary" : "outline"}
                      background={
                        selected.includes(item) ? "white" : "transparent"
                      }
                      color={
                        selected.includes(item) ? color.brand.purple : "white"
                      }
                      key={item}
                      onClick={() => toggleTagOnFilter(item)}
                    >
                      {item}
                    </Button>
                  ))}
              </li>
            </FilterContent>
          </FilterContainer>
        )}
      </div>
      <p>{selected.toString()}</p>
      {!allProfessionals ? (
        <Loading />
      ) : (
        <ProfileList>
          {filteredProfessionals(allProfessionals).map((professional) => (
            <CardProfile professional={professional}></CardProfile>
          ))}
        </ProfileList>
      )}
    </Container>
  );
};
