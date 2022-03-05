import {
  GET_COUNTRIES,
  GET_STATES,
  GET_CITIES,
  CLEAN_STATE_FORM,
  POST_FORM_REGISTER,
  GET_PETS_FILTER,
  GET_PETS,
  authLogin,
  authCheckingFinish,
  GET_TEMPERAMENTS,
  GET_ID_CITY,
  GET_AGES,
  GET_STATUS,
  GET_SEARCH_SHELTERS,
  GET_SPECIES,
  GET_FORMS,
  GET_PET_ID,
  GET_ID_FROM_SHELTER_AND_CITY,
  GET_SHELTER_DETAIL,
  GET_FILTER_SHELTERS,
  GET_PETS_BY_SHELTER,
  GET_FORMTYPES,
  GET_PETS_FOR_DASHBOARD,
  GET_FORM_BY_SHELTER,
  authLogout,
  GET_DETAIL_SHELTER,
  GET_PETS_SIMILAR,
  GET_ALL_QUESTIONS,
  GET_INDIVIDUAL_FORM,
  POST_PETS,
  GET_SHELTERS,
  GET_FORM_ADOPTION,
  POST_ADOPTION,
  GETT_TEMPERAMENTS,
  GET_ALL_SPECIES,
  GET_ALL_PET_STATUS,
  GET_ALL_AGES,
  GET_GENRES,
  SEARCH_PET_BY_NAME,
  DELETE_PET,
  DELETE_ANSWERFORM,
  POST_REQUEST_TRANSIT,
  GET_FOLLOW_UPS_FROM_SHELTER,
  CHECK_FORM,
  PIC_PRIMER,
  MODAL_DASHBOARD,
  GET_PROFILE,
  GET_FOLLOW_UPS_STATUSES,
  GET_COUNT_SHELTER,
  GET_COUNT_ADOPTED1,
  GET_COUNT_ADOPTED2,
  GET_ONLY_CITIES_WITH_SHELTERS,
  REMOVE_FROM_FAVORITES,
  ADD_TO_FAVORITES,
  GET_ALL_SHELTERS,
  GET_PETS_FILTER_FOR_ADMIN,
  GET_ONLY_STATES_WITH_SHELTERS,
  authLoginAdmin,
  GET_STATUS_FOR_ADMIN,
  GET_SPECIES_FOR_ADMIN,
  GET_PET_GENRE_FOR_ADMIN,
  GET_PET_HIDE_FOR_ADMIN,
  GET_SHELTER_OF_PET_FOR_ADMIN,
  RESET_INDIVIDUAL_FORM,
  GET_ALL_FOLLOW_UP_TRANSITS
} from "../Actions/types";


const checkLocalStorage = (term) => {
 
  return Object.assign(
    {},
    
    ...Object.entries(localStorage).filter(([key,value])=> key >= 5 )
   . map(([key, value]) => (
      {
      [key]: (value)

    }))
  );
};





const initialState = {
  countries: [],
  checking: true,
  states: [],
  cities: [],
  petsfilter: [],
  pets: [],
  temperaments: [],
  ttemperaments: [],
  cityId: [],
  ages: [],
  status: [],
  shelter: [],
  Shelters: [],
  forms: [],
  petOne: [],
  ShelterAndCityId: {},
  shelterDetail: {},
  petsByShelter: [],
  formtypes: [],
  petsForDashboard: [],
  formbyshelter : [],
  shelterProfile: {},
  pets_similar: [],
  allQuestions: [],
  individualform: [],
  formAdoption:[],
  allspecies: [],
  petStatus: [],
  allAges: [],
  allGenres: [],
  formstatus : [],
  followUps : [],
  checkForm : [],
  onlyCitiesWithShelter : [],
  modaldashboard:"icos",
  petsfilterforadmin: [],
  profileForSend : [],
  followUpStatuses: [],
  countShelters:{},
  countAdopted1:{},
  countAdopted2:{},
  countAdopted3:{},
  allShelters: {},
  onlyStatesWithShelter : [],
  statusForAdmin: [],
  speciesForAdmin: [],
  genresForAdmin: [],
  hideForAdmin: [],
  shelterOfPetForAdmin: [],
  followUpTransits: [],
  favorites: checkLocalStorage()
};

