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
import { ModalDashboard } from './ModalDashboard'

import styled from 'styled-components'
import PaginationAdmin from './AdminPagination'
import {StyledHeaderAdmin} from "../Styles/StyledHeaderAdmin"



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

  const [currentPage, setCurrentPAge] = useState(1);
  const [rowsXpage, setRowsxPage] = useState(5);
  const [orden, setOrden] = useState('')
  //console.log(orden)

  let indexLastRow = currentPage * rowsXpage; //0
  let indexFirstRow = indexLastRow - rowsXpage; //0
  let currentRows = shelters.length && shelters.slice(indexFirstRow, indexLastRow);

  const paginado = (event, pageNumber) => {
    setCurrentPAge(pageNumber);
  };
  //paginado

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
      <ModalDashboard modal={modal} setModal={setModal}>
        <InputDashboardAdmin name='id' value={form.id} type='text' placeholder='id' onChange={handleChange} disabled />
        <br />
        <InputDashboardAdmin name='email' value={form.email} type='text' placeholder='email' onChange={handleChange} />
        <br />
        <SelectDashboardAdmin name='status' onChange={handleSelectStatus}>
          <option selected="selected">Estatus del Refugio</option>
          <option value={true}>Activar</option>
          <option value={false}>Desactivar</option>

        </SelectDashboardAdmin>
        <br />
        <ButtonContain>
          <ButtonDanger onClick={closeUpdateModal}>Cancelar</ButtonDanger>
          <ButtonPrimary onClick={handleSubmit}>Guardar Cambios</ButtonPrimary>
        </ButtonContain>

      </ModalDashboard>

    
      <StyledHeaderAdmin>
        <h1>Refugios</h1>
        </StyledHeaderAdmin>

      <StyledDashboardPetAdmin>
      

        <StyledDivFlexAdmin>
          <form>
            <StyledDivFlexAdmin>
              <div>
                <h3>BUSQUEDA</h3>
                <StyledInputSearch type="text" placeholder="Buscar por..." value={search} onChange={handleInputChange} />
              </div>
              

            </StyledDivFlexAdmin>
          </form>
        </StyledDivFlexAdmin>
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
            helpLength={shelters.length}
            paginado={paginado}
            currentPage={currentPage}
          />
        </div>
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

                currentRows?.length && currentRows?.map(shelter => (

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

const InputDashboardAdmin = styled.input`

box-sizing: border-box;
  display: block;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  padding: 16px;
  outline: 0;
  font-family: inherit;
  font-size: 2rem;

`;

const SelectDashboardAdmin = styled.select`

box-sizing: border-box;
  display: block;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  padding: 16px;
  outline: 0;
  font-family: inherit;
  font-size: 2rem;

`;

const ButtonPrimary = styled.button`
 width: 120px;
 height: 45px;
 background: #1E88E5;
 border-radius: 5px;
 border: none;
 color: white;
 cursor: pointer;
`;

const ButtonDanger = styled.button`
 width: 120px;
 height: 45px;
 background: #D32F2F;
 border-radius: 5px;
 border: none;
 color: white;
 cursor: pointer;
`;

const ButtonContain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
`;
