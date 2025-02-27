/// <reference types="cypress" />

describe('E2E Test for App Functionality', () => {
    const adminEmail = 'admin@example.com';
    const adminPassword = '1234';
    const baseUrl = 'http://localhost:3000';

    it('Should log in and see the dashboard', () => {
        cy.visit(`${baseUrl}/login`);
        localStorage.clear();
        // Login-Felder richtig fülle
        cy.get('#email').should('be.visible').type(adminEmail);
        cy.get('#password').should('be.visible').type(adminPassword);

        // Login-Button klicke
        cy.get('button[type="submit"]').should('be.visible').click();

        // Überprüfe, ob mir uf dr Dashboard si
        cy.url().should('include', '/dashboard');
    });

    it('Should navigate to Profile Page', () => {
        cy.visit(`${baseUrl}/login`);
        localStorage.clear();
        // Login-Felder richtig fülle
        cy.get('#email').should('be.visible').type(adminEmail);
        cy.get('#password').should('be.visible').type(adminPassword);

        // Login-Button klicke
        cy.get('button[type="submit"]').should('be.visible').click();

        // Überprüfe, ob mir uf dr Dashboard si
        cy.url().should('include', '/dashboard');

        // Click the View Profile button
        cy.contains('button', 'View Profile').should('be.visible').click();

        // Assert that we are on the profile page
        cy.url().should('include', '/profile');

    });

    it('Should navigate to Admin Page and Manage Users', () => {
        cy.visit(`${baseUrl}/login`);
        localStorage.clear();
        // Login-Felder richtig fülle
        cy.get('#email').should('be.visible').type(adminEmail);
        cy.get('#password').should('be.visible').type(adminPassword);

        // Login-Button klicke
        cy.get('button[type="submit"]').should('be.visible').click();
        cy.wait(1000);


        // Click the Admin Page button
        cy.contains('button', 'Admin Page').should('be.visible').click();

        // Assert that we are on the admin page
        cy.url().should('include', '/admin');

        // Click the Manage Users button
        cy.contains('button', 'Manage Users').should('be.visible').click();

        // Assert that we are on the users page
        cy.url().should('include', '/users');
    });

    it('Should navigate to Admin Page and User Profiles', () => {
        cy.visit(`${baseUrl}/login`);
        localStorage.clear();
        // Login-Felder richtig fülle
        cy.get('#email').should('be.visible').type(adminEmail);
        cy.get('#password').should('be.visible').type(adminPassword);

        // Login-Button klicke
        cy.get('button[type="submit"]').should('be.visible').click();
        cy.wait(1000);


        // Click the Admin Page button
        cy.contains('button', 'Admin Page').should('be.visible').click();

        // Assert that we are on the admin page
        cy.url().should('include', '/admin');

        // Click the Manage Users button
        cy.contains('button', 'User Profiles').should('be.visible').click();

        // Assert that we are on the users page
        cy.url().should('include', '/userProfiles');
    });

});