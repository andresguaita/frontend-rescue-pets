import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from "./NavBStatisChelter";
import 'fontsource-roboto';
import '../Styles/Dashboard.css';

import CardsHeader from './CardsHeaderChe';
import Cards from './CardsStatisChe';
import Graphics from '../components/GraphicStatisChelter';
// import TableMaterial from '../components/TableMaterial';
import { getIdFromShelterAndCity, getAllPets } from '../Redux/Actions'


const useStyles= makeStyles(()=>({
root:{
    flexGrow: 1
},
iconos:{
    color: 'white'
},
container:{
    paddingTop: '40px',
    alignItems: 'center'
},
containerGrafica:{
    marginTop: '40px'
},
containerTabla:{
    marginTop: '40px'
}
}));


function Dashboard(props) {
    let modaldashboard = useSelector((state) => state.modaldashboard);

const idUser = useSelector(state => state.id)

console.log(idUser , "id user")

const ShelterAndCityINfo = useSelector(state => state.ShelterAndCityId)
console.log("ShelterAndCityINfo------------>",ShelterAndCityINfo)

const shelterId = ShelterAndCityINfo.shelterId
console.log("shelterId------------>",shelterId)

const shelter=useSelector(state => state.shelter)
for(let i=0; i<shelter.length; i++){
    if (shelterId === shelter[i].id){
        var name_shelter=shelter[i].name
    }
}

const cities = useSelector(state => state.cities)
for(let i=0; i<cities.length; i++){
   if(ShelterAndCityINfo.cityId === cities[i].id){
       var stateId=cities[i].stateId
   }
}

const states = useSelector(state => state.states)
for (let i=0; i<states.length; i++){
    if(stateId === states[i].id){
        var countryId=states[i].countryId
    }
}

const countries = useSelector(state => state.countries)
for (let i=0; i<countries.length; i++){
    if(countryId === countries[i].id){
       var name_country=countries[i].country
    }
}

const dispatch = useDispatch()

useEffect(()=>{
    dispatch(getAllPets())
},[])

const DetailPets=useSelector(state => state.allPets)

const DetailPetsFilter = DetailPets.filter(el => el.shelterId === shelterId)

// const petsAll = useSelector(state => state.petsfilter);
// console.log("petsAll",petsAll)

var cont_pets=0;
for(let i=0; i<DetailPetsFilter.length; i++){
    if(shelterId === DetailPetsFilter[i].shelterId){
        cont_pets++;
    }
}


const enAdopcion=DetailPetsFilter.filter(el => el.petStatus.id === 1)
// console.log("En Adopocion",enAdopcion)
const adoptados=DetailPetsFilter.filter(el => el.petStatus.id === 2)
// console.log("Adoptados",adoptados)
const enProceso=DetailPetsFilter.filter(el => el.petStatus.id === 3)
// console.log("En proceso",enProceso)

const PorcentajeAdop=(adoptados.length * 100)/cont_pets

const Gatos=DetailPetsFilter.filter(el => el.speciesId=== 1)
const Perros=DetailPetsFilter.filter(el => el.speciesId=== 2)
const Aves=DetailPetsFilter.filter(el => el.speciesId=== 3)
const Cerdos=DetailPetsFilter.filter(el => el.speciesId=== 4)
const Otros=DetailPetsFilter.filter(el => el.speciesId=== 5)

const porGatos=(Gatos.length * 100)/cont_pets
const porPerros=(Perros.length * 100)/cont_pets
const porAves=(Aves.length * 100)/cont_pets
const porCerdos=(Cerdos.length * 100)/cont_pets
const porOtros=(Otros.length * 100)/cont_pets

useEffect(() => {
    dispatch(getIdFromShelterAndCity(idUser))
}, [])

   
    const classes= useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Navbar/>
                </Grid>

                <Grid container spacing={1} className={classes.container} xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                        <CardsHeader titulo="TOTAL MASCOTAS" texto={cont_pets}  color="#6F8AB7" font="white"/>
                    </Grid>  
                    <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                        <CardsHeader titulo="Gatos" texto={porGatos +" %"} color="#EE6C4D" font="white"/>
                    </Grid>
                    <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                        <CardsHeader titulo="Perros" texto={porPerros +" %"} color="#F38D68" font="white"/>
                    </Grid>
                    <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                        <CardsHeader titulo="Aves" texto={porAves +" %"} color="#662C91" font="white"/>
                    </Grid>
                    <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                        <CardsHeader titulo="Cerdos" texto={porCerdos +" %"} color="#17A398" font="white"/>
                    </Grid>
                    <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                        <CardsHeader titulo="Otros" texto={porOtros +" %"} color="#33312E" font="white"/>
                    </Grid>
                </Grid>                

                <Grid container spacing={1} className={classes.container} xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="ADOPTADOS" texto={adoptados.length}/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="EN ADOPCIÓN" texto={enAdopcion.length}/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="EN PROCESO DE ADOPCIÓN" texto={enProceso.length}/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="PORCENTAJE ADOPCIONES" texto={PorcentajeAdop +" %"}/>
                    </Grid>

                    </Grid>

                    <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>

                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.containerGrafica}>
                        <Graphics />
                    </Grid>


                    {/* <Grid item xs={12} className={classes.containerTabla}>
                    <TableMaterial data={data}/>
                    </Grid> */}


            </Grid>
        </div>
    );
}

export default Dashboard;