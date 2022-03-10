import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { editShelterByAdmin, getAllDonations, getAllShelters } from '../Redux/Actions'
import {
    StyledDashboardPetAdmin, StyledDivFlexAdmin,
    StyledInputSearch, StyledInputButton,
} from "../Styles/StyledDashboardPetAdmin"
import {StyledHeaderAdmin} from "../Styles/StyledHeaderAdmin"





export const Transactions = () => {

    const [donation, setDonation] = useState([])
    const [search, setSearch] = useState('')

    const dispatch = useDispatch()
    const { allDonations } = useSelector(state => state)

    useEffect(() => {

        dispatch(getAllDonations())

    }, [dispatch])


    useEffect(() => {
        setDonation(allDonations)
    }, [allDonations])

    const handleInputChange = (e) => {
        setSearch(e.target.value)
        filter(e.target.value)
    
      }

      const filter = (searchTerm) => {
        let result = donation.filter((el) => {
          if (el.shelter.name.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
            return el
          }
        })
    
        setDonation(result)
      }

    return (
        <>
        <StyledHeaderAdmin>
        <h1>Donaciones a los Refugios</h1>
        </StyledHeaderAdmin>
            <StyledDashboardPetAdmin>
                
                <StyledDivFlexAdmin>
                    <form>
                        <StyledDivFlexAdmin>
                            <div>
                                <h3>BUSQUEDA</h3>
                                <StyledInputSearch type="text" placeholder="Buscar nombre de refugio" value={search} onChange={handleInputChange} />
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
                                Monto
                            </th>
                            <th>
                                Estado
                            </th>
                            <th>
                                Moneda
                            </th>

                            <th>Id Transaccion</th>
                            <th>Refugio Receptor</th>
                        </thead>
                        <tbody>

                            {

                                donation.length && donation?.map(donation => (

                                    <tr key={donation.id}>
                                        <td>{donation.id}</td>
                                        <td>{donation.amount}</td>
                                        <td>{donation.state}</td>
                                        <td>{donation.currency}</td>
                                        <td>{donation.paymentId}</td>
                                        <td>{donation.shelter.name}</td>
                                    </tr>

                                ))}

                        </tbody>
                    </table>
                </div>
            </StyledDashboardPetAdmin >
        </>
    )
}
