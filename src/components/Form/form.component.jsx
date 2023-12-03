import React, { useEffect, useState } from "react";
import "./form.style.css";
import Input from "../Input/input.component";
import Checkbox from "../CheckBox/checkbox.component";

export default function Form({ index }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState();
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange1 = (event) => {
    setIsChecked1(event.target.checked);
  };

  const handleCheckboxChange2 = (event) => {
    setIsChecked2(event.target.checked);
  };

  const handleInputChange = (setValue, value) => {
    setValue(value);
  };

  const handleSend = async () => {
    let validationError = "";

    if (
      name === "" ||
      surname === "" ||
      loanAmount === "" ||
      phoneNumber === ""
    ) {
      validationError = "Пожалуйста, заполните все поля";
    } else if (parseInt(loanAmount) < 1000) {
      validationError = "Минимальная сумма займа 1000 руб.";
    } else if (!/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/u.test(phoneNumber)) {
      validationError = "Неверный формат номера телефона";
    } else if (!isChecked1 || !isChecked2) {
      validationError = "Согласитесь на обработку и рекламу";
    }

    if (validationError !== "") {
      setError(validationError);
    } else {
      setError("");

      const formData = new FormData();
      formData.append("Имя", name);
      formData.append("Фамилия", surname);
      formData.append("Сумма Займа", loanAmount);
      formData.append("Номер Телефона", phoneNumber);


      try {
        const response = await fetch("https://formspree.io/f/mvojnewz", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          window.location.reload()
          alert("Успещно отпавлено.");


        } else {
          throw new Error("Failed to submit form");

        }
      } catch (error) {
        setName("");
        setSurname("");
        setLoanAmount("");
        setPhoneNumber("");
        setIsChecked1(false);
        setIsChecked2(false);
        console.error("Error submitting form:", error);
        alert("Ошибка повторите попытку позже.");
      }
    }
  };


  return (
    <div className="form" style={{ zIndex: index }}>
      <div style={{ padding: "2.875em" }}>
        <Input
          placeholder="Иван"
          label="Имя "
          onInputChange={(value) => handleInputChange(setName, value)}
          type="text"
        />
        <Input
          placeholder="Иванов"
          label="Фамилия "
          onInputChange={(value) => handleInputChange(setSurname, value)}
          type="text"
        />
        <Input
          placeholder="Например: 8000"
          label="Сумма займа "
          onInputChange={(value) => handleInputChange(setLoanAmount, value)}
          type="number"
        />
        <Input
          placeholder="Введите номер телефона"
          label="Телефон "
          onInputChange={(value) => handleInputChange(setPhoneNumber, value)}
          type="tel"
        />

        <Checkbox id={"first"} text="Согласен на обработку" linkText=" персональных данных" onChange={handleCheckboxChange1} value={isChecked1} />
        <Checkbox id={"second"} text="Согласен на " linkText="получение рекламной информации" onChange={handleCheckboxChange2} value={isChecked2} />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button className="button" onClick={handleSend}>
          Оставить заявку
        </button>
      </div>
    </div>
  );
}