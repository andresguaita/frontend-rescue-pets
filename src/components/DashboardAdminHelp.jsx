// import React, { forwardRef, useEffect } from "react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { editHelpByAdmin, getTechHelp } from "../Redux/Actions";
// import {
//   StyledDashboardPetAdmin,
//   StyledDivFlexAdmin,
//   StyledSelectForTable,
//   StyledSelectForDashboardPetAdmin,
//   StyledButtonDeleteAdminPet,
//   StyledButtonEditAdminPet,
//   StyledInputSearch,
//   StyledInputButton,
//   StyledInputCheck,
// } from "../Styles/StyledDashboardPetAdmin";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   Table,
//   Button,
//   Container,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   FormGroup,
//   ModalFooter,
//   Label,
//   Input,
// } from "reactstrap";

// const DashboardAdminHelp = () => {
//   const dispatch = useDispatch();
//   const { id } = useSelector((state) => state);
//   const [help, setHelp] = useState([]);
//   const [form, setForm] = useState(
//     {
//         id: "",
//         email: "",
//         type: "",
//         description: "",
//         isUser: null,
//         status: null,
//         comments: null,
//         createdAt: "",
//         updatedAt: "",
//         userId: id
//     }
//   );
//   const [modal, setModal] = useState(false);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     dispatch(getTechHelp());
//   }, [dispatch]);

//   const { allTechHelp } = useSelector((state) => state);

//   useEffect(() => {
//     setHelp(allTechHelp);
//   }, [allTechHelp]);

//   const handleInputChange = (e) => {
//     setSearch(e.target.value);
//     filter(e.target.value);
//   };

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSelectStatus = (e) => {
//     setForm({
//       ...form,
//       status: e.target.value,
//     });
//   };

//   const handleSubmit = () => {
//     let payload = {
//         status: form.status,
//         comments: form.comments,
//         userId: form.userId
//     }
//     let idSuport = form.id

//     dispatch(editHelpByAdmin(payload, idSuport));
//     setModal(false);
//   };

//   const filter = (searchTerm) => {
//     let result = allTechHelp.filter((el) => {
//       if (
//         el.shelter.name
//           .toString()
//           .toLowerCase()
//           .includes(searchTerm.toLowerCase()) ||
//         el.email.toString().toLowerCase().includes(searchTerm.toLowerCase())
//       ) {
//         return el;
//       }
//     });

//     setHelp(result);
//   };

//   const closeUpdateModal = () => {
//     setModal(false);
//   };

//   const openUpdateModal = (data) => {
//     setModal(true);
//     setForm({
//         ...form,
//         id: data.id,
//         email: data.email,
//         type: data.type,
//         description: data.description,
//         isUser: data.isUser,
//         status: data.status,
//         comments: data.comments,
//         createdAt: data.createdAt,
//         updatedAt: data.updatedAt,
//     });
//   };

//   return (
//     <>
//       <Modal isOpen={modal}>
//         <ModalHeader>
//           <div>
//             <h3>Ver / Editar Registro</h3>
//           </div>
//         </ModalHeader>

//         <ModalBody>
//           <FormGroup>
//             <label>Id:</label>
//             <input
//               className="form-control"
//               name="email"
//               type="text"
//               value={form.id}
//               disabled
//             />
//           </FormGroup>

//           <FormGroup>
//             <label>Email:</label>
//             <input
//               className="form-control"
//               name="email"
//               type="text"
//               value={form.email}
//               disabled
//             />
//           </FormGroup>

//           <FormGroup>
//             <label>Type:</label>
//             <input
//               className="form-control"
//               name="type"
//               type="text"
//               value={form.type}
//               disabled
//             />
//           </FormGroup>

//           <FormGroup>
//             <label>Description:</label>
//             <textarea
//               className="form-control"
//               name="description"
//               type="text"
//               value={form.description}
//               disabled
//             />
//           </FormGroup>

//           <FormGroup>
//             <label>isUser:</label>
//             <input
//               className="form-control"
//               name="isUser"
//               type="text"
//               value={form.isUser}
//               disabled
//             />
//           </FormGroup>

//           <FormGroup>
//             <Label>Status:</Label>
//             <Input type="select" name="status" onChange={handleSelectStatus}>
//               <option value="PENDIENTE" selected={form.status === "PENDIENTE" ? true : false}>PENDIENTE</option>
//               <option value="SOLUCIONADO" selected={form.status === "SOLUCIONADO" ? true : false}>SOLUCIONADO</option>
//             </Input>
//           </FormGroup>

//           <FormGroup>
//             <Label>Fechas:</Label>
//             <input
//               className="form-control"
//               name="createdAt"
//               type="text"
//               value={`Creado : ${form.createdAt}`}
//               disabled
//             />
//             <input
//               className="form-control"
//               name="updatedAt"
//               type="text"
//               value={`actualizado : ${form.updatedAt}`}
//               disabled
//             />
//           </FormGroup>

//           <FormGroup>
//             <label>Comments:</label>
//             <textarea
//               className="form-control"
//               name="comments"
//               type="text"
//               value={form.comments}
//               onChange={handleChange}
//             />
//           </FormGroup>

//           <FormGroup>
//             <label>Resuelto por:</label>
//             <input
//               className="form-control"
//               name="userId"
//               type="text"
//               value={form.userId}
//               disabled
//             />
//           </FormGroup>
//         </ModalBody>

//         <ModalFooter>
//           <Button color="primary" onClick={handleSubmit}>
//             Guardar Cambios
//           </Button>
//           <Button color="danger" onClick={closeUpdateModal}>
//             Cancelar
//           </Button>
//         </ModalFooter>
//       </Modal>

//       <StyledDashboardPetAdmin>
//         <h1>Tickets de Soporte Técnico</h1>

//         <StyledDivFlexAdmin>
//           <form>
//             <StyledDivFlexAdmin>
//               <div>
//                 <h3>BUSQUEDA</h3>
//                 <StyledInputSearch
//                   type="text"
//                   placeholder="Buscar por..."
//                   value={search}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div>
//                 <StyledInputButton type="button" value="buscar" />
//               </div>
//             </StyledDivFlexAdmin>
//           </form>
//         </StyledDivFlexAdmin>

//         <div>
//           <table>
//             <thead>
//               <th>ID</th>
//               <th>Email</th>
//               <th>Tipo</th>
//               <th>Descripción</th>
//               {/* <th>isUser</th> */}
//               <th>Status</th>
//               {/* <th>Fecha</th>
//               <th>Comentarios</th> */}
//               <th>Resuelto por</th>
//               <th>Acciones</th>
//             </thead>
//             <tbody>
//               {help &&
//                 help?.map((help) => (
//                   <tr key={help.id}>
//                     <td>{help.id}</td>
//                     <td>{help.email}</td>
//                     <td>{help.type}</td>
//                     <td>{help.description.slice(0,10)}[...]</td>
//                     {/* <td>{help.isUser.toString()}</td> */}
//                     <td>{help.status}</td>
//                     {/* <td>
//                         Creado: {help.createdAt} 
//                         <hr />
//                         Actualizado: {help.updatedAt}
//                     </td>
//                     <td>{help.comments}</td> */}
//                     <td>{help.userId}</td>
//                     <td>
//                       <StyledButtonEditAdminPet
//                         onClick={() => openUpdateModal(help)}
//                       >
//                         <i className="fas fa-edit"></i>
//                       </StyledButtonEditAdminPet>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </StyledDashboardPetAdmin>
//     </>
//   );
// };

// export default DashboardAdminHelp;
