document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        this.setAttribute('aria-expanded', 
            this.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
        );
    });

    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove 'active' de todas as abas
            tabs.forEach(t => t.classList.remove('active'));
            
            // Adiciona 'active' apenas à aba clicada
            tab.classList.add('active');
        });
    });
    

    const tableCheckboxes = document.querySelectorAll('table input[type="checkbox"]');
    const selectAllCheckbox = document.querySelector('thead input[type="checkbox"]');

    selectAllCheckbox.addEventListener('change', function() {
        tableCheckboxes.forEach(checkbox => {
            checkbox.checked = this.checked;
        });
    });

    tableCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const allChecked = Array.from(tableCheckboxes)
                .every(checkbox => checkbox.checked);
            selectAllCheckbox.checked = allChecked;
        });
    });

    const searchInput = document.querySelector('.search input');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const rows = document.querySelectorAll('tbody tr');
        
        rows.forEach(row => {
            const productName = row.querySelector('.product-cell span')
                .textContent.toLowerCase();
            row.style.display = productName.includes(searchTerm) ? '' : 'none';
        });
    });

    function handleKeyboardNavigation(event) {
        if (event.key === 'Escape') {
            sidebar.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    }

    document.addEventListener('keydown', handleKeyboardNavigation);
});