import{j as g,n as c,r as d,R as k,a as C}from"./vendor.970cffb3.js";const E=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(o){if(o.ep)return;o.ep=!0;const t=a(o);fetch(o.href,t)}};E();const e=g.exports.jsx,n=g.exports.jsxs,w=g.exports.Fragment,I=c.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: flex-start;
  gap: 2;
  margin-top: 30px;
`,L=c.img`
  display: block;
  width: 120px;
  margin-right: 20px;
`,f=c.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`,N=c.p`
  font-size: 30px;
  span {
    font-weight: 700;
  }
`,P=({resultado:r})=>{const{PRICE:s,HIGHDAY:a,LOWDAY:i,CHANGEPCT24HOUR:o,IMAGEURL:t,LASTUPDATE:l}=r;return n(I,{children:[e(L,{src:`https://cryptocompare.com/${t}`,alt:"imagen"}),n("div",{children:[n(N,{children:["El Precio es de: ",e("span",{children:s})]}),n(f,{children:["El Precio mas Alto del Dia: ",e("span",{children:a})]}),n(f,{children:["El Precio mas Bajo del Dia: ",e("span",{children:i})]}),n(f,{children:["Cambio en las ultimas 24H: ",e("span",{children:o})]}),n(f,{children:["La ultima update: ",e("span",{children:l})]})]})]})},j=[{id:"USD",nombre:"Dolar de Estados Unidos"},{id:"PEN",nombre:"Sol Peruano"},{id:"VEN",nombre:"Bolivar Venezuela"},{id:"MXN",nombre:"Peso Mexicano"}],z=c.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`,A=c.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
`,v=(r,s)=>{const[a,i]=d.exports.useState("");return[a,()=>n(w,{children:[e(z,{children:r}),n(A,{value:a,onChange:t=>i(t.target.value),children:[e("option",{children:"--Selecciones--"}),s.map(t=>e("option",{value:t.id,children:t.nombre},t.id))]})]})]},D=c.div`
  background-color: #b7322c;
  color: #fff;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: "lato", sans-serif;
  font-weight: 700;
  text-align: center;
`,M=({children:r})=>e(D,{children:r}),R=c.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`,H=({setMonedas:r})=>{const[s,a]=d.exports.useState([]),[i,o]=d.exports.useState(!1),[t,l]=v("Elige tu Moneda",j),[p,m]=v("Elige tu Criptomoneda",s);return d.exports.useEffect(()=>{(async()=>{const b=await fetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"),y=(await b.json(b)).Data.map(S=>({id:S.CoinInfo.Name,nombre:S.CoinInfo.FullName}));console.log(y),a(y)})()},[]),n(w,{children:[i&&e(M,{children:"Todos los campos son obligatorios"}),n("form",{onSubmit:u=>{if(u.preventDefault(),[t,p].includes("")){o(!0);return}o(!1),r({moneda:t,criptomoneda:p})},children:[e(l,{}),e(m,{}),e(R,{input:!0,type:"submit",value:"Cotizar"})]})]})};var T="/assets/imagen-criptos.c0430b0f.png";const O=()=>n("div",{className:"sk-folding-cube",children:[e("div",{className:"sk-cube1 sk-cube"}),e("div",{className:"sk-cube2 sk-cube"}),e("div",{className:"sk-cube4 sk-cube"}),e("div",{className:"sk-cube3 sk-cube"})]}),U=c.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`,F=c.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`,$=c.h1`
  font-family: "Lato", sans-serinf;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;function B(){const[r,s]=d.exports.useState({}),[a,i]=d.exports.useState({}),[o,t]=d.exports.useState(!1);return d.exports.useEffect(()=>{Object.keys(r).length>0&&(async()=>{t(!0),i({});const{moneda:p,criptomoneda:m}=r,h=`
          https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${m}&tsyms=${p}`,u=await fetch(h),x=await u.json(u);i(x.DISPLAY[m][p]),t(!1)})()},[r]),n(U,{children:[e(F,{src:T}),n("div",{children:[e($,{children:"Cotiza Criptomonedas al Instante"}),e(H,{setMonedas:s}),o&&e("p",{children:e(O,{})}),a.PRICE&&e(P,{resultado:a})]})]})}k.render(e(C.StrictMode,{children:e(B,{})}),document.getElementById("root"));
