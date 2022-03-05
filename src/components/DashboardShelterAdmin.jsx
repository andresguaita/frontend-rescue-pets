import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { editShelterByAdmin, getAllShelters } from '../Redux/Actions'
import {
  StyledDashboardPetAdmin, StyledDivFlexAdmin,
  StyledSelectForTable, StyledSelectForDashboardPetAdmin,
  StyledButtonDeleteAdminPet, StyledButtonEditAdminPet,
  StyledInputSearch, StyledInputButton,
  StyledInputCheck
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




export const DashboardShelterAdmin = () => {

  const dispatch = useDispatch()

  const [shelters, setShelters] = useState([])
  const [form, setForm] = useState({
    id: '',
    email: '',
    status: true
  })
  const [modal, setModal] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(getAllShelters())
  }, [dispatch])


  const { allShelters } = useSelector(state => state)



  useEffect(() => {
    setShelters(allShelters)
  }, [allShelters])

  const handleInputChange = (e) => {
    setSearch(e.target.value)
    filter(e.target.value)

  }

  const handleChange = (e) => {
    setForm({
      ...form,
      email: e.target.value,
    });

  }

  const handleSelectStatus = (e) => {
    setForm({
      ...form,
      status: e.target.value,
    });

  };

  const handleSubmit = () => {
    dispatch(editShelterByAdmin(form.id, form.email, form.status))
    setModal(false)
  }
  const filter = (searchTerm) => {
    let result = allShelters.filter((el) => {
      if (el.shelter.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
        || el.email.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
        return el
      }
    })

    setShelters(result)
  }

  const closeUpdateModal = () => {
    setModal(false)
  }

  const openUpdateModal = (data) => {
    setModal(true)
    setForm({
      ...form,
      id: data.id,
      email: data.email,
    });
  }


  return (
    <>
      <Modal isOpen={modal}>
        <ModalHeader>
          <div><h3>Editar Registro</h3></div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>

            <label>
              Id:
            </label>
            <input
              className="form-control"
              name="email"
              type="text"
              onChange={handleChange}
              value={form.id}
              disabled
            />
          </FormGroup>

          <FormGroup>

            <label>
              Email:
            </label>
            <input
              className="form-control"
              name="email"
              type="text"
              onChange={handleChange}
              value={form.email}
            />
          </FormGroup>

          <FormGroup>
            <Label >Status</Label>
            <Input type="select" name="status" onChange={handleSelectStatus}>
              <option value={false} >Desactivado</option>
              <option value={true} selected>Activado</option>
            </Input>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
            onClick={handleSubmit}
          >
            Guardar Cambios
          </Button>
          <Button
            color="danger"
            onClick={closeUpdateModal}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      <StyledDashboardPetAdmin>
        <h1>DashboardShelterAdmin</h1>

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
          <table>
            <thead>
              <th>

                Id

              </th>
              <th>
                Nombre
              </th>
              <th>
                Email
              </th>
              <th>
                Estatus
              </th>

              <th>Acciones</th>
            </thead>
            <tbody>

              {

                shelters && shelters?.map(shelter => (

                  <tr key={shelter.id}>
                    <td>{shelter.id}</td>
                    <td>{shelter.shelter.name}</td>
                    <td>{shelter.email}</td>
                    <td>{shelter.shelter.status ? 'Activo' : 'Desactivado'}</td>
                    <td><StyledButtonEditAdminPet onClick={() => openUpdateModal(shelter)}><i className="fas fa-edit"></i></StyledButtonEditAdminPet></td>
                  </tr>

                ))}






            </tbody>
          </table>
        </div>
      </StyledDashboardPetAdmin >
    </>
  )
}