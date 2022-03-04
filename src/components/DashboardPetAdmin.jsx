import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { StyledDashboardPetAdmin, StyledDivFlexAdmin, 
    StyledSelectForTable, StyledSelectForDashboardPetAdmin, 
    StyledButtonDeleteAdminPet, StyledButtonEditAdminPet,
    StyledInputSearch, StyledInputButton,
    StyledInputCheck } from "../Styles/StyledDashboardPetAdmin"
import {StyleButtonBack} from "../Styles/StyledButtons"



export const DashboardPetAdmin = () => {
    const navigate = useNavigate()

    const Back = () => {
        navigate('/dashboard')
    }
    return (
        <StyledDashboardPetAdmin>
            <StyleButtonBack onClick={Back}>{'<'}</StyleButtonBack>
            <h1>DashboardPetAdmin</h1>
            <StyledDivFlexAdmin>
                <form>
                    <StyledDivFlexAdmin>
                        <div>
                            <h3>BUSQUEDA</h3>
                            <StyledInputSearch type="text" placeholder="Ingrese dato a buscar"/>
                        </div>
                        <div>
                            
                            <StyledInputButton type="button" value="buscar"/>
                        </div>
                        <div>
                            <br></br>
                            <label>Ciudad</label>
                            <StyledInputCheck type="checkbox"/>

                            <label>Refugio</label>
                            <StyledInputCheck type="checkbox"/>

                            <label>Especie</label>
                            <StyledInputCheck type="checkbox"/>

                            <label>Nombre</label>
                            <StyledInputCheck type="checkbox"/>
                        </div>
                    </StyledDivFlexAdmin>    
                </form>
            </StyledDivFlexAdmin>
            <StyledDivFlexAdmin>
                <StyledSelectForDashboardPetAdmin>
                    <option disabled selected>
                            Ciudad
                    </option>
                    <option>Todas</option>
                    <option>ciudad 1</option>
                    <option>ciudad 2</option>
                </StyledSelectForDashboardPetAdmin>
                <StyledSelectForDashboardPetAdmin>
                    <option disabled selected>
                            Refugio
                    </option>
                    <option>Todas</option>
                    <option>refugio 1</option>
                    <option>refugio 2</option>
                </StyledSelectForDashboardPetAdmin>
                <StyledSelectForDashboardPetAdmin>
                    <option disabled selected>
                            Especie
                    </option>
                    <option>Todas</option>
                    <option>Perro</option>
                    <option>Gato</option>
                    <option>Pajaro</option>
                    <option>Cerdo</option>
                </StyledSelectForDashboardPetAdmin>
                <StyledSelectForDashboardPetAdmin>
                    <option disabled selected>
                            Estatus mascota
                    </option>
                    <option>Todos</option>
                    <option>En adopción</option>
                    <option>Adoptados</option>
                </StyledSelectForDashboardPetAdmin>
                <StyledSelectForDashboardPetAdmin>
                    <option disabled selected>
                            Género
                    </option>
                    <option>Macho</option>
                    <option>Hembra</option>
                </StyledSelectForDashboardPetAdmin>
                <StyledSelectForDashboardPetAdmin>
                    <option disabled selected>
                            Hide
                    </option>
                    <option>True</option>
                    <option>False</option>
                </StyledSelectForDashboardPetAdmin>
            </StyledDivFlexAdmin>
            <div>
                <table>
                    <thead>
                        <th>
                        <StyledSelectForTable>
                            <option disabled selected>
                            Id
                            </option>
                            <option>↑ Asc</option>
                            <option>↓ Des</option>
                        </StyledSelectForTable>
                        </th>
                        <th>
                        <StyledSelectForTable>
                            <option disabled selected>
                            Nombre
                            </option>
                            <option>↑ Asc</option>
                            <option>↓ Des</option>
                        </StyledSelectForTable></th>
                        <th>
                            Especie    
                        </th>
                        <th>
                            Género 
                        </th>
                        <th>
                        <StyledSelectForTable>
                            <option disabled selected>
                            Peso
                            </option>
                            <option>↑ Asc</option>
                            <option>↓ Des</option>
                        </StyledSelectForTable>    
                        </th>
                        <th>
                        <StyledSelectForTable>
                            <option disabled selected>
                            Edad
                            </option>
                            <option>↑ Asc</option>
                            <option>↓ Des</option>
                        </StyledSelectForTable></th>
                        <th>
                            Estatus
                        </th>
                        <th>
                            Hide
                        </th>
                        <th>Acciones</th>
                    </thead>
                    <tbody>
                        <td>1</td>
                        <td>Firulais</td>
                        <td>Perro</td>
                        <td>Macho</td>
                        <td>8 kg</td>
                        <td>Joven</td>
                        <td>En adopción</td>
                        <td>false</td>
                        <td>
                        <div>
                            <StyledButtonDeleteAdminPet>x</StyledButtonDeleteAdminPet>
                            <StyledButtonEditAdminPet>Edit</StyledButtonEditAdminPet>
                        </div>
                        </td>
                    </tbody>
                </table>
            </div>
        </StyledDashboardPetAdmin>
    )
}