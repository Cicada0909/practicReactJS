import React, { useState } from 'react'
import styles from './StepForm.module.css'
import Input from '../ui/Input/Input'


const StepForm = () => {
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
        const inputValue = event.target.value;

        setStepFormData((prev) => ({
            ...prev,
            [inputName]: inputValue,
        }))
    }

    return (
        <div>
            <h3>Form</h3>

            <form className={styles.form} onSubmit={hadleSubmit}>
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

                {stepFormData.stepFormName.length > 1 &&
                stepFormData.stepFormEmail.length > 1 &&
                stepFormData.stepFormEmail.includes("@") &&
                <div>
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
                </div>
                }

                {stepFormData.stepFormName.length > 1 &&
                stepFormData.stepFormEmail.length > 1 &&
                stepFormData.stepFormEmail.includes("@") &&
                stepFormData.stepFormAge.length > 0 &&
                stepFormData.stepFormCity.length > 1 &&
                <div>
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

                {stepFormData.stepFormName.length > 1 &&
                stepFormData.stepFormEmail.length > 1 &&
                stepFormData.stepFormEmail.includes("@") &&
                stepFormData.stepFormAge.length > 0 &&
                stepFormData.stepFormCity.length > 1 &&
                stepFormData.stepFormPassword.length > 1 &&
                stepFormData.stepFormConfirmPassword.length > 1 &&
                <div>
                    <button>Отправить</button>
                </div>
                }
            </form>
        </div>
    )
}

export default StepForm