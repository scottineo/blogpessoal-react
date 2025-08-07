import Perfil from "../../components/perfil/Perfil";

function HubPessoal() {
  return (
    <>
      <div className="container">
        <div id="menu-lateral">
          <div id="perfil">
            <Perfil />
          </div>
          <div id="controles"></div>
        </div>
        <div id="conteudo"></div>
      </div>
    </>
  );
}
export default HubPessoal;
