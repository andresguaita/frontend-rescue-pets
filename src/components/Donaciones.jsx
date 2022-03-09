import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import useScript from "../hooks/useScript";

import { APIGATEWAY_URL } from "../utils/constant";

const Donaciones = () => {
  const pet = useSelector((state) => state.petOne);
  const pets = useSelector((state) => state.petsfilter);

  let initialData = {
    quantity: 1,
    amount: 5,
  };

  let token;
  if (pet.length) {
    initialData = {
      ...initialData,
      description: `Donación ${pet[0]?.shelter.name}`,
      shelterId: pet[0]?.shelterId,
      petId: pet[0]?.id,
    };

    token = pet[0].shelter.token;
  }
  if (pets.length) {
    initialData = {
      ...initialData,
      description: `Donación ${pets[0]?.shelter.name}`,
      shelterId: pets[0]?.shelterId,
    };
    token = pets[0].shelter.token;
  }
  const [data, setData] = useState(initialData);
  const [preferenceId, setPreferenceId] = useState(null);

  const { MercadoPago } = useScript(
    "https://sdk.mercadopago.com/js/v2",
    "MercadoPago"
  );

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    await axios
      .post(`${APIGATEWAY_URL}/donaciones/preference`, data)
      .then((response) => {
        setPreferenceId(response.data.id);
      })
      .catch(function () {
        alert("Unexpected error");
      });
  }, []);

  useEffect(() => {
    if (preferenceId) {
      const mp = new MercadoPago(token, {
        locale: "es-AR",
      });
      // Inicializa el checkout
      mp.checkout({
        preference: {
          id: preferenceId,
        },
        render: {
          container: ".cho-container", // Indica el nombre de la clase donde se mostrará el botón de pago
          label: "Donar", // Cambia el texto del botón de pago (opcional)
        },
      });
    }
  }, [preferenceId]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (preferenceId) {
      await axios
        .put(`${APIGATEWAY_URL}/donaciones/preference/${preferenceId}`, data)
        .then((response) => {
          console.log(response);
        })
        .catch(function () {
          alert("Unexpected error");
        });
    }
  }, [data]);

  console.log("preference: ", preferenceId);
  console.log("data: ", data);
  return (
    <div>
      <input
        onChange={handleChange}
        value={data.amount}
        name="amount"
        type="number"
      ></input>
      <div className="cho-container"></div>
    </div>
  );
};

export default Donaciones;
