import { MY_CONSTANT } from '../../src/constants';

describe('Cypress', () => {
  it('is working', () => {
    cy.visit('/')
    alert(MY_CONSTANT);
    expect(true).to.equal(true)
  })
})
