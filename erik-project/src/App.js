import React, { useState } from "react";
import Click from "./Component/Click";
import InputState from "./Component/InputState";
import Effect from "./Component/Effect";
import RandomQuote from "./Component/RandomQuote";
import Counter from "./Component/Counter";
import FirstComponent from "./Component/FirstComponent";
import ListMap from "./Component/ListMap";
import Air from "./Component/Air";

const MultipleInputForm = () => {
  const [formValues, setFormValues] = useState({"email":"", "password":""});
  const handleFormChange = (event) => {
      const newValue = event.target.value;
      const name = event.target.name;
      setFormValues(previousValues => {
          return {
              ...previousValues,
              [name]: newValue 
          }
      })
  }
  return (
      <form>
          <label>
              Email:
              <input
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleFormChange} />
          </label>
          <label>
              Password:
              <input
              name="password"
              type="password"
              value={formValues.password}
              onChange={handleFormChange} />
          </label>
      </form>
  )
}
export default MultipleInputForm;