const cpfMask = (value) => {
    return (value.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})/, '$1-$2').replace(/(-\d{2})\d+?$/, '$1'))
}

const cellMask = (value) => {
    return value.replace(/\D/g, "").replace(/^(\d{2})(\d)/g, '($1) $2').replace(/(\d{5})(\d{1,2})/, '$1-$2').replace(/(-\d{4})\d+?$/, '$1');
}

const cepMask = (value) => {
    return value.replace(/\D/g, "").replace(/(\d{5})(\d)/, '$1-$2').replace(/(-\d{3})\d+?$/, '$1');

}

const masks = (value, masktype) => {
    let data;
    switch (masktype) {

        case "Celular": data = cellMask(value);
            break
        case "Cpf": data = cpfMask(value);
            break
        case "Cep": data = cepMask(value);
            break
        default: data = 'Não Localizado';
            break;
    }
    return data

}

export default masks