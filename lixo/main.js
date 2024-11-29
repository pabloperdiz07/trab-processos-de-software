document.addEventListener('DOMContentLoaded', () => {
    initializeAccessibility();
    initializeInteractions();
    initializeTableFunctionality();
  });
  
  function initializeAccessibility() {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
      if (!element.hasAttribute('aria-label') && !element.hasAttribute('aria-labelledby')) {
        const text = element.textContent.trim();
        if (text) {
          element.setAttribute('aria-label', text);
        }
      }
    });
  
    document.querySelectorAll('img').forEach(img => {
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', '');
      }
    });
  
    const table = document.querySelector('.customer-table');
    if (table) {
      table.setAttribute('role', 'table');
      table.setAttribute('aria-label', 'Customer List');
    }
  }
  
  function initializeInteractions() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuToggle && sidebar) {
      menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar--visible');
        const isExpanded = sidebar.classList.contains('sidebar--visible');
        menuToggle.setAttribute('aria-expanded', isExpanded);
      });
    }
  
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
      });
    });
  
    document.querySelectorAll('.action-menu').forEach(menu => {
      menu.addEventListener('click', (e) => {
        e.stopPropagation();
        showActionMenu(menu);
      });
    });
  }
  
  function initializeTableFunctionality() {
    const selectAllCheckbox = document.querySelector('.table-header .checkbox input');
    const rowCheckboxes = document.querySelectorAll('.customer-row .checkbox input');
    
    if (selectAllCheckbox) {
      selectAllCheckbox.addEventListener('change', () => {
        rowCheckboxes.forEach(checkbox => {
          checkbox.checked = selectAllCheckbox.checked;
        });
      });
    }
  
    document.querySelector('.display-select select')?.addEventListener('change', (e) => {
      updateDisplayCount(e.target.value);
    });
  
    document.querySelector('.customer-search input')?.addEventListener('input', (e) => {
      searchCustomers(e.target.value);
    });
  
    initializePagination();
  }
  
  function showActionMenu(menuButton) {
    const menu = document.createElement('div');
    menu.className = 'action-dropdown';
    menu.setAttribute('role', 'menu');
    
    const actions = [
      { label: 'Edit', icon: 'edit' },
      { label: 'Delete', icon: 'delete' },
      { label: 'View Details', icon: 'view' }
    ];
  
    actions.forEach(action => {
      const button = document.createElement('button');
      button.className = 'action-dropdown__item';
      button.setAttribute('role', 'menuitem');
      button.innerHTML = `
        <span class="action-dropdown__icon">${action.icon}</span>
        <span class="action-dropdown__label">${action.label}</span>
      `;
      button.addEventListener('click', () => handleAction(action.label));
      menu.appendChild(button);
    });
  
    document.body.appendChild(menu);
    positionMenu(menu, menuButton);
  
    setTimeout(() => {
      document.addEventListener('click', () => {
        menu.remove();
      }, { once: true });
    }, 0);
  }
  
  function positionMenu(menu, button) {
    const buttonRect = button.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();
    
    let top = buttonRect.bottom + window.scrollY;
    let left = buttonRect.left + window.scrollX;
  
    if (left + menuRect.width > window.innerWidth) {
      left = buttonRect.right - menuRect.width;
    }
  
    if (top + menuRect.height > window.innerHeight) {
      top = buttonRect.top - menuRect.height;
    }
  
    menu.style.top = `${top}px`;
    menu.style.left = `${left}px`;
  }
  
  function handleAction(action) {
    console.log(`Handling ${action} action`);
  }
  
  function searchCustomers(query) {
    const rows = document.querySelectorAll('.customer-row');
    const searchRegex = new RegExp(query, 'i');
  
    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = searchRegex.test(text) ? '' : 'none';
    });
  }
  
  function updateDisplayCount(count) {
    const rows = document.querySelectorAll('.customer-row');
    rows.forEach((row, index) => {
      row.style.display = index < count ? '' : 'none';
    });
    updatePaginationInfo(count);
  }
  
  function initializePagination() {
    const pageButtons = document.querySelectorAll('.page-btn');
    pageButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (!button.classList.contains('active')) {
          pageButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          const page = button.textContent;
          changePage(page);
        }
      });
    });
  }
  
  function changePage(page) {
    console.log(`Changing to page ${page}`);
  }
  
  function updatePaginationInfo(itemsPerPage) {
    const totalItems = document.querySelectorAll('.customer-row').length;
    const info = document.querySelector('.pagination-info');
    if (info) {
      info.textContent = `Mostrando 1 a ${itemsPerPage} de ${totalItems}`;
    }
  }
  
  function handleKeyboardNavigation(event) {
    if (event.key === 'Tab') {
      const focusableElements = document.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
  
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }
  
  document.addEventListener('keydown', handleKeyboardNavigation);
  
  window.addEventListener('resize', () => {
    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth > 768 && sidebar) {
      sidebar.classList.remove('sidebar--visible');
    }
  });