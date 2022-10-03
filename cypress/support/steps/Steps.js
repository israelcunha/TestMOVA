/* global Given, Then, When */

import Page from '../pageobjects/Page'
const page = new Page

Given("acesso o site DuckDuckgo", () => {
    page.acessarSite();
})

When("inserir o nome Bitcoin no Campo de Busca e selecionar o Botão ENTER", () => {
    page.selectEnterButton();
})

When("inserir o nome Bitcoin no Campo de Busca e selecionar o primeiro elemento da lista", () => {
    page.firstelemtlist();
})

When("inserir o nome Bitcoin no Campo de Busca e selecionar ícone LUPA", () => {
    page.foundbymagnifyinglass();
})

Then("é apresentado todos os resultados sobre o Bitcoin", () => {
    page.viewresultexpected();
})