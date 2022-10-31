import React, { useState } from 'react';
import Buttons from './Buttons';
import './calculatorStyle.css';

export default function Calculator() {
  const [currentNumber, setCurrentNumber] = useState('');
  const [previousNumber, setPreviousNumber] = useState('');
  const [total, setTotal] = useState('');
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState('');
  const [d, setD] = useState(false);

  const compute = (a, b, operator) => {
    a = Number(a);
    b = Number(b);

    if (operator === '-') {
      return a - b;
    }
    if (operator === '+') {
      return a + b;
    } else if (operator === 'x') {
      return a * b;
    } else if (operator === '/') {
      if (previousNumber === 0 || previousNumber === '0') {
        return 'Cant divide';
      }
      return a / b;
    }
  };

  const inputNum = (e) => {
    if (currentNumber.includes('.') && e.target.value === '.') return;
    setCurrentNumber((pre) => pre + e.target.value);
    setTotal((pre) => pre + e.target.value);

    if (d === true) {
      setTotal('');
      setTotal((pre) => pre + e.target.value);
    }
    setD(false);

    if (result !== '') {
      setResult('');
      setPreviousNumber('');
    }

    if (result && operator) {
      setPreviousNumber(result);
    }
  };

  const operation = (e) => {
    setOperator(e.target.value);
    setTotal(total + e.target.value);
    setD(false);
    if (currentNumber === '') return;

    if (previousNumber !== '') {
      setResult(compute(previousNumber, currentNumber, operator).toString());
    }

    setPreviousNumber(currentNumber);
    setCurrentNumber('');
  };

  const equalsTo = () => {
    if (currentNumber === '') return;

    setResult(compute(previousNumber, currentNumber, operator).toString());
    setCurrentNumber('');
    setOperator('');
    setD(true);
  };

  const clear = () => {
    setCurrentNumber('');
    setPreviousNumber('');
    setResult('0');
    setTotal('');
  };

  const plusminus = () => {
    if (result !== '') {
      return;
    } else if (currentNumber.charAt(0) === '-') {
      setCurrentNumber(currentNumber.substring(1));
    } else {
      setCurrentNumber('-' + currentNumber);
      setTotal('-' + total);
    }
  };

  const square = () => {
    if (result !== '') {
      setResult(String(Math.pow(Number(result), 2)));
      setOperator('');
      setCurrentNumber('');
      setTotal(result + ' square ');
      setD(true);
    } else {
      setResult(String(Math.pow(Number(currentNumber), 2)));
      setOperator('');
      setCurrentNumber('');
      setTotal(currentNumber + ' square');
      setD(true);
    }
  };

  const del = () => {
    setCurrentNumber(currentNumber.slice(0, -1));
    setTotal(total.slice(0, -1));
  };

  const squareRoot = () => {
    if (result !== '') {
      setResult(String(Math.sqrt(Number(result), 2)));
      setOperator('');
      setCurrentNumber('');
      setTotal(' square root ' + result);
      setD(true);
    } else {
      setResult(String(Math.sqrt(Number(currentNumber), 2)));
      setOperator('');
      setCurrentNumber('');
      setTotal(' square root ' + currentNumber);
      setD(true);
    }
  };

  const screenOneChangeHandler = () => {};

  return (
    <div>
      <main className="cal-container">
        <p className="logo">kperusi-calculate</p>
        <section className="screen">
          <input
            type="text"
            className="screen1"
            value={total}
            maxLength={6}
            max={7}
            onChange={screenOneChangeHandler}
          ></input>

          <input
            type="text"
            className="screen2"
            value={result ? result : currentNumber}
            onChange={screenOneChangeHandler}
          ></input>
        </section>

        <div className="menus">
          <Buttons
            value="Off"
            className="menu"
            text={'DEL'}
            onClick={del}
          ></Buttons>
          <Buttons
            value="CLR"
            className="menu"
            text={'C'}
            onClick={clear}
          ></Buttons>
          <Buttons
            value="Off"
            className="special root"
            text={''}
            onClick={squareRoot}
          ></Buttons>
          <Buttons
            value="^"
            className="special square "
            text={''}
            onClick={square}
          ></Buttons>

          <Buttons
            value="+/-"
            className="special plusminus"
            text={'+/-'}
            onClick={plusminus}
          ></Buttons>
        </div>
        <div className="specialrow"></div>

        <div className="rowone">
          <Buttons
            value="7"
            className="numbers"
            text={'7'}
            onClick={inputNum}
          ></Buttons>
          <Buttons
            value="8"
            className="numbers"
            text={'8'}
            onClick={inputNum}
          ></Buttons>
          <Buttons
            value="9"
            className="numbers"
            text={'9'}
            onClick={inputNum}
          ></Buttons>
          <Buttons
            value="x"
            className="numbers sign"
            text={'x'}
            onClick={operation}
          ></Buttons>
        </div>

        <div className="rowtwo">
          <Buttons
            value="4"
            className="numbers"
            text={'4'}
            onClick={inputNum}
          ></Buttons>
          <Buttons
            value="5"
            className="numbers"
            text={'5'}
            onClick={inputNum}
          ></Buttons>
          <Buttons
            value="6"
            className="numbers"
            text={'6'}
            onClick={inputNum}
          ></Buttons>
          <Buttons
            value="/"
            className="numbers sign"
            text={'/'}
            onClick={operation}
          ></Buttons>
        </div>
        <div className="rowthree">
          <Buttons
            value="1"
            className="numbers"
            text={'1'}
            onClick={inputNum}
          ></Buttons>
          <Buttons
            value="2"
            className="numbers"
            text={'2'}
            onClick={inputNum}
          ></Buttons>
          <Buttons
            value="3"
            className="numbers"
            text={'3'}
            onClick={inputNum}
          ></Buttons>
          <Buttons
            value="+"
            className="numbers sign"
            text={'+'}
            onClick={operation}
          ></Buttons>
        </div>

        <div className="rowfour">
          <Buttons
            value="00"
            className="numbers"
            text={'00'}
            onClick={inputNum}
          ></Buttons>
          <Buttons
            value="0"
            className="numbers"
            text={'0'}
            onClick={inputNum}
          ></Buttons>
          <Buttons
            value="."
            className="numbers"
            text={'.'}
            onClick={inputNum}
          ></Buttons>
          <Buttons
            value="-"
            className="numbers sign"
            text={'-'}
            onClick={operation}
          ></Buttons>
        </div>

        <div className="rowfive">
          <Buttons
            value="="
            className="numbers sign equalto"
            text={'='}
            onClick={equalsTo}
          ></Buttons>
        </div>
      </main>
    </div>
  );
}
