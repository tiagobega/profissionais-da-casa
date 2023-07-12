import {
  MagnifyingGlass,
  SlidersHorizontal,
  XCircle,
} from "@phosphor-icons/react";
import { Button } from "components/Button";
import Input from "components/Input";
import { useState } from "react";
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

export interface ListProps {}

export const List: React.FC<ListProps> = () => {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const { color } = useTheme();

  const profissões = ["arquiteto", "engenheiro"];
  const categorias = [
    "apartamento",
    "alugados",
    "demolição",
    "ambientes pequenos",
    "ambientes grandes",
    "corporativo",
    "varejo",
    "roll-out",
    "acessibilidade",
    "crianças",
    "minimalista",
    "redormas",
    "industrial",
    "vigilância sanitária",
    "estrutural",
    "instalações",
    "automação residencial",
  ];

  const toggleItemOnFilter = (item: string) => {
    const currentList = [...selected];
    if (currentList.includes(item)) {
      const filteredList = currentList.filter((el) => el !== item);
      setSelected(filteredList);
    } else {
      currentList.push(item);
      setSelected(currentList);
    }
  };

  return (
    <Container>
      <div>
        <FilterSearchContainer>
          <Input.Text placeholder="Buscar" />
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
            disabled={selected.length == 0}
            onClick={() => setSelected([])}
          >
            <XCircle size={24} /> Limpar filtros
          </Button>
        </FilterSearchContainer>
        {filterIsOpen && (
          <FilterContainer>
            <Triangle width={32} color={color.brand.purple} triangle />
            <FilterContent>
              <li className="profession-list">
                {profissões.map((item) => (
                  <Button
                    variant={selected.includes(item) ? "primary" : "outline"}
                    background={
                      selected.includes(item) ? "white" : "transparent"
                    }
                    color={
                      selected.includes(item) ? color.brand.purple : "white"
                    }
                    key={item}
                    onClick={() => toggleItemOnFilter(item)}
                  >
                    {item}
                  </Button>
                ))}
              </li>
              <li className="category-list">
                {categorias.length > 0 ? (
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
                      onClick={() => toggleItemOnFilter(item)}
                    >
                      {item}
                    </Button>
                  ))
                ) : (
                  <div>Não achamos nada</div>
                )}
              </li>
            </FilterContent>
          </FilterContainer>
        )}
      </div>
      <ProfileList>
        {categorias.map((el) => (
          <CardProfile key={`${Math.random()} ${el}`} />
        ))}
      </ProfileList>
    </Container>
  );
};
