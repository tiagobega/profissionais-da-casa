import { CaretLeft } from "@phosphor-icons/react";
import logo from "assets/images/logoYellowBigger.png";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { FormRegisterUser } from "components/Forms/FormRegisterUser";
import { LoginLayout } from "components/LayoutLoginRegister";
import { Modal } from "components/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RightPannel } from "./styles";
import { FormConfirmUser } from "components/Forms/FormResendEmail";

export interface LoginPageProps {}

export const RegisterUser: React.FC<LoginPageProps> = () => {
  const [conditionsModal, setConditionsModal] = useState(false);
  const navigate = useNavigate();

  return (
    <LoginLayout>
      <RightPannel full pb={10} direction="column">
        <div className="logo">
          <img
            src={logo}
            alt="coração feito de formas geométricas - logo da cada casa"
          />
        </div>

        <FormRegisterUser
          toConfirm={() => navigate("/register/customer/confirm")}
          showTerms={() => setConditionsModal(true)}
        />

        <div className="divider" />

        <Button variant="text" onClick={() => navigate("/login")}>
          <CaretLeft weight="fill" />
          Voltar para login
        </Button>
      </RightPannel>
      <Modal
        isOpened={conditionsModal}
        onClose={() => setConditionsModal(false)}
      >
        <FlexBox direction="column" gap={1} centralized>
          <h2>Termos e condições de uso</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            molestiae et aliquid animi quidem nemo saepe. Esse deserunt,
            officiis voluptatem optio officia accusamus tempore velit minus
            similique ducimus blanditiis delectus laudantium ipsam molestias
            inventore? Ipsum, cumque! Non quaerat reprehenderit quo ratione id
            cupiditate eligendi repellat consequatur impedit perferendis nam
            distinctio, odio, expedita praesentium atque sapiente et nobis
            maiores repudiandae laudantium! Laboriosam, expedita corrupti?
            Itaque repellendus velit, ipsum voluptate vero eos nobis nesciunt
            veniam! Et voluptatem necessitatibus consectetur, iste officia quis
            eius beatae odit natus perspiciatis labore libero vel temporibus
            est? A vitae odit possimus, qui libero placeat incidunt praesentium
            aspernatur ab, maxime nulla quis eum officiis. Quae porro dolores
            velit labore! Dolor nobis voluptatum labore molestias sapiente
            libero atque maiores eligendi soluta dignissimos. Debitis eveniet
            repellendus fuga minima optio nemo doloribus rerum voluptatibus
            atque tempora et iure aliquid quam tempore eligendi error earum,
            reprehenderit explicabo perspiciatis sed alias soluta. Illo vitae
            quae nam similique fugiat! Voluptas itaque corporis, optio labore
            corrupti odit. Quos officiis magnam est odio deserunt nemo, nobis
            quo eos blanditiis error quidem natus sunt dolorem quae earum
            excepturi porro ad distinctio obcaecati accusamus. Delectus
            obcaecati debitis, nisi quo sapiente exercitationem! Nam ipsa
            dignissimos, cupiditate a eius reprehenderit laudantium corrupti
            laborum, rem ipsam nulla dolores sapiente exercitationem nostrum,
            commodi adipisci rerum repellendus illum velit. Et amet inventore ex
            eos fuga doloremque dicta nisi expedita quam perspiciatis incidunt,
            vitae adipisci iure ea pariatur ducimus ullam assumenda reiciendis
            excepturi repellendus magnam. Modi incidunt harum repudiandae
            placeat a. Iure sunt quidem dolores ratione exercitationem
            blanditiis reprehenderit et, rem in voluptate at vitae non inventore
            repellat error impedit! Itaque fuga cum, velit aliquid pariatur
            quidem blanditiis minima temporibus ad neque illo? Nihil eum laborum
            in voluptatum ipsa explicabo consequatur quos ea temporibus quidem,
            ad dolore, voluptatibus labore veritatis pariatur tempore unde
            nesciunt adipisci eius. Repellat eaque quae facilis odio animi
            consectetur! Doloremque amet temporibus voluptatum asperiores
            nesciunt quos enim sint itaque. Aperiam, commodi assumenda odit quae
            dolor doloremque, rerum minus architecto officiis iste quibusdam
            dolores facilis repudiandae sunt nesciunt, eaque in possimus?
            Quaerat quasi aliquam dolor tenetur ad quibusdam sed temporibus eius
            fugit et magni dolorum facilis, similique cupiditate necessitatibus
            rerum explicabo minus officiis possimus consectetur ipsum neque.
            Optio, quisquam quibusdam nihil dolore fugit perferendis
            consequuntur enim suscipit voluptates, magnam minima necessitatibus,
            natus dicta tempora beatae magni nulla voluptas sequi eum quos ipsa
            neque pariatur reprehenderit? Ipsam voluptatibus debitis dolore,
            nostrum, pariatur voluptatem magni assumenda dicta aliquid incidunt
            tempore alias eum voluptatum saepe aperiam eius praesentium et
            dolorum perferendis sint consequatur unde reprehenderit. Aut harum
            porro, laudantium eum impedit, totam facere nisi sint quod iure
            vitae aliquid cum tempore a eius fugiat veniam, error deserunt?
            Optio hic dolorem quam recusandae et quia voluptate nulla,
            asperiores maxime vel quaerat vitae unde consequuntur! Expedita
            tempore quis itaque voluptatem consectetur accusantium, saepe culpa
            excepturi ratione eligendi fuga porro maxime minima laboriosam
            numquam eum officia ducimus dignissimos! Repellendus rerum harum,
            explicabo animi vitae, excepturi officiis, perspiciatis ullam
            impedit nesciunt natus. Consequuntur illo minima nobis velit totam.
          </p>
        </FlexBox>
      </Modal>
    </LoginLayout>
  );
};
