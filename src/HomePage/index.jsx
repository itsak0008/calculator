import React from "react";
import { useState, useEffect } from "react";



function Home() {

    const [display, setdisplay] = useState("");
    const [sd, setsd] = useState("");


    useEffect(() => {
        const hasOperator = /[+\-*/]/.test(display);
        // const endsWithOperator = /[+\-*/]$/.test(display.trim());

        if (hasOperator) {
            try {
                const result = display;
                setsd(result);
            } catch {

            }
        }
    }, [display]);



    function handle(n) {
        setdisplay((display) => display + n);
    }


    function handleOperator(op) {
        setdisplay((prev) => prev + " " + op + " ");
    }


    function calculate() {
        try {
            const result = eval(display);
            setsd(result);
            setdisplay(result.toString());
            setsd(" ");
        } catch {
            setdisplay("Error");
        }

    }


    function clearDisplay() {
        setdisplay("");
        setsd("");
    }


    return (
        <div className="container">
            <div className="display row">{display}

                <div className="result ">
                    {sd}
                </div>
            </div>
            <div className="row btn-row s-row">
                <div className="col" onClick={() => handle(1)}>1</div>
                <div className="col" onClick={() => handle(2)}>2</div>
                <div className="col" onClick={() => handle(3)}>3</div>
                <div className="col" onClick={() => handleOperator("*")}>*</div>
            </div>
            <div className="row btn-row s-row">
                <div className="col" onClick={() => handle(4)}>4</div>
                <div className="col" onClick={() => handle(5)}>5</div>
                <div className="col" onClick={() => handle(6)}>6</div>
                <div className="col" onClick={() => handleOperator("+")}>+</div>
            </div>
            <div className="row btn-row s-row">
                <div className="col" onClick={() => handle(7)}>7</div>
                <div className="col" onClick={() => handle(8)}>8</div>
                <div className="col" onClick={() => handle(9)}>9</div>
                <div className="col" onClick={() => handleOperator("-")}>-</div>
            </div>
            <div className="row btn-row s-row">
                <div className="col" onClick={clearDisplay}>ESC</div>
                <div className="col" onClick={() => handle(0)}>0</div>
                <div className="col" onClick={() => handleOperator("/")}>/</div>
                <div className="col" onClick={calculate}>=</div>
            </div>

        </div>
    )
}

export default Home;