document.addEventListener('DOMContentLoaded', () => {
    // Select the button by its ID
    const downloadBtn = document.getElementById('downloadBtn');

    // Add click event listener to trigger the print dialog
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            window.print();
        });
    }
});
