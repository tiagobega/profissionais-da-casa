import { CaretLeft, Pencil, SlidersHorizontal, X } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { CardProfile } from "components/Card";
import { CardStyledProfile } from "components/Card copy";
import { Collapsible } from "components/Collapsable";
import { FlexBox } from "components/FlexBox";
import { FormTest } from "components/FormTest";
import { Geometry } from "components/Geometry";
import { HeaderList } from "components/HeaderList";
import { Modal } from "components/Modal";
import { NotFoundContent } from "components/NotFound";
import { ProjectCard } from "components/ProjectCard";
import { ReviewCard } from "components/ReviewCard";
import { Skeleton } from "components/Skeleton";
import { TooltipIcon } from "components/TooltipIcon";
import { useState } from "react";
import { useTheme } from "styled-components";
import { FullContainer } from "styles/commonComponents";

const NotFound = () => {
  return (
    <FullContainer>
      <NotFoundContent />
    </FullContainer>
  );
};

export default NotFound;