export default function rooReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
      };

    case GET_STATES:
      return {
        ...state,
        states: payload,
      };

    case GET_PETS:
      return {
        ...state,
        pets: payload,
      };

    case GET_PET_ID:
      return {
        ...state,
        petOne: payload,
      };

      case PIC_PRIMER:
      return {
        ...state,
        pic_one: payload,
      };
    case GET_CITIES:
      return {
        ...state,
        cities: payload,
      };
    case CLEAN_STATE_FORM:
      return {
        ...state,
        states: payload,
        cities: payload,
      };
    case POST_FORM_REGISTER:
      return {
        ...state,
      };
      case POST_REQUEST_TRANSIT:
        return {
          ...state,
        };

    case GET_PETS_FILTER:
      return {
        ...state,
        petsfilter: payload.filter(e => e.petStatusId === 1 && e.hideFromDash === false),
      };

    case authLogin:
      return {
        ...state,
        checking: false,
        ...payload,
      };
    
    case authLoginAdmin:{
      return{
        ...state,
        checking:false,
        ...payload
      }
    }

    case authCheckingFinish:
      return {
        ...state,
        checking: false,
      };

    case GET_PETS_SIMILAR:
      return {
        ...state,
        pets_similar: payload,
      };

    case GET_TEMPERAMENTS:
      let filteredTemperaments = [];

      state.petsfilter.map((el) => {
        if (!filteredTemperaments.length)
          return filteredTemperaments.push(el.temperament);
        let temp = el.temperament.id;
        let obj = filteredTemperaments.find(
          (temperamento) => temperamento.id === temp
        );
        if (!obj) return filteredTemperaments.push(el.temperament);
      });
      return {
        ...state,
        temperaments: filteredTemperaments,
      };
    case GET_AGES:
      let filteredAges = [];

      state.petsfilter.map((el) => {
        if (!filteredAges.length) return filteredAges.push(el.age);
        let temp = el.age.id;
        let obj = filteredAges.find((age) => age.id === temp);
        if (!obj) return filteredAges.push(el.age);
      });
      return {
        ...state,
        ages: filteredAges,
      };
    case GET_ID_CITY:
      return {
        ...state,
        cityId: payload,
      };
    case GET_STATUS:
      let filteredStatus = [];

      state.petsfilter.map((el) => {
        if (!filteredStatus.length) return filteredStatus.push(el.petStatus);
        let ele = el.petStatus.id;
        let obj = filteredStatus.find((sta) => sta.id === ele);
        if (!obj) return filteredStatus.push(el.petStatus);
      });
      return {
        ...state,
        status: filteredStatus,
      };

    case GET_SEARCH_SHELTERS:
      return {
        ...state,
        Shelters: payload,
      };

    case GET_SPECIES:
      let filter = [];

      state.petsfilter.map((e) => {
        if (!filter.length) return filter.push(e.species);
        let ele = e.species.id;
        let obj = filter.find((s) => s.id === ele);
        if (!obj) return filter.push(e.species);
      });
      return {
        ...state,
        species: filter,
      };

    case GET_FILTER_SHELTERS:
      let filterShelter = [];
      state.petsfilter.map((e) => {
        if (!filterShelter.length) return filterShelter.push(e.shelter);
        let ele = e.shelter.id;
        let obj = filterShelter.find((s) => s.id === ele);
        if (!obj) return filterShelter.push(e.shelter);
      });
      return {
        ...state,
        shelter: filterShelter,
      };
    case GET_ID_FROM_SHELTER_AND_CITY:
      return {
        ...state,
        ShelterAndCityId: payload,
      };
    case GET_SHELTER_DETAIL:
      return {
        ...state,

        shelterDetail: payload,
      };
    case GET_PETS_BY_SHELTER:
      return {
        ...state,
        petsByShelter: payload,
      };
    
      case MODAL_DASHBOARD:
        return {
          ...state,
          modaldashboard: payload
        }

     
      case GET_PETS_FOR_DASHBOARD:
        return {
          ...state,
          petsForDashboard: payload
        }

      case GET_FORMS :
        return {
          ...state,
          forms : payload
        }
        
      case GET_FORMTYPES :
        return {
          ...state,
          formtypes : payload
        }  
      
      case authLogout: 
      return {
        ...state,
        checking : false,
        id: null,
        email: null,
        rol: null,
        formtypes: [],
       petsForDashboard: []
       ,ShelterAndCityId : [],
       shelterProfile: {}
      }

      case GET_DETAIL_SHELTER:
        
        return{
          ...state,
          shelterProfile: payload
        }

          
        case GET_FORM_ADOPTION:
          return {
            ...state,
           formAdoption: payload
          }

          case POST_ADOPTION:
            return {
              ...state,
            };
        
      case POST_PETS:
        return {
          ...state
        }

        case GET_SHELTERS:
          return {
            ...state,
            Shelters: payload
          };

        case GETT_TEMPERAMENTS:
          return {
            ...state,
            ttemperaments: payload
          }; 


      case GET_INDIVIDUAL_FORM :
        let showranswers = state.forms.filter(e => Number(e.id) === Number(payload.formid))
        let profileid = showranswers[0].profileId
        showranswers = showranswers[0].answers
        let showquestions = payload.data[0].questions
        let questionANDanswer = []
        showranswers.map(e => {
             showquestions.map(q => {
              if(e.idquestion === q.id){
                questionANDanswer.push({question:q.question,answer:e.answer})
              } 
            })
        })
        
        return {
          ...state,
          individualform : [profileid,questionANDanswer]
        }  
      
          case GET_ALL_SPECIES:
            return {
              ...state,
              allspecies: payload
            };
          
            case GET_ALL_PET_STATUS:
              return {
                ...state,
                petStatus: payload
              };
            
            case GET_ALL_AGES:
              return {
                ...state,
                allAges: payload
              };
        case GET_GENRES:
          return {
            ...state,
            allGenres: payload
          };    
          
        case SEARCH_PET_BY_NAME:
          let filterbyname = state.petsfilter.filter(e => e.name === payload)
          return {
            ...state,
            petsfilter: filterbyname  
          }
          case DELETE_PET:
            return {
              ...state,
            }

          case DELETE_ANSWERFORM:
            return {
              ...state,
              forms : state.forms
            }

          case GET_ALL_QUESTIONS:
            return {
              ...state,
              allQuestions : payload
            }
            
          case GET_FORM_BY_SHELTER:
            let temp = ''
            if(typeof(payload) !== 'string'){
              temp = payload
            }
            return {
              ...state,
              formbyshelter : temp
            }

            case GET_FOLLOW_UPS_FROM_SHELTER:
              return {
                ...state,
                followUps : payload
              }

          
          case CHECK_FORM:
            return{
              ...state,
              checkForm : payload
            }  
          
          case GET_PROFILE:
            return{
              ...state,
              profileForSend : payload
            }
          case GET_FOLLOW_UPS_STATUSES:
            return{
              ...state,
              followUpStatuses : payload
            }

          case GET_COUNT_SHELTER:
            return{
              ...state,
              countShelters:payload
            }  
        
          case GET_COUNT_ADOPTED1:
            return{
              ...state,
              countAdopted1:payload
            } 

          case GET_COUNT_ADOPTED2:
            return{
              ...state,
              countAdopted2:payload
            }   
            case ADD_TO_FAVORITES:
              return {
                ...state,
                favorites: { ...state.favorites, [payload.id]: payload },
              };
            case REMOVE_FROM_FAVORITES:
              return {
                ...state,
                favorites: Object.keys(state.favorites)
                  .filter((item) => item !== payload.toString())
                  .reduce(
                    (object, item) => ({ ...object, [item]: state.favorites[item] }),
                    {}
                  ),
              };
            
            case GET_ONLY_CITIES_WITH_SHELTERS:
              let temporal = state.cities.filter(c => state.Shelters.find(s => s.cityId === c.id))
              return{
                ...state,
                onlyCitiesWithShelter : temporal
              }
            
            case GET_PETS_FILTER_FOR_ADMIN:
              return{
                ...state,
                petsfilterforadmin : payload
              }
            
            case GET_ONLY_STATES_WITH_SHELTERS:
              let temporal2 = state.states.filter(s => state.Shelters.find(sh => Number(sh.city.stateId) === Number(s.id)))
              
              return{
                ...state,
                onlyStatesWithShelter : temporal2
              }
            
            case GET_STATUS_FOR_ADMIN:
              let filteredStatusForAdmin = [];
        
              state.petsfilterforadmin.map((el) => {
                if (!filteredStatusForAdmin.length) return filteredStatusForAdmin.push(el.petStatus);
                let ele = el.petStatus.id;
                let obj = filteredStatusForAdmin.find((sta) => sta.id === ele);
                if (!obj) return filteredStatusForAdmin.push(el.petStatus);
              });
              return {
                ...state,
                statusForAdmin: filteredStatusForAdmin,
              };
            
            case GET_SPECIES_FOR_ADMIN:
              let filterSpeciesForAdmin = [];

              state.petsfilterforadmin.map((e) => {
                if (!filterSpeciesForAdmin.length) return filterSpeciesForAdmin.push(e.species);
                let ele = e.species.id;
                let obj = filterSpeciesForAdmin.find((s) => s.id === ele);
                if (!obj) return filterSpeciesForAdmin.push(e.species);
              });
              return {
                ...state,
                speciesForAdmin: filterSpeciesForAdmin,
              };


          case GET_ALL_SHELTERS:

          return {
            ...state,
            allShelters: payload
          }

            case GET_PET_GENRE_FOR_ADMIN:
              let filterGenresForAdmin = []
              
              state.petsfilterforadmin.map((e) => {
                if(!filterGenresForAdmin.length) return filterGenresForAdmin.push(e.genre)
                let ele = e.genre.id
                let obj = filterGenresForAdmin.find((g) => g.id === ele)
                if(!obj) return filterGenresForAdmin.push(e.genre)
              })
              return {
                ...state,
                genresForAdmin: filterGenresForAdmin,
              }
            
            case GET_PET_HIDE_FOR_ADMIN:
              let filterHideForAdmin = []
              
              state.petsfilterforadmin.map((e) => {
                if(!filterHideForAdmin.length) return filterHideForAdmin.push(e.hideFromDash)
                let ele = e.hideFromDash
                let obj = filterHideForAdmin.find((h) => h === ele)
                if(!obj) return filterHideForAdmin.push(e.hideFromDash)
              })
              let plusRes = [...new Set(filterHideForAdmin)]
              return {
                ...state,
                hideForAdmin : plusRes,
              }

            case GET_SHELTER_OF_PET_FOR_ADMIN:
              let filterShelterPetForAdmin = []
              
              state.petsfilterforadmin.map((e) => {
                if(!filterShelterPetForAdmin.length) return filterShelterPetForAdmin.push(e.shelter)
                let ele = e.shelterId
                let obj = filterShelterPetForAdmin.find(sh => sh.id === ele)
                if(!obj) return filterShelterPetForAdmin.push(e.shelter)
              })
              return {
                ...state,
                shelterOfPetForAdmin: filterShelterPetForAdmin,
              }
            
              
            case RESET_INDIVIDUAL_FORM:
              return {
                ...state,
                individualform: []
              }  

              case GET_ALL_FOLLOW_UP_TRANSITS:
                return {
                  ...state,
                  followUpTransits : payload
                }

        default:
          return state;
      }
    };


