import { useNavigate } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import "./NewsPagination.css";

export default function NewsPagination(props) {
  // Extrag props-urile
  let { active, baseUrl } = props;
  // Folosesc hook-ul de useNavigate
  let navigate = useNavigate();
  // Daca nu primesc nicio val pt prop-ul active, atunci insemna ca pagina activa va fii 1
  if (!active) {
    active = 1;
  }
  let items = [];
  // Vom avea 5 comp de paginatie, astfel vom folosi for care sa iterez de 5 ori si sa pot contrui array-ul item cu 5 elem
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        // Prop-ul active va avea valoare true daca pag curenta este cea activa
        active={number === Number(active)}
        // Daca pag este activa, ii adaug un id pt stilizare
        id={active ? "pagination-active" : null}
        onClick={() => {
          // La click pe buton navigam catre noua pagina
          navigate(`${baseUrl}?page=${number}`);
          // Scrolez inapoi sus in pag
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div className="d-flex justify-content-center">
        <Pagination className="pagination">{items}</Pagination>
    </div>
  );
}
