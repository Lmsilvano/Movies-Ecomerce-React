import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { StyledivForm2 } from './style'
import mask from '../../Utils/masks'
import { optionsGen, getResponse } from '../../Services/viacepapi';
import { ufToCity } from '../../Utils/UFtoCity';
import { FinishButton } from '../Buttons';


const schema = Yup.object().shape({
    name: Yup.string().min(2).required('Deve Possuir no mínimo 2 caracteres'),
    email: Yup.string().email().required('Deve possuir formato de email válido'),
    cep: Yup.string().matches(/^\d{5}-\d{3}$/).required('Digite um CEP válido'),
    celular: Yup.string().matches(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/).required('Digite um número de celular válido'),
    cidade: Yup.string().min(2).max(20),
    estado: Yup.string().min(2).max(20),
    endereco: Yup.string().min(2).max(20),
    cpf: Yup.string().matches(/^\d{3}.\d{3}.\d{3}-\d{2}$/).required('Digite um CPF válido'),
})
//
function CheckouForm() {
    const [valorEnd, setValorEnd] = useState(false)
    const [cepError, setCepError] = useState(false)
    function masksApply(event, masktype) {
        const { value } = event.target
        const newValue = mask(value, masktype)
        event.target.value = newValue
        if (masktype === 'Cep' && mask(value, 'Cep').length === 9) {
            adressRequest(newValue)
            return event
        } else return event
    };
    async function adressRequest(cep) {
        const op = optionsGen(cep.replace('-', '').trim())
        const data = await getResponse(op)
        if (data.erro) {
            setCepError(true)
            return
        } else {
            const fullEnd = { endereco: data.logradouro, cidade: data.localidade, estado: ufToCity(data.uf) };
            setValorEnd(fullEnd)
            setCepError(false)
            return
        }
    }




    const onSubmit = (values, actions) => {
        console.log('', values, actions)
    }
    return (
        <StyledivForm2 >
            <Formik
                validationSchema={schema}
                onSubmit={onSubmit}
                initialValues={{
                    name: '',
                    cpf: '',
                    celular: '',
                    email: '',
                    cep: '',
                    endereco: '',
                    cidade: '',
                    estado: '',
                }}
            >
                {({ handleChange, isValid, errors, values }) => (


                    <Form>
                        <div className="firstRow">

                            <div>
                                <Field type="text" id="name" name="name" autoComplete="off" validate required />
                                <label htmlFor="name" style={errors.name && { background: '#e95e5e8f' }}>
                                    <span style={errors.name && { color: 'black', fontWeight: 'bolder' }}>Nome</span>
                                </label>

                            </div>

                        </div>
                        <div className="secondRow">
                            <div>
                                <Field type="text" id="cpf" name="cpf"
                                    onChange={(e) => {
                                        let newE = masksApply(e, 'Cpf')
                                        handleChange(newE)
                                    }} autoComplete="off" required />
                                <label htmlFor="cpf" style={errors.cpf && { background: '#e95e5e8f' }}>
                                    <span>CPF</span>
                                </label>

                            </div>
                            <div>
                                <Field type="text" id="celular" name="celular"
                                    onChange={(e) => {
                                        let newE = masksApply(e, 'Celular')
                                        handleChange(newE)
                                    }}
                                    autoComplete="off" required />
                                <label htmlFor="celular" style={errors.celular && { background: '#e95e5e8f' }}>
                                    <span>Celular</span>
                                </label>

                            </div>

                        </div>
                        <div className="thirdRow">
                            <div>
                                <Field type="text" id="email" name="email" autoComplete="off" required />
                                <label htmlFor="email" style={errors.email && { background: '#e95e5e8f' }}>
                                    <span>Email</span>
                                </label>

                            </div>
                        </div>
                        <div className="fourthRow">
                            <div>
                                <Field type="text" id="cep" name="cep"
                                    onChange={(e) => {
                                        let newE = masksApply(e, 'Cep')
                                        handleChange(newE)
                                    }} autoComplete="off" required />
                                <label htmlFor="cep" style={errors.cep && { background: '#e95e5e8f' }}>
                                    <span>CEP</span>
                                </label>

                            </div>
                            <div>
                                <Field type="text" id="endereco" name="endereco"
                                    value={valorEnd ? valorEnd.endereco : ''} autoComplete="off" required />
                                <label htmlFor="endereco" style={errors.endereco && { background: '#e95e5e8f' }}>
                                    <span>Endereço</span>
                                </label>

                            </div>
                        </div>
                        <div className="fifthRow">
                            <div>
                                <Field type="text" id="cidade" name="cidade"
                                    value={valorEnd ? valorEnd.cidade : ''} autoComplete="off" required />
                                <label htmlFor="cidade" style={errors.cidade && { background: '#e95e5e8f' }}>
                                    <span>Cidade</span>
                                </label>

                            </div>
                            <div>
                                <Field type="text" id="estado" name="estado"
                                    value={valorEnd ? valorEnd.estado : ''} autoComplete="off" required />
                                <label htmlFor="estado" style={errors.estado && { background: '#e95e5e8f' }}>
                                    <span>Estado</span>
                                </label>

                            </div>


                        </div>
                        <div className="lastRow">

                            <FinishButton />

                        </div>
                    </Form>
                )}
            </Formik>
        </StyledivForm2>
    )
}

export default CheckouForm
