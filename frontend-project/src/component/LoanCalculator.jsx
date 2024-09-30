import React, { useState } from 'react'

export default function LoanCalculator() {

    const [loanValue, setLoanValue] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState('');
    const [newDiv, setNewDiv] = useState(false);
    const [totalMonthlyPayment, setTotalMonthlyPayment] = useState('');
    const [totalInterest, setTotalInterest] = useState('');
    const [totalPayement, setTotalPayement] = useState('');

    const handleClick = () => {
        const totalInterest = (loanValue * (interestRate * 0.01)) / monthlyPayment;
        const totalPayement = parseFloat(loanValue) + parseFloat(totalInterest);
        const totalMonthlyPayment = (totalPayement / monthlyPayment).toFixed(2);

        setTotalMonthlyPayment(totalMonthlyPayment);
        setTotalInterest(totalInterest.toFixed(2));
        setTotalPayement(totalPayement.toFixed(2));
        handleReset();
        console.log(totalMonthlyPayment);
        console.log(totalInterest);
        console.log(totalPayement);
        setNewDiv(true);
    }

    const handleReset = () => {
        setLoanValue('');
        setInterestRate('');
        setMonthlyPayment('');
        setTimeout(() => {
            setNewDiv(false);
        }, 10000);
    }
    return (
        <div>
            <div class='container-fluid'>
                <h1>Loan Calculator</h1>
                <p class='container lh-lg'>In this calculator i have written simple code that display's the Total loanamount,Interst rate and Tensure  .I have use the UseState method and provide the initial value as empty string.I have create the Input field through Input tag and create an buttons while clicking the button it display's the  value through setValue. And the value which has been taken from input tag through value property and assign value through onchange method</p>
                <div className="container col-md-4 design colour text-white">
                    <h4 class='text-center'>Loan Calculator</h4>
                    <div class=" container form-group d-flex flex-row flex-wrap justify-content-center mt-3 ">
                        <div className="form-input" >
                            <input type="number" value={loanValue} onChange={(e) => setLoanValue(e.target.value)} className="form-control mt-3" style={{ width: "350px" }} placeholder="Loan Amount" />
                        </div>
                        <div class="form-input">
                            <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} class="form-control mt-3" style={{ width: "350px" }} placeholder="Interst" />

                        </div>
                        <div class="form-input">
                            <input type="number" class="form-control mt-3" value={monthlyPayment} onChange={(e) => setMonthlyPayment(e.target.value)} style={{ width: "350px" }} placeholder="Months" />
                        </div>
                    </div>
                    <div class="container d-flex flex-row flex-wrap justify-content-between">
                        <button class="btn btn-success rounded-pill fw-medium mt-3" onClick={handleClick}>Calculate</button>
                        {/* <button class="btn btn-danger rounded-pill fw-medium " onClick={handleReset}>Reset</button> */}
                    </div>
                    {
                        newDiv && (
                            <div className="container mt-4 border border-white">
                                <h2 className="text-white text-center">Total Loan Value</h2>
                                <h4 className="text-white text-center">{totalMonthlyPayment}</h4>
                                <h4 className="text-white text-center">{totalInterest}</h4>
                                <h4 className="text-white text-center">{totalPayement}</h4>
                            </div>
                        )}

                </div>
            </div>
        </div>
    )
}
