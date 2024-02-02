export function nomeESobrenome(nomeCompleto = '') {

  if (nomeCompleto) {

    const nomes = nomeCompleto.split(' ');

    if (nomes.length === 0) return '';

    if (nomes.length === 1) return nomes[0];

    if (nomes.length === 2) return `${nomes[0]} ${nomes[1]}`;

    if (nomes[1].length <= 3) return `${nomes[0]} ${nomes[1]} ${nomes[2]}`;

    return `${nomes[0]} ${nomes[1]}`;

  }

  return '';
}