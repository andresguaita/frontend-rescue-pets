import axios from 'axios'
import Swal from 'sweetalert2';
import { getAuth, signInWithPopup, signOut } from 'firebase/auth'
import { googleAuthProvider } from '../../firebase/firebase-Config'
import { fetchConToken, fetchSinToken } from '../../helpers/fetch.js';
import {cloudynary} from '../../helpers/cloudinary.js'
import store from '../Store/index';
import {
    GET_COUNTRIES,
    GET_STATES,
    GET_CITIES,
    CLEAN_STATE_FORM,
    GET_PETS,
    POST_FORM_REGISTER,
    GET_PETS_FILTER,
    authLogin,
    authCheckingFinish,
    GET_TEMPERAMENTS,
    GET_ID_CITY,
    GET_AGES,
    GET_STATUS,
    GET_SEARCH_SHELTERS,
    GET_SPECIES,
    GET_FILTER_SHELTERS,
    GET_FORMS,
    GET_ADOPTIONS,
    GET_PET_ID,
    GET_ID_FROM_SHELTER_AND_CITY,
    GET_SHELTER_DETAIL,
    GET_PETS_BY_SHELTER,
    GET_FORMTYPES,
    GET_PETS_FOR_DASHBOARD,
    authLogout,
    GET_DETAIL_SHELTER,
    UPDATE_SHELTER,
    POST_CREATE_FORM,
    GET_PETS_SIMILAR,
    GET_ALL_QUESTIONS,
    DELETE_ANSWERFORM,
    GET_INDIVIDUAL_FORM,
    GET_SHELTERS,
    GET_FORM_ADOPTION,
    POST_ADOPTION,
    POST_PETS,
    GETT_TEMPERAMENTS,
    GET_ALL_SPECIES,
    GET_ALL_PET_STATUS,
    GET_ALL_AGES,
    GET_GENRES,
    SEARCH_PET_BY_NAME,
    DELETE_PET,
    EDIT_PET,
    POST_REQUEST_TRANSIT,
    GET_FORM_BY_SHELTER,
    GET_FOLLOW_UPS_FROM_SHELTER,
    CHECK_FORM,
   
    MODAL_DASHBOARD,
 
    GET_PROFILE,
    GET_FOLLOW_UPS_STATUSES,
    GET_COUNT_SHELTER,
    GET_COUNT_ADOPTED2,
    GET_COUNT_ADOPTED3,
    EDIT_HIDE_PETS_IN_DASHBOARD,
    authLoginAdmin,
    EDIT_PET_STAUTS_ID


    } from './types.js'
import { async } from '@firebase/util';
import { APIGATEWAY_URL } from '../../utils/constant';



export const getPets = () => {
    return async function (dispatch) {
        try {
            let json = await axios(`${APIGATEWAY_URL}/pets`);
            let size = json.data.length / 2;
            let NewPets = function (myArray, Size) {
                var results = [];
                while (myArray.length) {
                    results.push(myArray.splice(0, Size));
                }
                return results;
            };
            let newpets = NewPets(json.data, size);
            console.log([newpets], "Pets sin partir", json, "partido");
            dispatch({ type: GET_PETS, payload: newpets[0] });
            // de momento solo muestra el primer array
            // dispatch({type: GET_PETS, payload:json.data}); //Pets sin división
        } catch (error) {
            console.log("ERROR NO DATA", error);
        }
    };
};

export const getCountries = () => {
    return async function (dispatch) {
      
        let json = await axios(`${APIGATEWAY_URL}/country`);
        return dispatch({ type: GET_COUNTRIES, payload: json.data });
    };
};



export const getStates = (id) => {
    return async function (dispatch) {
        let json = await axios(`${APIGATEWAY_URL}/states?countryId=${id}`);
        return dispatch({ type: GET_STATES, payload: json.data });
    };
};

export const getcities = (id) => {
    return async function (dispatch) {
        let json = await axios(`${APIGATEWAY_URL}/cities?stateId=${id}`);
        return dispatch({ type: GET_CITIES, payload: json.data });
    };
};

export const cleanStateForm = () => {
    return { type: CLEAN_STATE_FORM, payload: [] };
};

