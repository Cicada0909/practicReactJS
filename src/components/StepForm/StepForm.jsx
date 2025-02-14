import React, { useState } from 'react'
import styles from './StepForm.module.css'
import Input from '../ui/Input/Input'


const StepForm = () => {
    const [step, setStep] = useState(1);

    const [stepFormData, setStepFormData] = useState({
        stepFormName: "",
        stepFormEmail: "",
        stepFormAge: "",
        stepFormCity: "",
        stepFormPassword: "",
        stepFormConfirmPassword: "",
    });

    const hadleSubmit = (event) => {
        event.preventDefault();

        console.log("Данные отправлены", stepFormData);
    }

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value.trim();;

        if (inputValue === "") return

        setStepFormData((prev) => ({
            ...prev,
            [inputName]: inputValue,
        }))
    }

    const nextStep = () => {
        setStep((prev) => {
            console.log(prev + 1);
            return prev + 1;
        })
    }

    const backStep = () => {
        setStep((prev) => {
            console.log(prev - 1);
            return prev - 1;
        })
    }

    return (
        <div>
            <h3>Form</h3>

            <form className={styles.form} onSubmit={hadleSubmit}>
                <div className={styles.form__items}>

                    {step == 1 &&
                        <div className={styles.form__items}>
                            <Input
                                labelText={"Имя"}
                                type={"text"}
                                id={"name"}
                                placeholder={"Введите ваше имя"}
                                onChange={handleChange}
                                name={"stepFormName"}
                            />

                            <Input
                                labelText={"Почта"}
                                type={"email"}
                                id={"email"}
                                placeholder={"Введите почту"}
                                onChange={handleChange}
                                name={"stepFormEmail"}
                            />

                            {step == 1 &&
                                <div className={styles.navigation}>
                                    <button onClick={backStep} disabled={step == 1}>Назад</button>
                                    <button onClick={nextStep}>Вперед</button>
                                </div>
                            }
                        </div>
                    }

                    {step == 2 &&
                        <div className={styles.form__items}>
                            <Input
                                labelText={"Возраст"}
                                type={"number"}
                                id={"age"}
                                placeholder={"Введите ваш возраст"}
                                onChange={handleChange}
                                name={"stepFormAge"}
                            />

                            <Input
                                labelText={"Город"}
                                type={"text"}
                                id={"city"}
                                placeholder={"Введите ваш город"}
                                onChange={handleChange}
                                name={"stepFormCity"}
                            />

                            {step == 2 &&
                                <div className={styles.navigation}>
                                    <button onClick={backStep}>Назад</button>
                                    <button onClick={nextStep}>Вперед</button>
                                </div>
                            }
                        </div>
                    }

                    {step > 2 &&
                        <div className={styles.form__items}>
                            <Input
                                labelText={"Пароль"}
                                type={"text"}
                                id={"password"}
                                placeholder={"Введите пароль"}
                                onChange={handleChange}
                                name={"stepFormPassword"}
                            />

                            <Input
                                labelText={"Потвердите пароль"}
                                type={"text"}
                                id={"confirmPassword"}
                                placeholder={"Потвердите пароль"}
                                onChange={handleChange}
                                name={"stepFormConfirmPassword"}
                            />

                        </div>
                    }

                    {step == 3 &&
                        <div className={styles.navigation}>
                            <button onClick={backStep}>Назад</button>
                            <button>Отправить</button>
                        </div>
                    }
                </div>
            </form>
        </div>
    )
}

export default StepForm