import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createAdmin, deleteAdmin, getAllAdmin, } from '../Redux/Actions'
import {
  StyledDashboardPetAdmin, StyledButtonEditAdminPet,

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

export function CreateAdmin() {
  const dispatch = useDispatch();

  const [admin, setAdmin] = useState([])
  const [modal, setModal] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password1: '',
    password2: '',
    roleId: ''
  })
  const { id, rol } = useSelector(state => state)

  useEffect(() => {

    dispatch(getAllAdmin())

  }, [dispatch])

  const { allAdmins } = useSelector(state => state)

  useEffect(() => {
    if(allAdmins.length){
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

        <div>
          <button type="button" class="btn btn-primary" onClick={createModalOpen}>Crear cuenta administrativa</button>
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

                admin.length && admin?.map(admin => (

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

export default CreateAdmin;