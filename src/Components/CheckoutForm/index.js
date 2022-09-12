import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { StyledPFormError, StyledivForm2 } from './style'
import * as mask from '../../Utils/masks'
import { optionsGen, getResponse } from '../../Services/viacepapi';
import { ufToCity } from '../../Utils/UFtoCity';
import { FinishButton } from '../Buttons';


const schema = Yup.object().shape({
    name: Yup.string().min(2).required('Deve Possuir no mínimo 2 caracteres'),
    email: Yup.string().email().required('Deve possuir formato de email v[alido'),
    cep: Yup.string().matches(/^\d{5}-\d{3}$/),
    celular: Yup.string().min(10).max(18),
    cidade: Yup.string().min(2).max(20),
    estado: Yup.string().min(2).max(20),
    endereco: Yup.string().min(2).max(20),
})
//
function CheckouForm() {

    const [valorCpf, setValorCpf] = useState('')
    const [valorCell, setValorCell] = useState('')
    const [valorCep, setValorCep] = useState('')
    const [valorEnd, setValorEnd] = useState(false)
    const [cepError, setCepError] = useState(false)
    function handleChangeMaskCpf(event) {
        const { value } = event.target
        setValorCpf(mask.cpfMask(value))
    };
    function handleChangeMaskCell(event) {
        const { value } = event.target
        setValorCell(mask.cellMask(value))
    };
    async function handleChangeMaskCep(event) {
        const { value } = event.target
        if (mask.cepMask(value).length === 9) {
            setValorCep(mask.cepMask(value))
            const op = optionsGen(value.replace('-', '').trim())
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
        } else {
            setValorCep(mask.cepMask(value))
            return
        }
    };



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
                {({ isValid, errors, values }) => (


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
                                    onChange={(e) => handleChangeMaskCpf(e)} value={valorCpf} autoComplete="off" required />
                                <label htmlFor="cpf" style={errors.cpf && { background: '#e95e5e8f' }}>
                                    <span>CPF</span>
                                </label>

                            </div>
                            <div>
                                <Field type="text" id="celular" name="celular"
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
                                    onChange={(e) => handleChangeMaskCep(e)} value={valorCep} autoComplete="off" required />
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
