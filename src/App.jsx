import { useState } from "react";
import Header from "./components/Header";
import IconoNuevo from "./img/nuevo-gasto.svg";
import TablaTipoDocumento from "./components/TablaTipoDocumento";
import TablaTransaccion from "./components/TablaTransaccion";
import TablaAsientos from "./components/TablaAsientos";
import TablaClientes from "./components/TablaClientes";
import ModalTipoDocumento from "./components/ModalTipoDocumento";
import ModalAsientos from "./components/ModalAsientos";
import ModalTransacciones from "./components/ModalTransacciones";
import ModalClientes from "./components/ModalClientes";

function App() {
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const handleNuevoGasto = () => {
    setModal("true");
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const [page, setPage] = useState("/");

  const getContent = () => {
    if (page === "/") {
      return <TablaTipoDocumento />;
    } else if (page === "/ModalClientes") {
      return <TablaClientes />;
    } else if (page === "/ModalTransacciones") {
      return <TablaTransaccion />;
    } else if (page === "/ModalAsientos") {
      return <TablaAsientos />;
    }
  };

  const getContentModal = () => {
    if (page === "/") {
      return (
        <ModalTipoDocumento
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
        />
      );
    } else if (page === "/ModalClientes") {
      return (
        <ModalClientes
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
        />
      );
    } else if (page === "/ModalTransacciones") {
      return (
        <ModalTransacciones
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
        />
      );
    } else if (page === "/ModalAsientos") {
      return (
        <ModalAsientos
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
        />
      );
    }
  };

  const toPage = (page) => (event) => {
    event.preventDefault();
    setPage(page);
  };

  return (
    <div>
      <Header />

      <ul id="Navbar">
        <li id="Navitem">
          <a href="#" onClick={toPage("/")}>
            Tipos de documento
          </a>
        </li>
        <li id="Navitem">
          <a href="#" onClick={toPage("/ModalClientes")}>
            Clientes
          </a>
        </li>
        <li id="Navitem">
          <a href="#" onClick={toPage("/ModalTransacciones")}>
            Transacciones
          </a>
        </li>
        <li id="Navitem">
          <a href="#" onClick={toPage("/ModalAsientos")}>
            Asientos contables
          </a>
        </li>
      </ul>
      {getContent()}

      <div className="nuevo-gasto">
        <img src={IconoNuevo} alt="iconnew" onClick={handleNuevoGasto} />
      </div>

      {modal && getContentModal()}
    </div>
  );
}

export default App;
