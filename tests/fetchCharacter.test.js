require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('verifica se o personagem é o wonder woman', async () => {
    const character = await fetchCharacter('720')
    console.log(character.name);
  });
});