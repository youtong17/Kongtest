class KongManagerPage {
    visit() {
      cy.visit('http://localhost:8002');
    }

    // clickSidebar(){
    //   cy.get('.sidebar-menu-toggle').click();
    // }
  
    // clickWorkspaces() {
    //   cy.contains('Workspaces').click();
    // }
  
    selectDefaultWorkspace() {
      cy.get('.workspace-name').click();
    }
  

  }
  
  export default new KongManagerPage();
  