export const getPetsSimilar = (idShelter, datafilters) => {
    let resul;
    let datafilters2 = store.getState().petsfilter;
    let OnePet = store.getState().petOne;
    return function (dispatch) {
        try {
            OnePet = OnePet[0];

            console.log("ENVIADOS POR ACTION ", idShelter, datafilters, "TOMADO DESDE STORE", datafilters2, OnePet)
            if (idShelter == undefined) {
                resul = datafilters2.filter((el) => el.shelterId === idShelter[0].shelterId || el.species.id === idShelter[0].species.id || el.ageId === idShelter[0].ageId && (el.name != OnePet.name));
                resul = resul.splice(0, 6);
            }
            else {
                resul = datafilters.filter((el) => el.shelterId === idShelter[0].shelterId && (el.name != idShelter[0].name));
                resul = resul.splice(0, 6);
            }
            dispatch({ type: GET_PETS_SIMILAR, payload: resul });
            console.log("todo", idShelter, resul, " sin el mosmo resul");

        } catch (error) {


            console.log(error);
        }
    };
};

export const getPetId = (id) => {
    return async function (dispatch) {
        try {
            const Details = await axios(`${APIGATEWAY_URL}/petDetail/` + id);
            dispatch({ type: GET_PET_ID, payload: Details.data });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getPetByShelter = (id) => {
    return async function (dispatch) {
        try {
            const Details = await axios(`${APIGATEWAY_URL}/petDetail?shelterId=${id}`);
            dispatch({ type: GET_PETS_BY_SHELTER, payload: Details.data });
        } catch (error) {
            console.log(error);
        }
    };
};

export const postShelter = (payload) => {
    return async function (dispatch) {
        let response = await axios.post(`${APIGATEWAY_URL}/createShelter`, payload);
        return response;
    };
};

export const getPetsFilter = (link) => {
    return async function (dispatch) {
        try {
            let json = await axios(link);
            return dispatch({ type: GET_PETS_FILTER, payload: json.data });
        } catch (error) {
            return error;
        }
    };
};

export const startLogin = (email, password) => {
    return async (dispatch) => {
        const resp = await fetchSinToken("login", {
            email,
            password
        }, "POST");
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem("token", body.token);
            localStorage.setItem("token-init-date", new Date().getTime());
            dispatch(login({ id: body.id, email: body.email }));
        } else {
            alert(body.msg);
        }
    };
};

export const startLoginAdmin = (email, password) => {
    return async (dispatch) => {
        const resp = await fetchSinToken("loginadmin", {
            email,
            password
        }, "POST");
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem("token", body.token);
            localStorage.setItem("token-init-date", new Date().getTime());
            dispatch(loginAdmin({ id: body.id, email: body.email, rol: body.role }));
        } else {
            alert(body.msg);
        }
    };
};

export const loginAdmin = (user) => ({
    type: authLoginAdmin,
    payload: user
})

export const startRegister = (name, phoneNumber, description, address, email, password, cityId, role, img) => {
    return async (dispatch) => {
        const resp = await fetchSinToken("createShelter", {
            name,
            phoneNumber,
            description,
            address,
            email,
            password,
            cityId,
            role,
            img
        }, "POST");
        const body = await resp.json();
        if (!body.ok) {
            Swal.fire('Genial', 'Registro realizado correctamente', 'success')
        }

        else{
            Swal.fire('Error', 'Algo salio mal, por favor intentelo nuevamente', 'error')

            Swal.fire('Genial', 'Informacion actualizada', 'success')
        }

    };
};


export const getTemperaments = () => {
    return { type: GET_TEMPERAMENTS, payload: null };
};

export const getCityId = (id) => {
    return { type: GET_ID_CITY, payload: id };
};

export const getAges = () => {
    return { type: GET_AGES, payload: null };
};

export const getStatus = () => {
    return { type: GET_STATUS, payload: null };
};

export const getSearchShelters = (name) => {
    return async function (dispatch) {
        let json = await axios(`${APIGATEWAY_URL}/searchShelter?name=` + name);
        return dispatch({ type: GET_SEARCH_SHELTERS, payload: json.data });
    };
};

export const getSpecies = () => {
    return { type: GET_SPECIES, payload: null };
};

export const getFilterShelters = () => {
    return { type: GET_FILTER_SHELTERS, payload: null };
};

export const getForms = (userid, formtypeid) => {
    return async function (dispatch) {
        let json = await axios(`${APIGATEWAY_URL}/forms/${userid}?formtypeid=` + formtypeid);
        return dispatch({ type: GET_FORMS, payload: json.data });
    };
};

export const getIdFromShelterAndCity = (userId) => {
    return async function (dispatch) {
        let json = await axios(`${APIGATEWAY_URL}/sheltercityid/${userId}`);
        return dispatch({ type: GET_ID_FROM_SHELTER_AND_CITY, payload: json.data });
    };
};

export const getShelterDetail = (id) => {
    return async function (dispatch) {

        let json = await axios(`${APIGATEWAY_URL}/shelters/${id}`);
        return dispatch({ type: GET_SHELTER_DETAIL, payload: json.data });
    };
};



export const getShelters = () => {
    return async function (dispatch) {
        let json = await axios(`${APIGATEWAY_URL}/shelters`)
        return dispatch({
            type: GET_SHELTERS,
            payload: json.data
        })
    }
}


export const getFormtypes = () => {
    return async function (dispatch) {
        let json = await axios(`${APIGATEWAY_URL}/formtypes`);
        return dispatch({ type: GET_FORMTYPES, payload: json.data });
    };
};

export const getPetsForDashboard = (route) => {
    return async function (dispatch) {
        try {
            let json = await axios(route);
            return dispatch({ type: GET_PETS_FOR_DASHBOARD, payload: json.data });
        } catch (error) {
            return error;
        }
    };
};

export const searchPetByName = (payload) => {
    return { type: SEARCH_PET_BY_NAME, payload: payload };
};

export const getIndividualForm = (shelterid, formtypeid, formid) => {
    return async function (dispatch) {
        try {
            let json = await axios(`${APIGATEWAY_URL}/formquestions/${shelterid}?formtypeid=${formtypeid}`)
            return dispatch({
                type: GET_INDIVIDUAL_FORM, payload: { data: json.data, formid: formid }
            }
            )
        } catch (error) {
            return error
        }
    }
}
export const getFormAdoption = (id, formtypeId) => {
    return async function (dispatch) {
        try {
            const Adoption = await axios(`${APIGATEWAY_URL}/formquestions/${id}?formtypeid=${formtypeId}`);
            dispatch({ type: GET_FORM_ADOPTION, payload: Adoption.data });
        } catch (error) {
            console.log(error);

        }
    };
}

export const sendAdoption = (payload) => {
    return async function (dispatch) {
        let response = await axios.post(`${APIGATEWAY_URL}/sendAdoption`, payload)
        return response
    }
}



export const startChecking = () => {
    return async (dispatch) => {
        const resp = await fetchConToken('renew')
        const body = await resp.json()
        
        if (body.ok) {
           
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            if(body.role==3){
                dispatch(loginAdmin({ id: body.id, email: body.email, rol: body.role }));
            }

            else{
                dispatch(login({ id: body.id, email: body.email}));
            }
        }
        else {
            
            dispatch(checkingFinish())
        }
    }
}

const checkingFinish = () => ({ type: authCheckingFinish })

export const startGoogleLogin = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                dispatch(login())
            })
    }
}

