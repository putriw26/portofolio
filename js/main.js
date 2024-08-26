// Clear form before unload
window.BeforeUnload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
}