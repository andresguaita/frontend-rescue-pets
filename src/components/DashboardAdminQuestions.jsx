import React, { forwardRef, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { editQuestions, getQuestions, postQuestions } from "../Redux/Actions";
import {
  StyledDashboardPetAdmin,
  StyledDivFlexAdmin,
  StyledButtonEditAdminPet,
  StyledInputSearch,
  StyledInputButton,
} from "../Styles/StyledDashboardPetAdmin";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";
import PaginationAdmin from "./AdminPagination.jsx";

function DashboardAdminQuestions() {
    const dispatch = useDispatch();

    const [questions, setQuestions] = useState([]);
    const [form, setForm] = useState({
      id: "",
      question: ""
    });
    const [modal, setModal] = useState(false);
    const [edit, setEdit] = useState(false);
    const [newQuestion, setNewQuestion] = useState("");
    const [search, setSearch] = useState("");
  
    //paginado
  
    const [currentPage, setCurrentPAge] = useState(1);
    const [rowsXpage, setRowsxPage] = useState(5);
    
  
    let indexLastRow = currentPage * rowsXpage; //0
    let indexFirstRow = indexLastRow - rowsXpage; //0
    let currentRows = questions.slice(indexFirstRow, indexLastRow);
  
    const paginado = (event, pageNumber) => {
      setCurrentPAge(pageNumber);
    };
    //paginado
  
    useEffect(() => {
      dispatch(getQuestions());
    }, [dispatch]);
  
    const { allQuestions } = useSelector((state) => state);
    
  
    useEffect(() => {
      setQuestions(allQuestions);
    }, [allQuestions]);
  
    const handleInputChange = (e) => {
      setSearch(e.target.value);
      filter(e.target.value);
    };
  
    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };

    const handleChangeQuestion = (e) => {
      setNewQuestion(e.target.value);
    };

    const handleSubmitQuestion = () => {
      let question = {question: newQuestion}
      dispatch(postQuestions(question))
      setNewQuestion("")
      setEdit(false)
    }
  
  
    const handleSubmit = () => {
      
      let idquestion = form.id;
      let payload = {question:form.question}

      dispatch(editQuestions(payload, idquestion));
      setForm({
        id: "",
        question: ""
      })
      setModal(false);
    };
  
    const filter = (searchTerm) => {
      let result = allQuestions.filter((el) => {
        if (
          el.question
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) 
        ) {
          return el;
        }
      });
  
      setQuestions(result);
    };
  
    const closeUpdateModal = () => {
      setModal(false);
    };
  
    const openUpdateModal = (data) => {
      setModal(true);
      setForm({
        id: data.id,
        question: data.question,
      });
    };
  
    return (
      <>
        <Modal isOpen={modal}>
          <ModalHeader>
            <div>
              <h3>Ver / Editar Registro</h3>
            </div>
          </ModalHeader>
  
          <ModalBody>
            <FormGroup>
              <label>Id:</label>
              <input
                className="form-control"
                name="email"
                type="text"
                value={form.id}
                disabled
              />
            </FormGroup>
  
            <FormGroup>
              <label>Pregunta:</label>
              <textarea
                className="form-control"
                name="question"
                type="text"
                value={form.question}
                onChange={handleChange}
              />
            </FormGroup>
  
          </ModalBody>
  
          <ModalFooter>
            <Button color="primary" onClick={handleSubmit}>
              Guardar Cambios
            </Button>
            <Button color="danger" onClick={closeUpdateModal}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={edit}>
          <ModalHeader>
            <div>
              <h3>Crear nueva pregunta</h3>
            </div>
          </ModalHeader>
  
          <ModalBody>
          <FormGroup>
              <label>Nueva Pregunta:</label>
              <textarea
                className="form-control"
                name="question"
                type="text"
                value={newQuestion}
                onChange={handleChangeQuestion}
              />
            </FormGroup>
  
          </ModalBody>
  
          <ModalFooter>
            <Button color="primary" onClick={handleSubmitQuestion}>
              Guardar
            </Button>
            <Button color="danger" onClick={()=>setEdit(false)}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
  
        <StyledDashboardPetAdmin>
          <h1>Preguntas para Formularios</h1>
  
          <StyledDivFlexAdmin>
            <form>
              <StyledDivFlexAdmin>
                <div>
                  <h3>BUSQUEDA</h3>
                  <StyledInputSearch
                    type="text"
                    placeholder="Buscar por..."
                    value={search}
                    onChange={handleInputChange}
                  />
                </div>
              </StyledDivFlexAdmin>
            </form>
          </StyledDivFlexAdmin>
  
          <div className="paginado">
            <StyledInputButton 
            type="button" value="Crear"
            onClick={()=>setEdit(true)}/>
      
            <select type="select" onChange={(e)=>setRowsxPage(e.target.value)}>
              <option selected disabled>--Mostrar--</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <PaginationAdmin 
            rowsXpage={rowsXpage}
            helpLength={questions.length}
            paginado={paginado}
            currentPage={currentPage}
            />
          </div>
  
          <div>
            <table>
              <thead>
                <th>ID</th>
                <th>Pregunta</th>
                <th>Acciones</th>
              </thead>
              <tbody>
                {currentRows.length &&
                  currentRows?.map((Q) => (
                    <tr key={Q.id}>
                      <td>{Q.id}</td>
                      <td>{Q.question}</td>
                      <td>
                      <StyledButtonEditAdminPet
                        onClick={() => openUpdateModal(Q)}
                      >
                        <i className="fas fa-edit"></i>
                      </StyledButtonEditAdminPet>
                    </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </StyledDashboardPetAdmin>
      </>
    );
}

export default DashboardAdminQuestions