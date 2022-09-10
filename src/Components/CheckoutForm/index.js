import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { StyledPFormError, StyledivForm, StyledivForm2 } from './style'
import * as mask from '../../Utils/masks'
import { optionsGen, getResponse } from '../../Services/viacepapi';
import { ufToCity } from '../../Utils/UFtoCity'
const schema = Yup.object().shape({
    name: Yup.string().min(2).required(),
    email: Yup.string().email().required(),
    cep: Yup.string().min(9).max(9),
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
        console.log(valorCell)
    };
    async function handleChangeMaskCep(event) {
        const { value } = event.target
        if (mask.cepMask(value).length === 9) {
            console.log('olha eu aqui', value.replace('-', '').trim())
            setValorCep(mask.cepMask(value))
            const op = optionsGen(value.replace('-', '').trim())
            const data = await getResponse(op)
            if (data.erro) {
                console.log('oiiisdadaxzxsd')
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
        console.log('oiiiiiiiiiiiiii', values, actions)
    }
    return (
        <StyledivForm2 >
            <Formik
                validationSchema={schema}
                onSubmit={onSubmit}
                initialValues={{
                    name: '',
                    email: '',
                    comment: '',
                    cep: '',
                    cidade: '',
                    endereco: '',
                    estado: '',
                }}
            >
                {({ isValid, errors, touched, values }) => (
                    <Form>
                        <div className="firstRow">

                            <Field type="text" id="name" name="name" autocomplete="off" required />
                            <label htmlFor="name">
                                <span>Name</span>
                            </label>

                            {errors.name && touched.name && (
                                <StyledPFormError>O nome deve possuir ao menos 2 caracteres.</StyledPFormError>
                            )}

                        </div>
                        <div className="secondRow">
                            <Field type="text" id="cpf" name="cpf" placeholder="CPF"
                                onChange={(e) => handleChangeMaskCpf(e)} value={valorCpf} />
                            {errors.cpf && touched.cpf && (
                                <StyledPFormError>Por favor, digite um número de cpf válido.</StyledPFormError>
                            )}
                            <Field type="text" id="celular" name="celular" placeholder="Celular"
                                onChange={(e) => handleChangeMaskCell(e)} value={valorCell} />

                            {errors.celular && touched.celular && (
                                <StyledPFormError>Por favor, digite um número de celular válido.</StyledPFormError>
                            )}

                        </div>
                        <div className="thirdRow">
                            <Field type="text" id="email" name="email" placeholder="Email" />
                            {errors.email && touched.email && (
                                <StyledPFormError>Por favor, digite um endereço de email válido.</StyledPFormError>
                            )}
                        </div>
                        <div className="fourthRow">
                            <Field type="text" id="cep" name="cep" placeholder="CEP"
                                onChange={(e) => handleChangeMaskCep(e)} value={valorCep} />
                            {errors.cep || cepError ? (
                                <StyledPFormError>Por favor, digite um número de CEP válido.</StyledPFormError>
                            ) : ''}
                            <Field type="text" id="endereco" name="endereco" placeholder="Endereço"
                                value={valorEnd ? valorEnd.endereco : ''} />

                            {errors.endereco && touched.endereco && (
                                <StyledPFormError>Por favor, digite um endereço válido.</StyledPFormError>
                            )}
                        </div>
                        <div className="fifthRow">
                            <Field type="text" id="cidade" name="cidade" placeholder="Cidade"
                                value={valorEnd ? valorEnd.cidade : ''} />
                            {errors.cidade && touched.cidade && (
                                <StyledPFormError>Por favor, digite uma cidade válida.</StyledPFormError>
                            )}
                            <Field type="text" id="estado" name="estado" placeholder="Estado"
                                value={valorEnd ? valorEnd.estado : ''} />
                            {errors.estado && touched.estado && (
                                <StyledPFormError>Por favor, digite um endereço válido.</StyledPFormError>
                            )}


                        </div>
                        <div className="lastRow">
                            <button
                                type="submit"
                                className="btnSendComment"
                                disabled={!isValid}
                            >
                                Finalizar Compra!
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </StyledivForm2>
    )
}

export default CheckouForm
