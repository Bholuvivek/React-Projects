import React, { useState } from "react";



const Calculator = () => {

  const [number1, setNumber1] = useState("");

  const [number2, setNumber2] = useState("");

  const [operator, setOperator] = useState("");

  const [result, setResult] = useState(null);



  const handleCalculate = async () => {

    // // const expression = `${number1} ${operator} ${number2}`;

    // const response = await fetch(

    //   "https://margdarshan-interview.onrender.com/calculate",

    //   {

    //     method: "POST",

    //     headers: {

    //       "Content-Type": "application/json",

    //     },

    //     body: JSON.stringify({ expression }),

    //   }

    // );



    // const { result } = await response.json();

    // setResult(result);



    const jsonData = {

      first: number1,

      second: number2,

      operator: operator,

    };

    console.log(number1, operator, number2);



    // The API endpoint URL

    var apiUrl ="https://margdarshan-interview-c2c35bc36eb8.herokuapp.com/";



    try {

      const response = await fetch(apiUrl, {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify(jsonData),

      });



      if (!response.ok) {

        throw new Error("Network response was not ok");

      }



      const data = await response.json();

      console.log("Response from the API:", data);

      setResult(data);

    } catch (error) {

      console.error("Error:", error);

    }

  };



  return (

    <div>

      <h2>Welcome to Flask Calculator</h2>

      <p>Enter two numbers and select an operator:</p>



      <input

        type="text"

        value={number1}

        onChange={(e) => setNumber1(e.target.value)}

      />



      <select onChange={(e) => setOperator(e.target.value)}>

        <option value="">select</option>

        <option value="+">+</option>

        <option value="-">-</option>

        <option value="*">*</option>

        <option value="/">/</option>

      </select>



      <input

        type="text"

        value={number2}

        onChange={(e) => setNumber2(e.target.value)}

      />



      <button onClick={handleCalculate}>Calculate</button>



      {result !== null && <p>Result: {result}</p>}

    </div>

  );

};



export default Calculator;