export const login = (user) => ({
    type: authLogin,
    payload: user
})

export function postPets(payload) {
    console.log("console desde accion  ",payload)
    return async function () {
        const post = await axios.post(`${APIGATEWAY_URL}/pets`, payload);
        return post;
    }
}

export const gettTemperaments = () => {
    return async function (dispatch) {
        let json = await axios(`${APIGATEWAY_URL}/temperaments`)
        return dispatch({
            type: GETT_TEMPERAMENTS,
            payload: json.data
        })
    }
}

export const getAllSpecies = () => {
    return async function (dispatch) {
        let json = await axios(`${APIGATEWAY_URL}/species`)
        return dispatch({
            type: GET_ALL_SPECIES,
            payload: json.data
        })
    }
}


export const getAllPetStatus = () => {
    return async function (dispatch) {
        let json = await axios(`${APIGATEWAY_URL}/petstatus`)
        return dispatch({
            type: GET_ALL_PET_STATUS,
            payload: json.data
        })
    }
}

export const getAllAges = () => {
    return async function (dispatch) {
        let json = await axios(`${APIGATEWAY_URL}/ages`)
        return dispatch({
            type: GET_ALL_AGES,
            payload: json.data
        })
    }
}


export const getGenres = () => {
    return async function (dispatch) {
        let json = await axios(`${APIGATEWAY_URL}/genres`)
        return dispatch({
            type: GET_GENRES,
            payload: json.data
        })
    }
}



export const deleteAnswerForm = (formid, type) => {
    return async function (dispatch) {
        await axios.delete(`${APIGATEWAY_URL}/deleteAnswerForm/${type}?formid=${formid}`)
        return dispatch({ type: DELETE_ANSWERFORM })
    }
}

export const postRequestTransit = (payload) => {
    return async function (dispatch) {
        let response = await axios.post(`${APIGATEWAY_URL}/sendRequest`, payload);
        return response;
    };
};

export const getAllQuestions = () => {
    return async function (dispatch) {
        let json = await axios(`${APIGATEWAY_URL}/getAllQuestions`)
        return dispatch({ type: GET_ALL_QUESTIONS, payload: json.data })
    }
}

