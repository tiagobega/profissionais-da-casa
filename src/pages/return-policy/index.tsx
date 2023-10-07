import { CaretLeft } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { InformationContainer, TermsContainer } from "./style";

const ReturnPage = () => {
  const navigate = useNavigate();

  return (
    <TermsContainer>
      <header className="header">
        <Button
          variant="text"
          color="black"
          type="button"
          onClick={() => navigate("/")}
        >
          <CaretLeft weight="fill" />
          Página Inicial
        </Button>
      </header>
      <InformationContainer>
        <div className="content">
          <h2>Política de devolução e reembolso</h2>
          <hr />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
              voluptas libero, tenetur provident quibusdam perferendis
              consequatur excepturi fugiat quis voluptatem porro nulla
              dignissimos recusandae omnis culpa ullam autem repudiandae odit?
              Dolor iusto voluptatem impedit ut velit iste eveniet maxime
              repudiandae dolores, enim, soluta omnis quisquam sit odio? Minima
              facere nesciunt quasi corporis delectus saepe, deleniti quis
              accusamus, inventore, rerum dolores. Voluptas, vitae! Blanditiis
              inventore ducimus explicabo fugiat. Vel fugit velit laboriosam
              blanditiis! Illo culpa eius soluta quaerat nam dolore similique
              aut, id autem sunt earum reiciendis consequatur dolorum accusamus
              quo. Beatae architecto excepturi, voluptas molestias pariatur
              animi facere praesentium natus alias ea cumque labore consectetur
              ut veritatis. Provident, iure commodi id voluptatem est esse eos,
              eum laboriosam harum natus reiciendis! Illo pariatur incidunt
              animi quisquam unde atque, totam molestiae, rerum illum ipsam, rem
              blanditiis itaque labore! Suscipit tenetur iusto itaque dicta
              illum laudantium ea omnis, incidunt aliquam ratione iure. Aliquam?
              Voluptatem placeat optio fuga harum nobis dignissimos dicta
              explicabo aspernatur, magnam temporibus ab consequuntur!
              Blanditiis culpa sequi reprehenderit sunt nihil exercitationem,
              nisi, laborum dolor libero voluptate atque repellendus sapiente!
              Quisquam. Enim consectetur, itaque veritatis facilis dolorem
              molestias ipsa nulla nobis soluta? Voluptas consequatur aliquid
              dolorum ea, inventore optio quo eligendi vel neque quasi explicabo
              reprehenderit nobis doloremque magni iste culpa? Voluptatem,
              dolores praesentium porro exercitationem qui corrupti quisquam
              reprehenderit temporibus officia sequi! Quae cum est doloremque ut
              magni perspiciatis. Minus animi aut et temporibus similique magni
              iure accusamus voluptatum nostrum. Ab praesentium, porro
              cupiditate sunt vel non illo quia quod id? Dicta perspiciatis
              repudiandae laborum alias minus aperiam asperiores cum odio quos
              reiciendis cumque saepe quibusdam, quidem delectus corrupti quam.
              Aperiam corporis quia nulla? Laborum rerum ratione dolorem
              eligendi, nulla in soluta suscipit amet quibusdam, officia
              consequatur illo dignissimos nihil magni esse vero sequi ducimus
              praesentium? Perferendis ea numquam quis! Earum cumque aliquid
              labore corporis. Fugiat nemo neque facilis magnam nulla, delectus
              eveniet atque voluptas quaerat illum, doloremque quasi aperiam?
              Expedita maiores a, accusantium illum earum sequi consequatur
              natus ratione. Aliquam doloremque nam veniam eos aliquid harum
              iusto, dolorum officiis laboriosam aperiam, pariatur dolores
              consequatur quis odio facilis error possimus earum quasi sit quod
              magnam, molestiae ipsam odit sint. Hic. Vitae ex distinctio a
              sapiente rem minima unde aliquam eaque? Itaque, tempora? Quaerat
              aspernatur laboriosam nobis repellendus asperiores voluptatibus
              doloremque, nesciunt eaque corporis ut dolorum incidunt nihil
              ducimus provident ipsa. Adipisci illo tempore sint quisquam dolor
              omnis autem blanditiis hic, accusantium, est unde dolores.
              Explicabo inventore molestias, asperiores perferendis obcaecati
              consectetur eaque cupiditate tempore voluptate iusto reiciendis
              nam magni? Saepe? Natus impedit omnis magni eius fuga optio quo!
              Voluptas numquam ipsam repudiandae, quibusdam iste aliquid maiores
              odio commodi nesciunt eum pariatur voluptatum tenetur aperiam
              quaerat harum totam! Dolores, iure quisquam! Magnam quos rem et
              quia perspiciatis assumenda, asperiores quis repudiandae ratione
              omnis modi quam tempore accusamus? Rerum, enim commodi nisi eius
              dolorem ratione voluptatem fugiat, tempore doloremque ipsa
              perferendis ullam. Alias qui quasi ut quae voluptatum incidunt
              esse, blanditiis, quod quisquam odit ea eius veniam vel? Commodi
              recusandae reprehenderit, numquam incidunt id, qui tenetur harum
              impedit totam neque ducimus. Rem. Quibusdam voluptas amet
              explicabo provident voluptatibus ipsa rem porro necessitatibus,
              sapiente sint cumque est perferendis quam earum doloribus,
              assumenda tenetur illum sunt dolorem nisi labore modi. Ratione
              ipsum atque labore. Amet consequatur quam cupiditate non omnis
              nemo natus a numquam excepturi, possimus, iste eum dolore nostrum
              animi itaque. Commodi impedit quidem ab. Placeat culpa ipsum
              veritatis eaque tempora ex suscipit. Repellat beatae commodi qui
              at provident, nemo minus vel distinctio sint est voluptatibus
              suscipit voluptas eum. Eveniet, quaerat iste nesciunt animi eos
              quidem quibusdam suscipit ipsam quisquam inventore commodi id!
            </p>
          </div>

          <Button variant="text" color="black" onClick={() => navigate(-1)}>
            <CaretLeft weight="fill" />
            Página Inicial
          </Button>
        </div>
      </InformationContainer>
    </TermsContainer>
  );
};

export default ReturnPage;
