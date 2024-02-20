import { Camera, Envelope, PhoneCall, User } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { FormAddImage } from "components/Forms/FormAddImage";
import { FormChangePassword } from "components/Forms/FormChangePassword";
import { FormEditUserProfile } from "components/Forms/FormEditUserProfile";
import { Geometry } from "components/Geometry";
import { Modal } from "components/Modal";
import { useUser } from "contexts/User";
import { useEffect, useState } from "react";
import { MarginContainer } from "styles/commonComponents";
import {
  GeometryContainer,
  HeaderContainer,
  HeaderWrapper,
  InfoColumn,
  PhotoColumn,
  ProjectContainer,
} from "./styles";
import { LeadList } from "./components/LeadList";
import { Loading } from "components/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { Me } from "services/User/types";
import { ROLES } from "constants/roles";

export interface CustomerProfileProps {}

export const UserProfile: React.FC<CustomerProfileProps> = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<Me>();
  const [modalEdit, setModalEdit] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);
  const [modalPicture, setModalPicture] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const { me, getMe, getSingleUser, deleteUser } = useUser();

  useEffect(() => {
    if (me) {
      if (me.roleRel.name === ROLES.ADMIN) {
        (async () => {
          if (id) {
            const data = await getSingleUser({ id });
            if (!data) {
              setUser(me);
              return;
            }
            setUser(data);
          }
        })();
      } else {
        setUser(me);
      }
      return;
    }

    getMe();
  }, [me]);

  useEffect(() => {});

  if (!user || !me) return <Loading />;

  const isAdm = me.roleRel.name === ROLES.ADMIN;

  const handleUserDelete = async (user: Me) => {
    const response = await deleteUser({ id: user.id });

    if (!response) return;

    navigate("/admin/users/");
  };

  return (
    <>
      {user && (
        <>
          <HeaderWrapper>
            <HeaderContainer>
              <PhotoColumn
                direction="column"
                alignItems="center"
                gap={1}
                justifyContent="center"
              >
                <div className="round-picture">
                  {!isAdm && (
                    <Button
                      variant="text"
                      color="white"
                      className="pictureButton"
                      onClick={() => setModalPicture(true)}
                    >
                      <Camera weight="fill" /> Trocar foto
                    </Button>
                  )}

                  {user.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      alt="Foto de perfil do usuário"
                      className="userPicture"
                      loading="lazy"
                    />
                  ) : (
                    <User color="white" weight="light" className="userIcon" />
                  )}
                </div>
                <p className="name">{user.name}</p>
                <p>Perfil Pessoal</p>
              </PhotoColumn>
              <InfoColumn direction="column" gap={1} justifyContent="center">
                <div>
                  <p className="title">Telefone</p>
                  <FlexBox alignItems="center" gap={0.5} mt={0.5}>
                    <PhoneCall size={30} />
                    {user.phone}
                  </FlexBox>
                </div>
                <div>
                  <p className="title">E-mail</p>
                  <FlexBox alignItems="center" gap={0.5} mt={0.5}>
                    <Envelope size={30} />
                    {user.email}
                  </FlexBox>
                </div>
                {isAdm ? (
                  <FlexBox>
                    <Button onClick={() => setModalDelete(true)}>
                      Deletar Perfil
                    </Button>
                  </FlexBox>
                ) : (
                  <FlexBox gap={2}>
                    <Button
                      background="white"
                      onClick={() => setModalEdit(true)}
                    >
                      Editar Perfil
                    </Button>
                    <Button
                      background="white"
                      onClick={() => setModalPassword(true)}
                    >
                      Alterar Senha
                    </Button>
                  </FlexBox>
                )}
              </InfoColumn>
            </HeaderContainer>
            <GeometryContainer>
              <div className="triangle1">
                <Geometry color="white" width={170} triangle />
              </div>
              <div className="triangle2">
                <Geometry color="white" width={170} triangle />
              </div>
              <div className="triangle3">
                <Geometry color="white" width={80} triangle />
              </div>
              <div className="triangle4">
                <Geometry color="white" width={80} triangle angle={90} />
              </div>
              <div className="triangle5">
                <Geometry color="white" width={80} triangle />
              </div>
            </GeometryContainer>
          </HeaderWrapper>
          <ProjectContainer my={user.leads.length > 0 ? 2 : 5}>
            {user.leads && <LeadList professional={false} leads={user.leads} />}
          </ProjectContainer>

          <Modal isOpened={modalEdit} onClose={() => setModalEdit(false)} small>
            <FlexBox direction="column" centralized gap={3}>
              <h2>Editar perfil</h2>
              <FormEditUserProfile
                user={user}
                close={() => setModalEdit(false)}
              />
            </FlexBox>
          </Modal>
          <Modal
            isOpened={modalPassword}
            onClose={() => setModalPassword(false)}
            small
          >
            <FlexBox direction="column" centralized gap={3}>
              <FormChangePassword closeModal={() => setModalPassword(false)} />
            </FlexBox>
          </Modal>
          <Modal
            isOpened={modalPicture}
            onClose={() => setModalPicture(false)}
            small
          >
            <FlexBox direction="column" centralized gap={3}>
              <FormAddImage close={() => setModalPicture(false)} />
            </FlexBox>
          </Modal>
          <Modal
            isOpened={modalDelete}
            onClose={() => setModalDelete(false)}
            small
          >
            <FlexBox direction="column" gap={2}>
              <p>Deseja mesmo deletar esse usuário?</p>
              <FlexBox>
                <Button onClick={() => handleUserDelete(user)}>Sim</Button>
                <Button onClick={() => setModalDelete(false)}>Não</Button>
              </FlexBox>
            </FlexBox>
          </Modal>
        </>
      )}
    </>
  );
};