export const startLogout = () => {

    return async (dispatch) => {
        localStorage.clear()
        const auth = getAuth()
        await signOut(auth)
        dispatch(logout())
    }
}

export const getShelterById = (id) => {
    return async (dispatch) => {
        const ShelterDetail = await fetchConToken(`Shelter/${id}`)
        const body = await ShelterDetail.json()
        if (body.ok) {
            dispatch({ type: GET_DETAIL_SHELTER, payload: { name: body.name, address: body.address, phoneNumber: body.phoneNumber, description: body.description } })
        }
    }

}

export const shelterStartUpdate = (shelter) => {
    return async (dispatch) => {
        console.log('shelter', shelter)
        try {
            const resp = await fetchConToken(`Shelter/${shelter.id}`, shelter, 'PUT');
            const body = await resp.json();

            if (body.ok) {
                dispatch(getShelterById(shelter.id));
                Swal.fire('Genial', 'Informacion actualizada', 'success')
            } else {
                Swal.fire('Error', body.msg, 'error');
            }


        } catch (error) {
            console.log(error)
        }

    }
}

export const passwordUpdate = (data) => {
    return async (dispatch) => {

        try {
            const resp = await fetchConToken(`changepassword`, data, 'PUT');
            const body = await resp.json();

            if (body.ok) {
                Swal.fire('Genial', 'Contraseña Actualizada, por favor inicie sesion nuevamente', 'success')
                dispatch(logout());

            } else {
                Swal.fire('Error', body.msg, 'error');
            }


        } catch (error) {
            console.log(error)
        }

    }
}


const logout = () => ({ type: authLogout })


export const postCreateForm = (form) => {
    return async function (dispatch) {
        let json = await axios.post(`${APIGATEWAY_URL}/createForm`, form)
        return json
    }
}


export const getFormByShelter = (shelterid,formtypeid) => {
    return async function(dispatch){
        let json = await axios(`${APIGATEWAY_URL}/getFormByShelter/${shelterid}?formtypeid=${formtypeid}`)
        return dispatch({type:GET_FORM_BY_SHELTER, payload:json.data})
    }
}

export const editForm = (formid,formtypeid,questions) => {
    return async function(dispatch){
        let json = await axios.put(`${APIGATEWAY_URL}/editForm/${formid}?formtypeid=${formtypeid}`,questions)
        return json
    }
}

export const deletePet = (petId) => {
    return async function (dispatch) {
        const deletePet = await axios.delete(`${APIGATEWAY_URL}/pets/${petId}`);
        return dispatch({ type: DELETE_PET, payload: deletePet });
        // console.log(deletePet)
        // return deletePet
    };
}

export const editPet = (petId, payload) => {
    return async function (dispatch) {
        const editPet = await axios.put(`${APIGATEWAY_URL}/pets/${petId}`, payload);
        // return dispatch({ type: EDIT_PET, payload:editPet });
        // console.log(editPet)
        // return editPet
    };
}


export const uploadImageCloud = (formData) => {
    return async (dispatch) => {
        const resp = await cloudynary(formData);
        const body = await resp.data.secure_url
        return body
    };
    
}


export const addFollowUp = (payload) => {
    return async function (dispatch) {
        let response = await axios.post(`${APIGATEWAY_URL}/addFollowUp`, payload);
        return response;
    };
};



export const getFollowUpsFromShelter = (shelterId) => {
    return async function (dispatch) {
        const followUps= await axios.get(`${APIGATEWAY_URL}/getFollowUps/${shelterId}`);
        return dispatch({ type: GET_FOLLOW_UPS_FROM_SHELTER, payload:followUps.data });
    };
}

export const sendEmailAccepted = (payload) => {
    return async function(dispatch){
        let json = await axios.post(`${APIGATEWAY_URL}/nodemailer/sendEmailAccepted`,payload)
        return json
    }
}

export const sendEmailRejected = (payload) => {
    return async function(dispatch){
        let json = await axios.post(`${APIGATEWAY_URL}/nodemailer/sendEmailRejected`,payload)
        return json
    }
}

export const checkForm = (shelterid) => {
    return async function(dispatch){
        let json = await axios(`${APIGATEWAY_URL}/checkForm/${shelterid}`)
        return dispatch({type:CHECK_FORM, payload:json.data})
    }

}

export const sendEmailForms = (payload) => {
    return async function(){
        let json = await axios.post(`${APIGATEWAY_URL}/nodemailer/sendEmailForms`,payload)
        return json
    }
}


