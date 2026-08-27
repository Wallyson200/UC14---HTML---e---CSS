const estado = prompt('Estado de destino (sigla):\n' +
'Ex: RN, SP, RS,AM')?.toUpperCase().trim();

let frete  = 0;
let regiao = '';
let prazao = '';

switch (estado) {
    case 'RN':
    case 'CE':
    case 'PB':
    case 'PF':
    case 'PE':
    case 'MA':
    case 'PI':
    case 'AL':
    case 'SE':
    case 'BA':
        regiao = 'Nordeste';
        frete  = 15;
        prazo  = '3 dias úteis';
        break;

    case 'RN':
    case 'SC':
    case 'SP':
    case 'RJ':
    case 'MG':
    case 'ES':
        regiao = 'Sudeste';
        frete  = 25;
        prazo  = '5 dias úteis';
        break;

    case 'RS':
    case 'SC':
    case 'PR':
        regiao = 'Sul';
        frete  = 30;
        prazo  = '7 dias úteis';
        break;

    case 'GO':
    case 'MT':
    case 'MS':
    case 'DF':
        regiao = 'Centro-Oeste';
        frete  = 35;
        prazo  = '8 dias úteis';
        break;

    case 'AM':
    case 'PA':
    case 'AC':
    case 'RO':
    case 'RR':
    case 'AP':
    case 'TO':
        regiao = 'Norte';
        frete  = 45;
        prazo  = '12 dias úteis';
        break;

    default:
        regiao = 'Estado não encontrado';
        frete  = 0;
        prazo  = 'Indisponível';
}

if (frete > 0) {
    alert(
        `Estado:  ${estado}\n` +
        `Região:  ${regiao}\n` +
        `Frete:   R$ ${frete},00\n` +
        `Prazo:   ${prazo}`
    );
} else {
    alert(`Estado "${estado}" não encontrado.\nVerifique a
    sigla e tente novamente.`);
}