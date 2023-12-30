import { useState } from 'react';
function Qbank() {
    const [result, setResult] = useState(0);
    const [questionid, setQuestionid] = useState(0);
    const [question, setQuestion] = useState(null);
    const [selectedoption, setSelectedoption] = useState('');




    const handleRadioChange = (event) => {
        const option = event.target.value;
        setSelectedoption(option);
    };
    //  Question Bank in json format
    const qBank = [
        {
            id: 1,
            question: "Which Iranian activist got the Nobel Peace Prize on 6 October 2023?",
            options: [
                "Narges Mohammadi",
                "Zainab Fatimi",
                "Fatima Zahra",
                "None"
            ],
            answer: "Narges Mohammadi"
        },
        {
            id: 2,
            question: "Which country is launching Aditya-L1 on the sun?",
            options: [
                "Russia",
                "USA",
                "India",
                "China"
            ],
            answer: "India"
        },
        {
            id: 3,
            question: "Who takes the men’s marathon gold in World Athletics Championships 2023?",
            options: [
                "Maru Teferi",
                "Leul Gebresilase",
                "Victor Kiplangat",
                "Max Verstappen"
            ],
            answer: "Maru Teferi"
        },
        {
            id: 4,
            question: "Which men’s team beat India to win gold in World Blind Cricket?",
            options: [
                "England",
                "Australia",
                "Bangladesh",
                "Pakistan"
            ],
            answer: "Pakistan"
        },
        {
            id: 5,
            question: "Name the country that won FIFA Women’s World Cup 2023?",
            options: [
                "Spain",
                "Brazil",
                "England",
                "USA"
            ],
            answer: "USA"
        },
        {
            id: 6,
            question: "Fukushima Daiichi nuclear power plant is located in which country?",
            options: [
                "China",
                "Japan",
                "South Korea",
                "Russia"
            ],
            answer: "Japan"
        },
        {
            id: 7,
            question: "How many new countries were invited to join BRICS at its 15th summit in Johannesburg?",
            options: [
                4,
                5,
                6,
                7
            ],
            answer: 5
        },
        {
            id: 8,
            question: "Who is the champion of men’s tennis Cincinnati Open 2023?",
            options: [
                "Carlos Alcaraz",
                "Novak Djokovic",
                "Rafael Nadal",
                "Roger Federer"
            ],
            answer: "Carlos Alcaraz"
        },
        {
            id: 9,
            question: "Along with Saudi Arabia and UAE, which country is investing heavily in alternative revenues to crude, gas.",
            options: [
                "Bahrain",
                "Qatar",
                "Oman",
                "Kuwait"
            ],
            answer: "Qatar"
        },
        {
            id: 10,
            question: "Who is the champion of men’s tennis Cincinnati Open 2023?",
            options: [
                "Roger Federer",
                "Rafael Nadal",
                "Novak Djokovic",
                "Carlos Alcaraz"
            ],
            answer: "Novak Djokovic"
        }
    ]



    const startQuiz = () => {
        setQuestionid(prevQuestionid => {
            const nextQuestionId = prevQuestionid + 1;
            const questionObj = qBank.find(item => item.id === nextQuestionId);
            setQuestion(questionObj);
            return nextQuestionId;
        });
    };

    function handleSubmit() {
        if (selectedoption === question.answer) {
            setResult((prevResult) => prevResult + 1);
        }
        if (questionid === 10) {
            setQuestionid((prevId) => prevId + 1);
        }
        if(questionid < 10 ){
        const nextQuestionId = questionid + 1;
        setQuestionid(nextQuestionId);
        const nextQuestion = qBank.find(item => item.id === nextQuestionId);
        setQuestion(nextQuestion);}

    }

    return (
        <div>
            {/* Start the Quiz */}
            {questionid === 0 && (
                <div className='container'>
                    <div className='row justify-content-center align-items-center' style={{ width: "50vw", height: '100vh' }}>
                        <div className='col-12'>
                            <h1 style={{ fontFamily: '-moz-initial' }}>Best of Luck</h1>
                            <div>
                                <button type="submit" className="btn btn-primary mt-4"
                                    style={{ fontFamily: '-moz-initial' }} onClick={startQuiz}>Start the Quiz</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }

            {/* Questions */}
            {
                questionid > 0 && questionid <= 10 && (<div>
                    <div className='row align-items-center justify-content-center mt-3 pt-5' style={{ height: '20vh', marginLeft: '30vw' }}>
                        <div className='col-12'>
                            <h1>Quiz</h1>
                        </div>
                    </div>
                    <div className="row align-items-center" style={{ width: '50vw', height: '40vh', marginLeft: '20vw' }}>
                        <div className="col-12">
                            <h2>Question {question.id}</h2>
                            <p>{question.question}</p>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" onChange={handleRadioChange}
                                    value={question.options[0]} name="flexRadioDefault" id="flexRadioDefault1">
                                </ input>
                                <label className="form-check-label" for="flexRadioDefault1">
                                    {question.options[0]}
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" onChange={handleRadioChange}
                                    value={question.options[1]} name="flexRadioDefault" id="flexRadioDefault2">
                                </input>
                                <label className="form-check-label" for="flexRadioDefault2">
                                    {question.options[1]}
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" onChange={handleRadioChange}
                                    value={question.options[2]} name="flexRadioDefault" id="flexRadioDefault2"></input>
                                <label className="form-check-label" for="flexRadioDefault2">
                                    {question.options[2]}
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" onChange={handleRadioChange}
                                    value={question.options[3]} name="flexRadioDefault" id="flexRadioDefault2"></input>
                                <label className="form-check-label" for="flexRadioDefault2">
                                    {question.options[3]}
                                </label>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary mt-4" onClick={handleSubmit}>Submit</button>
                            </div>

                        </div>
                    </div>
                </div>)}
            {
                questionid > 10 && (
                    <div className='row align-items-center' style={{ height: '100vh', marginLeft: '30vw' }}>
                        <div className='col-12'>
                        <h1>Score: {result}</h1>
                        <p>{result > 9 && 'Performance: Excellent'}</p>
                        <p>{result > 7 && 'Performance: Good'}</p>
                        <p>{result > 5 && 'Performance: Average'}</p>
                        <p>{result < 5 && 'Performance: Fair, Need Improvement. Best Luck for Next Time!'}</p>
                        </div>
                        </div>
                )
            }
        </div >
    )

}

export default Qbank;