export const sendEmailFormstoShelter = (payload) => {
    return async function(){
        let json = await axios.post(`${APIGATEWAY_URL}/nodemailer/sendEmailFormstoShelter`,payload)
        return json
    }
}





















export const ModalDashboardOpen = (modal) => {
    return {type: MODAL_DASHBOARD, payload: modal};
};

export const getProfile = (profileId) => {
    return async function(dispatch){
        let json = await axios(`${APIGATEWAY_URL}/profiles/${profileId}`)
        return dispatch({type:GET_PROFILE, payload: json.data})
    }
}

export const StartRestorePassword =  (email) => {
    return async (dispatch) => {

        try {
            const resp = await fetchSinToken(`forgotpassword/?email=${email}`);
            const body= await resp.json()
            
            if (body.ok) {
                Swal.fire('Restaurar Contraseña', 'Revise su email, le hemos enviado un enlace para restablecer su contraseña', 'info')
            } else {
               
                Swal.fire('Error', body.msg, 'error')
            }

        } catch (error) {
            console.log(error)
        }

    }

};

export const resetPassword = (token, password) =>{
    return async (dispatch) => {
        const resp = await fetchSinToken("resetpassword", {
            token,
            password
        }, "PUT");
        const body = await resp.json();
        if (body.ok) {
            Swal.fire('Contraseña restaurada', 'Ya puede iniciar sesión con su nueva contraseña', 'sucess')
        } else {
            Swal.fire('Error', 'El enlace ya no es valido, confirme que sea el link que ha recibido por correo', 'error')
        }
    };
}

export const getFollowUpStatuses = () => {
    return async function (dispatch) {
        const followUpStatuses= await axios.get(`${APIGATEWAY_URL}/followUpStatuses`);
        return dispatch({ type: GET_FOLLOW_UPS_STATUSES, payload: followUpStatuses.data });
    };
}

export const findOrCreateProfileUser = (payload) => {
    return async function (dispatch) {
        let response = await axios.post(`${APIGATEWAY_URL}/ProfileUser`, payload);
        let body = await response.data
        return body;
    };
};

export const deleteFollowUp = (followUpId) => {
    return async function (dispatch) {
        const deletefollowUp = await axios.delete(`${APIGATEWAY_URL}/deleteFollowUp/${followUpId}`);

    };
}

export const editFollowUp = (followUpId, payload) => {
    return async function (dispatch) {
        const editFollowUp = await axios.put(`${APIGATEWAY_URL}/editFollowUp/${followUpId}`, payload);
        // return dispatch({ type: EDIT_PET, payload:editPet });
        // console.log(editPet)
        // return editPet
    };
}

export const getCountShelter = () => {
    return async function (dispatch) {
        let json = await axios(`${APIGATEWAY_URL}/countshelter`)
        return dispatch({
            type: GET_COUNT_SHELTER,
            payload: json.data
        })
    }
}

export const getCountAdopted2 = () => {
    return async function (dispatch) {
        let json = await axios(`${APIGATEWAY_URL}/petAdopted2`)
        return dispatch({
            type: GET_COUNT_ADOPTED2,
            payload: json.data
        })
    }
}

export const getCountAdopted3 = () => {
    return async function (dispatch) {
        let json = await axios(`${APIGATEWAY_URL}/petAdopted3`)
        return dispatch({
            type: GET_COUNT_ADOPTED3,
            payload: json.data
        })
    }
}

export const setFormStatus = (status,formid,id) => {
    return async function(dispatch){
        let json = await axios.put(`${APIGATEWAY_URL}/setFormStatus/${id}/${formid}/${status}`)
    }
}


export const hidePetInDashbaord = (petId, payload) => {
    return async function (dispatch) {
        const hidePetInDashbaord = await axios.put(`${APIGATEWAY_URL}/pets/hide/${petId}`, payload);
        return dispatch({ type: EDIT_HIDE_PETS_IN_DASHBOARD, payload:hidePetInDashbaord });
        // console.log(editPet)
        // return editPet

    };
}

export const createAdmin= (email,password,roleId,userRole) =>{
    return async (dispatch) => {
        const resp = await fetchSinToken("createAdmin", {
            email,
            password,
            roleId,
            userRole
        }, "POST");
        const body = await resp.json();
      
        if (body.ok) {
            alert(body.msg);
        } else {
            alert(body.msg);
        }
    }
}


export const updatePetStatus = (petId, payload) => {
    return async function (dispatch) {
        const updatePetStatus = await axios.put(`${APIGATEWAY_URL}/pets/updateStatus/${petId}`, payload); 
        return dispatch({ type: EDIT_PET_STAUTS_ID, payload:updatePetStatus });

    };
}