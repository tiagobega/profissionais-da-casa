import{s as n,C as t,F as i,Z as s,u as c,j as o,a as e,G as r,B as d}from"./index-e0f51543.js";const h=n.section`
  ${({theme:a})=>t`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: calc(100vh - 96px - 372px);
    background-color: ${a.color.brand.purple};
    @media screen and (max-width: 850px) {
      .geometry {
        display: none;
      }
    }
  `}
`,m=n(i)`
  ${()=>t`
    width: 770px;
    color: white;
    h2 {
      font-size: 2rem;
    }
    p {
      width: 500px;
      text-align: center;
      font-size: 1.25rem;
    }
  `}
`,p=()=>{const{color:a}=s(),l=c();return o(h,{children:[e(i,{direction:"column",children:o("div",{className:"geometry",children:[e(r,{color:a.secondary.lightTeal,width:170,triangle:!0,angle:90}),e(r,{color:a.brand.yellowLight,width:170,triangle:!0,angle:180})]})}),o(m,{direction:"column",gap:2,alignItems:"center",children:[e("h2",{children:"Diversas soluções para a sua reforma"}),e("p",{children:"Calcule o material certo pelo Casa Fast ou encontre o melhor profissional pelo Profissionais da Casa. Você também pode conferir seus pedidos na aba “Meu Perfil”"}),e(d,{variant:"primary",background:"white",onClick:()=>l("/catalog"),children:"Profissionais da Casa"})]}),e(i,{direction:"column",children:o("div",{className:"geometry",children:[e(r,{color:a.brand.yellowLight,width:170,triangle:!0}),e(r,{color:a.base[200],width:170,triangle:!0,angle:270})]})})]})};export{p as default};
