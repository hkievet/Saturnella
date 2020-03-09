import * as React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import VerticalBarSVG from "./VerticalBarSVG";
import PatternSVG from "./Square.tsx";
import Animation from "./Animation";
import ContainerBody from "./ContainerBody";
import HeaderContainer from "./HeaderContainer";
import GlobalStyles from "./GlobalStyles";
//import PatternSvg from "../../assets/pattern-svg.inline";
//import svgfileurl, {
//ReactComponent as svgFile
//} from "../../assets/bad_heart_vertical_pattern.svg";

const AppContainer = styled.div``;

const Header = styled.h1`
  font-family: "Spartan", sans-serif;
  font-size: 36px;
  margin: 12px auto;
  line-height: 48px;
`;

const VerticalBarWrapper = styled.div`
  display: flex;
  width: 120px;
`;

export const App = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <HeaderContainer>
        <Header>Saturnella</Header>
      </HeaderContainer>
      <ContainerBody>
        <VerticalBarWrapper>
          <VerticalBarSVG />
        </VerticalBarWrapper>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, sint
          doloribus eveniet fugiat, doloremque, facilis temporibus repudiandae
          mollitia laboriosam cum illum asperiores. Minus, consequatur odit
          veniam natus deleniti voluptas totam unde laborum nisi nostrum tempore
          ipsa nam iure consequuntur id officiis, inventore eius suscipit amet
          alias optio autem repudiandae blanditiis sapiente. Sed expedita
          voluptates ratione neque fuga quas nisi eveniet quidem ipsam sunt, hic
          a aut dolorem magnam tempore voluptatum rerum maiores quibusdam fugiat
          iure. Vitae, laboriosam. Hic assumenda itaque ea, quibusdam, ipsa
          consequuntur quisquam consectetur deleniti quaerat nam omnis sunt,
          ratione voluptate? Illum dolore totam odit modi quidem nostrum nihil
          id, doloribus, quam alias repellendus aspernatur fuga quisquam aliquam
          hic? Nihil ducimus dolore repudiandae. Rerum voluptatum ducimus
          repellendus nobis placeat omnis iusto. At doloremque incidunt suscipit
          eaque, sequi quae dignissimos natus debitis quidem totam accusamus
          iste magnam explicabo quo delectus! Tempora assumenda iure pariatur
          voluptate molestiae neque laudantium, commodi vitae dolorum, est
          officia ullam, quibusdam similique. Enim veniam sapiente cumque
          tempora laudantium nihil iure rem sunt officia molestias earum
          repellat expedita commodi dolores, cum accusamus. Sapiente, inventore
          itaque temporibus vel, quibusdam voluptatem laudantium recusandae rem
          ipsam soluta aut reprehenderit magnam totam, ipsum earum eveniet.
          Aspernatur quibusdam quod nulla? Quam expedita perferendis facere
          eveniet eos iste consectetur blanditiis corporis cumque voluptate
          soluta perspiciatis, ea dolorem aut excepturi beatae, aperiam cum
          aspernatur nisi recusandae illum laborum dolor? Voluptate qui natus
          doloremque porro aliquid excepturi explicabo nulla unde. Ex odit
          delectus doloremque, atque excepturi modi nesciunt, asperiores
          quibusdam odio tempora sint rerum ducimus distinctio rem facilis natus
          ratione a, corporis deleniti et commodi aperiam quam accusamus
          tempore. Eaque nisi soluta, aut voluptatum fuga sit unde officia rem
          magni numquam a, deleniti sapiente, aliquam doloremque necessitatibus?
          Ex debitis, quisquam quaerat nihil in rem provident recusandae odio
          enim reprehenderit cumque libero facilis minima quod ea mollitia
          blanditiis aliquid eligendi tempora, explicabo similique quas
          necessitatibus corporis laborum. Magnam consectetur quas quos iusto
          voluptates ratione temporibus, dolores aliquam cum corrupti? Molestiae
          dolores blanditiis rem esse dolor nulla et laboriosam voluptatum
          commodi voluptate laborum minima impedit delectus quasi ratione,
          quibusdam nisi? Aliquid, optio eligendi? Velit beatae, enim iure
          officia id ipsam ea laboriosam assumenda nemo asperiores eos fuga
          facere et aspernatur, architecto accusantium. Recusandae voluptatibus
          ratione adipisci iusto consequatur ut quidem iste aut ullam nesciunt
          eligendi, sunt perspiciatis? Illum animi aperiam maxime officiis
          pariatur laborum fuga, fugit, ipsa minima amet aliquam incidunt,
          officia asperiores! Natus incidunt officiis amet dolor impedit rem
          perferendis repellendus ipsum soluta provident nostrum nihil
          laboriosam aspernatur architecto fuga, officia magnam earum inventore
          porro perspiciatis saepe modi, sequi qui consectetur. Obcaecati
          quaerat tempore dolor aut. Obcaecati blanditiis commodi dolore? Unde
          commodi adipisci possimus optio incidunt debitis amet, quos tempora
          cumque id blanditiis voluptate laborum porro ab nemo recusandae soluta
          ipsam sequi, ullam non error quia! Ea ullam libero magni accusamus
          earum inventore natus officiis aspernatur, vel magnam atque labore
          enim assumenda! Quo deleniti debitis quidem voluptate possimus,
          tenetur dolores delectus, veritatis asperiores quibusdam laborum
          placeat, id vel dolorem sed dignissimos aut officiis porro repellat
          laudantium doloribus nihil adipisci repellendus. Quibusdam, odio
          dolores, architecto, eum consequuntur ut nihil quia cupiditate vitae
          tenetur totam fugiat maxime. Consequuntur commodi explicabo laudantium
          ullam. Aperiam officiis corrupti blanditiis asperiores tempora, cumque
          esse eveniet, dolore nemo rerum ipsa in iusto. Iste reprehenderit iure
          eius hic dolore dicta, eos suscipit sunt velit labore quas saepe,
          quaerat quidem? Quaerat aut ullam quibusdam iusto cum fugiat accusamus
          fuga quam distinctio ipsa nihil, vel velit ratione earum natus
          doloribus consectetur adipisci voluptatem sunt illum quasi et.
          Repellendus soluta aut est asperiores magni! Culpa provident omnis
          rerum similique. Dolore vitae voluptatem minima rerum inventore
          voluptatum excepturi nostrum soluta quis, consequatur facere ratione!
          Mollitia facere rem inventore saepe, optio recusandae possimus quo
          ipsa, error minima molestias? Corporis nam dignissimos facilis nihil
          deleniti natus dolor quisquam consectetur et quidem in, reiciendis id
          voluptas modi quos reprehenderit labore facere harum aliquid doloribus
          aliquam cupiditate molestias! Repellat sed commodi, veniam similique
          sunt, enim cupiditate vitae ipsam voluptate perferendis vel distinctio
          ratione quas. Voluptates eveniet expedita aliquid repellat illum
          minima eos ducimus consequatur voluptas placeat? Exercitationem nihil
          non temporibus pariatur facere, quasi vitae reprehenderit in sed,
          dolor facilis! Animi nisi eius rerum quidem doloribus eos fugit dolore
          culpa blanditiis? Velit aliquid esse numquam odio. Quia temporibus
          iusto, nostrum perferendis harum dolorem eius architecto expedita quos
          nesciunt incidunt quaerat eligendi nisi? Cupiditate, architecto
          molestias. Provident animi placeat voluptatum numquam quia reiciendis
          natus dolores. Nesciunt officia reiciendis provident dolore vel amet
          corrupti consectetur? Expedita aperiam tempora voluptate nostrum
          veritatis aliquam animi praesentium ducimus corporis beatae modi quis
          recusandae deserunt consectetur pariatur magni porro optio, enim, quos
          illum sed iste autem! Consectetur architecto cumque facilis, ipsum,
          numquam sint ab repellendus voluptas dolorem deserunt vitae aliquid ad
          minus asperiores fuga vel? Quisquam obcaecati ducimus consectetur
          fuga! Iusto cumque facere quia, ad sunt alias magnam quo eveniet
          laborum cum provident, optio adipisci suscipit mollitia iure? Maxime
          perferendis repudiandae consectetur assumenda odit commodi quae
          dolorem ex, corporis quos, consequatur asperiores quas minus, eum odio
          in corrupti voluptatum suscipit omnis molestiae iusto iste porro.
          Numquam, ut repudiandae pariatur similique expedita animi voluptatem
          explicabo ea accusantium modi magnam tenetur in ducimus earum ad
          dolorum eos, officiis rem excepturi quas officia dignissimos hic
          molestiae atque. Eius, possimus. Dolorem id facere vero veniam qui
          optio ratione officiis non quas alias magni, quos hic incidunt quae
          ullam, aspernatur natus excepturi molestias, itaque consequuntur at
          labore? Mollitia, possimus beatae. Inventore asperiores maiores sed
          vel delectus, molestiae provident officia repellendus et eaque ducimus
          ea impedit optio deserunt sint facilis iusto commodi non? Porro
          officia, quidem a mollitia deleniti itaque vel ipsa error sequi eius
          quos amet, culpa obcaecati nemo dolorem rem numquam odit nostrum
          accusantium, aliquid atque. Ipsa eveniet accusamus dolores ex tenetur
          neque, nihil et minus, quae, hic blanditiis soluta cum? Vero quam
          nihil expedita, voluptatum natus repudiandae laborum cumque minima
          perspiciatis omnis odio tempora corporis asperiores amet, beatae sunt
          enim eveniet. Deleniti fugiat iusto illum, consectetur esse quo, quis
          voluptates dignissimos perferendis nesciunt omnis repellat commodi
          totam quasi. Voluptates, tenetur obcaecati.
        </p>
        <VerticalBarWrapper>
          <VerticalBarSVG />
        </VerticalBarWrapper>
      </ContainerBody>
    </AppContainer>
  );
};

export default App;
