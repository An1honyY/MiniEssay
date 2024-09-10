function Library() {

    function previewNote() {
        const note = localStorage.getItem('editorContent');
        let noteJson: string = '';

        if (note) {
            noteJson = JSON.stringify(note, null, 2);
        }
        return noteJson;
    }
    return (
        <div className='container mx-auto pt-6'>
            <h1>Library</h1>
            <pre>

                <code>
                    {previewNote()}
                </code>
            </pre>
        </div>
    );
}

export default Library;