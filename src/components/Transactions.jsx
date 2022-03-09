import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { editShelterByAdmin, getAllDonations, getAllShelters } from '../Redux/Actions'
import {
    StyledDashboardPetAdmin, StyledDivFlexAdmin,
    StyledInputSearch, StyledInputButton,
} from "../Styles/StyledDashboardPetAdmin"






export const Transactions = () => {

    const [donation, setDonation] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getAllDonations())

    }, [dispatch])

    const { allDonations } = useSelector(state => state)

    useEffect(() => {
        setDonation(allDonations)
    }, [])

    return (
        <>

            <StyledDashboardPetAdmin>
                <h1>Donaciones a los Refugios</h1>

                <div>
                    <table>
                        <thead>
                            <th>

                                Id

                            </th>
                            <th>
                                Monto (Dolares)
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
