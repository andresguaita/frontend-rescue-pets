import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createAdmin, deleteAdmin, getAllAdmin, } from '../Redux/Actions'
import {
  StyledDashboardPetAdmin, StyledButtonEditAdminPet, StyledInputSearch, StyledInputButton, StyledDivFlexAdmin,

} from "../Styles/StyledDashboardPetAdmin"

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
import styled from 'styled-components'
import PaginationAdmin from './AdminPagination'

export function CreateAdmin() {
  const dispatch = useDispatch();

  const [admin, setAdmin] = useState([])
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password1: '',
    password2: '',
    roleId: ''
  })


  const [currentPage, setCurrentPAge] = useState(1);
  const [rowsXpage, setRowsxPage] = useState(5);
  const [orden, setOrden] = useState('')
  //console.log(orden)

  let indexLastRow = currentPage * rowsXpage; //0
  let indexFirstRow = indexLastRow - rowsXpage; //0
  let currentRows = admin.slice(indexFirstRow, indexLastRow);


  const { id, rol } = useSelector(state => state)

  useEffect(() => {

    dispatch(getAllAdmin())

  }, [dispatch])

  const { allAdmins } = useSelector(state => state)

  useEffect(() => {
    if (allAdmins.length) {
      const admins = allAdmins.filter(element => element.id != id)
      setAdmin(admins)
    }

  }, [allAdmins])

  const handleDelete = (id) => {

    dispatch(deleteAdmin(id))
  }

  const createModalClose = () => {
    setModal(false)
  }

  const createModalOpen = () => {
    setModal(true)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  }

  const handleInputChange = (e) => {
    setSearch(e.target.value)
    filter(e.target.value)

  }

  const handleSubmit = () => {
    dispatch(createAdmin(form.email, form.password1, form.roleId, rol))
    setForm({
      email: '',
      password1: '',
      password2: '',
      roleId: ''
    })
    setModal(false)
  }

  const handleSelect = (e) => {
    setForm({
      ...form,
      roleId: e.target.value,
    });

  };

  const filter = (searchTerm) => {
    let result = allAdmins.filter((el) => {
      if (el.email.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
        return el
      }
    })
    setAdmin(result)
  }

  const paginado = (event, pageNumber) => {
    setCurrentPAge(pageNumber);
  };

  return (
    <>
      <Modal isOpen={modal}>
        <ModalHeader>
          <div><h3>Crear Registro</h3></div>
        </ModalHeader>

        <ModalBody>

          <FormGroup>
            <label>
              Email:
            </label>
            <input
              className="form-control"
              name="email"
              placeholder='Ingrese el email de la cuenta'
              type="text"
              onChange={handleChange}
              value={form.email}
            />
          </FormGroup>

          <FormGroup>
            <label>
              Contraseña:
            </label>
            <input
              className="form-control"
              name="password1"
              placeholder='Ingrese la contraseña'
              type="password"
              onChange={handleChange}
              value={form.password1}
            />
          </FormGroup>

          <FormGroup>
            <label>
              Repita la contraseña:
            </label>
            <input
              className="form-control"
              name="password2"
              placeholder='Ingrese la contraseña'
              type="password"
              onChange={handleChange}
              value={form.password2}
            />
          </FormGroup>
          <FormGroup>
            <Label >Tipo de Admin</Label>
            <Input type="select" name="roleId" onChange={handleSelect}>
              <option selected="selected">Seleccione el tipo de Admin</option>
              <option value={2}>Admin</option>
              <option value={3}>SuperAdmin</option>

            </Input>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
            onClick={() => handleSubmit()}
          >
            Crear Registro
          </Button>
          <Button
            color="danger"
            onClick={() => createModalClose()}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
      <StyledDashboardPetAdmin>
        <h1>Cuentas Administradoras</h1>
        <StyledDivFlexAdmin>
          <form>
            <StyledDivFlexAdmin>
              <div>
                <h3>BUSQUEDA</h3>
                <StyledInputSearch type="text" placeholder="Buscar por..." value={search} onChange={handleInputChange} />
              </div>
              <div>

                <StyledInputButton type="button" value="buscar" />
              </div>

            </StyledDivFlexAdmin>
          </form>
        </StyledDivFlexAdmin>
        <div>
          <ButtonPrimary type="button" class="btn btn-primary" onClick={createModalOpen}><span style={{ fontSize: 15 }}>Crear Cuenta Administrativa</span></ButtonPrimary>

          <div className="paginado">
            <select type="select" onChange={(e) => setRowsxPage(e.target.value)}>
              <option selected disabled>--Mostrar--</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <PaginationAdmin
              rowsXpage={rowsXpage}
              helpLength={admin.length}
              paginado={paginado}
              currentPage={currentPage}
            />
          </div>
          <table>
            <thead>
              <th>

                Id

              </th>
              <th>
                Email
              </th>
              <th>
                Tipo
              </th>

              <th>Acciones</th>
            </thead>
            <tbody>


              {

                currentRows.length && currentRows?.map(admin => (

                  <tr key={admin.id}>
                    <td>{admin.id}</td>
                    <td>{admin.email}</td>
                    <td>{admin.roleId == 2 ? 'Admin' : 'SuperAdmin'}</td>
                    <td><StyledButtonEditAdminPet onClick={() => handleDelete(admin.id)}><i className="fas fa-trash"></i></StyledButtonEditAdminPet></td>
                  </tr>

                ))}


            </tbody>
          </table>
        </div>
      </StyledDashboardPetAdmin >
    </>

  )
}


const ButtonPrimary = styled.button`
 width: 130px;
 height: 45px;
 background: #1E88E5;
 border-radius: 5px;
 border: none;
 margin-top: 10px;
 margin-bottom: 10px;
 color: white;
 cursor: pointer;
`;

export default CreateAdmin;