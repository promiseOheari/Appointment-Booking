
import React, { useState } from 'react';
import prr from './Main.module.css';
import pr from '../Input/ShortInputs.module.css';
import Header from '../Header/Header';
import Shortinputs from '../Input/Shortinputs';
import Button from '../Buttons/Button';
import Success from '../SuccesMessage/Success';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Main() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setphone] = useState('');
  const [email, setEmail] = useState('');
  const [arrival, setArrival] = useState('');
  const [date, setDate] = useState('');
  const [host, setHost] = useState('');
  const [purpose, setPurpose] = useState('');
  const [loading, setLoading] = useState(false);
  // const [time, setTime]= useState('')

  const [randomNum, setRandomNum] = useState(0);

  const AptCode = () => {
    const displayNumber = Math.floor(Math.random() * 900) + 100;
    setRandomNum(displayNumber);
    console.log(displayNumber, 'hello');

    if (displayNumber > 200) {
      return navigate('/success', { state: { randomNum: displayNumber } });
    } else {
      navigate('/error');
    }
  };

  const addVisitors = async () => {
    const details = {
      name,
      email,
      arrival,
      date,
      host,
      purpose,
    };

    setLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:8000/visitors',
        details
      );
      setLoading(false);
      // navigate("/databse")
    } catch (error) {
      setLoading(false);
    }
  };

  const handleClick = () => {
    AptCode();
    addVisitors();
  };

  // console.log(addVisitors,"clicked")
  // console.log(handleClick,"clicked")
  // const generateR = generateNumber()
  // console.log(round,"clicked")

  return (
    <div className="bg-[#f5f5f5] h-[89vh] mt-[2px] w-full sm:w-2/4 mx-auto p-10">


      <label className={prr.labelTitle}>Name </label>
      <input
        type="text"
        required
        value={name}
        className={prr.inputs}
        onChange={(e) => {
          setName(e.target.value);
          console.log(name);
        }}
      />
      <label className={prr.labelTitle}>Email</label>
      <input
        type="text"
        value={email}
        required
        className={prr.inputs}
        onChange={(e) => {
          setEmail(e.target.value);
          console.log(email, 'emaail');
        }}
      />
      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-1/2 pr-0 md:pr-2 mb-2 md:mb-0">
          <label className="block mb-1">Date</label>
          <input
            type="date"
            value={date}
            required
            onChange={(e) => {
              setDate(e.target.value);
              console.log(date);
            }}
            className="w-full"
          />
        </div>

        <div className="w-full md:w-1/2 pl-0 md:pl-2">
          <label className="block mb-1">Time</label>
          <input
            type="time"
            value={arrival}
            required
            onChange={(e) => {
              setArrival(e.target.value);
              console.log(arrival);
            }}
            className="w-full"
          />
        </div>
      </div>

      <label className={prr.labelTitle}>Host </label>
      <select
        className=" block mt-[10px] w-full required"
        value={host}
        onChange={(e) => {
          setHost(e.target.value);
          console.log(host);
        }}
      >
        <option value="" disabled selected placeholder="enter host"></option>
        <option value="Mary">Mary</option>
        <option value="Ade">Ade</option>
        <option value="Josh">Josh</option>
        <option value="Andre">Andre</option>
      </select>
      <label className={prr.labelTitle}>Purpose </label>
      <select
        className=" block mt-[10px] w-full required"
        value={purpose}
        onChange={(e) => {
          setPurpose(e.target.value);
          console.log(purpose);
        }}
      >
        <option value="" disabled selected className=" text-red-400"></option>
        <option value="Complain">Complain</option>
        <option value="Deposit">Deposit</option>
        <option value="Transfer">Transfer</option>
        <option value="Registration">Registration</option>
      </select>
      <Button
        onClick={handleClick}
        title="Book"
        color="white"
        background="#0452CE"
        width="100%"
      />
    </div>
  );
}

export default Main;